import { Pest } from '../../types/pest';

export const WASPS_BEES_OTHERS: Pest[] = [
  {
    id: 'wasp-paper',
    commonName: 'Paper Wasp',
    scientificName: 'Polistes dominula / fuscatus',
    category: 'insects',
    subCategory: 'Wasps',
    description: 'Slender, long-legged social wasps that construct open, umbrella-shaped paper nests under roof eaves, window frames, and porch railings.',
    identificationFeatures: [
      'Slender brownish-black or yellow-banded body with narrow pinched "wasp waist"',
      'Trailing long legs hanging down conspicuously during flight',
      'Open hexagonal comb paper nest without an outer protective envelope (cells directly visible)'
    ],
    size: '15 - 25 mm',
    color: ['Brownish-black', 'Yellow bands', 'Reddish markings'],
    habitat: 'Under roof eaves, porch ceilings, window frames, attic louvers, outdoor play sets',
    activeTime: 'day',
    seasonality: 'Spring through early Autumn; fertilized queens hibernate indoors in winter',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Roof eaves', 'Balcony', 'Porch', 'Attic', 'Window frame'],
    foodSources: ['Adults consume nectar; larvae are fed captured garden caterpillars and insect pests'],
    attractants: ['Sheltered roof overhangs, sweet drinks, hummingbird feeders, garden caterpillar prey'],
    signsOfPresence: ['Visible grey umbrella-like paper nest hanging by a single stalk under roof soffits'],
    riskLevel: 'moderate',
    humanRisk: 'Capable of multiple painful defensive stings if the nest is approached or disturbed within a few feet. Can induce severe allergic anaphylaxis in sensitized individuals.',
    petRisk: 'Moderate; pets curious about low nests may be stung on the muzzle.',
    propertyRisk: 'None structural.',
    foodContaminationRisk: 'Low; occasionally forages on outdoor picnic food.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Highly beneficial in vegetable gardens; voracious predators of hornworms and caterpillars.',
    preventionMethods: [
      'Inspect roof eaves and window frames in early spring to spot and knock down small queen starter nests before workers hatch',
      'Screen attic and crawlspace vents with 1/8-inch wire mesh',
      'Seal cracks around door trims and porch ceiling soffits'
    ],
    nonChemicalSolutions: [
      'If the nest is high in a tree or far away from human doors, leave it alone as a beneficial garden predator',
      'Early spring physical removal of tiny starter nests at night using a long broom pole while wearing protective clothing'
    ],
    professionalControlNotes: 'Professional pest control or removal is recommended if the nest is located immediately adjacent to high-traffic doorways, schools, or in homes with wasp-allergic residents.',
    chemicalControlGeneralGuidance: 'If control is essential, use labeled aerosol jet sprays with 20-foot reach applied at dusk or night when all wasps are resting quietly on the nest. Stand clear and do not stand directly beneath.',
    safetyWarnings: [
      'Never attempt to remove an active nest with children or pets nearby.',
      'Seek immediate emergency medical help (call emergency services) if a sting recipient exhibits hives, wheezing, throat tightness, or dizziness.'
    ],
    firstAidGeneralGuidance: 'Wash sting site with soap and cold water. Apply cold ice pack wrapped in a cloth for 15 minutes. Take oral antihistamine if local swelling occurs. Never squeeze the sting site.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Umbrella wasp', 'Polistes wasp'],
    regionalNames: ['Avispa papelera'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['stinging insect', 'umbrella nest', 'roof eaves', 'pinched waist', 'trailing legs']
  },
  {
    id: 'wasp-yellowjacket',
    commonName: 'Yellowjacket',
    scientificName: 'Vespula vulgaris / germanica',
    category: 'insects',
    subCategory: 'Wasps',
    description: 'Aggressive, fast-flying social wasps with bright yellow and black bands; build concealed nests underground, inside wall cavities, or in dense shrubs.',
    identificationFeatures: [
      'Compact, stout black body with vivid jagged bright yellow bands',
      'Shorter legs held tucked tightly against body during flight (does NOT trail legs)',
      'Constructs enclosed multi-tiered paper nests inside ground rodent burrows or wall voids'
    ],
    size: '10 - 16 mm',
    color: ['Vivid yellow', 'Jet black'],
    habitat: 'Old underground rodent burrows, wall voids, hollow concrete blocks, dense evergreen shrubs',
    activeTime: 'day',
    seasonality: 'Late summer to Autumn peak (when colonies reach thousands of aggressive workers)',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden lawn', 'Wall cavity', 'Patio', 'Outdoor dining', 'Garbage area'],
    foodSources: ['Late season: scavenges sugars, soda, fruit juice, grilled meat, garbage; spring: insects'],
    attractants: ['Outdoor barbecue meats, open sweet beverage cans, rotting fruit, open trash dumpsters'],
    signsOfPresence: [
      'Rapid stream of yellow and black wasps entering and exiting a single hole in the lawn soil or siding seam',
      'Chewing sounds inside a bedroom drywall in late summer as the nest expands'
    ],
    riskLevel: 'high',
    humanRisk: 'Highly aggressive nest defense. They sting repeatedly without losing their stinger and emit alarm pheromones recruiting dozens of attackers. Frequent cause of severe anaphylactic shock.',
    petRisk: 'High for dogs and farm animals walking over ground nests.',
    propertyRisk: 'Can chew through interior drywall into living rooms when nesting inside exterior wall voids.',
    foodContaminationRisk: 'High at outdoor dining and bakeries.',
    plantDamageRisk: 'Feeds on ripe grapes and fruit.',
    beneficialStatus: 'Feeds on garden pests in early summer.',
    preventionMethods: [
      'Keep outdoor trash and recycling bins covered with tight spring-loaded lids',
      'Pick up fallen fruit beneath fruit trees promptly',
      'Inspect lawn for rodent holes in early spring before colonies form',
      'Drink from clear cups or straws at outdoor picnics to prevent swallowing a wasp concealed inside a soda can'
    ],
    nonChemicalSolutions: [
      'Deploy commercial yellowjacket rescue traps placed around property perimeter 20 feet away from patios in early summer'
    ],
    professionalControlNotes: 'Highly recommended for ground nests near walkways and mandatory for colonies inside wall voids. Never plug an exterior wall hole while wasps are active, as they will chew into the house!',
    chemicalControlGeneralGuidance: 'Ground nests can be treated at night with labeled insecticidal dust applied into the entrance hole. Professional handling advised.',
    safetyWarnings: [
      'NEVER plug a wasp entrance hole in your exterior wall siding; wasps will chew directly through your interior drywall into your living room!',
      'Mowing over an unnoticed ground nest frequently causes dozens of severe stings.'
    ],
    firstAidGeneralGuidance: 'Immediately leave the area in a straight line protecting face. Wash stings; ice packs. Administer epinephrine auto-injector immediately if known allergy or systemic symptoms occur.',
    imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Meat wasp', 'Yellow jacket', 'Ground hornet'],
    regionalNames: ['Avispa chaqueta amarilla'],
    regions: ['north_america', 'europe', 'australia', 'global'],
    tags: ['aggressive wasp', 'ground nest', 'wall void', 'yellow bands', 'multiple stings', 'soda can']
  },
  {
    id: 'bee-honey',
    commonName: 'Western Honey Bee',
    scientificName: 'Apis mellifera',
    category: 'insects',
    subCategory: 'Bees',
    description: 'Golden-amber, fuzzy, ecologically indispensable pollinators; live in perennial colonies producing wax combs and honey. Protected and should be live-relocated.',
    identificationFeatures: [
      'Golden-brown or amber abdomen with dark bands, covered in fine velvety hairs',
      'Flattened hind legs with a pollen basket (corbicula) often packed with yellow/orange pollen pellets',
      'Barbed stinger that detaches upon stinging, resulting in the bee’s death',
      'Gentle unless hive is actively provoked or threatened'
    ],
    size: '12 - 15 mm',
    color: ['Golden amber', 'Brownish-black', 'Yellowish fuzz'],
    habitat: 'Hollow tree trunks, managed apiary hives, occasionally building cavity nests in soffits or chimney voids',
    activeTime: 'day',
    seasonality: 'Spring through early Autumn foraging; active inside cluster during winter',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Flowering trees', 'Chimney', 'Wall soffit', 'Apiary'],
    foodSources: ['Flower nectar and pollen'],
    attractants: ['Flowering garden blossoms, sweet fruit trees, open sugar syrups, bird baths'],
    signsOfPresence: [
      'Steady flight of bees visiting flowers',
      'Spring swarm: a large clustered mass of thousands of bees temporarily resting on a tree branch for 24-48 hours while scouts find a home',
      'Bees entering chimney or soffit gaps with wax comb inside'
    ],
    riskLevel: 'moderate',
    humanRisk: 'Defensive sting if stepped on or near hive. Leaves barbed stinger in skin pumping venom. Can cause anaphylaxis in allergic individuals.',
    petRisk: 'Moderate if stepped on in clover lawns.',
    propertyRisk: 'Honey and wax inside structural walls can melt and ferment if colony dies, staining drywall.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None; essential pollinator that dramatically increases fruit and vegetable yields.',
    beneficialStatus: 'CRITICAL GLOBAL POLLINATOR. Ecologically and agriculturally essential. Never kill with pesticide.',
    preventionMethods: [
      'Seal exterior fascia gaps, chimney caps, and attic vents with tight wire screening before spring swarm season',
      'Caulk siding knot holes and electrical utility entries'
    ],
    nonChemicalSolutions: [
      'CONTACT A LOCAL BEEKEEPER: Most beekeeping associations provide free or low-cost live swarm collection and structural cut-out relocation to place bees in apiaries!',
      'Swarm clusters on tree branches usually move away on their own within 24 to 48 hours without any intervention'
    ],
    professionalControlNotes: 'ALWAYS contact a certified local beekeeper or humane live bee relocation specialist. Never spray pesticides on honey bee swarms or colonies.',
    chemicalControlGeneralGuidance: 'PESTICIDES SHOULD NOT BE USED ON HONEY BEES. In many jurisdictions, spraying honey bees is restricted or prohibited.',
    safetyWarnings: [
      'DO NOT SPRAY OR POISON HONEY BEES. Contact a local beekeeping association for humane live rescue.',
      'Keep pets and children at a safe distance from clustered swarms until the beekeeper arrives.'
    ],
    firstAidGeneralGuidance: 'Immediately scrape away the barbed stinger using a fingernail or credit card edge—do NOT pinch with tweezers, which squeezes the venom sac into the skin. Wash with soap and water, apply cold pack. Seek immediate emergency care if allergic.',
    imageUrls: ['https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Honeybee', 'European honey bee'],
    regionalNames: ['Abeja melífera', 'Madhumakkhi'],
    regions: ['global', 'north_america', 'europe', 'india', 'southeast_asia', 'australia'],
    tags: ['honeybee', 'beneficial pollinator', 'live relocation', 'do not kill', 'pollen basket', 'swarm']
  },
  {
    id: 'bee-carpenter',
    commonName: 'Eastern Carpenter Bee',
    scientificName: 'Xylocopa virginica',
    category: 'insects',
    subCategory: 'Bees',
    description: 'Large, robust, solitary bees resembling bumblebees, but with a shiny, hairless black abdomen; bore perfectly round 1/2-inch tunnels into bare exterior wood.',
    identificationFeatures: [
      'Large, heavy-bodied bee with dense yellow/white fuzz on thorax',
      'ABDOMEN IS SHINY, SMOOTH, AND JET BLACK (unlike fuzzy bumblebee abdomens)',
      'Males have a pale yellow/white spot on their face and CANNOT sting',
      'Females possess a stinger but are very docile and rarely sting unless squeezed'
    ],
    size: '19 - 25 mm',
    color: ['Yellow fuzzy thorax', 'Shiny jet-black abdomen'],
    habitat: 'Unpainted, weathered exterior wood: deck railings, fascia boards, eaves, cedar shakes, wooden lawn furniture',
    activeTime: 'day',
    seasonality: 'Spring and summer; males hover territorially in April-May',
    foundIndoors: false,
    foundOutdoors: true,
    commonLocations: ['Deck railing', 'Fascia board', 'Wooden shed', 'Porch eaves'],
    foodSources: ['Flower nectar and pollen (pollinates open blossoms and garden crops)'],
    attractants: ['Bare, unpainted, weathered softwoods (cedar, redwood, pine, cypress)'],
    signsOfPresence: [
      'Perfect 1/2-inch (12 mm) circular holes drilled into the underside of deck railings or eaves (looks like an electric drill hole)',
      'Yellowish coarse sawdust (frass) dusting the patio beneath hole',
      'Male bees dive-bombing harmlessly near human heads in spring'
    ],
    riskLevel: 'low',
    humanRisk: 'Extremely low. Males have no stinger; females sting only if physically handled or crushed.',
    petRisk: 'Very low.',
    propertyRisk: 'Cosmetic to moderate structural damage over many years if tunnels are repeatedly reused and deepened by subsequent generations.',
    foodContaminationRisk: 'None.',
    plantDamageRisk: 'None; excellent native pollinator.',
    beneficialStatus: 'Valuable native pollinator of passionflower, tomatoes, eggplants, and native wildflowers.',
    preventionMethods: [
      'Paint or apply high-solids polyurethane stain to all exterior timber (carpenter bees prefer bare, unsealed wood)',
      'Fill old abandoned drill tunnels with 1/2-inch wooden dowels glued in place, then paint over the surface',
      'Use composite or pressure-treated lumber for outdoor decks'
    ],
    nonChemicalSolutions: [
      'Hang wooden carpenter bee traps near high-activity eaves in early spring',
      'Seal entrance holes with wooden plugs or steel wool in autumn after offspring emerge'
    ],
    professionalControlNotes: 'Rarely needed unless extensive tunnel arrays weaken porch support timbers.',
    chemicalControlGeneralGuidance: 'Puff a small amount of labeled desiccant dust into active holes in autumn, wait 24 hours, and seal permanently with a wooden dowel.',
    safetyWarnings: ['Do not harm male bees hovering near your face; they are completely stingless and are defending mating territory.'],
    firstAidGeneralGuidance: 'Standard wash and cool compress if a female is accidentally squeezed.',
    imageUrls: ['https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Wood bee', 'Drill bee'],
    regionalNames: ['Abeja carpintera'],
    regions: ['north_america', 'europe', 'india', 'global'],
    tags: ['round drill hole', 'wood bee', 'shiny black abdomen', 'deck railing', 'pollinator']
  },
  {
    id: 'insect-silverfish',
    commonName: 'Common Silverfish',
    scientificName: 'Lepisma saccharinum',
    category: 'insects',
    subCategory: 'Silverfish',
    description: 'Silvery-gray, wingless, carrot-shaped insects with rapid fish-like wriggling movements; thrive in high humidity, feeding on starches, paper, and glues.',
    identificationFeatures: [
      'Silvery metallic fish-like scales',
      'Tapered carrot-shaped body, widest at head and narrow at tail',
      'Three long bristle-like filaments (cerci) extending from tail end',
      'Two long antennae, fast undulating swimming motion across floors'
    ],
    size: '12 - 19 mm',
    color: ['Silvery gray', 'Metallic sheen'],
    habitat: 'Bathrooms, damp basements, attics, bookshelves, laundry rooms, behind baseboards',
    activeTime: 'night',
    seasonality: 'Year-round indoors in humid spaces',
    foundIndoors: true,
    foundOutdoors: false,
    commonLocations: ['Bathroom', 'Basement', 'Bookshelf', 'Storage boxes', 'Closet'],
    foodSources: ['Starches, carbohydrates, wallpaper paste, bookbinding glue, photo paper, linen, sugar'],
    attractants: ['High relative humidity (above 70%), damp cardboard, undisturbed paper archives'],
    signsOfPresence: [
      'Fast silvery insects darting away when a bathroom light is turned on at night',
      'Irregular yellow stains and tiny scraped surface etchings on paper, books, and wallpaper',
      'Tiny black pepper-like droppings on stored documents'
    ],
    riskLevel: 'low',
    humanRisk: 'Completely harmless to humans; cannot bite, sting, or transmit pathogens.',
    petRisk: 'Completely harmless to pets.',
    propertyRisk: 'Minor to moderate damage to books, rare documents, wallpaper, and stored fabrics.',
    foodContaminationRisk: 'Low; occasionally contaminates opened dry carbohydrate foods.',
    plantDamageRisk: 'None.',
    beneficialStatus: 'Outdoor scavenger of decomposing organic matter.',
    preventionMethods: [
      'Use bathroom exhaust fans during and for 20 minutes after hot showers',
      'Run a dehumidifier in basements to keep relative humidity below 50% (silverfish nymphs cannot survive in dry air)',
      'Store old books, photo albums, and documents in plastic airtight storage bins rather than cardboard boxes',
      'Fix dripping pipe fixtures and wipe standing puddles around tubs'
    ],
    nonChemicalSolutions: [
      'Dehumidification and moisture reduction is the single most effective permanent remedy',
      'Sticky insect glue boards placed along bathroom baseboards and behind toilets',
      'Light dusting of food-grade diatomaceous earth in dry baseboard gaps'
    ],
    professionalControlNotes: 'Not needed for residential properties; resolving humidity clears them.',
    chemicalControlGeneralGuidance: 'Chemical sprays are rarely warranted when moisture is corrected.',
    safetyWarnings: ['Avoid breathing dust when applying diatomaceous earth.'],
    firstAidGeneralGuidance: 'None needed.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Bristletail', 'Fishmoth', 'Silver insect'],
    regionalNames: ['Pececillo de plata'],
    regions: ['global', 'north_america', 'europe', 'india', 'australia'],
    tags: ['silver insect', 'bathroom floor', 'fast wriggle', 'paper damage', 'humidity', 'three tails']
  },
  {
    id: 'insect-earwig',
    commonName: 'European Earwig',
    scientificName: 'Forficula auricularia',
    category: 'insects',
    subCategory: 'Earwigs',
    description: 'Elongated brownish insects possessing prominent, intimidating pincers (forceps) at the tail tip; nocturnal scavengers of damp garden mulch and decayed leaves.',
    identificationFeatures: [
      'Elongated reddish-brown flattened body',
      'Prominent curved tail pincers (cerci): strongly curved in males, straight in females',
      'Short leathery forewings with delicate fan-like hindwings tucked beneath',
      'Thread-like antennae'
    ],
    size: '12 - 20 mm',
    color: ['Dark reddish-brown', 'Yellowish legs'],
    habitat: 'Damp mulch, leaf litter, under flowerpots, beneath stepping stones, entering ground-floor bathrooms',
    activeTime: 'night',
    seasonality: 'Summer through early Autumn',
    foundIndoors: true,
    foundOutdoors: true,
    commonLocations: ['Garden', 'Bathroom', 'Basement', 'Under flowerpots', 'Patio'],
    foodSources: ['Decaying organic plant matter, dead insects, aphids, tender flower petals (dahlias, zinnias)'],
    attractants: ['Moist mulch, damp laundry piles, wet damp wood, decaying compost'],
    signsOfPresence: [
      'Insects scurrying from beneath flowerpots when lifted',
      'Ragged holes in outdoor vegetable and dahlia petals',
      'Occasional indoor specimens trapped in damp bathtubs'
    ],
    riskLevel: 'low',
    humanRisk: 'Harmless. Old myth about crawling into human ears to lay eggs is completely false. Pincers can deliver a tiny harmless pinch if trapped in clothing.',
    petRisk: 'Harmless to pets.',
    propertyRisk: 'None.',
    foodContaminationRisk: 'Low; non-filth.',
    plantDamageRisk: 'Chews irregular holes in tender garden flowers and seedlings.',
    beneficialStatus: 'Outdoor beneficial predator that consumes significant quantities of pest aphids and insect eggs.',
    preventionMethods: [
      'Keep damp organic mulch and dense leaf piles at least 12 inches away from building foundation walls',
      'Ensure foundation door sweeps and basement window seals are tight',
      'Elevate outdoor flowerpots on pot feet to reduce damp contact zones'
    ],
    nonChemicalSolutions: [
      'Rolled damp newspaper or corrugated cardboard tubes placed in garden beds at dusk; collect earwigs in the morning and shake into soapy water',
      'Tuna can trap filled with 1/2 inch of vegetable oil and a drop of soy sauce buried flush with garden soil'
    ],
    professionalControlNotes: 'Not needed.',
    chemicalControlGeneralGuidance: 'Targeted outdoor perimeter granules if large populations overwhelm garden seedlings.',
    safetyWarnings: ['Do not believe myths regarding ears.'],
    firstAidGeneralGuidance: 'Wash with soap and water if pinched.',
    imageUrls: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80'],
    aliases: ['Pincher bug', 'Forficula'],
    regionalNames: ['Tijereta'],
    regions: ['global', 'europe', 'north_america', 'australia'],
    tags: ['tail pincers', 'pincher bug', 'damp garden', 'flowerpot', 'harmless']
  }
];
