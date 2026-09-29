import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { PEST_DATABASE, searchPests, getPestById, PEST_COMPARISONS } from './src/data/pests/index';
import { Pest, PestSighting, ProblemReport, Reminder, HomeInspection, HouseholdProfile, AIIdentificationResult, PlantDiagnosisResult } from './src/types/pest';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// File-based persistent storage
const DATA_DIR = path.join(__dirname, 'data');
const STORAGE_FILE = path.join(DATA_DIR, 'pestguard_storage.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface AppStorage {
  sightings: PestSighting[];
  problems: ProblemReport[];
  reminders: Reminder[];
  inspections: HomeInspection[];
  household: HouseholdProfile;
  customPests: Pest[];
}

const defaultHousehold: HouseholdProfile = {
  id: 'household-default',
  name: 'My Home',
  propertyType: 'house',
  region: 'global',
  hasPets: true,
  petTypes: ['dog', 'cat'],
  hasChildren: true,
  members: [
    { id: 'm1', name: 'Primary Resident', role: 'owner', email: 'resident@pestguard.local' }
  ]
};

const initialReminders: Reminder[] = [
  { id: 'rem-1', title: 'Inspect kitchen pantry & cereal containers', category: 'inspection', targetDate: new Date(Date.now() + 86400000 * 3).toISOString().slice(0, 10), frequency: 'monthly', completed: false, associatedPestName: 'Indian Meal Moth' },
  { id: 'rem-2', title: 'Pour water in basement floor drains & clean shower P-trap', category: 'cleaning', targetDate: new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 10), frequency: 'monthly', completed: false, associatedPestName: 'Drain Fly' },
  { id: 'rem-3', title: 'Overturn standing water in garden saucers & check gutters', category: 'prevention', targetDate: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10), frequency: 'weekly', completed: false, associatedPestName: 'Aedes Mosquito' }
];

const initialProblems: ProblemReport[] = [
  {
    id: 'prob-1',
    title: 'Kitchen Sink Ant Activity',
    pestId: 'ant-odorous-house',
    pestName: 'Odorous House Ant (Sugar Ant)',
    location: 'Kitchen',
    firstNoticed: new Date(Date.now() - 86400000 * 5).toISOString().slice(0, 10),
    lastSeen: new Date().toISOString().slice(0, 10),
    frequency: 'daily',
    status: 'improving',
    notes: 'Small black ants trailing around backsplash behind the coffee maker each morning.',
    actionsTaken: [
      { date: new Date(Date.now() - 86400000 * 4).toISOString().slice(0, 10), action: 'Wiped trails with vinegar solution to remove pheromone markers' },
      { date: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10), action: 'Stored sugar and syrup in airtight glass jars' }
    ],
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const initialSightings: PestSighting[] = [
  {
    id: 'sight-1',
    date: new Date().toISOString().slice(0, 10),
    time: '08:30',
    pestId: 'ant-odorous-house',
    pestName: 'Odorous House Ant (Sugar Ant)',
    location: 'Kitchen',
    numberObserved: 'many',
    frequency: 'daily',
    signsObserved: ['Live insects trailing toward honey jar'],
    severity: 'moderate',
    notes: 'Ants appeared along the silicone countertop joint.',
    actionTaken: 'Wiped trail with soapy water and sealed food.',
    resolved: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'sight-2',
    date: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10),
    time: '21:15',
    pestId: 'reptile-house-gecko',
    pestName: 'Common House Gecko',
    location: 'Living room',
    numberObserved: 'one',
    frequency: 'occasionally',
    signsObserved: ['Live lizard near ceiling fixture'],
    severity: 'low',
    notes: 'Pale small gecko hunting moths near the ceiling lamp.',
    actionTaken: 'Observed peacefully; recognized as beneficial natural mosquito predator.',
    resolved: true,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

function loadStorage(): AppStorage {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const data = JSON.parse(fs.readFileSync(STORAGE_FILE, 'utf-8'));
      return {
        sightings: data.sightings || initialSightings,
        problems: data.problems || initialProblems,
        reminders: data.reminders || initialReminders,
        inspections: data.inspections || [],
        household: data.household || defaultHousehold,
        customPests: data.customPests || []
      };
    }
  } catch (err) {
    console.error('Error reading storage file:', err);
  }
  return {
    sightings: initialSightings,
    problems: initialProblems,
    reminders: initialReminders,
    inspections: [],
    household: defaultHousehold,
    customPests: []
  };
}

