import { Pest } from '../../types/pest';

export const PLANT_PESTS: Pest[] = [
  {
    id: 'plant-aphid-green',
    commonName: 'Green Peach Aphid',
    scientificName: 'Myzus persicae',
    category: 'plant_pests',
    subCategory: 'Aphids',
    description: 'Small, soft-bodied pear-shaped insects that cluster on new plant shoot tips and undersides of leaves, sucking plant sap and secreting sticky honeydew.',
    identificationFeatures: [
      'Small pear-shaped body with pair of tube-like projections (cornicles) on rear abdomen',
      'Pale green to yellowish-green color (can be pinkish)',
      'Clusters densely on tender new growth and leaf undersides',
      'Ants frequently seen attending the colony to collect honeydew'
    ],
    size: '1.5 - 2.5 mm',
    color: ['Pale green', 'Yellow-green', 'Pinkish'],
    habitat: 'Underside of plant leaves, vegetable gardens, greenhouse houseplants, ornamental roses',
    activeTime: 'day',
    seasonality: 'Spring through early Summer; rapid asexual reproduction in warm weather',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Balcony', 'Houseplants', 'Greenhouse', 'Terrace'],
    foodSources: ['Plant phloem sap extracted via piercing-sucking stylets'],
    attractants: ['Lush new nitrogen-rich plant growth, tender young shoots, indoor potted plants'],
    signsOfPresence: [
      'Curled, puckered, or stunted young plant leaves',
      'Sticky glossy liquid ("honeydew") coating lower leaves and patio furniture',
      'Black sooty mold fungus growing on the sticky honeydew residues',
      'Clusters of tiny green insects under leaves with white cast skins'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; cannot bite or sting.',
    petRisk: 'Completely harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Low; wash garden produce before eating.',
    plantDamageRisk: 'High for garden crops and houseplants; stunts growth, transmits plant viruses.',
    beneficialStatus: 'Primary food source for beneficial ladybugs, lacewings, and syrphid fly larvae.',
    preventionMethods: [
      'Avoid excessive synthetic high-nitrogen fertilizers which stimulate soft, vulnerable plant foliage',
      'Inspect the undersides of leaves of new nursery plants before introducing them into your home or garden',
      'Plant companion flowering plants (dill, fennel, sweet alyssum) to attract natural beneficial insect predators'
    ],
    nonChemicalSolutions: [
      'Strong blast of water from a garden hose to physically dislodge aphids from foliage (aphids rarely find their way back)',
      'Insecticidal soap or dilute horticultural oil sprayed thoroughly over both sides of infested leaves',
      'Cold-pressed pure neem oil spray in late afternoon to avoid leaf scorch',
      'Introduce beneficial natural predators like ladybird beetles or green lacewing larvae in enclosed greenhouses'
    ],
    professionalControlNotes: 'Agricultural extension service consultation if widespread commercial crop loss threatens.',
    chemicalControlGeneralGuidance: 'Avoid broad-spectrum synthetic pyrethroids which kill beneficial predator bugs and trigger dramatic aphid resurgence.',
    safetyWarnings: ['Do not spray oil or soap solutions on plants under full hot midday sun to prevent foliage burn.'],
    firstAidGeneralGuidance: 'Wash hands after handling plant foliage.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Plant louse', 'Greenfly', 'Blight'],
    regionalNames: ['Pulgón verde'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['sticky leaves', 'curled leaves', 'honeydew', 'green insects', 'houseplant pest', 'sooty mold']
  },
  {
    id: 'plant-whitefly',
    commonName: 'Greenhouse Whitefly',
    scientificName: 'Trialeurodes vaporariorum',
    category: 'plant_pests',
    subCategory: 'Whiteflies',
    description: 'Tiny moth-like white insects that flutter in clouds from beneath plant leaves when disturbed, stunting vegetables and ornamentals.',
    identificationFeatures: [
      'Tiny moth-like insect with four powdery white wings held roof-like over the body',
      'Clusters of tiny white scales (immature nymphs) cemented on leaf undersides',
      'Flutters in distinctive white clouds when plant foliage is touched or shaken'
    ],
    size: '1 - 2 mm',
    color: ['Powdery white', 'Pale yellowish body'],
    habitat: 'Underside of leaves on tomatoes, poinsettias, hibiscus, fuchsias, cucumbers, houseplants',
    activeTime: 'day',
    seasonality: 'Continuous in greenhouses and heated indoor rooms; summer outdoors',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Greenhouse', 'Balcony', 'Houseplants', 'Windowsill'],
    foodSources: ['Plant sap sucked through stylets'],
    attractants: ['Warm, sheltered greenhouse conditions, lush tender tomato and ornamental foliage'],
    signsOfPresence: [
      'Cloud of tiny white flying specks fluttering up when touching plant',
      'Yellowing, mottled leaves that drop prematurely',
      'Copious sticky honeydew and black sooty mold on upper surfaces of lower leaves'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; non-biting.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Low; rinse garden tomatoes.',
    plantDamageRisk: 'High for tomatoes, peppers, and ornamental greenhouse plants.',
    beneficialStatus: 'None in gardens; natural prey for parasitic Encarsia wasps.',
    preventionMethods: [
      'Quarantine new houseplants for 14 days before placing them next to existing plants',
      'Hang yellow sticky cards near canopy height to detect early adult arrivals'
    ],
    nonChemicalSolutions: [
      'Vacuum adults off leaf undersides in the cool early morning when they are sluggish',
      'Spray insecticidal soap or horticultural oil focusing spray wand upward to coat leaf undersides',
      'Biological control: release Encarsia formosa parasitic micro-wasps in greenhouses'
    ],
    professionalControlNotes: 'Commercial greenhouse IPM specialist for severe pesticide-resistant whitefly populations.',
    chemicalControlGeneralGuidance: 'Systemic insect growth regulators or horticultural soaps. Follow label instructions.',
    safetyWarnings: ['Test spray on a single leaf 24 hours prior to full plant spraying to verify plant tolerance.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Whitefly', 'Powdery moth bug'],
    regionalNames: ['Mosca blanca'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['white insects', 'cloud of bugs', 'sticky honeydew', 'tomato pest', 'houseplant', 'yellowing leaves']
  },
  {
    id: 'plant-mealybug-citrus',
    commonName: 'Citrus Mealybug',
    scientificName: 'Planococcus citri',
    category: 'plant_pests',
    subCategory: 'Mealybugs',
    description: 'Soft, slow-moving unarmored scale insects covered in white powdery waxy secretions, resembling miniature pieces of cotton on plant stems and leaf axils.',
    identificationFeatures: [
      'Oval segmented body covered in white powdery wax flocculence',
      'Fringe of short white waxy filaments along body margin (tail filaments slightly longer)',
      'Hides in tight crevices: leaf axils, leaf stems, underside of veins, beneath flower buds'
    ],
    size: '2 - 4 mm',
    color: ['Chalky white', 'Pinkish body beneath wax'],
    habitat: 'Tropical houseplants, succulents, orchids, citrus trees, ficus, ferns, African violets',
    activeTime: 'day',
    seasonality: 'Year-round in warm indoor settings and greenhouses',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Houseplants', 'Greenhouse', 'Balcony', 'Garden', 'Living room plants'],
    foodSources: ['Plant sap extracted from vascular tissues'],
    attractants: ['Warm dry indoor air, over-fertilized tender plants, succulents and philodendrons'],
    signsOfPresence: [
      'Fluffy white cotton-like tufts clustered in leaf joints and stem crotches',
      'Stunted growth, yellowing leaves, premature leaf fall',
      'Sticky honeydew drops on plant tables and shiny leaf surfaces'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; non-biting.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'High for indoor potted plants, succulents, and citrus trees.',
    beneficialStatus: 'None on domestic plants; prey of the mealybug destroyer beetle (Cryptolaemus montrouzieri).',
    preventionMethods: [
      'Carefully inspect the root ball and stem joints of any new houseplant before purchase',
      'Isolate infested plants immediately from the rest of your plant collection',
      'Wipe plant leaves down periodically with a damp sponge'
    ],
    nonChemicalSolutions: [
      'Dip a cotton swab in 70% isopropyl rubbing alcohol and dab directly onto individual white mealybugs (alcohol dissolves their protective wax coating instantly)',
      'Wash plant vigorously under a shower stream to dislodge nymphs',
      'Neem oil or insecticidal soap spray covering all crevices'
    ],
    professionalControlNotes: 'Not needed for homeowners; severely infested cheap plants are best discarded to protect valuable collections.',
    chemicalControlGeneralGuidance: 'Systemic insecticide granules applied to potting soil if topical contact treatments fail. Follow label carefully.',
    safetyWarnings: ['Do not expose alcohol-treated plants to direct bright sunlight until foliage is completely dry.'],
    firstAidGeneralGuidance: 'Wash hands after handling plant foliage.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Cottony bug', 'Mealybug', 'Scale'],
    regionalNames: ['Cochinilla algodonosa'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['cotton on plant', 'white fuzz', 'succulent pest', 'mealybug', 'sticky leaves', 'leaf axils']
  },
  {
    id: 'plant-spidermite',
    commonName: 'Two-Spotted Spider Mite',
    scientificName: 'Tetranychus urticae',
    category: 'plant_pests',
    subCategory: 'Mites',
    description: 'Microscopic arachnids that proliferate in hot, dry conditions; suck chlorophyll from leaf cells leaving fine yellow stippling and delicate silken webbing.',
    identificationFeatures: [
      'Microscopic oval body with two prominent dark spots on back (visible with 10x hand lens)',
      'Fine silky webbing spun across leaf undersides, leaf stems, and growing tips',
      'Leaves develop dusty, bleached, or finely stippled yellow appearance'
    ],
    size: '0.4 - 0.5 mm (barely visible to naked eye)',
    color: ['Pale yellow', 'Greenish', 'Reddish-orange in autumn'],
    habitat: 'Underside of leaves on indoor houseplants, garden beans, tomatoes, roses, cannabis, marigolds',
    activeTime: 'day',
    seasonality: 'Hot dry summer weather outdoors; winter in heated dry apartments',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Houseplants', 'Garden', 'Balcony', 'Greenhouse'],
    foodSources: ['Cell contents punctured and drained from individual plant cells'],
    attractants: ['Hot, dry, low-humidity air (dry air accelerates mite reproduction from egg to adult in 5 days)'],
    signsOfPresence: [
      'Fine silken webbing strung between leaf stems and bud tips',
      'Leaves look speckled, dusty, and bronze, turning yellow and crisp',
      'Tiny moving specks visible when tapping a branch over a white sheet of paper'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; non-biting.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'Very high; can completely defoliate and kill plants in hot dry spells.',
    beneficialStatus: 'None; prey for predatory mites (Phytoseiulus persimilis).',
    preventionMethods: [
      'Increase ambient humidity around indoor houseplants using a room humidifier or pebble tray with water',
      'Mist plant leaves and rinse foliage weekly in the shower',
      'Avoid placing houseplants directly next to hot air heating vents'
    ],
    nonChemicalSolutions: [
      'Thoroughly wash the entire plant in the sink or shower with lukewarm water, focusing water spray on leaf undersides',
      'Apply horticultural oil, neem oil, or insecticidal soap spray covering 100% of leaf undersides every 4-5 days for 3 cycles',
      'Release beneficial predatory mites (Phytoseiulus persimilis) in greenhouse environments'
    ],
    professionalControlNotes: 'Not needed for domestic houseplants.',
    chemicalControlGeneralGuidance: 'Standard insecticides (like pyrethroids) are ineffective against mites and actually cause rapid mite outbreaks by killing predatory bugs; use certified miticides only if necessary.',
    safetyWarnings: ['Follow all spray label precautions.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Spider mite', 'Red spider', 'Web mite'],
    regionalNames: ['Ácaro de dos manchas'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['webbing on plants', 'stippled leaves', 'tiny mites', 'dry air', 'yellow leaves', 'houseplant']
  },
  {
    id: 'plant-hornworm',
    commonName: 'Tomato Hornworm',
    scientificName: 'Manduca quinquemaculata',
    category: 'plant_pests',
    subCategory: 'Caterpillars',
    description: 'Enormous bright green caterpillars with white V-shaped stripes and a harmless horn at the tail; can defoliate entire tomato plants overnight.',
    identificationFeatures: [
      'Cylindrical bright green body with 8 white V-shaped lateral markings',
      'Stout black or blue horn projecting from the rear abdominal segment (completely harmless, not a stinger)',
      'Black barrel-shaped ribbed droppings on leaves beneath defoliated stems'
    ],
    size: 'Up to 90 - 100 mm (length of a finger)',
    color: ['Vibrant green', 'White stripes', 'Black horn'],
    habitat: 'Solanaceous garden crops: tomatoes, peppers, eggplants, potatoes',
    activeTime: 'all_day',
    seasonality: 'Mid to late Summer',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Raised bed', 'Terrace container plants'],
    foodSources: ['Foliage, blossoms, and green fruits of tomatoes, peppers, and eggplants'],
    attractants: ['Tomato foliage aroma attracting nocturnal Five-Spotted Hawk Moths'],
    signsOfPresence: [
      'Large bare defoliated stems stripped clean of leaves at the top of tomato plants',
      'Chewed green tomatoes with large irregular cavities',
      'Dark green to black barrel-shaped droppings (frass) visible on lower leaves and mulch'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; the tail horn cannot sting or inject venom.',
    petRisk: 'Non-toxic to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Chews garden produce.',
    plantDamageRisk: 'Severe defoliation of garden tomato plants.',
    beneficialStatus: 'Adult moth is a magnificent nocturnal sphinx moth pollinator. IMPORTANT: If caterpillar is covered in small white cocoon cylinders, LEAVE IT ALONE—these are beneficial parasitic braconid wasps (Cotesia congregata) that will hatch and control future hornworms naturally!',
    preventionMethods: [
      'Till garden soil in autumn and early spring to destroy overwintering subterranean pupae',
      'Inspect tomato plants weekly in July and August'
    ],
    nonChemicalSolutions: [
      'Hand-picking: look for stripped stems and droppings, find the caterpillar (which camouflages perfectly), pluck off by hand, and relocate or drop into soapy water',
      'Use a blacklight (UV flashlight) at night: tomato hornworms fluoresce bright luminous green under UV light, making them effortless to spot!',
      'Apply organic Bt (Bacillus thuringiensis kurstaki) biological spray while caterpillars are small',
      'DO NOT HARM caterpillars covered in white rice-like cocoons: allow parasitic braconid wasps to emerge'
    ],
    professionalControlNotes: 'Not needed for home gardens.',
    chemicalControlGeneralGuidance: 'Chemical pesticides are unnecessary; hand-picking and Bt are 100% effective.',
    safetyWarnings: ['Horn is harmless; do not fear picking them up with garden gloves.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Hornworm', 'Tomato caterpillar', 'Sphinx caterpillar'],
    regionalNames: ['Gusano del tomate'],
    regions: ['north_america', 'europe', 'global'],
    tags: ['holes in leaves', 'green caterpillar', 'tomato pest', 'tail horn', 'black droppings', 'defoliation']
  },
  {
    id: 'plant-slug-snail',
    commonName: 'Grey Garden Slug / Brown Garden Snail',
    scientificName: 'Deroceras reticulatum / Cornu aspersum',
    category: 'worms_invertebrates',
    subCategory: 'Mollusks',
    description: 'Slimy, soft-bodied nocturnal mollusks that chew irregular ragged holes through tender garden leaves, hostas, strawberries, and young seedlings.',
    identificationFeatures: [
      'Soft slimy body with 2 pairs of retractable tentacles (upper pair bears eyes)',
      'Snails possess a coiled hard calcified shell; slugs have no external shell',
      'Leaves a glossy silvery dried slime trail across soil, stones, and foliage'
    ],
    size: '25 - 50 mm',
    color: ['Mottled grey', 'Brownish-tan', 'Striped shell'],
    habitat: 'Damp mulch, beneath flowerpot rims, compost piles, dense groundcovers, shady garden beds',
    activeTime: 'night',
    seasonality: 'Spring and Autumn; active on wet rainy days and damp nights',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Hosta beds', 'Vegetable patch', 'Damp basement', 'Patio'],
    foodSources: ['Tender foliage, hostas, lettuce, strawberries, seedlings, decaying plant matter'],
    attractants: ['Moist organic mulch, over-irrigated garden soil, shaded groundcovers, beer aroma'],
    signsOfPresence: [
      'Irregular large smooth-edged holes in leaves (especially hostas, delphiniums, and lettuce)',
      'Shiny silvery dried mucous slime trails on plant leaves, paving slabs, and deck boards'
    ],
    riskLevel: 'low',
    humanRisk: 'Non-biting and non-venomous. Can carry the parasitic rat lungworm (Angiostrongylus cantonensis); NEVER eat raw or undercooked slugs/snails, and wash garden greens thoroughly before consuming.',
    petRisk: 'Can transmit lungworms to dogs if ingested. CRITICAL WARNING: Traditional metaldehyde snail bait pellets are EXTREMELY TOXIC and frequently fatal to dogs and cats!',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Low; wash garden vegetables.',
    plantDamageRisk: 'High for tender young seedlings and leafy greens.',
    beneficialStatus: 'Outdoor decomposers of decaying garden litter; food for hedgehogs, frogs, and thrushes.',
    preventionMethods: [
      'Water garden beds in early morning rather than evening so soil surface dries before nightfall',
      'Keep mulch depth under 2 inches and clear bare soil ring around sensitive plant stems',
      'Encourage natural garden predators: toads, non-venomous garter snakes, ground beetles, and birds'
    ],
    nonChemicalSolutions: [
      'Beer traps: bury small plastic containers flush with soil surface filled with beer or yeast-sugar water; slugs crawl in and drown',
      'Copper tape barriers: apply adhesive copper tape around raised garden beds and flowerpot rims (creates a mild natural galvanic shock that slugs will not cross)',
      'Crushed eggshells, coarse diatomaceous earth, or rough grit encircling plant bases',
      'Hand-collection at night with a flashlight, dropping pests into warm soapy water'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'If using commercial bait, ONLY USE PET-SAFE IRON PHOSPHATE pellets (Sluggo). NEVER use toxic metaldehyde baits around children or domestic pets.',
    safetyWarnings: [
      'NEVER USE METALDEHYDE BAITS IF PETS OR WILDLIFE ARE PRESENT. Metaldehyde causes fatal seizures in dogs and cats.',
      'Always wash homegrown lettuce and strawberries thoroughly.'
    ],
    firstAidGeneralGuidance: 'Wash hands with soap and water after removing slugs.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Garden slug', 'Snail', 'Garden snail'],
    regionalNames: ['Babosa', 'Caracol'],
    regions: ['global', 'europe', 'north_america', 'australia'],
    tags: ['holes in leaves', 'slime trail', 'slug', 'snail', 'hostas', 'pet toxicity warning']
  }
];
