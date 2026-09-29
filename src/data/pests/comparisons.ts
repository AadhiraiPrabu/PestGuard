import { PestComparison } from '../../types/pest';

export const PEST_COMPARISONS: PestComparison[] = [
  {
    id: 'bee-vs-wasp',
    title: 'Bee vs Wasp',
    pestAId: 'bee-honey',
    pestBId: 'wasp-paper',
    speciesA: 'Western Honey Bee (Apis mellifera)',
    speciesB: 'Paper Wasp / Yellowjacket (Vespula / Polistes)',
    keyDifferentiators: 'Bees are fuzzy, robust pollinators that sting once and die; wasps are smooth, slender carnivores with pinched waists that can sting repeatedly.',
    comparisonRows: [
      {
        feature: 'Body Texture & Appearance',
        speciesAValue: 'Fuzzy, hairy, rounded thorax and abdomen with velvety hair',
        speciesBValue: 'Smooth, shiny, almost hairless with bright stark contrasting patterns',
        significance: 'Hairs on bees are specialized for collecting pollen'
      },
      {
        feature: 'Waist & Silhouette',
        speciesAValue: 'Thick, compact waist; legs held tucked close to body',
        speciesBValue: 'Narrow, sharply pinched "wasp waist"; long trailing legs (paper wasps)',
        significance: 'Wasp waist allows extreme abdominal flexibility for stinging'
      },
      {
        feature: 'Diet & Feeding',
        speciesAValue: 'Vegetarian: strictly flower nectar and pollen',
        speciesBValue: 'Carnivorous/Scavenger: eats meat, caterpillars, soda, fruit, spiders',
        significance: 'Wasps are drawn to barbecues and open soda cans; bees visit flowers'
      },
      {
        feature: 'Stinging Mechanism',
        speciesAValue: 'Barbed stinger; pulls out of bee when stinging mammals, killing the bee',
        speciesBValue: 'Smooth stinger; does not detach, allowing repeated stinging',
        significance: 'Scrape bee stingers off; never squeeze venom sacs'
      },
      {
        feature: 'Ecological Status & Action',
        speciesAValue: 'CRITICAL POLLINATOR: Protected, call beekeeper for live rescue',
        speciesBValue: 'Beneficial predator of garden bugs, but aggressive near doorways',
        significance: 'Never spray honeybees with chemical insecticides'
      }
    ]
  },
  {
    id: 'centipede-vs-millipede',
    title: 'Centipede vs Millipede',
    pestAId: 'centipede-house',
    pestBId: 'millipede-greenhouse',
    speciesA: 'House Centipede (Chilopoda)',
    speciesB: 'Millipede (Diplopoda)',
    keyDifferentiators: 'Centipedes are fast, flat nocturnal carnivores with 1 pair of legs per segment; millipedes are slow, cylindrical vegetarian recyclers with 2 pairs of legs per segment that curl into tight coils.',
    comparisonRows: [
      {
        feature: 'Legs per Body Segment',
        speciesAValue: 'ONE pair of legs per body segment, sticking out laterally',
        speciesBValue: 'TWO pairs of legs per body segment, positioned underneath body',
        significance: 'Definitive anatomical identifier'
      },
      {
        feature: 'Speed & Movement',
        speciesAValue: 'Extremely fast, agile sprint across walls and floors; sudden stops',
        speciesBValue: 'Slow, steady, wave-like crawling across ground',
        significance: 'Centipedes actively chase fleeing insect prey'
      },
      {
        feature: 'Defense Reaction',
        speciesAValue: 'Darts away at top speed; bites defensively with venom claws if squeezed',
        speciesBValue: 'Tightly curls into a spiral watch-spring coil; secretes defensive odor',
        significance: 'Millipedes never bite or sting'
      },
      {
        feature: 'Diet',
        speciesAValue: 'Carnivore: hunts roaches, silverfish, bed bugs, and spiders',
        speciesBValue: 'Herbivore/Detritivore: feeds on damp mulch, decaying leaves, and compost',
        significance: 'Centipedes are natural household pest hunters; millipedes are soil composters'
      },
      {
        feature: 'Household Impact',
        speciesAValue: 'Harmless beneficial bug hunter in basements and bathrooms',
        speciesBValue: 'Nuisance invader after heavy rains; desiccates and dies quickly indoors',
        significance: 'Both indicate high moisture; neither causes structural damage'
      }
    ]
  },
  {
    id: 'termite-vs-flying-ant',
    title: 'Termite Swarmer vs Flying Ant',
    pestAId: 'termite-subterranean',
    pestBId: 'ant-black-carpenter',
    speciesA: 'Termite Alate (Swarmer)',
    speciesB: 'Winged Reproductive Ant',
    keyDifferentiators: 'Termites have broad waists, straight beaded antennae, and 4 wings of equal length; winged ants have pinched waists, elbowed antennae, and shorter hind wings.',
    comparisonRows: [
      {
        feature: 'Waist (Body Constriction)',
        speciesAValue: 'Broad, uniform waist; head, thorax, and abdomen blend smoothly',
        speciesBValue: 'Pinched, narrow waist (petiole with 1 or 2 distinct nodes)',
        significance: 'Immediate visual differentiator even with naked eye'
      },
      {
        feature: 'Antennae Shape',
        speciesAValue: 'Straight and beaded like a string of miniature pearls',
        speciesBValue: 'Elbowed (bent at a sharp angle like an arm at the elbow)',
        significance: 'Characteristic family difference'
      },
      {
        feature: 'Wing Structure',
        speciesAValue: 'Both front and hind wings are IDENTICAL IN SIZE, long, and milky-white',
        speciesBValue: 'Front wings are significantly LARGER than the smaller hind wings',
        significance: 'Termites shed wings easily; look for piles of discarded equal-length wings'
      },
      {
        feature: 'Wood Impact',
        speciesAValue: 'CONSUMES cellulose wood fibers internally, leaving hollow structural voids',
        speciesBValue: 'EXCAVATES galleries in damp wood, pushing out coarse sawdust (frass)',
        significance: 'Termites cause catastrophic hidden structural destruction'
      }
    ]
  },
  {
    id: 'mouse-vs-rat',
    title: 'House Mouse vs Norway Rat',
    pestAId: 'rodent-house-mouse',
    pestBId: 'rodent-norway-rat',
    speciesA: 'House Mouse (Mus musculus)',
    speciesB: 'Norway Rat (Rattus norvegicus)',
    keyDifferentiators: 'Mice are tiny (20g) with large ears and pointed muzzles; rats are large, heavy (400g) with blunt snouts, small ears, and thick scaly tails shorter than body.',
    comparisonRows: [
      {
        feature: 'Adult Weight & Body Size',
        speciesAValue: '15 - 30 grams; 65 - 90 mm body length (slender)',
        speciesBValue: '250 - 500 grams; 190 - 250 mm body length (heavy, stout)',
        significance: 'Adult rats are 10-20 times heavier than mice'
      },
      {
        feature: 'Ears & Muzzle',
        speciesAValue: 'Large rounded ears; sharp, delicate pointed triangular snout',
        speciesBValue: 'Small, close-set ears with hairs; broad, blunt rounded muzzle',
        significance: 'Young rats have disproportionately huge feet and thick heads compared to mice'
      },
      {
        feature: 'Dropping Identification',
        speciesAValue: 'Small, thin, pointed rods (3 - 6 mm / caraway seed size)',
        speciesBValue: 'Large, blunt, thick capsules (12 - 20 mm / 3/4 inch size)',
        significance: 'Crucial for selecting the correct trap size and placement'
      },
      {
        feature: 'Behavior & Curiosity',
        speciesAValue: 'Curious ("neophilic"): readily investigates new traps and baits within minutes',
        speciesBValue: 'Suspicious ("neophobic"): avoids new objects or unfamiliar traps for days',
        significance: 'Rat traps must be pre-baited unset for several days before setting'
      }
    ]
  },
  {
    id: 'bedbug-vs-flea',
    title: 'Bed Bug vs Flea',
    pestAId: 'bedbug-common',
    pestBId: 'flea-cat',
    speciesA: 'Bed Bug (Cimex lectularius)',
    speciesB: 'Cat Flea (Ctenocephalides felis)',
    keyDifferentiators: 'Bed bugs are horizontally flat like apple seeds and crawl on mattresses; fleas are vertically flattened jumping parasites that live in pet fur and carpets.',
    comparisonRows: [
      {
        feature: 'Body Compression',
        speciesAValue: 'Dorso-ventrally flattened (flat top-to-bottom like an apple seed or pancake)',
        speciesBValue: 'Laterally compressed (flattened side-to-side like a thin coin)',
        significance: 'Flea shape facilitates effortless gliding through dense animal fur'
      },
      {
        feature: 'Locomotion',
        speciesAValue: 'Crawls moderately fast; CANNOT jump or fly',
        speciesBValue: 'Power jumper: leaps up to 7 inches vertically using rubbery resilin pads',
        significance: 'If the insect jumps off the floor or mattress, it is a flea, NOT a bed bug'
      },
      {
        feature: 'Primary Habitat',
        speciesAValue: 'Mattress seams, headboards, bed frames, electrical outlets near humans',
        speciesBValue: 'Dog and cat fur, pet blankets, carpet pile, garden shaded dirt',
        significance: 'Bed bugs prefer humans; fleas prefer dogs and cats'
      },
      {
        feature: 'Bite Patterns',
        speciesAValue: 'Exposed upper body (arms, shoulders, neck); often grouped in lines of 3',
        speciesBValue: 'Lower legs, ankles, and shins; scattered random tiny itchy red dots',
        significance: 'Ankle bites strongly point toward fleas in the carpet'
      }
    ]
  },
  {
    id: 'lizard-vs-skink',
    title: 'House Gecko vs Garden Skink',
    pestAId: 'reptile-house-gecko',
    pestBId: 'reptile-house-gecko',
    speciesA: 'Common House Gecko (Gekkonidae)',
    speciesB: 'Garden Skink (Scincidae)',
    keyDifferentiators: 'Geckos have soft, granular skin, lidless vertical-slit eyes, and climbing toe pads; skinks have shiny smooth metallic scales, movable eyelids, and small ground-dwelling limbs.',
    comparisonRows: [
      {
        feature: 'Skin Texture',
        speciesAValue: 'Soft, delicate, granular or warty translucent skin with no glossy sheen',
        speciesBValue: 'Smooth, shiny, overlapping polished scales resembling a fish or snake',
        significance: 'Smooth scales allow skinks to burrow effortlessly in garden mulch'
      },
      {
        feature: 'Eyes & Eyelids',
        speciesAValue: 'Large lidless eyes with vertical slit pupils; licks clear spectacle to clean',
        speciesBValue: 'Movable eyelids that blink; round diurnal pupils',
        significance: 'Geckos hunt at night; skinks hunt during sunny daytime hours'
      },
      {
        feature: 'Toe Pads & Climbing',
        speciesAValue: 'Expanded toe pads with microscopic lamellae; runs up glass and across ceilings',
        speciesBValue: 'Clawed slender toes with no expanded pads; ground dweller, poor wall climber',
        significance: 'Lizards on ceilings are geckos; lizards under garden mulch are skinks'
      },
      {
        feature: 'Safety & Utility',
        speciesAValue: 'Completely harmless; outstanding indoor mosquito predator',
        speciesBValue: 'Completely harmless; feeds on garden slugs, crickets, and beetles',
        significance: 'Both are beneficial, non-venomous reptiles that should never be harmed'
      }
    ]
  },
  {
    id: 'black-widow-vs-house-spider',
    title: 'Black Widow vs Common House Spider',
    pestAId: 'spider-black-widow',
    pestBId: 'spider-wolf-carolina',
    speciesA: 'Southern Black Widow (Latrodectus mactans)',
    speciesB: 'Common House Spider (Parasteatoda tepidariorum)',
    keyDifferentiators: 'Black widows are glossy jet-black with a vivid red ventral hourglass and potent neurotoxic venom; common house spiders are mottled tan/brown and completely medically harmless.',
    comparisonRows: [
      {
        feature: 'Coloration & Sheen',
        speciesAValue: 'Shiny, patent-leather glossy jet black with stark bright red hourglass',
        speciesBValue: 'Dull, mottled gray, tan, yellowish-brown with broken chevrons',
        significance: 'Glossy black sheen is an immediate warning cue for black widows'
      },
      {
        feature: 'Egg Sac Texture',
        speciesAValue: 'Smooth, tight, paper-like round sphere (like a marble or ping-pong ball)',
        speciesBValue: 'Papery teardrop or flask-shaped tan sac suspended in the cobweb',
        significance: 'Egg sac shape reliably confirms identification even if the mother is hiding'
      },
      {
        feature: 'Venom Toxicity',
        speciesAValue: 'MEDICALLY SIGNIFICANT neurotoxin (latrotoxin); requires emergency evaluation',
        speciesBValue: 'MEDICALLY HARMLESS; mild bite comparable to a minor mosquito nip',
        significance: 'Never attempt bare-handed handling of glossy black spiders'
      }
    ]
  }
];
