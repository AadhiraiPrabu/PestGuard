export type PestCategory =
  | 'insects'
  | 'arachnids'
  | 'myriapods'
  | 'worms_invertebrates'
  | 'rodents'
  | 'reptiles'
  | 'amphibians'
  | 'birds'
  | 'mammals'
  | 'domestic_stray'
  | 'plant_pests';

export type RiskLevel = 'low' | 'moderate' | 'high' | 'professional';

export type ActiveTime = 'day' | 'night' | 'crepuscular' | 'all_day';

export type Region =
  | 'global'
  | 'north_america'
  | 'europe'
  | 'india'
  | 'southeast_asia'
  | 'australia'
  | 'latin_america'
  | 'africa';

export interface Pest {
  id: string;
  commonName: string;
  scientificName: string;
  category: PestCategory;
  subCategory: string;
  description: string;
  identificationFeatures: string[];
  size: string;
  color: string[];
  habitat: string;
  activeTime: ActiveTime;
  seasonality: string;
  foundIndoors: boolean;
  foundOutdoors: boolean;
  commonLocations: string[];
  foodSources: string[];
  attractants: string[];
  signsOfPresence: string[];
  riskLevel: RiskLevel;
  humanRisk: string;
  petRisk: string;
  propertyRisk: string;
  foodContaminationRisk: string;
  plantDamageRisk: string;
  beneficialStatus: string;
  preventionMethods: string[];
  nonChemicalSolutions: string[];
  professionalControlNotes: string;
  chemicalControlGeneralGuidance: string;
  safetyWarnings: string[];
  firstAidGeneralGuidance: string;
  imageUrls: string[];
  aliases: string[];
  regionalNames: string[];
  regions: Region[];
  tags: string[];
  isDangerous?: boolean;
  isWildlife?: boolean;
}

export type SightingSeverity = 'low' | 'moderate' | 'severe' | 'emergency';

export type ProblemStatus = 'active' | 'improving' | 'monitoring' | 'resolved';

export interface PestSighting {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  pestId?: string;
  pestName: string;
  location: string;
  numberObserved: 'one' | 'few' | 'many' | 'hundreds' | 'constant';
  frequency: 'first_time' | 'occasionally' | 'daily' | 'several_times_daily' | 'continuous';
  signsObserved: string[];
  photoUrl?: string;
  severity: SightingSeverity;
  notes: string;
  actionTaken: string;
  resolved: boolean;
  createdAt: string;
}

export interface ProblemReport {
  id: string;
  title: string;
  pestId?: string;
  pestName: string;
  location: string;
  firstNoticed: string;
  lastSeen: string;
  frequency: string;
  status: ProblemStatus;
  notes: string;
  actionsTaken: Array<{
    date: string;
    action: string;
    note?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface InspectionStep {
  id: string;
  area: string;
  item: string;
  instructions: string;
  commonFinds: string[];
  checked: boolean;
  pestFound: boolean;
  pestFoundName?: string;
  photoUrl?: string;
  notes?: string;
}

export interface HomeInspection {
  id: string;
  room: string;
  date: string;
  completed: boolean;
  steps: InspectionStep[];
}

export interface Reminder {
  id: string;
  title: string;
  category: 'inspection' | 'cleaning' | 'treatment' | 'prevention' | 'professional';
  targetDate: string;
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly';
  completed: boolean;
  notes?: string;
  associatedPestName?: string;
}

export interface HouseholdMember {
  id: string;
  name: string;
  role: 'owner' | 'resident' | 'child' | 'guest';
  email?: string;
}

export interface HouseholdProfile {
  id: string;
  name: string;
  propertyType: 'apartment' | 'house' | 'farm' | 'office' | 'hostel' | 'shop';
  region: Region;
  hasPets: boolean;
  petTypes: Array<'dog' | 'cat' | 'bird' | 'rabbit' | 'fish' | 'reptile' | 'other'>;
  hasChildren: boolean;
  members: HouseholdMember[];
}

export interface AIIdentificationAlternative {
  pestId?: string;
  name: string;
  scientificName?: string;
  confidence: number; // 0 - 100
  reason: string;
}

export interface AIIdentificationResult {
  primary: {
    pestId?: string;
    name: string;
    scientificName: string;
    confidence: number;
    riskLevel: RiskLevel;
    isDangerous: boolean;
    isWildlife: boolean;
    description: string;
  };
  alternatives: AIIdentificationAlternative[];
  whyHere: string[];
  immediateSafeActions: string[];
  prevention: string[];
  safeRemoval: string[];
  cleaningGuidance: string[];
  professionalRecommendation: string;
  safetyAlert?: string;
  uncertaintyDisclaimer: string;
}

export interface PlantDiagnosisResult {
  plantName?: string;
  affectedPart: string;
  possiblePests: Array<{
    name: string;
    confidence: number;
    description: string;
    organicRemedy: string;
  }>;
  nonPestCauses: Array<{
    cause: string;
    likelihood: 'high' | 'medium' | 'low';
    symptoms: string;
    correction: string;
  }>;
  immediateActions: string[];
  preventionTips: string[];
  whenToSeekHorticulturalAdvice: string;
}

export interface PestComparison {
  id: string;
  title: string;
  pestAId: string;
  pestBId: string;
  speciesA: string;
  speciesB: string;
  keyDifferentiators: string;
  comparisonRows: Array<{
    feature: string;
    speciesAValue: string;
    speciesBValue: string;
    significance: string;
  }>;
}
