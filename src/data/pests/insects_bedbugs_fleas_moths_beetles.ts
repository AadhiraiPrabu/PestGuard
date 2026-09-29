import { Pest } from '../../types/pest';

export const BEDBUGS_FLEAS_MOTHS_BEETLES: Pest[] = [
  {
    id: 'bedbug-common',
    commonName: 'Common Bed Bug',
    scientificName: 'Cimex lectularius',
    category: 'insects',
    subCategory: 'Bed bugs',
    description: 'Flat, oval, wingless parasitic insects that hide in mattress tufts, bed frames, and baseboards, emerging in darkness to feed on human blood.',
    identificationFeatures: [
      'Broadly oval and extremely flat body before feeding (resembling an apple seed)',
      'Swollen, elongated, and reddish-brown after a blood meal',
      'Vestigial wing pads (cannot fly or jump)',
      'Short 4-segmented antennae and beak tucked under head'
    ],
    size: '4 - 7 mm (apple seed size)',
    color: ['Mahogany brown', 'Rust red after feeding'],
    habitat: 'Mattress seams, box spring joints, headboard screw holes, baseboards, behind peeling wallpaper',
    activeTime: 'night',
    seasonality: 'Year-round in heated residential indoor environments',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Bedroom', 'Hostel', 'Hotel', 'Living room', 'Sofa', 'Mattress'],
    foodSources: ['Obligate blood feeders on sleeping humans, warm-blooded mammals, and domestic birds'],
    attractants: ['Carbon dioxide from breathing, body heat, dark narrow crevices near sleeping areas'],
    signsOfPresence: [
      'Small rusty red or black fecal ink-like specks on bedsheets and mattress seams',
      'Translucent straw-colored shed skins (nymphal exuviae) in mattress piping',
      'Clusters of tiny pearl-white oval eggs glued in wooden cracks',
      'Linear clusters or lines of itchy bites (often 3 in a row: "breakfast, lunch, and dinner")',
      'Sweet sickly almond or rotting raspberry odor in heavy infestations'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Causes intensely itchy erythematous welts, sleep deprivation, psychological distress, and secondary bacterial skin infections from vigorous scratching. Not proven vectors of biological disease.',
    petRisk: 'May occasionally bite sleeping dogs or cats if human hosts are absent.',
    propertyRisk: 'Can spread throughout multi-family apartment buildings through electrical conduits and wall cavities.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'None.',
    preventionMethods: [
      'Encase both mattress and box springs in certified bed-bug-proof zippered encasements',
      'Inspect hotel beds and luggage racks during travel before unpacking; keep luggage elevated on metal racks',
      'Wash travel clothes on high heat and tumble dry on high heat for at least 30 minutes',
      'Never bring discarded street furniture, mattresses, or upholstered chairs into the home',
      'Install bed bug interceptor cups under bed posts pulled 6 inches away from walls'
    ],
    nonChemicalSolutions: [
      'High-temperature clothes dryer treatment (sustained temperatures above 120°F / 49°C destroy all life stages including eggs)',
      'Commercial dry steam cleaners applied slowly along mattress seams and baseboard crevices',
      'Clutter removal inside sealed plastic bags to eliminate hiding voids',
      'HEPA vacuuming of mattress seams, discarding the vacuum bag in a sealed plastic bag outdoors'
    ],
    professionalControlNotes: 'Professional pest management is strongly advised. Bed bugs have developed widespread resistance to over-the-counter pyrethroid sprays; professional whole-room thermal heat treatments or integrated multi-modal chemistries are the gold standard.',
    chemicalControlGeneralGuidance: 'Over-the-counter aerosol bug bombs are strongly discouraged because they flush bed bugs deeper into adjacent rooms. Use labeled amorphous silica dust (CimeXa) inside wall cavities and outlet covers per label.',
    safetyWarnings: [
      'Never spray kerosene, rubbing alcohol, or flammable chemicals onto mattresses; extreme fire and toxic fume hazard.',
      'Do not throw away infested furniture without wrapping in plastic, as this spreads bugs throughout the building hallways.'
    ],
    firstAidGeneralGuidance: 'Wash bites with mild soap and warm water; apply topical hydrocortisone cream or oral antihistamines to alleviate itching. Seek medical advice if bites show signs of secondary infection (pus, warmth, expanding redness).',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Bed bug', 'Chinch', 'Cimex'],
    regionalNames: ['Chinche de cama', 'Khatmal'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['bed bug', 'mattress seams', 'itchy bites', 'blood spots', 'bedroom pest', 'apple seed']
  },
  {
    id: 'flea-cat',
    commonName: 'Cat Flea (Common Flea)',
    scientificName: 'Ctenocephalides felis',
    category: 'insects',
    subCategory: 'Fleas',
    description: 'Small, wingless, vertically flattened jumping parasites that infest dogs, cats, carpets, and pet bedding, biting human ankles.',
    identificationFeatures: [
      'Laterally compressed (flattened side-to-side) body allowing easy movement through pet fur',
      'Long hind legs modified for high jumping (up to 7 inches high and 13 inches horizontally)',
      'Genal and pronotal combs (catenidia) resembling tooth-combs on head and thorax'
    ],
    size: '1.5 - 3 mm',
    color: ['Reddish-brown', 'Dark mahogany'],
    habitat: 'Pet fur, pet sleeping blankets, carpet fibers, upholstered furniture, shaded yard soil',
    activeTime: 'all_day',
    seasonality: 'Spring through Autumn outdoors; year-round inside heated homes with pets',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Living room', 'Pet bed', 'Carpet', 'Bedroom', 'Garden lawn'],
    foodSources: ['Adults consume mammal blood; larvae feed on adult flea feces ("flea dirt") and organic pet dander'],
    attractants: ['Pet body warmth, carbon dioxide, movement, vibrations triggering cocoon emergence'],
    signsOfPresence: [
      'Frequent pet scratching, licking, and biting at base of tail',
      'Tiny black comma-shaped "flea dirt" on pet skin or bedding that turns red when placed on a wet paper towel',
      'Small itchy red bites on human ankles and lower shins'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Produces itchy punctate welts on lower legs; intermediate host for tapeworms (Dipylidium caninum) and vector for murine typhus and cat-scratch disease (Bartonella).',
    petRisk: 'Causes severe flea allergy dermatitis (FAD), hair loss, and anemia in puppies and kittens.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'None.',
    preventionMethods: [
      'Maintain veterinary-prescribed flea preventative medications on all household dogs and cats',
      'Wash pet bedding weekly in hot water and dry on high heat cycle',
      'Vacuum all rugs, carpets, baseboards, and furniture cushions weekly',
      'Mow lawn regularly and restrict wildlife (opossums, stray cats) from resting under porches'
    ],
    nonChemicalSolutions: [
      'Thorough daily vacuuming (be sure to dispose of vacuum canisters or bags immediately into outdoor bins)',
      'Flea comb pet daily dipping comb in soapy water to drown caught fleas',
      'Bathing pets with gentle veterinary-approved shampoo'
    ],
    professionalControlNotes: 'Recommended if persistent flea pupae continue emerging across multiple rooms after pet veterinary treatments.',
    chemicalControlGeneralGuidance: 'Treat pets ONLY with veterinary-approved products. For carpets, apply labeled insect growth regulators (IGR such as pyriproxyfen) that prevent flea eggs from maturing into biting adults.',
    safetyWarnings: [
      'NEVER use dog flea medication containing permethrin on cats; permethrin is fatally neurotoxic to felines!',
      'Follow veterinary dosage guidelines strictly based on the pet weight.'
    ],
    firstAidGeneralGuidance: 'Apply calamine or 1% hydrocortisone cream to human bites. Consult a veterinarian immediately for pet skin lesions.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Dog flea', 'Sand flea', 'Pet flea'],
    regionalNames: ['Pulga', 'Pissu'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['jumping insect', 'pet scratching', 'flea dirt', 'ankle bites', 'carpet']
  },
  {
    id: 'louse-head',
    commonName: 'Head Louse',
    scientificName: 'Pediculus humanus capitis',
    category: 'insects',
    subCategory: 'Lice',
    description: 'Small wingless obligate parasitic insects that reside exclusively on the human scalp, gluing teardrop-shaped eggs (nits) to hair shafts.',
    identificationFeatures: [
      'Tan-grayish wingless insect with 6 clawed legs adapted for grasping human hair shafts',
      'Cannot jump or fly; crawls quickly along hair strands',
      'Tiny oval translucent or white nits firmly cemented within 1/4 inch of scalp base'
    ],
    size: '2 - 3 mm (sesame seed size)',
    color: ['Tan', 'Grayish-white', 'Reddish-brown after feeding'],
    habitat: 'Human scalp hair, most commonly behind ears and nape of the neck',
    activeTime: 'all_day',
    seasonality: 'Year-round; common in school-age children',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Bedroom', 'Bathroom', 'School', 'Hostel'],
    foodSources: ['Human blood taken directly from scalp skin'],
    attractants: ['Direct head-to-head human contact, hair strands'],
    signsOfPresence: [
      'Intense tickling and itching of the scalp and neck',
      'White nits glued firmly to hair that cannot be easily brushed or blown off (unlike dandruff)',
      'Small red sores on neck and scalp from scratching'
    ],
    riskLevel: 'low',
    humanRisk: 'Nuisance and irritation; does NOT transmit microbial or viral diseases.',
    petRisk: 'Species-specific to humans; cannot survive on dogs, cats, or household pets.',
    propertyRisk: 'None; dies within 24 to 48 hours away from a human host.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'None.',
    preventionMethods: [
      'Avoid head-to-head direct contact during group play and sleepovers',
      'Do not share combs, hairbrushes, caps, hats, scarves, or hair accessories',
      'Perform regular visual scalp checks with bright light and a fine-tooth comb'
    ],
    nonChemicalSolutions: [
      'Wet-combing with hair conditioner and a precision metal nit comb (Nit Free Terminator comb)',
      'Washing bedding and hats worn in the past 48 hours in hot water and drying on high heat cycle'
    ],
    professionalControlNotes: 'Pediatrician or clinical lice-removal services if over-the-counter options fail.',
    chemicalControlGeneralGuidance: 'Use OTC pediculicide shampoo containing permethrin or dimethicone-based non-pesticidal lotions. Repeat application on day 9 to eradicate newly hatched nymphs. Follow package instructions exactly.',
    safetyWarnings: [
      'Never use veterinary insecticides, kerosene, or flammable chemicals on a human scalp.',
      'Do not apply pediculicides more frequently than directed on the label.'
    ],
    firstAidGeneralGuidance: 'Rinse eyes thoroughly with clean water if shampoo enters eyes. Apply cool cloth to soothe irritated scalp.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Pediculosis', 'Nits', 'Scalp louse'],
    regionalNames: ['Piojo', 'Joon'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['hair nits', 'scalp itching', 'school', 'children', 'parasite']
  },
  {
    id: 'moth-pantry-indianmeal',
    commonName: 'Indian Meal Moth (Pantry Moth)',
    scientificName: 'Plodia interpunctella',
    category: 'insects',
    subCategory: 'Moths',
    description: 'The most common pest of stored grain products in homes; distinctive two-toned bronze wings and caterpillar larvae producing silk webbing in food.',
    identificationFeatures: [
      'Two-toned wings: front third is pale creamy gray, outer two-thirds is coppery reddish-bronze',
      'Holds wings roof-like over body when resting',
      'Small white/pinkish larvae wriggling in dried grains, leaving dense silken webbing'
    ],
    size: '8 - 10 mm wingspan: 16 - 20 mm',
    color: ['Pale gray', 'Coppery bronze', 'Reddish-brown'],
    habitat: 'Kitchen pantries, dry pet food bags, flour containers, birdseed storage, cereal boxes',
    activeTime: 'night',
    seasonality: 'Continuous reproduction in warm household pantries',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Kitchen', 'Pantry', 'Food storage area', 'Store room'],
    foodSources: ['Flour, cereal, cornmeal, rice, nuts, dried fruits, cocoa, dry dog/cat food, birdseed'],
    attractants: ['Unsealed dry groceries, cardboard grain packaging, chocolate, dried chilies'],
    signsOfPresence: [
      'Zigzagging small moths fluttering in kitchen illumination in the evening',
      'Silken webbing clumping flour, oatmeal, or spice grains',
      'Off-white worm-like caterpillars crawling up pantry walls and ceilings to pupate'
    ],
    riskLevel: 'low',
    humanRisk: 'Non-toxic and non-biting; accidental consumption of larvae causes no medical harm, but is unpleasant.',
    petRisk: 'Harmless to pets; contaminated pet food should be discarded if moldy.',
    propertyRisk: 'Destroys stored dry food items.',
    foodContaminationRisk: 'Extremely high for dry pantry goods.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'None indoors.',
    preventionMethods: [
      'Transfer all newly purchased flour, grains, rice, cereals, and nuts immediately into airtight glass or heavy-duty screw-top plastic containers',
      'Freeze newly purchased birdseed or whole-grain flours for 72 hours before placing in pantry',
      'Wipe pantry shelf corners and peg holes to remove spilled flour dust'
    ],
    nonChemicalSolutions: [
      'Inspect every package in the pantry and discard all packages showing silk webbing or larvae into an outdoor trash bin',
      'Vacuum pantry shelves thoroughly, including bracket tracks and corners; wipe down with warm soapy vinegar water',
      'Deploy non-toxic pheromone sticky traps to capture lingering male moths and monitor activity'
    ],
    professionalControlNotes: 'Not needed; pantry moth infestations are 100% resolvable through source elimination and airtight storage.',
    chemicalControlGeneralGuidance: 'Never spray chemical insecticides inside food storage cabinets or pantries.',
    safetyWarnings: ['Discard infested food packages promptly to prevent spread to adjacent packages.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Pantry moth', 'Grain moth', 'Meal moth'],
    regionalNames: ['Polilla de la harina'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['pantry moth', 'webbing in food', 'caterpillar on ceiling', 'grains', 'two toned moth']
  },
  {
    id: 'moth-webbing-clothes',
    commonName: 'Webbing Clothes Moth',
    scientificName: 'Tineola bisselliella',
    category: 'insects',
    subCategory: 'Moths',
    description: 'Small golden-buff moth whose larvae feed on animal keratin, chewing holes in wool suits, cashmere sweaters, silk garments, and feather pillows.',
    identificationFeatures: [
      'Uniform shiny golden-buff or straw-colored wings with a fringe of long hairs',
      'Tuft of reddish-gold hairs on the head',
      'Avoids light; runs quickly or flutters weakly in dark closets'
    ],
    size: '6 - 8 mm (wingspan 12 - 16 mm)',
    color: ['Golden buff', 'Straw yellow'],
    habitat: 'Dark closets, drawers, woolen carpets under furniture, felt piano hammers, antique taxidermy',
    activeTime: 'night',
    seasonality: 'Spring and summer outdoor emergence; year-round inside closets',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Closet', 'Bedroom', 'Wardrobe', 'Store room', 'Carpet under sofas'],
    foodSources: ['Animal keratin: wool, cashmere, alpaca, silk, feathers, fur, horsehair stuffing'],
    attractants: ['Dark undisturbed closets, garments soiled with sweat, food stains, or body oils'],
    signsOfPresence: [
      'Irregular holes chewed in wool sweaters and suits',
      'White silken feeding tubes or patches of webbing attached to fabrics',
      'Tiny sand-like fecal pellets matching the color of the eaten garment fabric'
    ],
    riskLevel: 'low',
    humanRisk: 'Harmless to humans; non-biting.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'High damage to expensive clothing, heirloom textiles, and wool rugs.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Outdoor decomposer of animal horns, hooves, and carcasses.',
    preventionMethods: [
      'Dry-clean or launder woolen and cashmere garments before storing them away for the season',
      'Store vulnerable wool garments inside sealed zippered garment bags or airtight bins',
      'Vacuum closet floors, baseboards, and beneath heavy furniture regularly'
    ],
    nonChemicalSolutions: [
      'Freezing infested woolens inside sealed plastic bags at 0°F (-18°C) for a minimum of 72 hours',
      'Dry heat cycle in a clothes dryer on medium/high heat for 30 minutes for dry-safe garments',
      'Pheromone clothes moth sticky traps to monitor adult male presence'
    ],
    professionalControlNotes: 'Textile conservator or museum pest specialist for antique tapestries or large infested heirloom carpets.',
    chemicalControlGeneralGuidance: 'Mothballs (paradichlorobenzene/naphthalene) should only be used in tightly sealed airtight containers per label, never in open rooms or closets.',
    safetyWarnings: [
      'Do not scatter mothballs in open living areas, closets, or attics; fumes are hazardous to human lungs and toxic to pets.'
    ],
    firstAidGeneralGuidance: 'Ventilate room if exposed to mothball vapors.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Clothes moth', 'Wool moth', 'Fabric moth'],
    regionalNames: ['Polilla de la ropa'],
    regions: ['global', 'north_america', 'europe', 'australia'],
    tags: ['holes in clothes', 'wool sweater', 'wardrobe', 'silk', 'fabric damage', 'golden moth']
  },
  {
    id: 'beetle-carpet-varied',
    commonName: 'Varied Carpet Beetle',
    scientificName: 'Anthrenus verbasci',
    category: 'insects',
    subCategory: 'Beetles',
    description: 'Small rounded beetles with mottled scales; hairy larvae feed on animal products, wool, dead insects, pet hair, and taxidermy.',
    identificationFeatures: [
      'Adults: tiny, rounded, mottled pattern of white, yellow, and brown scales on dark shell',
      'Larvae ("woolly bears"): bristly, brown, carrot-shaped with tufts of arrowhead-shaped hairs'
    ],
    size: 'Adults: 2 - 3 mm; Larvae: 4 - 5 mm',
    color: ['Mottled white, brown, and yellow', 'Dark gray'],
    habitat: 'Floor edges, air ducts, behind baseboards, wool carpets, storage trunks, dead insect clusters in attics',
    activeTime: 'day',
    seasonality: 'Adults fly to windowsills on sunny spring days feeding on garden pollen',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Closet', 'Bedroom', 'Living room', 'Baseboards', 'Windowsill'],
    foodSources: ['Larvae eat dried pet hair, wool, silk, feathers, dead insects in wall voids, dried museum specimens'],
    attractants: ['Accumulated pet hair under baseboards, woolen fabrics, flowering garden shrubs near windows'],
    signsOfPresence: [
      'Tiny bristly larvae crawling along baseboard seams',
      'Shed larval skins resembling mini fuzzy shells in closet corners',
      'Irregular bare patches on wool carpets or holes in folded sweaters',
      'Adult beetles congregating on windowsills in spring trying to fly outside'
    ],
    riskLevel: 'low',
    humanRisk: 'Larval bristly hairs can cause allergic skin dermatitis ("carpet beetle dermatitis") resembling bed bug bites.',
    petRisk: 'Low; can cause contact skin itch in sensitive pets.',
    propertyRisk: 'Moderate damage to woolen carpets, upholstery, and taxidermy.',
    foodContaminationRisk: 'Low to moderate on dry pet treats.',
    plantDamageRisk: 'Adults feed harmlessly on outdoor pollen (Spiraea, daisy).',
    beneficialStatus: 'Outdoor scavenger of bird nests and carcass remains.',
    preventionMethods: [
      'Vacuum along baseboards, beneath heavy furniture, and inside heating register vents to eliminate pet hair lint balls',
      'Launder and store wool items in sealed plastic containers',
      'Clean accumulated dead insects from window tracks and light fixtures'
    ],
    nonChemicalSolutions: [
      'Intensive HEPA vacuuming of edges and closet corners',
      'Dry-cleaning or hot laundering of infested fabrics',
      'Freezing delicate items at 0°F (-18°C) for 3-5 days'
    ],
    professionalControlNotes: 'Useful if larvae are breeding inside inaccessible subfloor insulation or heating duct networks.',
    chemicalControlGeneralGuidance: 'Light application of desiccant dust (food-grade diatomaceous earth) in baseboard cracks.',
    safetyWarnings: ['Do not confuse carpet beetle dermatitis with bed bug bites; examine physical insect evidence.'],
    firstAidGeneralGuidance: 'Wash affected skin; apply hydrocortisone cream for contact dermatitis.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Carpet beetle', 'Woolly bear larva'],
    regionalNames: ['Escarabajo de las alfombras'],
    regions: ['global', 'north_america', 'europe', 'australia', 'india'],
    tags: ['holes in wool', 'fuzzy larva', 'window sill beetle', 'pet hair', 'dermatitis']
  },
  {
    id: 'beetle-rice-weevil',
    commonName: 'Rice Weevil',
    scientificName: 'Sitophilus oryzae',
    category: 'insects',
    subCategory: 'Beetles',
    description: 'Small reddish-brown snout beetle that attacks whole stored grains; can fly readily and infests rice, corn, wheat, and pasta.',
    identificationFeatures: [
      'Distinctive long slender snout (rostrum) with chewing mouthparts at the tip',
      'Four faint reddish or yellowish spots on the elytra (wing covers)',
      'Capable of flight (unlike the closely related granary weevil)',
      'Round punctations on the pronotum'
    ],
    size: '2.5 - 3.5 mm',
    color: ['Reddish-brown', 'Dark brown with 4 faint lighter spots'],
    habitat: 'Pantries, grain silos, pasta boxes, rice bags, whole-seed storage',
    activeTime: 'day',
    seasonality: 'Year-round in pantry temperatures',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Kitchen', 'Pantry', 'Food storage area', 'Store room'],
    foodSources: ['Whole grains: rice, wheat, corn, barley, dry beans, raw macaroni pasta'],
    attractants: ['Moist or warm unsealed grain sacks, dry grain dust in cabinet corners'],
    signsOfPresence: [
      'Hollowed-out rice grains or corn kernels with neat round exit holes',
      'Fine floury powder accumulating in the bottom of grain jars',
      'Small snout beetles crawling across pantry shelves or flying toward kitchen windows'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; non-biting and non-toxic if accidentally consumed.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'Destroys stored raw grain inventory.',
    foodContaminationRisk: 'High for whole grains and dry pasta.',
    plantDamageRisk: 'Can infest ripening crops in the field prior to harvest.',
    beneficialStatus: 'None.',
    preventionMethods: [
      'Store all rice, wheat, corn, and dry pasta in heavy airtight glass or sealed plastic canisters',
      'Place newly purchased rice bags in the home freezer for 4 days to neutralize dormant eggs',
      'Do not buy damaged or discounted open bags of rice or whole grains'
    ],
    nonChemicalSolutions: [
      'Identify and discard heavily infested grain bags',
      'Vacuum and wash cupboard shelves thoroughly, drying completely before restocking',
      'Freezing slightly suspect grains at 0°F (-18°C) for 4 days kills all life stages'
    ],
    professionalControlNotes: 'Not needed for residential kitchens.',
    chemicalControlGeneralGuidance: 'No pesticides should ever be applied to food or shelves where food is stored.',
    safetyWarnings: ['Discard severely infested grain packages.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Grain weevil', 'Rice snout beetle'],
    regionalNames: ['Gorgojo del arroz'],
    regions: ['global', 'india', 'southeast_asia', 'north_america', 'europe'],
    tags: ['bugs in rice', 'snout beetle', 'weevil', 'pantry grains', 'tiny brown bugs']
  },
  {
    id: 'beetle-powderpost',
    commonName: 'Powderpost Beetle',
    scientificName: 'Lyctus brunneus',
    category: 'insects',
    subCategory: 'Beetles',
    description: 'Wood-boring beetles whose larvae reduce hardwood floors, paneling, and furniture into a fine talcum-powder-like dust.',
    identificationFeatures: [
      'Slender, flattened reddish-brown to black elongated body',
      'Clubbed antennae with 2-segmented club',
      'Tiny round exit pinholes (0.8 - 1.5 mm diameter) in bare or finished hardwood',
      'Extremely fine powdery frass that feels like flour or talc without grit'
    ],
    size: '2 - 7 mm',
    color: ['Reddish-brown', 'Dark brown'],
    habitat: 'Oak flooring, hardwood cabinets, bamboo products, tool handles, picture frames',
    activeTime: 'night',
    seasonality: 'Adults emerge in late spring and summer',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Hardwood flooring', 'Cabinets', 'Living room', 'Attic', 'Furniture'],
    foodSources: ['Starch in sapwood of hardwoods (oak, ash, walnut, hickory, bamboo)'],
    attractants: ['Unsealed raw hardwood with moisture content above 12%'],
    signsOfPresence: [
      'Piles of ultra-fine, flour-like wood dust below tiny round exit pinholes',
      'Spongy crumbling wood beneath the surface of floorboards or hardwood trim'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Harmless to human health.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'Substantial structural and cosmetic damage to hardwood flooring and antique furniture.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'Attacks dead seasoned hardwood branches.',
    beneficialStatus: 'Outdoor forest wood recycler.',
    preventionMethods: [
      'Ensure all hardwood building materials are kiln-dried to kill larvae before installation',
      'Seal exposed wood surfaces with varnish, polyurethane, paint, or wax to prevent re-infestation',
      'Maintain indoor relative humidity below 50%'
    ],
    nonChemicalSolutions: [
      'Commercial kiln heat treatment or fumigation of portable infested furniture items',
      'Replacing isolated damaged boards'
    ],
    professionalControlNotes: 'Structural pest control operator consultation if exit pinholes are widespread across load-bearing hardwood joists or floor systems.',
    chemicalControlGeneralGuidance: 'Professional topical application of disodium octaborate tetrahydrate (borate) solution onto bare unfinished wood absorbs deep into wood fibers.',
    safetyWarnings: ['Do not apply borates over painted or varnished surfaces without sanding down to bare grain.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Wood borer', 'Lyctid beetle', 'Woodworm'],
    regionalNames: ['Carcoma fina'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['wood powder', 'pinholes', 'hardwood damage', 'talc dust', 'flooring borer']
  }
];
