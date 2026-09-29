import { Pest } from '../../types/pest';

export const ARACHNIDS_MYRIAPODS_WORMS: Pest[] = [
  {
    id: 'spider-black-widow',
    commonName: 'Southern Black Widow Spider',
    scientificName: 'Latrodectus mactans',
    category: 'arachnids',
    subCategory: 'Spiders',
    description: 'Glossy black spider with a distinct bright red hourglass on the underside of the bulbous abdomen; builds tangled irregular cobwebs in secluded dark locations.',
    identificationFeatures: [
      'Shiny, glossy jet-black globose abdomen',
      'Vibrant red hourglass-shaped marking on ventral (underside) abdomen',
      'Tangled, haphazard, extremely high-tensile strength web (makes a crinkling sound when torn)',
      'Hides deep in web recess during daylight; hangs upside down at night'
    ],
    size: 'Body: 8 - 13 mm (leg span up to 38 mm)',
    color: ['Glossy black', 'Bright red hourglass'],
    habitat: 'Undisturbed dark corners: garage corners, crawlspaces, water meter boxes, woodpiles, under outdoor grill covers, shed shelving',
    activeTime: 'night',
    seasonality: 'Summer and Autumn; stays inactive in cold winter months',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garage', 'Basement', 'Shed', 'Woodpile', 'Under patio furniture', 'Water meter box'],
    foodSources: ['Insects, beetles, flies, woodlice, other spiders caught in web'],
    attractants: ['Dark undisturbed clutter, insect abundance near night lighting, stacked lumber'],
    signsOfPresence: [
      'Tough irregular tangle of crisscrossed web strands near ground level in dark corners',
      'Smooth round tan papery egg sacs (marble-sized) suspended in the web'
    ],
    riskLevel: 'high',
    humanRisk: 'MEDICALLY SIGNIFICANT. Potent neurotoxic venom (latrotoxin). Bite feels like a pinprick, followed within 1-3 hours by severe abdominal cramping, muscle rigidity, sweating, hypertension, and nausea. Rarely fatal with modern medical care, but dangerous to small children, elderly, and heart patients.',
    petRisk: 'High for cats and small dogs; can cause severe paralysis and respiratory distress.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Outdoor predator of pest flies, beetles, and crickets.',
    preventionMethods: [
      'Wear sturdy leather work gloves when moving stacked firewood, outdoor tools, or garage storage boxes',
      'Shake out gardening shoes, boots, and work gloves kept in garages before putting them on',
      'Reduce clutter in garages, basements, and garden sheds by using plastic sealable bins',
      'Store firewood piles off the ground and away from the exterior house walls'
    ],
    nonChemicalSolutions: [
      'Inspect with a flashlight while wearing gloves; capture safely using a wide-mouth jar slid over the spider and slide a stiff cardboard beneath to relocate away from human activity, OR destroy egg sacs with a vacuum wand',
      'De-clutter dark corners and eliminate web anchors'
    ],
    professionalControlNotes: 'Recommended if multiple breeding females or egg sacs are discovered in accessible living areas or children’s play structures.',
    chemicalControlGeneralGuidance: 'Direct contact spray on webs or desiccant dust in wall voids. Follow product label carefully.',
    safetyWarnings: [
      'DO NOT HANDLE WITH BARE HANDS. Never stick bare hands blindly into dark recesses, toolboxes, or woodpiles.',
      'DANGEROUS ANIMAL ALERT: If bitten, seek immediate emergency medical evaluation. Note appearance of spider or take a safe photo for physician confirmation.'
    ],
    firstAidGeneralGuidance: 'Wash bite area with soap and water immediately. Apply ice pack wrapped in cloth to reduce swelling. Keep the affected limb elevated and at rest. Seek immediate emergency medical care (call emergency services or go to the nearest emergency department). Do NOT apply tourniquets or attempt to suck out venom.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Hourglass spider', 'Black widow', 'Shoe-button spider'],
    regionalNames: ['Viuda negra'],
    regions: ['north_america', 'latin_america', 'global'],
    tags: ['dangerous animal', 'red hourglass', 'glossy black spider', 'toxic venom', 'neurotoxin', 'garage']
  },
  {
    id: 'spider-brown-recluse',
    commonName: 'Brown Recluse Spider',
    scientificName: 'Loxosceles reclusa',
    category: 'arachnids',
    subCategory: 'Spiders',
    description: 'Timid, light-to-medium brown spider with a dark violin (fiddle) marking on its cephalothorax and 6 eyes arranged in three pairs; possesses cytotoxic venom.',
    identificationFeatures: [
      'Dark violin or fiddle-shaped marking on top of the cephalothorax with the neck of the violin pointing toward the abdomen',
      'Uniformly colored, long slender legs with NO stripes, bands, or thick spines (fine hairs only)',
      'SIX EYES arranged in three distinct pairs (dyads) in a semicircle (most spiders have 8 eyes)',
      'Abdomen is uniform brown/tan with no patterns or markings'
    ],
    size: 'Body: 6 - 12 mm (leg span roughly the size of a quarter)',
    color: ['Tan', 'Medium brown', 'Dark brown fiddle'],
    habitat: 'Dry, dark, undisturbed indoor spaces: closets, attics, cardboard boxes, crawlspaces, behind furniture',
    activeTime: 'night',
    seasonality: 'Active spring through autumn; tolerates dry indoor winter conditions',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Closet', 'Attic', 'Bed frame', 'Behind baseboards', 'Storage boxes'],
    foodSources: ['Soft-bodied insects, dead or dying bugs scavenged at night'],
    attractants: ['Cardboard boxes (mimics natural tree bark crevices), undisturbed storage, attic insulation'],
    signsOfPresence: [
      'Flat, irregular, non-sticky off-white silk retreat retreats tucked in closet corners or box seams',
      'Specimens captured on sticky glue traps placed flat along baseboards'
    ],
    riskLevel: 'high',
    humanRisk: 'MEDICALLY SIGNIFICANT. Cytotoxic necrotic venom containing sphingomyelinase D. Bite is initially painless, but over 2-8 hours turns red, swollen, and tender. In severe cases, central blistering develops, ulcerating into a necrotic lesion that heals slowly over weeks.',
    petRisk: 'Moderate to high if bitten on thinly haired skin.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Outdoor scavenger of dead insects.',
    preventionMethods: [
      'Replace cardboard storage boxes in closets and attics with clear plastic storage bins with tight-sealing lids',
      'Shake out clothing, coats, and shoes that have been stored undisturbed in closets before wearing',
      'Pull beds 8 inches away from walls and remove bed skirts that touch the carpeting',
      'Seal baseboard seams and pipe penetrations with acrylic latex caulk'
    ],
    nonChemicalSolutions: [
      'Extensive deployment of flat sticky insect glue boards placed along wall-floor junctions in every room, closet, and garage',
      'HEPA vacuuming of closets and behind heavy furniture'
    ],
    professionalControlNotes: 'Highly recommended for confirmed domestic infestations. Requires comprehensive integrated pest management including void dusting with desiccant dusts.',
    chemicalControlGeneralGuidance: 'Over-the-counter baseboard sprays are largely ineffective; professional void injection with labeled microencapsulated or desiccant formulations is required.',
    safetyWarnings: [
      'Never press clothing or put on boots kept in dark closets without shaking them out thoroughly first.',
      'Seek medical evaluation if a suspicious bite develops an expanding purple ring, bullseye blister, or open ulcer.'
    ],
    firstAidGeneralGuidance: 'Wash the bite area gently with soap and cool water. Apply an ice pack wrapped in a washcloth (10 minutes on, 10 minutes off). Elevate the bite site. Seek prompt medical care and, if safely possible without taking risks, capture the spider in a secure jar for definitive clinical identification.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Fiddleback spider', 'Violin spider', 'Recluse'],
    regionalNames: ['Araña violinista'],
    regions: ['north_america'],
    tags: ['dangerous animal', 'violin spider', 'fiddleback', 'necrotic venom', 'closet', 'six eyes']
  },
  {
    id: 'spider-wolf-carolina',
    commonName: 'Carolina Wolf Spider',
    scientificName: 'Hogna carolinensis',
    category: 'arachnids',
    subCategory: 'Spiders',
    description: 'Large, robust, hairy ground-hunting spider with keen eyesight; does not spin webs to catch prey, and females carry spiderlings on their backs. Harmless and beneficial.',
    identificationFeatures: [
      'Large, athletic, mottled gray/brown body with dark longitudinal stripes on carapace',
      'Distinctive eye arrangement: four small eyes in lower row, two large eyes in middle row, two eyes on top',
      'Eyes shine bright greenish-silver when illuminated by a flashlight beam at night ("eyeshine")',
      'Females frequently seen carrying hundreds of tiny baby spiderlings on their abdomen'
    ],
    size: 'Body: 18 - 35 mm (leg span up to 75 mm / 3 inches)',
    color: ['Mottled gray', 'Brown', 'Blackish underside'],
    habitat: 'Lawns, garden beds, patio slabs, entering ground-floor rooms through open door thresholds in autumn',
    activeTime: 'night',
    seasonality: 'Late summer through Autumn peak',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Lawn', 'Patio', 'Basement', 'Living room floor'],
    foodSources: ['Cockroaches, crickets, beetles, earwigs, grasshoppers'],
    attractants: ['Exterior night lighting attracting insect prey, open garage doors, leaf mulch'],
    signsOfPresence: [
      'Fast-moving large spider running across open floorboards or patio at night',
      'Small vertical silk-lined burrows in garden soil'
    ],
    riskLevel: 'low',
    humanRisk: 'Non-aggressive and medically harmless. Can bite defensively if pinched or stepped on bare-footed, causing localized pain comparable to a bee sting.',
    petRisk: 'Harmless to domestic pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'EXCELLENT NATURAL PREDATOR. Voraciously consumes cockroaches, beetles, and crickets around home foundations. Do not kill.',
    preventionMethods: [
      'Install tight rubber door sweeps on exterior doors and garage overhead doors',
      'Switch outdoor exterior entryway bulbs to warm yellow LED bug lights',
      'Keep foundation perimeter free of tall grass and woodpiles'
    ],
    nonChemicalSolutions: [
      'Catch and release: place a cup or glass over the spider, slide an envelope underneath, and release outside into the garden where it provides free pest control',
      'Sticky glue traps placed inside garage doors'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'Pesticide application is discouraged; wolf spiders are beneficial natural allies against nuisance insects.',
    safetyWarnings: ['Do not step on a female carrying babies inside the home, as hundreds of tiny spiderlings will disperse across the room.'],
    firstAidGeneralGuidance: 'Wash with soap and water; cool compress for 10 minutes if a defensive pinch occurs.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Ground spider', 'Hunting spider', 'Wolf spider'],
    regionalNames: ['Araña lobo'],
    regions: ['global', 'north_america', 'europe', 'australia', 'india'],
    tags: ['large hairy spider', 'eyeshine', 'fast runner', 'beneficial predator', 'spiderlings', 'harmless']
  },
  {
    id: 'spider-cellar-daddylonglegs',
    commonName: 'Cellar Spider (Daddy Longlegs)',
    scientificName: 'Pholcus phalangioides',
    category: 'arachnids',
    subCategory: 'Spiders',
    description: 'Delicate, pale spider with extremely long, thin thread-like legs; builds loose untidy webs in dark ceiling corners and vibrates rapidly when disturbed.',
    identificationFeatures: [
      'Extremely long, thin, fragile legs (5-6 times body length)',
      'Small, elongated pale cylindrical grayish-tan body',
      'Vibrates or whirls its body violently in a blur when disturbed in its web ("whirly spider")',
      'Harmless; old urban myth that it has the "deadliest venom in the world" is completely scientifically false'
    ],
    size: 'Body: 6 - 9 mm (leg span up to 50 mm)',
    color: ['Translucent gray', 'Pale tan'],
    habitat: 'Cellar ceilings, dark bathroom corners, crawlspaces, garage joists, behind washing machines',
    activeTime: 'night',
    seasonality: 'Year-round indoors in quiet corners',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Basement', 'Bathroom ceiling', 'Garage', 'Laundry room'],
    foodSources: ['Flies, mosquitoes, silverfish, and even dangerous spiders (widows and recluse)'],
    attractants: ['Quiet, humid, dimly lit ceiling corners with flying insect activity'],
    signsOfPresence: ['Cobwebs collecting dust in upper ceiling corners', 'Small pale spider hanging upside down'],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; fangs are tiny and rarely pierce human skin; venom is mild and non-toxic to people.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None (leaves cosmetic cobwebs).',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Highly effective predator of mosquitoes, houseflies, and even venomous spiders.',
    preventionMethods: [
      'Vacuum high ceiling corners periodically with a vacuum extension wand',
      'Reduce basement humidity'
    ],
    nonChemicalSolutions: [
      'Vacuum webs and spider gently or wrap in a broom head and release outdoors',
      'Leave in quiet out-of-the-way basement corners for natural fly control'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'No pesticides required; physical sweeping solves cosmetic web presence.',
    safetyWarnings: ['Ignore the myth about deadly venom; this spider is 100% medically harmless.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Daddy longlegs spider', 'Whirly spider', 'Cobweb spider'],
    regionalNames: ['Araña de rincón de patas largas'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['long legs', 'cobwebs on ceiling', 'cellar spider', 'harmless', 'vibrating spider']
  },
  {
    id: 'scorpion-striped-bark',
    commonName: 'Striped Bark Scorpion',
    scientificName: 'Centruroides vittatus',
    category: 'arachnids',
    subCategory: 'Scorpions',
    description: 'Yellowish-tan climbing scorpion with two dark lengthwise bands on the back and a slender tail tipped with a curved venomous stinger; fluoresces bright neon green under UV light.',
    identificationFeatures: [
      'Yellowish-tan to light brown body with two dark longitudinal stripes along the abdomen',
      'Slender pincers (pedipalps) and long slender tail with curved stinger (telson)',
      'Subaculear tooth (tiny spine) beneath the curved sting barb',
      'Fluoresces vivid electric blue-green under ultraviolet (UV / blacklight) illumination'
    ],
    size: '50 - 70 mm',
    color: ['Yellowish-tan', 'Two dark brown stripes'],
    habitat: 'Under tree bark, rock crevices, dead woodpiles, climbing brick walls, attics, shoes, bed sheets',
    activeTime: 'night',
    seasonality: 'Spring through early Autumn; climbs indoors during extreme summer heat or heavy rain',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Attic', 'Bedroom shoes', 'Baseboards', 'Shed', 'Rock landscaping', 'Patio'],
    foodSources: ['Centipedes, spiders, crickets, roaches, moths'],
    attractants: ['Crawlspace moisture, climbing rough brick veneer, undisturbed attic storage, clutter'],
    signsOfPresence: [
      'Specimens spotted climbing walls or inside bathtubs (cannot climb smooth porcelain)',
      'Luminous glow seen when scanning yard with UV blacklight after dark'
    ],
    riskLevel: 'high',
    humanRisk: 'HIGH CONCERN. Stings produce severe sharp localized pain, burning, tingling, and numbness lasting 24-72 hours. In young children or sensitive individuals, can rarely cause muscle spasms, hyper-salivation, and respiratory distress.',
    petRisk: 'Painful to dogs and cats; seek veterinary advice if stung on snout.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Outdoor predator of crickets and agricultural insect pests.',
    preventionMethods: [
      'Never walk barefoot in scorpion country, especially at night or around swimming pools',
      'Always shake out boots, shoes, towels, and clothing before putting them on',
      'Seal exterior weepholes in brick veneer using copper mesh or wire weephole covers',
      'Clear dead brush, stacked lumber, and flagstones at least 20 feet away from foundation walls'
    ],
    nonChemicalSolutions: [
      'Nighttime UV blacklight hunting: carry tongs and a secure bucket; scorpions glow brilliantly and can be safely collected or removed from property perimeter',
      'Sticky glue traps placed flat along baseboards and garage door tracks'
    ],
    professionalControlNotes: 'Recommended if multiple scorpions are repeatedly found inside living areas or climbing out of attic vents.',
    chemicalControlGeneralGuidance: 'Exterior perimeter barrier treatments with microencapsulated pyrethroids; dust attic insulation voids. Follow label.',
    safetyWarnings: [
      'DO NOT APPROACH OR TOUCH WITH BARE HANDS. Use long tongs or a wide-mouth jar.',
      'Seek prompt medical evaluation if a stung child shows agitation, involuntary eye movements, or difficulty swallowing.'
    ],
    firstAidGeneralGuidance: 'Wash the sting site with soap and water. Apply an ice pack wrapped in a cloth (10-15 minutes at a time) to numb pain and slow venom diffusion. Keep the affected limb elevated and quiet. Seek medical attention if severe pain or systemic symptoms develop. Do NOT cut the wound or apply heat.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Bark scorpion', 'Striped scorpion'],
    regionalNames: ['Escorpión rayado', 'Alacrán'],
    regions: ['north_america', 'latin_america'],
    tags: ['dangerous animal', 'scorpion', 'uv glow', 'stinger', 'pincers', 'shoes warning']
  },
  {
    id: 'centipede-house',
    commonName: 'House Centipede',
    scientificName: 'Scutigera coleoptrata',
    category: 'myriapods',
    subCategory: 'Centipedes',
    description: 'Extremely fast, alien-looking yellowish-gray creature with 15 pairs of long striped legs; voracious nocturnal predator of indoor insect pests.',
    identificationFeatures: [
      '15 pairs of remarkably long, delicate banded legs (last pair on females is twice body length)',
      'Yellowish-gray body with three dark longitudinal stripes down the back',
      'Extremely rapid darting locomotion across walls and floors; stops suddenly',
      'Modified front legs form venom claws (forcipules) behind head'
    ],
    size: '25 - 38 mm body (with legs up to 75 mm)',
    color: ['Yellowish-gray', 'Dark stripes', 'Banded legs'],
    habitat: 'Damp basements, bathrooms, laundry rooms, crawlspaces, behind bathtubs',
    activeTime: 'night',
    seasonality: 'Year-round indoors; most visible in spring and autumn',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Basement', 'Bathroom', 'Sink', 'Bathtub', 'Laundry room'],
    foodSources: ['Silverfish, cockroach nymphs, carpet beetle larvae, bed bugs, spiders, flies'],
    attractants: ['High indoor humidity, abundant insect prey in crawlspaces, cool damp tiles'],
    signsOfPresence: [
      'Sudden rapid blur darting across the bathroom floor or wall when lights are turned on',
      'Specimen trapped in porcelain sink or bathtub unable to scale smooth vertical surfaces'
    ],
    riskLevel: 'low',
    humanRisk: 'Practically harmless to humans. Rarely bites unless squeezed in clothing; venom claws are weak and bite feels like a minor bee sting with temporary redness.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'EXCEPTIONAL NATURAL PEST HUNTER. Considered the "ultimate indoor insect predator"—actively hunts and exterminates bed bugs, silverfish, roaches, and termites for free!',
    preventionMethods: [
      'Run a dehumidifier in basements to keep relative humidity under 50%',
      'Use bathroom exhaust fans to eliminate moist humid air after showers',
      'Seal crevices around basement pipe chases and foundation sills'
    ],
    nonChemicalSolutions: [
      'Catch with a glass cup and piece of mail, and release into the garden or an out-of-the-way basement corner',
      'Eliminate the underlying prey insects (roaches, silverfish) that attract them'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'Spraying pesticides for house centipedes is not recommended; addressing indoor dampness naturally clears them.',
    safetyWarnings: ['Though visually startling due to numerous legs, it is harmless and actively helps protect your home from true pests.'],
    firstAidGeneralGuidance: 'Wash with soap and water if pinched.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Scutigera', 'Hundred-legger', 'Leggy bug'],
    regionalNames: ['Ciempiés doméstico'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['fast legs', 'bathroom bug', 'beneficial predator', 'silverfish eater', 'harmless alien bug']
  },
  {
    id: 'millipede-greenhouse',
    commonName: 'Greenhouse Millipede',
    scientificName: 'Oxidus gracilis',
    category: 'myriapods',
    subCategory: 'Millipedes',
    description: 'Slow-moving, dark brown worm-like arthropod with two pairs of short legs per body segment; curls into a tight protective coil when disturbed and eats decaying mulch.',
    identificationFeatures: [
      'Elongated, segmented cylindrical or flattened body with TWO PAIRS of legs on each body segment',
      'Short legs tucked beneath body, moves slowly in a wave-like motion (unlike fast centipedes)',
      'Tightly curles into a spiral ("watch spring") when touched or dead',
      'Lacks venom claws; completely non-biting'
    ],
    size: '18 - 25 mm',
    color: ['Dark brown', 'Blackish with pale yellow edges'],
    habitat: 'Damp mulch beds, decaying leaf piles, compost heaps, under flowerpots, entering basements after heavy rain',
    activeTime: 'night',
    seasonality: 'Spring and Autumn; mass migrations into basements after heavy rain saturates soil',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden mulch', 'Basement floor', 'Patios', 'Foundation wall', 'Garage'],
    foodSources: ['Decaying organic plant matter, wet leaf compost, decaying mulch'],
    attractants: ['Saturated outdoor soil, thick damp wood mulch against foundation, decomposing compost'],
    signsOfPresence: [
      'Clusters of slow-moving millipedes crawling across patio stones or basement floors',
      'Dead curled-up brown spirals along basement baseboards (they desiccate and die quickly indoors)'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless; cannot bite or sting. Some species emit a faint defensive liquid containing trace benzoquinones that can cause mild skin discoloration or eye irritation if rubbed into eyes.',
    petRisk: 'Low; bad taste deters pets from swallowing.',
    propertyRisk: 'None (dies within 24-48 hours inside dry residential air).',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'Feeds primarily on dead matter; rarely nibbles tender overripe strawberries.',
    beneficialStatus: 'Outstanding outdoor soil aerator and recycler of decaying forest leaf litter.',
    preventionMethods: [
      'Maintain an 18-inch bare buffer strip between organic garden mulch and the home’s foundation wall',
      'Ensure foundation exterior drainage slopes away from walls to prevent soil waterlogging',
      'Seal basement window gaps and install rubber door sweeps on exterior thresholds'
    ],
    nonChemicalSolutions: [
      'Sweep or vacuum dry curled specimens from basement floors and discard outside',
      'Allow outdoor topsoil and mulch to dry out between waterings'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'Outdoor perimeter foundation barrier treatments are occasionally applied during massive autumn migration events.',
    safetyWarnings: ['Wash hands after handling to avoid rubbing defensive scents into eyes.'],
    firstAidGeneralGuidance: 'Wash hands with soap and water.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Thousand-legger', 'Garden millipede', 'Spiral bug'],
    regionalNames: ['Milpiés'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['curled spiral', 'slow moving', 'two leg pairs', 'damp mulch', 'decomposer', 'harmless']
  }
];
