import { Pest } from '../../types/pest';

export const REPTILES_AMPHIBIANS_BIRDS: Pest[] = [
  {
    id: 'reptile-house-gecko',
    commonName: 'Common House Gecko',
    scientificName: 'Hemidactylus frenatus',
    category: 'reptiles',
    subCategory: 'Lizards',
    description: 'Small, pale translucent lizard with expanded toe pads; hunts nocturnal insects near indoor ceiling lights and wall fixtures. Completely harmless and ecologically beneficial.',
    identificationFeatures: [
      'Pale translucent pinkish-gray to creamy tan body with faint darker spots',
      'Large lidless eyes with vertical slit pupils',
      'Wide toe pads with microscopic lamellae allowing them to run up smooth vertical walls and upside down on ceilings',
      'Distinctive repetitive chirping or clicking vocalizations ("chuck-chuck-chuck") at night'
    ],
    size: '75 - 150 mm (3 - 6 inches)',
    color: ['Pale translucent gray', 'Pinkish-tan', 'Creamy white'],
    habitat: 'Interior walls, ceiling corners, behind hanging wall art, window frames near lights',
    activeTime: 'night',
    seasonality: 'Year-round in tropical and subtropical climates; active in warm seasons in temperate zones',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Living room wall', 'Kitchen ceiling', 'Bedroom', 'Balcony', 'Porch light'],
    foodSources: ['Mosquitoes, moths, flies, winged termites, small spiders, cockroaches'],
    attractants: ['Interior and exterior night lighting that attracts flying insects, warmth near ceiling fixtures'],
    signsOfPresence: [
      'Visible pale lizard hunting near ceiling lights at night',
      'Droppings: small dark cylindrical droppings with a distinct white uric acid crystal tip glued to baseboards or walls',
      'Chirping sound in quiet evening rooms'
    ],
    riskLevel: 'low',
    humanRisk: 'COMPLETELY HARMLESS. House geckos are non-venomous and have microscopic teeth that cannot break human skin. They are timid and always flee from humans.',
    petRisk: 'Harmless; cats occasionally hunt them and may swallow them without toxic harm.',
    propertyRisk: 'None (leaves tiny washable droppings on walls or windowsills).',
    foodContaminationRisk: 'Low; non-filth reptile.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'OUTSTANDING NATURAL INSECT CONTROLLER. Feeds voraciously on mosquitoes, flies, and moths inside the home every night.',
    preventionMethods: [
      'Turn off unnecessary outdoor porch lights or switch to yellow insect-resistant bulbs to reduce the flying insects that attract geckos',
      'Seal gaps around window frames, sliding doors, and air conditioner wall penetrations',
      'Keep window screens in good repair'
    ],
    nonChemicalSolutions: [
      'HUMANE 5-STEP NON-HARM PROTOCOL: 1. Keep calm; recognize it is harmless and beneficial. 2. Move curious pets to another room. 3. Catch and release gently: place a transparent plastic container gently over the gecko, slide a piece of cardboard or stiff paper underneath, lift, and release outdoors into bushes. 4. Geckos dislike cold air: gently blowing cool air from a fan toward an open window or door encourages them to exit outside voluntarily. 5. Do not use sticky glue traps or toxic poisons.'
    ],
    professionalControlNotes: 'Never needed for common house geckos. Exterminators should not be hired to spray pesticides for geckos.',
    chemicalControlGeneralGuidance: 'DO NOT USE POISONS OR PESTICIDES. Geckos are harmless reptiles that eat unwanted pests. Chemical sprays are unsafe indoors and unnecessary.',
    safetyWarnings: [
      'DO NOT CRUSH, POISON, OR STRIKE GECKOS. They provide free natural mosquito and fly control.',
      'If startled, a gecko may drop its tail (autotomy) as a harmless defense distraction; the tail will regenerate.'
    ],
    firstAidGeneralGuidance: 'None needed. Wash hands with soap and water after handling any reptile.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['House lizard', 'Wall gecko', 'Chit-chat'],
    regionalNames: ['Lagartija casera', 'Chhipkali'],
    regions: ['global', 'india', 'southeast_asia', 'latin_america', 'australia', 'north_america'],
    tags: ['lizard in house', 'harmless gecko', 'white tipped droppings', 'ceiling lizard', 'beneficial mosquito eater', 'humane removal']
  },
  {
    id: 'reptile-copperhead',
    commonName: 'Eastern Copperhead Snake',
    scientificName: 'Agkistrodon contortrix',
    category: 'reptiles',
    subCategory: 'Snakes',
    description: 'Venomous pit viper with distinctive hourglass-shaped copper-brown crossbands and a triangular head; blends seamlessly into fallen leaf litter.',
    identificationFeatures: [
      'Hourglass-shaped crossbands that are narrow on the center of the back and wide at the sides',
      'Triangular, broad head distinct from the narrow neck with copper-reddish coloration',
      'Vertical slit pupils (cat-like) and heat-sensing pits between eye and nostril',
      'Juveniles possess a bright sulfur-yellow or green tail tip used as a lure for frogs'
    ],
    size: '60 - 90 cm (24 - 36 inches)',
    color: ['Coppery tan', 'Chestnut hourglass bands'],
    habitat: 'Wooded hillsides, rocky outcrops, beneath rotting logs, stone walls, garden mulch piles, under garden sheds',
    activeTime: 'crepuscular',
    seasonality: 'Spring through early Autumn; active in warm summer twilights',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Garden mulch', 'Woodpile', 'Under deck', 'Stone wall', 'Patio edge'],
    foodSources: ['Mice, voles, small birds, frogs, cicadas, large caterpillars'],
    attractants: ['Rodent activity around bird feeders, dense cool groundcover, stacked landscape rocks, damp mulch'],
    signsOfPresence: ['Snake basking on warm garden stones or coiled motionless in fallen leaves relying on camouflage'],
    riskLevel: 'high',
    humanRisk: 'DANGEROUS ANIMAL. Medically significant hemotoxic venom. While rarely fatal in adult humans with modern antivenom treatment, bites cause severe agonizing pain, extensive soft-tissue swelling, bruising, and potential tissue damage.',
    petRisk: 'High for inquisitive dogs sniffing in leaf mulch; causes severe swelling and requires immediate emergency veterinary antivenom care.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Important native apex predator regulating rodent and vole populations.',
    preventionMethods: [
      'Keep lawn grass mowed short around the perimeter of the home to eliminate cover',
      'Elevate firewood stacks at least 12 inches off the ground on metal racks and locate away from the foundation',
      'Remove rock piles, corrugated metal sheets, and brush piles near children’s play areas',
      'Eliminate bird feeders if they attract ground rodents that draw snakes'
    ],
    nonChemicalSolutions: [
      'DANGEROUS ANIMAL PROTOCOL: 1. STOP and freeze. Do not make sudden aggressive movements. 2. Slowly take three large steps backward to put at least 6 feet (2 meters) between you and the snake. 3. Keep children and pets away immediately. 4. NEVER attempt to poke, capture, throw stones at, corner, or kill the snake (over 70% of snakebites occur when people attempt to capture or kill a snake!). 5. Contact a licensed local wildlife rescue service or reptile relocation expert.'
    ],
    professionalControlNotes: 'Call local animal control, wildlife conservation department, or a certified humane snake relocator.',
    chemicalControlGeneralGuidance: 'Commercial "snake repellent" granules (mothballs, sulfur) are scientifically proven to be INEFFECTIVE and hazardous to pets. Habitat modification and exclusion are the only proven measures.',
    safetyWarnings: [
      'DANGEROUS ANIMAL SAFETY MODE ACTIVE.',
      'DO NOT APPROACH, TOUCH, OR ATTEMPT TO KILL THIS SNAKE.',
      'Keep children and pets indoors and maintain a safe viewing distance while contacting professional assistance.'
    ],
    firstAidGeneralGuidance: 'SNAKEBITE FIRST AID: 1. Immediately call emergency services (e.g. 911 / 112 / local emergency) or go directly to the nearest hospital emergency room. 2. Stay calm and still to slow venom circulation; sit down and do not run. 3. Remove rings, watches, bracelets, and tight clothing from the bitten limb before swelling occurs. 4. Keep the bitten area positioned at or slightly below heart level. 5. DO NOT cut the bite with a knife. DO NOT attempt to suck out venom. DO NOT apply a tourniquet. DO NOT apply ice or electric shock. These old methods cause catastrophic tissue necrosis.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Copperhead', 'Highland moccasin', 'Pit viper'],
    regionalNames: ['Cabeza de cobre'],
    regions: ['north_america'],
    tags: ['dangerous animal', 'venomous snake', 'hourglass bands', 'pit viper', 'emergency safety', 'do not touch']
  },
  {
    id: 'reptile-garter-snake',
    commonName: 'Common Garter Snake',
    scientificName: 'Thamnophis sirtalis',
    category: 'reptiles',
    subCategory: 'Snakes',
    description: 'Slender, harmless, non-venomous garden snake with three distinct yellow or greenish longitudinal stripes; eats garden slugs, insects, and snails.',
    identificationFeatures: [
      'Slender elongated body with 3 bright yellow, green, or white stripes running from neck to tail tip',
      'Round pupils (unlike the vertical cat-like slit pupils of pit vipers)',
      'Smooth slender head continuous with body, no heat pits',
      'Emits a pungent, harmless musky odor when handled defensively'
    ],
    size: '45 - 75 cm (18 - 30 inches)',
    color: ['Dark brown or black', 'Three yellow/green longitudinal stripes'],
    habitat: 'Garden beds, compost piles, under decorative landscape timbers, rock walls, moist lawn edges',
    activeTime: 'day',
    seasonality: 'Spring through Autumn; bakes in morning sunshine on rocks',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Compost pile', 'Lawn', 'Patio stones', 'Flowerbed'],
    foodSources: ['Slugs, earthworms, snails, beetles, small frogs, crickets'],
    attractants: ['Moist garden soil with abundant slug prey, flat sun-warmed rocks, dense hosta beds'],
    signsOfPresence: ['Slender striped snake gliding swiftly through lawn grass or sunning on garden border'],
    riskLevel: 'low',
    humanRisk: 'COMPLETELY NON-VENOMOUS AND HARMLESS TO HUMANS. Non-aggressive; will flee if approached. If grasped roughly, may release a foul-smelling musk and deliver a harmless pinprick nip.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'OUTSTANDING BENEFICIAL GARDEN ALLY. Highly prized by organic gardeners for controlling destructive slugs and snails naturally without chemicals.',
    preventionMethods: [
      'Keep grass mowed near garden pathways',
      'Clear dense debris piles if you prefer snakes to relocate further from patios'
    ],
    nonChemicalSolutions: [
      'Leave in the garden! It is one of the most effective non-chemical slug controllers available.',
      'If found in an unwanted spot, use a broom to gently guide the snake toward the garden hedge'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'No pesticides should ever be used against non-venomous garden snakes.',
    safetyWarnings: ['Do not kill garden snakes; verify identification using the longitudinal stripes and round pupils.'],
    firstAidGeneralGuidance: 'Wash with soap and water if nipped by a startled snake.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Garden snake', 'Ribbon snake', 'Grass snake'],
    regionalNames: ['Culebra rayada'],
    regions: ['north_america', 'europe', 'global'],
    tags: ['harmless snake', 'garden ally', 'striped snake', 'slug eater', 'beneficial reptile', 'round pupils']
  },
  {
    id: 'amphibian-cane-toad',
    commonName: 'Cane Toad (Marine Toad)',
    scientificName: 'Rhinella marina',
    category: 'amphibians',
    subCategory: 'Toads',
    description: 'Enormous, warty, heavy-bodied toad with prominent triangular parotoid poison glands behind the eyes; highly toxic to domestic dogs and cats if mouthed.',
    identificationFeatures: [
      'Large, stocky, dry warty body weighing up to 1.5 kg',
      'Prominent, bulging triangular parotoid glands behind the eyes sloping downward over the shoulders',
      'Short legs, blunt snout, bony ridges above the eyes extending to the nostrils'
    ],
    size: '100 - 180 mm (up to 240 mm in large specimens)',
    color: ['Brownish-gray', 'Olive brown', 'Yellowish-tan warty skin'],
    habitat: 'Gardens, lawns, golf courses, storm drains, outdoor pet food bowls, irrigated landscaping',
    activeTime: 'night',
    seasonality: 'Warm rainy nights, humid monsoon season, summer',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Garden lawn', 'Pet food bowl outdoors', 'Patio', 'Swimming pool edge'],
    foodSources: ['Insects, beetles, pet kibble, small reptiles, table scraps, other frogs'],
    attractants: ['Outdoor bowls of dog food or water left outside, artificial garden irrigation, insects near lawn lights'],
    signsOfPresence: ['Large heavy toad sitting in outdoor pet water dishes or eating dry dog food at night'],
    riskLevel: 'high',
    humanRisk: 'Parotoid glands secrete a milky white toxin (bufotoxin) when squeezed. Toxin is intensely irritating to human eyes and mucous membranes; can cause severe conjunctivitis or temporary blindness if rubbed in eyes.',
    petRisk: 'EXTREMELY DANGEROUS TO PETS. Dogs mouthing or biting a cane toad absorb bufotoxins through their gums within seconds. Symptoms include bright red gums, foaming at the mouth, head shaking, seizures, cardiac arrhythmia, and death within 15-30 minutes if untreated!',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Contaminates outdoor pet bowls with toxic secretions.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Introduced invasive pest in Australia, Florida, and Pacific islands; destructive to native biodiversity.',
    preventionMethods: [
      'NEVER leave pet food or water bowls outside after dusk',
      'Erect a low solid barrier (smooth plastic or metal edging 20 inches high) around backyards',
      'Keep pool skimmer covers securely in place and install animal escape ramps in pools'
    ],
    nonChemicalSolutions: [
      'HUMANE EUTHANASIA (where legally designated invasive): Humane refrigeration then freezing method recommended by RSPCA/authorities: wear gloves, place toad in a container in the refrigerator (4°C) for 12 hours to enter natural torpor, then transfer to a freezer (-20°C) for 24-48 hours',
      'Hand capture with thick rubber gloves and a secure sealable bucket at night'
    ],
    professionalControlNotes: 'Contact local wildlife or biosecurity officers in invasive territory.',
    chemicalControlGeneralGuidance: 'Do not use unapproved poisons in open gardens where pets could be contaminated.',
    safetyWarnings: [
      'PET EMERGENCY: If your dog licks or bites a cane toad, IMMEDIATELY wipe the dog’s gums and mouth vigorously with a wet washcloth from back to front for 10 minutes to remove toxic secretions. Do NOT use a garden hose down the throat (aspiration risk). RUSH TO THE NEAREST EMERGENCY VETERINARY CLINIC IMMEDIATELY.',
      'Wear gloves and protective eye goggles when handling.'
    ],
    firstAidGeneralGuidance: 'For humans: flush eyes or skin immediately with copious clean water for 15 minutes if milky gland secretion contacts eyes or mucous membranes; seek medical care.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Bufo toad', 'Giant marine toad'],
    regionalNames: ['Sapo de caña'],
    regions: ['australia', 'north_america', 'latin_america'],
    tags: ['dangerous to pets', 'dog emergency', 'bufotoxin', 'large toad', 'parotoid glands', 'pet bowl']
  },
  {
    id: 'bird-pigeon-rockdove',
    commonName: 'Feral Pigeon (Rock Dove)',
    scientificName: 'Columba livia',
    category: 'birds',
    subCategory: 'Birds',
    description: 'Ubiquitous urban bird nesting on building ledges, balconies, and air conditioner units; droppings deface facades and harbor fungal pathogens.',
    identificationFeatures: [
      'Plump body with gray plumage, iridescent green and purple sheen on neck feathers',
      'Two black bars across the wings and dark band on the tail edge',
      'Soft cooing calls and clattering wingbeats upon takeoff'
    ],
    size: '30 - 36 cm (12 - 14 inches)',
    color: ['Bluish-gray', 'Iridescent purple-green neck', 'White rump patch'],
    habitat: 'Building ledges, apartment balconies, roof solar panels, under highway overpasses, air conditioning outdoor units',
    activeTime: 'day',
    seasonality: 'Continuous year-round breeding in urban environments',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Balcony', 'Roof', 'Ledge', 'Air conditioner unit', 'Terrace'],
    foodSources: ['Discarded food waste, bread crumbs, birdseed, grains, pet food'],
    attractants: ['Sheltered balcony alcoves, flat ledges under overhangs, intentional human feeding of bread'],
    signsOfPresence: [
      'Heavy accumulation of chalky white and gray droppings coating balcony tiles and railings',
      'Crude messy nests of twigs and feathers tucked behind outdoor air conditioner compressors',
      'Persistent cooing sounds outside bedroom windows at dawn'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Droppings harbor dangerous airborne fungi: Histoplasma capsulatum and Cryptococcus neoformans, which cause serious pulmonary and meningeal fungal infections when dried droppings are disturbed. Also harbor bird mites that bite humans.',
    petRisk: 'Can transmit ornithosis (Chlamydia psittaci) to pet birds.',
    propertyRisk: 'High; uric acid in droppings chemically corrodes masonry, automobile paint, marble, and rooftop air-conditioning coils.',
    foodContaminationRisk: 'High on outdoor cafe tables and open grain storage.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Urban wildlife; seed scavenger.',
    preventionMethods: [
      'NEVER intentionally feed bread or seeds to pigeons on balconies or window sills',
      'Install transparent UV-stabilized polyethylene bird netting (3/4-inch mesh) enclosing balcony openings',
      'Install stainless steel bird spikes along narrow ledges, window sills, and AC unit tops to prevent roosting',
      'Install 45-degree angled sheet-metal bird slopes over flat ledge surfaces so birds cannot balance'
    ],
    nonChemicalSolutions: [
      'Physical exclusion netting and humane bird spikes are the industry gold standards for permanent relief',
      'Visual holographic scare tape or reflective rotating bird repellers for short-term deterrence'
    ],
    professionalControlNotes: 'Professional balcony bird netting installation services for multi-story residential towers.',
    chemicalControlGeneralGuidance: 'Do not use chemical toxicants or sticky gels (sticky polybutene gels gum up pigeon flight feathers and kill non-target songbirds).',
    safetyWarnings: [
      'CRITICAL CLEANING SAFETY: NEVER sweep or scrape dry pigeon droppings! Wear an N95 respirator mask and gloves. Saturate all droppings with soapy disinfectant water first; let soak for 10 minutes, and wipe up wet sludge with paper towels to prevent inhaling fungal spores.'
    ],
    firstAidGeneralGuidance: 'Wash skin thoroughly with soap and water after cleaning balcony surfaces.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Rock dove', 'City pigeon', 'Flying rat'],
    regionalNames: ['Paloma bravía', 'Kabootar'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['balcony mess', 'bird droppings', 'bird netting', 'spikes', 'air conditioner', 'histoplasmosis']
  }
];