function saveStorage(storage: AppStorage) {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(storage, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing storage file:', err);
  }
}

let memoryStorage = loadStorage();

function getAllPests(): Pest[] {
  return [...PEST_DATABASE, ...memoryStorage.customPests];
}

// Initialize Gemini Client
const geminiApiKey = process.env.GEMINI_API_KEY || '';
let aiClient: GoogleGenAI | null = null;
if (geminiApiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey: geminiApiKey });
  } catch (err) {
    console.warn('Could not initialize GoogleGenAI client:', err);
  }
}

// API Routes
// 1. Get All Pests with Filter & Search
app.get('/api/pests', (req: Request, res: Response) => {
  const { search, category, riskLevel, location, region, plantPest } = req.query;
  let results = getAllPests();

  if (search && typeof search === 'string') {
    const q = search.toLowerCase().trim();
    results = results.filter((p) => {
      return (
        p.commonName.toLowerCase().includes(q) ||
        p.scientificName.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.aliases.some((a) => a.toLowerCase().includes(q)) ||
        p.signsOfPresence.some((s) => s.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }

  if (category && typeof category === 'string') {
    results = results.filter((p) => p.category === category);
  }

  if (riskLevel && typeof riskLevel === 'string') {
    results = results.filter((p) => p.riskLevel === riskLevel);
  }

  if (location && typeof location === 'string') {
    results = results.filter((p) =>
      p.commonLocations.some((loc) => loc.toLowerCase().includes((location as string).toLowerCase()))
    );
  }

  if (region && typeof region === 'string' && region !== 'global') {
    results = results.filter((p) => p.regions.includes('global') || p.regions.includes(region as any));
  }

  if (plantPest === 'true') {
    results = results.filter((p) => p.category === 'plant_pests' || p.tags.includes('plant damage'));
  }

  res.json({ pests: results, total: results.length });
});

// 2. Get Single Pest by ID
app.get('/api/pests/:id', (req: Request, res: Response) => {
  const pest = getAllPests().find((p) => p.id === req.params.id);
  if (!pest) {
    res.status(404).json({ error: 'Pest not found' });
    return;
  }
  res.json({ pest });
});

// 3. Comparisons
app.get('/api/comparisons', (req: Request, res: Response) => {
  const { id } = req.query;
  if (id && typeof id === 'string') {
    const comp = PEST_COMPARISONS.find((c: any) => c.id === id);
    if (!comp) {
      res.status(404).json({ error: 'Comparison not found' });
      return;
    }
    res.json({ comparison: comp });
    return;
  }
  res.json({ comparisons: PEST_COMPARISONS });
});

// 4. Sightings CRUD
app.get('/api/sightings', (_req: Request, res: Response) => {
  res.json({ sightings: memoryStorage.sightings });
});

app.post('/api/sightings', (req: Request, res: Response) => {
  const newSighting: PestSighting = {
    ...req.body,
    id: `sighting-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString()
  };
  memoryStorage.sightings.unshift(newSighting);
  saveStorage(memoryStorage);
  res.status(201).json({ sighting: newSighting });
});

app.put('/api/sightings/:id', (req: Request, res: Response) => {
  const index = memoryStorage.sightings.findIndex((s) => s.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: 'Sighting not found' });
    return;
  }
  memoryStorage.sightings[index] = { ...memoryStorage.sightings[index], ...req.body };
  saveStorage(memoryStorage);
  res.json({ sighting: memoryStorage.sightings[index] });
});

app.delete('/api/sightings/:id', (req: Request, res: Response) => {
  memoryStorage.sightings = memoryStorage.sightings.filter((s) => s.id !== req.params.id);
  saveStorage(memoryStorage);
  res.json({ success: true });
});

// 5. Problems CRUD
app.get('/api/problems', (_req: Request, res: Response) => {
  res.json({ problems: memoryStorage.problems });
});

app.post('/api/problems', (req: Request, res: Response) => {
  const newProblem: ProblemReport = {
    ...req.body,
    id: `problem-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  memoryStorage.problems.unshift(newProblem);
  saveStorage(memoryStorage);
  res.status(201).json({ problem: newProblem });
});

app.put('/api/problems/:id', (req: Request, res: Response) => {
  const index = memoryStorage.problems.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: 'Problem not found' });
    return;
  }
  memoryStorage.problems[index] = {
    ...memoryStorage.problems[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  saveStorage(memoryStorage);
  res.json({ problem: memoryStorage.problems[index] });
});

app.delete('/api/problems/:id', (req: Request, res: Response) => {
  memoryStorage.problems = memoryStorage.problems.filter((p) => p.id !== req.params.id);
  saveStorage(memoryStorage);
  res.json({ success: true });
});

// 6. Reminders CRUD
app.get('/api/reminders', (_req: Request, res: Response) => {
  res.json({ reminders: memoryStorage.reminders });
});

app.post('/api/reminders', (req: Request, res: Response) => {
  const reminder: Reminder = {
    ...req.body,
    id: `reminder-${Date.now()}`
  };
  memoryStorage.reminders.push(reminder);
  saveStorage(memoryStorage);
  res.status(201).json({ reminder });
});

app.put('/api/reminders/:id', (req: Request, res: Response) => {
  const index = memoryStorage.reminders.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: 'Reminder not found' });
    return;
  }
  memoryStorage.reminders[index] = { ...memoryStorage.reminders[index], ...req.body };
  saveStorage(memoryStorage);
  res.json({ reminder: memoryStorage.reminders[index] });
});

app.delete('/api/reminders/:id', (req: Request, res: Response) => {
  memoryStorage.reminders = memoryStorage.reminders.filter((r) => r.id !== req.params.id);
  saveStorage(memoryStorage);
  res.json({ success: true });
});

// 7. Inspections CRUD
app.get('/api/inspections', (_req: Request, res: Response) => {
  res.json({ inspections: memoryStorage.inspections });
});

app.post('/api/inspections', (req: Request, res: Response) => {
  const newInspection: HomeInspection = {
    ...req.body,
    id: `inspection-${Date.now()}`
  };
  memoryStorage.inspections.unshift(newInspection);
  saveStorage(memoryStorage);
  res.status(201).json({ inspection: newInspection });
});

app.put('/api/inspections/:id', (req: Request, res: Response) => {
  const index = memoryStorage.inspections.findIndex((i) => i.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: 'Inspection not found' });
    return;
  }
  memoryStorage.inspections[index] = { ...memoryStorage.inspections[index], ...req.body };
  saveStorage(memoryStorage);
  res.json({ inspection: memoryStorage.inspections[index] });
});

