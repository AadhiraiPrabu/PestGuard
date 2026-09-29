import { Pest, HomeInspection } from '../../types/pest';
import { ANTS_AND_ROACHES } from './insects_ants_roaches';
import { TERMITES_FLIES_MOSQUITOES } from './insects_termites_flies_mosquitoes';
import { BEDBUGS_FLEAS_MOTHS_BEETLES } from './insects_bedbugs_fleas_moths_beetles';
import { WASPS_BEES_OTHERS } from './insects_wasps_bees_others';
import { PLANT_PESTS } from './plant_pests';
import { ARACHNIDS_MYRIAPODS_WORMS } from './arachnids_myriapods_worms';
import { RODENTS_MAMMALS_DOMESTIC } from './rodents_mammals_domestic';
import { REPTILES_AMPHIBIANS_BIRDS } from './reptiles_amphibians_birds';
export { PEST_COMPARISONS } from './comparisons';

export const PEST_DATABASE: Pest[] = [
  ...ANTS_AND_ROACHES,
  ...TERMITES_FLIES_MOSQUITOES,
  ...BEDBUGS_FLEAS_MOTHS_BEETLES,
  ...WASPS_BEES_OTHERS,
  ...PLANT_PESTS,
  ...ARACHNIDS_MYRIAPODS_WORMS,
  ...RODENTS_MAMMALS_DOMESTIC,
  ...REPTILES_AMPHIBIANS_BIRDS
];

export const PEST_MAP = new Map<string, Pest>(
  PEST_DATABASE.map((p) => [p.id, p])
);

export function getPestById(id: string): Pest | undefined {
  return PEST_MAP.get(id);
}

export function searchPests(query: string): Pest[] {
  if (!query || !query.trim()) return PEST_DATABASE;
  const q = query.toLowerCase().trim();

  return PEST_DATABASE.filter((pest) => {
    return (
      pest.commonName.toLowerCase().includes(q) ||
      pest.scientificName.toLowerCase().includes(q) ||
      pest.subCategory.toLowerCase().includes(q) ||
      pest.category.toLowerCase().includes(q) ||
      pest.tags.some((t) => t.toLowerCase().includes(q)) ||
      pest.aliases.some((a) => a.toLowerCase().includes(q)) ||
      pest.regionalNames.some((r) => r.toLowerCase().includes(q)) ||
      pest.commonLocations.some((l) => l.toLowerCase().includes(q)) ||
      pest.signsOfPresence.some((s) => s.toLowerCase().includes(q)) ||
      pest.description.toLowerCase().includes(q)
    );
  });
}

