import { Pest } from '../../types/pest';

export const RODENTS_MAMMALS_DOMESTIC: Pest[] = [
  {
    id: 'rodent-house-mouse',
    commonName: 'House Mouse',
    scientificName: 'Mus musculus',
    category: 'rodents',
    subCategory: 'Mice',
    description: 'Small, agile grayish-brown rodent with large ears, small black eyes, and a long scaly tail; enters structures through openings as small as a dime (6 mm / 1/4 inch).',
    identificationFeatures: [
      'Small slender body with dusty gray or light brown fur and lighter belly',
      'Large prominent rounded ears and pointed muzzle',
      'Semi-naked scaly tail equal to or slightly longer than head and body length',
      'Droppings: small, smooth, dark rods with pointed ends (3 - 6 mm / size of a caraway seed)'
    ],
    size: 'Body: 65 - 90 mm; Tail: 60 - 100 mm; Weight: 12 - 30 g',
    color: ['Dusty gray', 'Brownish-gray', 'Light belly'],
    habitat: 'Wall voids, beneath kitchen cabinets, behind stoves and refrigerators, inside insulation, storage boxes',
    activeTime: 'night',
    seasonality: 'Year-round indoor nesting; autumn migration into homes as outdoor temperatures drop',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Kitchen', 'Pantry', 'Basement', 'Attic', 'Behind appliances'],
    foodSources: ['Grains, cereals, seeds, chocolate, peanut butter, bacon, pet food crumbs'],
    attractants: ['Open food boxes, spilled pet kibble, warm stove insulation, nesting clutter'],
    signsOfPresence: [
      'Small pointed dark droppings along baseboards and inside kitchen drawers',
      'Gnawed food packaging with jagged tooth marks',
      'Shredded paper, cardboard, or fiberglass insulation cached in corners for nests',
      'Scratching and scurrying noises inside drywall at night'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Contaminates food with urine and feces carrying Salmonella and Lymphocytic Chorio-meningitis Virus (LCMV). Droppings and dander trigger childhood asthma.',
    petRisk: 'Can transmit fleas and tapeworms to domestic cats and dogs.',
    propertyRisk: 'Moderate to high fire risk: rodents constantly gnaw on electrical wiring insulation to trim continuously growing incisors.',
    foodContaminationRisk: 'Extremely high in pantries and restaurants.',
    plantDamageRisk: 'Feeds on garden seeds and bulbs.',
    beneficialStatus: 'Outdoor prey base for raptors (owls, hawks) and snakes.',
    preventionMethods: [
      'Seal all exterior openings larger than 1/4 inch (6 mm) using copper mesh (Stuff-it) packed tightly and sealed with exterior silicone caulk or foam',
      'Store all pantry grains, pasta, flour, and pet food in rigid chew-proof metal or thick glass containers',
      'Install tight door sweeps on exterior doors, garage doors, and basement walkouts',
      'Keep foundation perimeter free of tall grass, firewood stacks, and thick shrubs'
    ],
    nonChemicalSolutions: [
      'Snap traps: place wooden or plastic snap traps perpendicular to walls with bait triggers facing the baseboard (mice navigate by whiskering along walls)',
      'Bait with pea-sized dab of peanut butter or hazelnut spread',
      'Live catch-and-release bucket traps for humane capture (release at least 2 miles away in suitable wild habitat if local laws permit)'
    ],
    professionalControlNotes: 'Recommended for multi-family buildings or persistent heavy infestations inside wall voids.',
    chemicalControlGeneralGuidance: 'DO NOT USE LOOSE CHEMICAL RODENT POISONS/BAITS INDOORS. Rodents die inside wall voids creating severe putrid odor and fly maggots. Furthermore, second-generation anticoagulant rodenticides cause lethal secondary poisoning to pet dogs, pet cats, and wild owls that eat poisoned mice.',
    safetyWarnings: [
      'NEVER sweep or vacuum dry mouse droppings! This aerosolizes infectious viral and bacterial particles. Always spray droppings with a disinfectant solution (or 10% bleach), let soak for 5 minutes, and wipe up with a paper towel while wearing gloves and an N95 mask.',
      'Keep mouse traps out of reach of children and pets.'
    ],
    firstAidGeneralGuidance: 'Wash hands thoroughly with soap and water after handling traps or cleaning droppings.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Field mouse', 'House mouse'],
    regionalNames: ['Ratón casero', 'Chooha'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['mouse droppings', 'gnawing wires', 'kitchen pantry', 'night scurrying', 'shredded paper', 'caraway seed']
  },
  {
    id: 'rodent-norway-rat',
    commonName: 'Norway Rat (Brown Rat)',
    scientificName: 'Rattus norvegicus',
    category: 'rodents',
    subCategory: 'Rats',
    description: 'Heavy-bodied, burrowing brown rat with a blunt muzzle, small ears, and a scaly tail shorter than head and body; inhabits sewers, basements, and foundation burrows.',
    identificationFeatures: [
      'Stout, heavy body weighing up to 500 g',
      'Blunt, rounded muzzle and small, close-set ears that do not reach the eyes when pulled down',
      'Tail is thick, scaly, and shorter than the combined length of head and body',
      'Droppings: large, capsule-shaped with blunt rounded ends (12 - 20 mm / 3/4 inch long)'
    ],
    size: 'Body: 190 - 250 mm; Tail: 150 - 200 mm; Weight: 250 - 500 g',
    color: ['Brownish-gray', 'Shaggy coarse coat', 'Dirty white belly'],
    habitat: 'Ground burrows along foundations, sewer lines, under concrete slabs, crawlspaces, garbage dumpster areas',
    activeTime: 'night',
    seasonality: 'Year-round; seeks indoor warmth in late autumn',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Basement', 'Crawlspace', 'Foundation burrow', 'Garbage area', 'Drain'],
    foodSources: ['Omnivorous: meat scraps, dog feces, grain, garbage, fish, compost'],
    attractants: ['Accessible garbage dumpsters, pet waste left in yards, dog food left outdoors, compost bins'],
    signsOfPresence: [
      'Large capsule-shaped blunt droppings',
      'Active smooth burrow holes (2-3 inches wide) dug beneath concrete patios, slabs, or foundation edges',
      'Dark greasy rub marks (sebum) along baseboards and foundation walls from their dirty fur',
      'Heavy gnaw marks on wood, PVC pipes, and plastic trash bins'
    ],
    riskLevel: 'professional',
    humanRisk: 'Major public health hazard. Transmits Leptospirosis (Weil’s disease), Salmonella, Rat-Bite Fever (Streptobacillus), and historically bubonic plague via rodent fleas.',
    petRisk: 'Can bite curious dogs, causing severe bacterial infection and transmitting leptospirosis.',
    propertyRisk: 'Severe: undermines concrete walkways with burrows, chews structural timber, tears plumbing pipes and electrical cables.',
    foodContaminationRisk: 'Severe.',
    plantDamageRisk: 'Digs up root crops and damages garden fruits.',
    beneficialStatus: 'Outdoor prey for large owls and foxes in natural ecosystems.',
    preventionMethods: [
      'Line the bottom of compost bins with 1/2-inch galvanized hardware cloth mesh',
      'Store all outdoor garbage in heavy-duty commercial metal or thick plastic bins with secure clamping lids',
      'Seal all foundation openings and pipe penetrations with concrete mortar or heavy steel hardware cloth',
      'Pick up dog feces from lawns daily'
    ],
    nonChemicalSolutions: [
      'Heavy-duty rat snap traps secured inside locked tamper-resistant bait stations along exterior walls and fence lines',
      'Fill exterior burrows with coarse crushed gravel and heavy wire mesh to prevent re-excavation'
    ],
    professionalControlNotes: 'Professional pest control or municipal vector control inspection is strongly recommended for active rat burrows and sewer-connected infestations.',
    chemicalControlGeneralGuidance: 'Rodenticides should ONLY be deployed inside locked, tamper-resistant, anchored commercial bait stations by certified professionals to protect children, dogs, cats, and non-target wildlife from primary and secondary toxicity.',
    safetyWarnings: [
      'NEVER attempt to corner or handle a wild rat with bare hands; cornered rats leap and bite fiercely.',
      'Wet-clean droppings wearing disposable gloves and an N95 respirator mask.'
    ],
    firstAidGeneralGuidance: 'If bitten or scratched by a rat, immediately wash the wound with warm running water and soap for 5 minutes. Seek prompt emergency medical evaluation for antibiotics and tetanus prophylaxis.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Brown rat', 'Sewer rat', 'Wharf rat'],
    regionalNames: ['Rata parda'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['large rat', 'burrows', 'capsule droppings', 'grease marks', 'chewed pipes', 'sewer rat']
  },
  {
    id: 'mammal-bat-littlebrown',
    commonName: 'Little Brown Bat',
    scientificName: 'Myotis lucifugus',
    category: 'mammals',
    subCategory: 'Bats',
    description: 'Small nocturnal flying mammal with glossy brown fur and membranous wings; ecological insectivore roosting in attics and soffits. Ecologically vital and legally protected.',
    identificationFeatures: [
      'Uniform glossy dark brown to golden-brown fur on back with lighter belly',
      'Leathery wing membranes connecting elongated finger bones to hind legs',
      'Short rounded ears, small eyes, nocturnal acrobatic fluttering flight catching insects',
      'Roosts hanging upside down by hind claws in dark warm attic voids or barn rafters'
    ],
    size: 'Body: 60 - 100 mm; Wingspan: 220 - 270 mm; Weight: 7 - 14 g',
    color: ['Glossy dark brown', 'Blackish wings'],
    habitat: 'Attics, soffits, behind window shutters, belfries, hollow tree cavities, caves in winter',
    activeTime: 'night',
    seasonality: 'Active spring through autumn; enters attics for summer maternity colonies; hibernates in winter',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Attic', 'Roof soffit', 'Behind shutters', 'Chimney', 'Living room (accidental entry)'],
    foodSources: ['Night-flying insects: mosquitoes, moths, beetles, midges (consumes up to 1,000 insects per hour)'],
    attractants: ['Warm, elevated, undisturbed attic peaks, proximity to lakes and nocturnal insect hatches'],
    signsOfPresence: [
      'Piles of dark, segmented, crumbly droppings (guano) accumulating beneath attic roosting spots (guano crumbles easily into shiny insect wing fragments when crushed, unlike rodent droppings)',
      'High-pitched squeaking and scratching sounds in attic ceiling corners at dusk',
      'Bats exiting through a roof gap or ridge vent in a steady stream at twilight'
    ],
    riskLevel: 'high',
    humanRisk: 'PUBLIC HEALTH WARNING: Bats are a natural reservoir for the Rabies virus. While fewer than 1% of wild bats have rabies, ANY direct physical contact or finding a bat in a room with a sleeping person, child, or incapacitated individual warrants immediate public health consultation. Additionally, large accumulations of bat guano in attics can harbor the fungal spores of Histoplasmosis.',
    petRisk: 'Rabies hazard for unvaccinated pets.',
    propertyRisk: 'Guano and urine stains ceilings and produces strong ammonia odors.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'EXTRAORDINARILY BENEFICIAL INSECTIVORE. Crucial for nocturnal agricultural pest control and mosquito suppression. Protected under state and federal wildlife conservation laws.',
    preventionMethods: [
      'Inspect roof fascia, gable vents, and chimney flashing in late winter before maternity colonies form',
      'Install heavy 1/4-inch wire mesh screening over attic gable vents and chimney caps',
      'Mount an artificial bat house on a sunny outdoor pole 15 feet high to provide an attractive alternative roost away from the home'
    ],
    nonChemicalSolutions: [
      'ONE-WAY BAT EXCLUSION DOORS: Install bat-cones or netting over entry gaps during permitted seasonal windows (late summer/early autumn after pups can fly). Bats fly out at dusk to feed but cannot re-enter!',
      'Accidental single bat flying inside living room: close interior doors to confine the bat to one room, open exterior windows and doors, turn off interior lights, and the bat will echolocate the outdoor air and fly out safely within 15 minutes',
      'Capturing a grounded bat: wear thick leather work gloves, place a cardboard box or plastic container gently over the bat, slide cardboard underneath, secure lid, and contact local wildlife rescue or public health'
    ],
    professionalControlNotes: 'Licensed humane wildlife control operator is strongly recommended for attic bat colonies. Note: Legally, bat exclusion CANNOT be conducted during maternity season (typically May to August) when flightless pups would become trapped and die inside.',
    chemicalControlGeneralGuidance: 'PESTICIDES AND TOXIC CHEMICALS ARE STRICTLY ILLEGAL FOR BAT CONTROL in most countries. Only humane non-lethal one-way exclusion is permitted.',
    safetyWarnings: [
      'NEVER TOUCH A BAT WITH BARE HANDS.',
      'If someone awakens to find a bat in the bedroom, DO NOT RELEASE THE BAT: carefully capture it without damaging the head and contact local Public Health immediately for rabies testing.',
      'Wear an N95 respirator mask and dampen dried guano with water before cleaning attic accumulations to prevent inhaling Histoplasma fungal spores.'
    ],
    firstAidGeneralGuidance: 'If bitten or scratched by a bat, immediately wash the wound vigorously with soap and water for 15 minutes. Contact local emergency medical services or public health immediately for Rabies Post-Exposure Prophylaxis (PEP). Rabies is fatal once symptoms appear, but 100% preventable with timely vaccination.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Brown bat', 'Attic bat', 'Microbat'],
    regionalNames: ['Murciélago café', 'Chamgadar'],
    regions: ['north_america', 'europe', 'global'],
    tags: ['dangerous animal', 'bat in house', 'rabies warning', 'humane exclusion', 'beneficial insectivore', 'guano']
  },
  {
    id: 'mammal-raccoon',
    commonName: 'Common Raccoon',
    scientificName: 'Procyon lotor',
    category: 'mammals',
    subCategory: 'Raccoons',
    description: 'Stocky, highly intelligent mammal with a distinctive black eye mask, ringed bushy tail, and dexterous human-like front paws; raids garbage and dens in chimneys and attics.',
    identificationFeatures: [
      'Prominent black facial mask around eyes bordered by white fur',
      'Bushy tail with 4 to 7 alternating black and brownish-gray rings',
      'Dexterous 5-toed front paws capable of turning door knobs, untying knots, and opening latches'
    ],
    size: 'Body: 400 - 700 mm; Weight: 5 - 12 kg',
    color: ['Grizzled gray', 'Black mask', 'Ringed tail'],
    habitat: 'Attics, chimneys, beneath porches and decks, hollow trees, urban storm sewers',
    activeTime: 'night',
    seasonality: 'Active year-round; spring denning season for mothers with litters',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Roof', 'Attic', 'Chimney', 'Garbage area', 'Deck crawlspace'],
    foodSources: ['Omnivorous: garbage, pet food, sweet corn, fruit trees, bird eggs, fish, grubs in lawns'],
    attractants: ['Unsecured garbage cans, outdoor pet feeding bowls, bird feeders, unsecured chimney flues'],
    signsOfPresence: [
      'Overturned garbage cans with trash strewn across driveway',
      'Torn roof shingles, bent fascia boards, or broken soffit vents where raccoons entered the attic',
      'Loud heavy thumping and chattering in the attic or chimney at night',
      'Large latrine piles of droppings on roofs or attic floors'
    ],
    riskLevel: 'high',
    humanRisk: 'Vector for the Rabies virus. Host for the parasitic raccoon roundworm (Baylisascaris procyonis), whose microscopic eggs in raccoon feces can cause severe neural larva migrans if ingested.',
    petRisk: 'High; raccoons are formidable fighters that can severely injure dogs defending backyards; transmits canine distemper and rabies.',
    propertyRisk: 'High; rips through roof decking, destroys attic insulation, soils living spaces.',
    foodContaminationRisk: 'High in vegetable gardens.',
    plantDamageRisk: 'Tears up lawn turf looking for white grubs; ravages sweet corn patches.',
    beneficialStatus: 'Native wildlife; important seed disperser in wild ecosystems.',
    preventionMethods: [
      'Install heavy commercial stainless steel chimney caps bolted over all chimney flues',
      'Secure trash bin lids with heavy-duty bungee cords or store bins inside a locked garage until collection morning',
      'Never leave pet food bowls outside after nightfall',
      'Trim tree branches at least 6 feet away from the roofline to block climbing access'
    ],
    nonChemicalSolutions: [
      'Motion-activated outdoor sprinkler deterrents (ScareCrow sprinklers) along garden beds',
      'Humane one-way wildlife exclusion doors on attic gaps outside of pup season',
      'Bright strobe lights and talk radio placed in the attic to humanely encourage a mother raccoon to voluntarily relocate her kits to an outdoor den'
    ],
    professionalControlNotes: 'Licensed humane wildlife removal professional is strongly recommended for animals denning inside chimneys or attics.',
    chemicalControlGeneralGuidance: 'Poisoning raccoons is illegal, dangerous, and inhumane. Use exclusion and habitat modification only.',
    safetyWarnings: [
      'DO NOT APPROACH OR CORNER A RACCOON. Mother raccoons will attack ferociously to defend their young.',
      'Wear an N95 mask, rubber boots, and disposable gloves when cleaning raccoon latrine areas to prevent roundworm egg ingestion.'
    ],
    firstAidGeneralGuidance: 'Wash any animal scratches or bite wounds with soap and running water for 15 minutes; seek emergency rabies medical care immediately.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Masked bandit', 'Coon'],
    regionalNames: ['Mapache'],
    regions: ['north_america', 'europe', 'global'],
    tags: ['dangerous animal', 'wildlife', 'black mask', 'chimney', 'attic intruder', 'overturned garbage']
  },
  {
    id: 'domestic-stray-dog',
    commonName: 'Stray / Free-Roaming Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'domestic_stray',
    subCategory: 'Domestic Animals',
    description: 'Unaccompanied domestic dogs roaming neighborhoods, school yards, or rural properties; may exhibit fear, defensive aggression, or pack behavior.',
    identificationFeatures: [
      'Domestic canine of varied breeds or mixed pariah morphology',
      'May or may not wear a collar with registration tags',
      'Tail held stiff, ears pinned back, growling, or showing teeth if threatened or cornered'
    ],
    size: 'Variable: 5 - 40 kg',
    color: ['Variable'],
    habitat: 'Streets, vacant lots, school yards, parks, rural property borders',
    activeTime: 'all_day',
    seasonality: 'Year-round',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Street', 'Front lawn', 'Garbage area', 'Park', 'Porch'],
    foodSources: ['Discarded food, garbage scraps, rodent carcasses, handouts'],
    attractants: ['Open food waste, female dogs in estrus, accessible trash dumpsters'],
    signsOfPresence: ['Overturned trash cans, barking or territorial pack behavior near property gates'],
    riskLevel: 'moderate',
    humanRisk: 'Risk of bite wounds from fear-aggression or territorial defense. Significant rabies vector in endemic countries (especially parts of Asia, Africa, and Latin America).',
    petRisk: 'Risk of aggressive fights with leashed or yard pets.',
    propertyRisk: 'Overturns trash bins, digs under fence lines.',
    foodContaminationRisk: 'Low.',
    plantDamageRisk: 'Treads on garden beds.',
    beneficialStatus: 'Domestic companion animal needing humane welfare and responsible ownership.',
    preventionMethods: [
      'Maintain secure, sturdy perimeter fencing with self-closing latches',
      'Keep domestic pet dogs leashed and vaccinated against rabies',
      'Never leave food scraps or outdoor pet food exposed'
    ],
    nonChemicalSolutions: [
      'Safe behavior: do not run, scream, or make direct confrontational eye contact with an aggressive dog. Stand sideways like a tree with arms folded, and speak in a calm, firm voice',
      'Motion-activated yard sprinklers to deter trespass along fence lines'
    ],
    professionalControlNotes: 'Contact local municipal Animal Control, the Humane Society, or animal rescue organizations to safely scan for a microchip and shelter the animal.',
    chemicalControlGeneralGuidance: 'NEVER POISON OR CRUELLY HARM DOMESTIC ANIMALS. Intentional poisoning is a serious criminal offense.',
    safetyWarnings: [
      'Never run past an unfamiliar or growling dog (running triggers predatory chase instinct).',
      'Do not attempt to pet, corner, or feed an unfamiliar dog showing tense body posture.'
    ],
    firstAidGeneralGuidance: 'If bitten, immediately wash the wound with copious running water and soap for 15 minutes to reduce viral and bacterial load. Seek immediate emergency medical care for wound assessment, antibiotics, tetanus, and rabies prophylaxis.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Feral dog', 'Street dog', 'Free-ranging canine'],
    regionalNames: ['Perro callejero', 'Galli ka kutta'],
    regions: ['global', 'india', 'southeast_asia', 'latin_america', 'north_america', 'europe'],
    tags: ['stray animal', 'dog bite prevention', 'animal control', 'rabies', 'fence protection']
  }
];