// 8. Household Profile
app.get('/api/household', (_req: Request, res: Response) => {
  res.json({ household: memoryStorage.household });
});

app.put('/api/household', (req: Request, res: Response) => {
  memoryStorage.household = { ...memoryStorage.household, ...req.body };
  saveStorage(memoryStorage);
  res.json({ household: memoryStorage.household });
});

// 9. Analytics Endpoint
app.get('/api/analytics', (_req: Request, res: Response) => {
  const sightings = memoryStorage.sightings;
  const problems = memoryStorage.problems;

  // Category breakdown
  const categoryCounts: Record<string, number> = {};
  sightings.forEach((s) => {
    const pest = getAllPests().find((p) => p.id === s.pestId || p.commonName === s.pestName);
    const cat = pest ? pest.category : 'other';
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  // Room breakdown
  const roomCounts: Record<string, number> = {};
  sightings.forEach((s) => {
    roomCounts[s.location] = (roomCounts[s.location] || 0) + 1;
  });

  // Most common pests
  const pestCounts: Record<string, number> = {};
  sightings.forEach((s) => {
    pestCounts[s.pestName] = (pestCounts[s.pestName] || 0) + 1;
  });

  const sortedPests = Object.entries(pestCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  // Status breakdown
  const statusCounts = {
    active: problems.filter((p) => p.status === 'active').length,
    improving: problems.filter((p) => p.status === 'improving').length,
    monitoring: problems.filter((p) => p.status === 'monitoring').length,
    resolved: problems.filter((p) => p.status === 'resolved').length
  };

  res.json({
    totalSightings: sightings.length,
    totalProblems: problems.length,
    activeProblems: statusCounts.active,
    resolvedProblems: statusCounts.resolved,
    categoryBreakdown: Object.entries(categoryCounts).map(([category, count]) => ({ category, count })),
    roomBreakdown: Object.entries(roomCounts).map(([room, count]) => ({ room, count })),
    topPests: sortedPests,
    statusCounts
  });
});

// Helper for local scientific expert identification fallback
function localExpertIdentification(description: string, location?: string): AIIdentificationResult {
  const desc = (description || '').toLowerCase();
  const loc = (location || '').toLowerCase();

  // Check matching candidate in database
  let candidates = getAllPests().filter((p) => {
    const matchesTag = p.tags.some((t) => desc.includes(t.toLowerCase()));
    const matchesName = desc.includes(p.commonName.toLowerCase()) || p.aliases.some((a) => desc.includes(a.toLowerCase()));
    const matchesSigns = p.signsOfPresence.some((s) => desc.includes(s.toLowerCase()));
    const matchesLocation = loc ? p.commonLocations.some((l) => loc.includes(l.toLowerCase())) : false;
    return matchesName || matchesTag || matchesSigns || matchesLocation;
  });

  if (candidates.length === 0) {
    if (desc.includes('ant') || desc.includes('trail')) {
      candidates = getAllPests().filter((p) => p.subCategory === 'Ants');
    } else if (desc.includes('roach') || desc.includes('droppings') || desc.includes('pepper')) {
      candidates = getAllPests().filter((p) => p.subCategory === 'Cockroaches');
    } else if (desc.includes('lizard') || desc.includes('gecko')) {
      candidates = getAllPests().filter((p) => p.subCategory === 'Lizards');
    } else if (desc.includes('fly') || desc.includes('maggot') || desc.includes('drain')) {
      candidates = getAllPests().filter((p) => p.subCategory === 'Flies');
    } else if (desc.includes('snake')) {
      candidates = getAllPests().filter((p) => p.subCategory === 'Snakes');
    } else if (desc.includes('leaf') || desc.includes('plant') || desc.includes('sticky')) {
      candidates = getAllPests().filter((p) => p.category === 'plant_pests');
    } else {
      candidates = [getPestById('ant-odorous-house') || getAllPests()[0]];
    }
  }

  const primary = candidates[0];
  const alt1 = candidates[1] || getAllPests()[1];
  const alt2 = candidates[2] || getAllPests()[2];

  const isDangerous = primary.riskLevel === 'high' || primary.tags.includes('dangerous animal');

  return {
    primary: {
      pestId: primary.id,
      name: primary.commonName,
      scientificName: primary.scientificName,
      confidence: 84,
      riskLevel: primary.riskLevel,
      isDangerous: isDangerous,
      isWildlife: !!primary.isWildlife,
      description: primary.description
    },
    alternatives: [
      {
        pestId: alt1.id,
        name: alt1.commonName,
        scientificName: alt1.scientificName,
        confidence: 11,
        reason: 'Visual morphological similarity in size, habitat, and activity profile.'
      },
      {
        pestId: alt2.id,
        name: alt2.commonName,
        scientificName: alt2.scientificName,
        confidence: 5,
        reason: 'Common co-occurring species sharing similar attractants.'
      }
    ],
    whyHere: primary.attractants.length > 0 ? primary.attractants : ['Seeking food crumbs, moisture residues, or warm shelter.'],
    immediateSafeActions: isDangerous
      ? [
          'DANGEROUS ANIMAL SAFETY MODE: Do not approach, handle, corner, or provoke this creature.',
          'Keep children and domestic pets safely away in another room.',
          'Contact an appropriate local wildlife service or certified professional.'
        ]
      : primary.nonChemicalSolutions.slice(0, 3),
    prevention: primary.preventionMethods.slice(0, 4),
    safeRemoval: isDangerous
      ? ['Do not attempt DIY physical capture. Allow a licensed humane wildlife or pest control specialist to handle relocation.']
      : primary.nonChemicalSolutions.slice(0, 3),
    cleaningGuidance: [
      'Wipe surfaces thoroughly with warm soapy water to eliminate scent trails and organic residues.',
      'Dispose of vacuum contents or paper towels immediately in an exterior waste container.'
    ],
    professionalRecommendation: primary.professionalControlNotes || 'Consult licensed professional if population persists despite environmental remediation.',
    safetyAlert: isDangerous ? 'POTENTIALLY HAZARDOUS SPECIES: Do not touch or corner under any circumstances.' : undefined,
    uncertaintyDisclaimer: 'Identification provided for guidance; never present uncertain identification as absolute fact. For medical bites or venomous creatures, seek professional care immediately.'
  };
}

// 10. AI Photo Identification Endpoint
app.post('/api/ai/identify', async (req: Request, res: Response) => {
  const { imageBase64, userNotes, location } = req.body;

  if (aiClient && (imageBase64 || userNotes)) {
    try {
      const prompt = `You are PestGuard AI, an expert entomologist, wildlife biologist, and safety specialist.
A user has submitted a pest photo/observation.
Observation Location: ${location || 'Indoor/Home'}
User Observation Notes: ${userNotes || 'No notes provided'}

Analyze the specimen carefully.
Prioritize: Identification -> Risk assessment -> Prevention -> Safe removal -> Monitoring -> Professional help when necessary.
IMPORTANT SAFETY RULES:
- If the animal is potentially dangerous (e.g. venomous snake, scorpion, black widow, aggressive wasp swarm, bat, unknown wild mammal):
  DO NOT instruct the user to capture, touch, corner, provoke, poison, burn, crush, or physically handle it!
  State clearly: "Do not approach or handle this animal. Keep people and pets away and contact an appropriate local professional/wildlife service."
- For bees: Clearly distinguish from wasps, emphasize pollinator status and live beekeeper relocation. Never instruct spraying bees.
- Do not provide dangerous chemical mixing or toxic poison instructions.

Return your analysis strictly as a single JSON object with these exact keys:
{
  "primary": {
    "name": "string (Common Name)",
    "scientificName": "string",
    "confidence": number (between 50 and 95),
    "riskLevel": "low" | "moderate" | "high" | "professional",
    "isDangerous": boolean,
    "isWildlife": boolean,
    "description": "string"
  },
  "alternatives": [
    {
      "name": "string",
      "scientificName": "string",
      "confidence": number,
      "reason": "string"
    }
  ],
  "whyHere": ["string", "string"],
  "immediateSafeActions": ["string", "string"],
  "prevention": ["string", "string"],
  "safeRemoval": ["string", "string"],
  "cleaningGuidance": ["string", "string"],
  "professionalRecommendation": "string",
  "safetyAlert": "string or null",
  "uncertaintyDisclaimer": "string"
}`;

      const contents: any[] = [];
      if (imageBase64) {
        // Strip data url prefix if present
        const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
        contents.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: cleanBase64
          }
        });
      }
      contents.push({ text: prompt });

      // Call Gemini model
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents
      });

      const text = response.text || '';
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as AIIdentificationResult;
        // Cross-link with local pest database ID if possible
        const matched = getAllPests().find((p) => p.commonName.toLowerCase() === parsed.primary.name.toLowerCase() || p.scientificName.toLowerCase() === parsed.primary.scientificName?.toLowerCase());
        if (matched) {
          parsed.primary.pestId = matched.id;
        }
        res.json({ result: parsed });
        return;
      }
    } catch (err: any) {
      console.warn('Gemini AI identification call failed or rate-limited, engaging expert rule-engine fallback:', err?.message || err);
    }
  }

  // Fallback to local expert identification
  const result = localExpertIdentification(userNotes || '', location);
  res.json({ result });
});