export const ROOM_INSPECTION_TEMPLATES: Record<string, Array<{ area: string; item: string; instructions: string; commonFinds: string[] }>> = {
  Kitchen: [
    {
      area: 'Food Storage & Pantry',
      item: 'Pantry Shelves & Cereal Boxes',
      instructions: 'Check flour packages, rice bags, and cereal for webbing, tiny weevils, or larvae along corners.',
      commonFinds: ['Indian Meal Moths', 'Rice Weevils', 'Flour Beetles', 'Sugar Ants']
    },
    {
      area: 'Sink & Plumbing',
      item: 'Under-Sink Cabinet & P-Trap',
      instructions: 'Inspect for plumbing pipe drips, damp cardboard, and dark pepper-like roach droppings around pipe wall penetrations.',
      commonFinds: ['German Cockroaches', 'Drain Flies', 'Odorous House Ants']
    },
    {
      area: 'Appliances',
      item: 'Behind Refrigerator & Under Stove',
      instructions: 'Use a flashlight to inspect warm compressor coils and beneath the stove for grease crumbs and roach egg cases.',
      commonFinds: ['German Cockroaches', 'Mice', 'Ant trails']
    },
    {
      area: 'Waste Area',
      item: 'Kitchen Trash Can & Recycling Bin',
      instructions: 'Check behind and under the trash bin for sticky spills, fruit fly larvae, or fly pupae.',
      commonFinds: ['Fruit Flies', 'House Flies', 'Ants', 'Mice']
    },
    {
      area: 'Walls & Baseboards',
      item: 'Backsplash & Counter Seams',
      instructions: 'Look for active ant trails following silicone sealant seams along the counter edge.',
      commonFinds: ['Sugar Ants', 'Carpenter Ants']
    }
  ],
  Bathroom: [
    {
      area: 'Plumbing Drains',
      item: 'Shower & Tub Drain Grates',
      instructions: 'Examine drain openings for gelatinous soap scum slime and resting moth-like fuzzy drain flies.',
      commonFinds: ['Drain Flies', 'Pharaoh Ants']
    },
    {
      area: 'Flooring & Seams',
      item: 'Behind Toilet & Under Vanity',
      instructions: 'Look for fast silvery fish-like insects darting away or multi-legged house centipedes hunting near damp tiles.',
      commonFinds: ['Silverfish', 'House Centipedes', 'American Cockroaches']
    },
    {
      area: 'Ventilation',
      item: 'Exhaust Fan Grille & Ceiling',
      instructions: 'Check for high humidity moisture staining and resting cobweb cellar spiders.',
      commonFinds: ['Cellar Spiders', 'Mites']
    }
  ],
  Bedroom: [
    {
      area: 'Bed & Bedding',
      item: 'Mattress Seams & Box Spring Tufts',
      instructions: 'Pull back sheets. Run a credit card along mattress piping inspecting for black ink-like fecal specks, shed skins, and small brown bugs.',
      commonFinds: ['Bed Bugs', 'Carpet Beetle Larvae']
    },
    {
      area: 'Headboard & Frame',
      item: 'Headboard Screws & Wall Behind Bed',
      instructions: 'Inspect screw holes, wooden slats, and electrical outlets within 6 feet of the bed for dark spotting.',
      commonFinds: ['Bed Bugs', 'Brown-Banded Cockroaches']
    },
    {
      area: 'Wardrobe & Closet',
      item: 'Folded Woolens & Closet Baseboards',
      instructions: 'Check woolen sweaters, cashmere, and closet carpet edges for irregular holes, silk webbing tubes, or tiny beetles.',
      commonFinds: ['Webbing Clothes Moths', 'Varied Carpet Beetles', 'Silverfish']
    }
  ],
  Basement: [
    {
      area: 'Foundation Walls',
      item: 'Concrete Sill Plates & Joists',
      instructions: 'Check concrete walls for pencil-thick earthen mud tubes climbing toward wooden floor joists; tap joists with a screwdriver.',
      commonFinds: ['Subterranean Termites', 'Carpenter Ants', 'Powderpost Beetles']
    },
    {
      area: 'Floor Perimeter',
      item: 'Perimeter Seams & Floor Drains',
      instructions: 'Check floor drains for water in the trap; inspect corners for large sewer cockroaches or curled dead millipedes.',
      commonFinds: ['American Cockroaches', 'Oriental Cockroaches', 'Millipedes', 'Wolf Spiders']
    },
    {
      area: 'Storage Corners',
      item: 'Cardboard Boxes & Clutter',
      instructions: 'Wear gloves. Check dark corners for tangled cobwebs with glossy black spiders or mouse droppings along walls.',
      commonFinds: ['Black Widows', 'Brown Recluses', 'Mice', 'Centipedes']
    }
  ],
  Garden: [
    {
      area: 'Plant Leaves & Stems',
      item: 'Underside of Leaves & New Shoots',
      instructions: 'Flip leaves over on roses, tomatoes, and vegetables. Look for green aphids, white powdery mealybugs, fine spider webbing, or chewed holes.',
      commonFinds: ['Aphids', 'Spider Mites', 'Whiteflies', 'Hornworms', 'Slugs']
    },
    {
      area: 'Water Accumulation',
      item: 'Plant Saucers, Buckets & Bird Baths',
      instructions: 'Look for standing stagnant water containing tiny wriggling mosquito larvae (active swimmers).',
      commonFinds: ['Aedes Mosquitoes', 'Culex Mosquitoes']
    },
    {
      area: 'Soil & Mulch',
      item: 'Beneath Stepping Stones & Mulch Beds',
      instructions: 'Lift a decorative stone or flowerpot. Check for earwigs, curled millipedes, harmless garden skinks, or beneficial garter snakes.',
      commonFinds: ['Earwigs', 'Slugs', 'Millipedes', 'Garter Snakes', 'Toads']
    }
  ],
  Roof: [
    {
      area: 'Eaves & Soffits',
      item: 'Roof Overhangs & Gutters',
      instructions: 'Scan roof eaves for open paper wasp umbrella nests, clogged gutters holding water, or gaps where squirrels/bats could enter.',
      commonFinds: ['Paper Wasps', 'Yellowjackets', 'Mosquitoes in gutters', 'Bats', 'Squirrels']
    },
    {
      area: 'Chimney & Vents',
      item: 'Attic Louvers & Chimney Cap',
      instructions: 'Verify stainless steel mesh screens are intact to prevent bats, raccoons, and birds from nesting in flues.',
      commonFinds: ['Pigeons', 'Raccoons', 'Bats']
    }
  ]
};

export const DEFAULT_PREVENTION_CHECKLIST = [
  { id: 'k1', room: 'Kitchen', task: 'Store all open grains, flour, and cereals in airtight glass or thick plastic containers', done: false },
  { id: 'k2', room: 'Kitchen', task: 'Wipe countertops and sink dry before going to sleep; never leave soaking water dishes', done: false },
  { id: 'k3', room: 'Kitchen', task: 'Empty indoor kitchen trash bins daily and wash recycling soda/juice containers', done: false },
  { id: 'b1', room: 'Bathroom', task: 'Run exhaust fan during and 20 minutes after showers to maintain humidity below 50%', done: false },
  { id: 'b2', room: 'Bathroom', task: 'Pour 2 cups of hot water down floor and guest drains monthly to maintain the P-trap water seal', done: false },
  { id: 'b3', room: 'Bathroom', task: 'Clean hair and soap scum slime from shower drain stoppers', done: false },
  { id: 'g1', room: 'Garden', task: 'Overturn all standing water in plant saucers, buckets, and decorative containers weekly', done: false },
  { id: 'g2', room: 'Garden', task: 'Keep mulch depth under 2 inches and maintain an 18-inch clearance from exterior foundation walls', done: false },
  { id: 'g3', room: 'Garden', task: 'Trim tree branches and shrubs at least 2 feet away from the roofline and siding', done: false },
  { id: 's1', room: 'Storage', task: 'Replace cardboard storage boxes in basements and attics with clear sealable plastic bins', done: false },
  { id: 's2', room: 'Storage', task: 'Elevate firewood piles at least 12 inches off the ground and 20 feet away from home walls', done: false },
  { id: 's3', room: 'Storage', task: 'Seal exterior foundation pipe penetrations with stainless steel mesh and silicone caulk', done: false }
];