// 11. AI Pest Assistant Advice Chat
app.post('/api/ai/advice', async (req: Request, res: Response) => {
  const { message, conversationHistory, context } = req.body;

  if (aiClient && message) {
    try {
      const systemInstruction = `You are PestGuard AI, an expert pest-management information architect, wildlife biologist, and safe household advisor.
Tagline: "Identify it. Understand it. Handle it safely."
SAFETY CONSTITUTION:
1. Never encourage reckless handling of potentially dangerous animals.
2. For dangerous species (snakes, scorpions, aggressive swarms, bats, raccoons): display: "Do not approach or handle this animal. Keep people and pets away and contact an appropriate local professional/wildlife service."
3. Do NOT instruct users to capture, touch, corner, provoke, poison, burn, crush, or physically handle dangerous creatures.
4. Do NOT provide dangerous instructions for preparing, mixing, concentrating, or applying toxic chemicals.
5. Always emphasize physical exclusion, sanitation, food storage, and moisture management before chemicals.
6. Clearly distinguish bees from wasps; prioritize safe live beekeeper relocation for honeybees.
7. Do not fabricate certainty; ask relevant follow-up questions when details are ambiguous.`;

      const prompt = `Context: User Household ${JSON.stringify(context || {})}
Recent User Query: ${message}

Provide a structured, helpful, safety-first response covering:
1. Possible identification / clarification questions
2. Why it may be appearing
3. Immediate safe steps right now
4. Long-term prevention & non-chemical sanitation
5. When to call a professional pest control or wildlife service.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [{ text: `${systemInstruction}\n\n${prompt}` }]
      });

      res.json({ reply: response.text });
      return;
    } catch (err: any) {
      console.warn('Gemini chat advice error:', err?.message || err);
    }
  }

  // Fallback assistant response
  const query = (message || '').toLowerCase();
  let reply = '';
  if (query.includes('snake')) {
    reply = `🚨 **WILDLIFE SAFETY ALERT: Snake Encounter**\n\n1. **Immediate Action:** Keep calm and freeze. Slowly step backward at least 6 feet.\n2. **Evacuate:** Move all children and pets indoors immediately.\n3. **Safety Rule:** DO NOT attempt to poke, catch, capture, corner, or kill the snake. Over 70% of snakebites occur during capture or kill attempts.\n4. **Identification:** If safe from a distance, notice whether it has longitudinal yellow stripes (harmless garter snake) or hourglass bands (venomous copperhead).\n5. **Next Step:** Contact a certified local wildlife rescue or animal control specialist for safe, humane relocation.`;
  } else if (query.includes('lizard') || query.includes('gecko')) {
    reply = `🦎 **Lizard in Your Home — Safe Non-Harm Guide**\n\nSmall geckos are completely harmless and are nature's best mosquito controllers!\n\n1. **Keep calm:** House geckos cannot bite through skin and carry no venom.\n2. **Keep pets away:** Move curious cats/dogs into another room so they don't injure the lizard.\n3. **Humane Catch & Release:** Gently place a clear plastic container over the gecko, slide a stiff piece of mail underneath, lift, and release it outside near garden bushes.\n4. **Cool Air Trick:** Geckos dislike cold air; running a fan pointing toward an open exit door gently encourages them to leave.\n5. **Prevention:** Turn off outdoor night lights attracting bugs, and seal door threshold gaps.`;
  } else if (query.includes('ant')) {
    reply = `🐜 **Ant Problem Solver**\n\n1. **Immediate Step:** Trace where the trail leads. Clean the scent trail with warm water and vinegar or dish soap to break their pheromone highway.\n2. **Sanitation:** Seal all open sugar, honey, and cereal boxes in airtight glass or rigid plastic containers.\n3. **Dry the Sinks:** Wipe kitchen counters and sinks dry at night—ants frequently seek water droplets.\n4. **Long-Term:** Caulk baseboard entry cracks. Avoid spraying broad repellent aerosols which cause ant colonies to bud and fracture into multiple rooms.`;
  } else {
    reply = `🛡️ **PestGuard Recommendation**\n\nTo give you the most accurate and safe advice:\n- Where in your property did you observe it (kitchen, bathroom, garden, bed)?\n- What size and color was it, and is it crawling or flying?\n- Are there any visible signs (droppings, holes, webbing, chewed wood)?\n\n**Immediate Safe Practice:** Keep food sealed, wipe moisture, and maintain a safe viewing distance without touching unfamiliar creatures.`;
  }

  res.json({ reply });
});

// 12. Plant Doctor Endpoint
app.post('/api/ai/plant-doctor', async (req: Request, res: Response) => {
  const { symptoms, plantType, affectedPart, notes } = req.body;

  if (aiClient && symptoms) {
    try {
      const prompt = `You are PestGuard Plant Doctor, an expert horticulturalist and integrated pest management (IPM) specialist.
User Plant: ${plantType || 'Garden / Houseplant'}
Affected Plant Part: ${affectedPart || 'Leaves'}
Symptoms: ${Array.isArray(symptoms) ? symptoms.join(', ') : symptoms}
Additional Notes: ${notes || ''}

Diagnose the problem distinguishing PEST causes from NON-PEST physiological causes (e.g. overwatering, nutrient deficiency, sunburn, fungal leaf spot).
Provide non-chemical and organic remedies. Do NOT automatically assume every plant issue is an insect infestation.

Return strictly JSON matching:
{
  "plantName": "string",
  "affectedPart": "string",
  "possiblePests": [
    { "name": "string", "confidence": number, "description": "string", "organicRemedy": "string" }
  ],
  "nonPestCauses": [
    { "cause": "string", "likelihood": "high" | "medium" | "low", "symptoms": "string", "correction": "string" }
  ],
  "immediateActions": ["string", "string"],
  "preventionTips": ["string", "string"],
  "whenToSeekHorticulturalAdvice": "string"
}`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [{ text: prompt }]
      });

      const text = response.text || '';
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        res.json({ diagnosis: JSON.parse(match[0]) });
        return;
      }
    } catch (err: any) {
      console.warn('Plant doctor Gemini call error:', err?.message || err);
    }
  }

  // Fallback plant doctor
  const diagnosis: PlantDiagnosisResult = {
    plantName: plantType || 'Houseplant',
    affectedPart: affectedPart || 'Leaves',
    possiblePests: [
      {
        name: 'Aphids / Spider Mites',
        confidence: 78,
        description: 'Piercing-sucking pests clustering under leaves or spinning fine webs.',
        organicRemedy: 'Rinse foliage thoroughly under lukewarm shower stream; spray insecticidal soap or pure cold-pressed neem oil.'
      }
    ],
    nonPestCauses: [
      {
        cause: 'Overwatering / Poor Soil Drainage',
        likelihood: 'high',
        symptoms: 'Yellowing lower leaves, soft stems, fungus gnats in soil',
        correction: 'Allow the top 2 inches of potting soil to dry out completely between waterings; verify pot has drainage holes.'
      },
      {
        cause: 'Nitrogen Deficiency',
        likelihood: 'medium',
        symptoms: 'Older leaves turning pale yellow while veins remain faint',
        correction: 'Apply balanced organic liquid seaweed or compost tea fertilizer.'
      }
    ],
    immediateActions: [
      'Isolate the plant away from other houseplants to prevent potential pest spread.',
      'Inspect undersides of leaves and leaf joints with bright illumination.'
    ],
    preventionTips: [
      'Avoid high nitrogen synthetic fertilizers which attract soft-bodied pests.',
      'Maintain adequate ambient humidity and good air circulation around foliage.'
    ],
    whenToSeekHorticulturalAdvice: 'Consult a local master gardener or university agricultural extension if wilting persists despite proper soil moisture.'
  };

  res.json({ diagnosis });
});

// 13. Admin Management Endpoints
app.post('/api/admin/pests', (req: Request, res: Response) => {
  const newPest: Pest = {
    ...req.body,
    id: `pest-custom-${Date.now()}`
  };
  memoryStorage.customPests.push(newPest);
  saveStorage(memoryStorage);
  res.status(201).json({ pest: newPest });
});

app.put('/api/admin/pests/:id', (req: Request, res: Response) => {
  const idx = memoryStorage.customPests.findIndex((p) => p.id === req.params.id);
  if (idx !== -1) {
    memoryStorage.customPests[idx] = { ...memoryStorage.customPests[idx], ...req.body };
    saveStorage(memoryStorage);
    res.json({ pest: memoryStorage.customPests[idx] });
    return;
  }
  res.status(404).json({ error: 'Custom pest not found in editable store' });
});

app.delete('/api/admin/pests/:id', (req: Request, res: Response) => {
  memoryStorage.customPests = memoryStorage.customPests.filter((p) => p.id !== req.params.id);
  saveStorage(memoryStorage);
  res.json({ success: true });
});

// Vite Integration: Development vs Production
if (!isProduction) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🛡️ PestGuard server is running on port ${PORT} [env: ${isProduction ? 'prod' : 'dev'}]`);
});
