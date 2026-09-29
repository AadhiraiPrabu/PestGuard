import React, { useState } from 'react';
import {
  Wrench,
  Bug,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Shield,
  HelpCircle,
  ThermometerSnowflake,
  Droplets,
  Home,
  Check,
  RefreshCw,
  Sprout
} from 'lucide-react';
import { PlantDiagnosisResult } from '../types/pest';

type SolverTab =
  | 'ant'
  | 'lizard'
  | 'cockroach'
  | 'termite'
  | 'mosquito'
  | 'bedbug'
  | 'plant';

interface Props {
  onOpenSightingWithPest?: (pestName: string, location: string) => void;
  onAskAiWithQuery?: (query: string) => void;
  petSafeMode?: boolean;
}

export const SpecializedSolvers: React.FC<Props> = ({
  onOpenSightingWithPest,
  onAskAiWithQuery,
  petSafeMode
}) => {
  const [activeSolver, setActiveSolver] = useState<SolverTab>('ant');

  // Ant Solver States
  const [antLocation, setAntLocation] = useState('Kitchen counter');
  const [antColor, setAntColor] = useState('black');
  const [antSize, setAntSize] = useState('tiny');
  const [hasTrails, setHasTrails] = useState(true);
  const [nearFood, setNearFood] = useState(true);
  const [hasWings, setHasWings] = useState(false);

  // Lizard Solver States
  const [lizardRoom, setLizardRoom] = useState('Bedroom ceiling');
  const [lizardSize, setLizardSize] = useState('small');
  const [lizardStep, setLizardStep] = useState(1);

  // Termite Solver States
  const [termiteSigns, setTermiteSigns] = useState<string[]>(['mud_tubes']);

  // Plant Doctor States
  const [plantType, setPlantType] = useState('Indoor houseplant');
  const [plantPart, setPlantPart] = useState('Leaves');
  const [plantSymptoms, setPlantSymptoms] = useState<string[]>(['holes_in_leaves']);
  const [plantDiagnosis, setPlantDiagnosis] = useState<PlantDiagnosisResult | null>(null);
  const [loadingPlantDoc, setLoadingPlantDoc] = useState(false);

  const toggleTermiteSign = (sign: string) => {
    setTermiteSigns((prev) =>
      prev.includes(sign) ? prev.filter((s) => s !== sign) : [...prev, sign]
    );
  };

  const togglePlantSymptom = (sym: string) => {
    setPlantSymptoms((prev) =>
      prev.includes(sym) ? prev.filter((s) => s !== sym) : [...prev, sym]
    );
  };

  const handlePlantDiagnose = async () => {
    setLoadingPlantDoc(true);
    try {
      const res = await fetch('/api/ai/plant-doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plantType,
          affectedPart: plantPart,
          symptoms: plantSymptoms,
          notes: 'Diagnosed via Plant Doctor diagnostic wizard.'
        })
      });
      const data = await res.json();
      setPlantDiagnosis(data.diagnosis);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPlantDoc(false);
    }
  };

  const solverTabs = [
    { id: 'ant' as SolverTab, label: 'Ant Problem Solver', icon: Bug },
    { id: 'lizard' as SolverTab, label: 'Lizard in My House', icon: Shield },
    { id: 'cockroach' as SolverTab, label: 'Cockroach Plan', icon: Bug },
    { id: 'termite' as SolverTab, label: 'Termite Risk Check', icon: Home },
    { id: 'mosquito' as SolverTab, label: 'Mosquito Eliminator', icon: Droplets },
    { id: 'bedbug' as SolverTab, label: 'Bed Bug Inspector', icon: Shield },
    { id: 'plant' as SolverTab, label: 'Plant Doctor AI', icon: Sprout }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>Specialized Problem Solvers</span>
            </div>
            <h1 className="text-2xl font-black text-white">Targeted Action Plans</h1>
            <p className="text-xs text-slate-400 mt-1">
              Step-by-step diagnostic workflows for the most common household and garden nuisance challenges.
            </p>
          </div>
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {solverTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSolver === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSolver(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Solver Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        {/* 1. ANT SOLVER */}
        {activeSolver === 'ant' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🐜 Ant Problem Solver</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Pinpoint the ant species based on color, size, and location to eliminate pheromone trails and prevent indoor nesting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Where are the ants?</label>
                <select
                  value={antLocation}
                  onChange={(e) => setAntLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200"
                >
                  <option value="Kitchen counter">Kitchen counter & sink</option>
                  <option value="Bathroom">Bathroom tiles / sink</option>
                  <option value="Pantry">Pantry / Food cupboard</option>
                  <option value="Baseboards">Wall baseboards / carpet edge</option>
                  <option value="Garden / Patio">Garden soil / patio cracks</option>
                  <option value="Wood framing">Door frame / window trim</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Color & Size</label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={antColor}
                    onChange={(e) => setAntColor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-slate-200"
                  >
                    <option value="black">Dark Black</option>
                    <option value="red">Red / Brown</option>
                    <option value="yellow">Pale Amber / Yellow</option>
                  </select>
                  <select
                    value={antSize}
                    onChange={(e) => setAntSize(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-slate-200"
                  >
                    <option value="tiny">Tiny (1-3 mm)</option>
                    <option value="medium">Medium (4-6 mm)</option>
                    <option value="large">Large (8-14 mm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Behavioral Indicators</label>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasTrails}
                      onChange={(e) => setHasTrails(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-emerald-500"
                    />
                    <span>Walking in steady trails</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={nearFood}
                      onChange={(e) => setNearFood(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-emerald-500"
                    />
                    <span>Attracted to sugars or grease</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasWings}
                      onChange={(e) => setHasWings(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-emerald-500"
                    />
                    <span>Winged swarmers present</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Generated Ant Advice */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Diagnostic Result: {antSize === 'large' ? 'Probable Carpenter Ant' : antColor === 'red' ? 'Probable Red Fire Ant / Pavement Ant' : 'Probable Odorous Sugar Ant'}
                </span>
                {hasWings && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Reproductive Swarm Warning
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Immediate Safe Actions
                  </h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    <li>Wipe the visible trail with a 50/50 water and white vinegar solution to eliminate the chemical pheromone markers that guide other ants.</li>
                    <li>Move all syrups, honey, sugar, and open pet food into sealed glass jars or thick plastic airtight bins.</li>
                    <li>Wipe sinks bone-dry at night; many indoor ants enter purely to forage for water droplets.</li>
                  </ul>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Long-Term Prevention & Safety
                  </h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    <li>Seal external entry cracks and window frames with silicone caulk.</li>
                    <li><strong className="text-red-300">Avoid repellent aerosol sprays:</strong> Spraying surface aerosol insecticides causes multi-queen colonies (like Pharaoh ants or sugar ants) to "bud" and fracture into several new satellite colonies across other rooms!</li>
                    {antSize === 'large' && (
                      <li className="text-amber-300">Large carpenter ants indicate possible moisture-damaged wood in wall cavities or roof eaves; inspect for damp timber.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. LIZARD IN MY HOUSE */}
        {activeSolver === 'lizard' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🦎 Lizard in My House: Humane 5-Step Solution</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Common house geckos are harmless, non-venomous natural allies that consume mosquitoes and flies. Follow the non-harm release procedure.
              </p>
            </div>

            {/* Step by Step Wizard */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {[
                { step: 1, title: 'Keep Distance', desc: 'No venom; cannot bite human skin' },
                { step: 2, title: 'Protect Pets', desc: 'Move cats & dogs to another room' },
                { step: 3, title: 'Cool Air Fan', desc: 'Blowing cool air guides them out' },
                { step: 4, title: 'Cup & Card', desc: 'Gently scoop with plastic box' },
                { step: 5, title: 'Seal Entry', desc: 'Turn off bug lights & seal gaps' }
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setLizardStep(s.step)}
                  className={`p-3 rounded-2xl border text-left transition ${
                    lizardStep === s.step
                      ? 'bg-emerald-600/30 border-emerald-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase text-emerald-400">Step {s.step}</span>
                  <p className="text-xs font-bold text-slate-200 mt-0.5">{s.title}</p>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">{s.desc}</p>
                </button>
              ))}
            </div>

            {/* Active Step Detail */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              {lizardStep === 1 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-emerald-400">Step 1: Understand It Is Harmless</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    House geckos have no venom and microscopic teeth that cannot break human skin. They are timid nocturnal creatures that run away from humans. In many cultures, they are welcomed indoors because a single gecko eats up to 20 mosquitoes and moths every single night!
                  </p>
                  <p className="text-xs text-amber-300">
                    <strong className="text-white">Note:</strong> Never crush or poison lizards. Poison baits are dangerous to household pets and children.
                  </p>
                </div>
              )}

              {lizardStep === 2 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-emerald-400">Step 2: Move Pets Away</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Curious domestic cats and dogs may pounce on the lizard, causing the lizard to drop its tail (autotomy) in distress. Confine your pets in another room for 15 minutes while you manage the lizard.
                  </p>
                </div>
              )}

              {lizardStep === 3 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-emerald-400">Step 3: The Cool Air Draft Method</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Geckos are ectothermic (cold-blooded) and seek warm air. Open an exterior window or balcony door, and turn on a standing or box fan blowing cool air across the wall toward the open doorway. Geckos will naturally retreat away from the cool draft straight out the open door within 10 to 15 minutes!
                  </p>
                </div>
              )}

              {lizardStep === 4 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-emerald-400">Step 4: Gentle Cup & Cardboard Capture</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If the lizard is on a reachable flat wall:
                  </p>
                  <ol className="text-xs text-slate-300 space-y-1 list-decimal pl-4">
                    <li>Take a transparent plastic container (like an empty clean food container) and slowly approach.</li>
                    <li>Place the container over the gecko gently against the wall.</li>
                    <li>Slide a stiff piece of cardboard, mail, or a folder slowly underneath the rim.</li>
                    <li>Lift the container with the cardboard securely covering the opening and carry it outside to your garden shrubs.</li>
                  </ol>
                </div>
              )}

              {lizardStep === 5 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-emerald-400">Step 5: Reduce Attractants & Seal Gaps</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lizards enter houses because bright outdoor entryway lights attract flying moths and insects, creating a buffet. Switch porch bulbs to warm yellow LED bug-lights, and install weather-stripping along exterior door thresholds.
                  </p>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button
                  disabled={lizardStep === 1}
                  onClick={() => setLizardStep((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-300 disabled:opacity-40"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={lizardStep === 5}
                  onClick={() => setLizardStep((prev) => Math.min(5, prev + 1))}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white disabled:opacity-40"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. COCKROACH PLAN */}
        {activeSolver === 'cockroach' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🪳 Cockroach Eradication Plan</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                German cockroaches vs American sewer roaches require fundamentally different strategies. Target the root moisture and food sources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Phase 1 • Sanitation</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  German cockroaches can survive on grease specks behind stoves. Clean thoroughly beneath the stove and refrigerator. Never leave dishes soaking overnight; wipe sink dry before sleeping.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Phase 2 • Water & Drain Seals</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Large American cockroaches enter via dried floor drains. Pour 2 cups of water down unused bathroom drains monthly to fill the water P-trap, and install fine mesh drain covers.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Phase 3 • Targeted Baits</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  DO NOT USE FOGGERS OR BOMBS (they scatter roaches into adjacent rooms). Use containerized bait stations or microdots of gel bait placed near hinges, cabinet corners, and motor vents.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. TERMITE RISK CHECK */}
        {activeSolver === 'termite' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🪵 Termite Risk Assessment</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Check your property for structural termite warning signs. Termites cause billions in hidden structural destruction.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">
                Select signs you have observed on your property:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'mud_tubes', label: 'Pencil-thick mud tubes climbing foundation walls or pipes' },
                  { id: 'hollow_wood', label: 'Hollow sound when tapping baseboards or window sills' },
                  { id: 'swarmer_wings', label: 'Discarded pairs of equal-length wings on window sills in spring' },
                  { id: 'wood_frass', label: 'Piles of tiny hexagonal wood sand pellets (frass) under furniture' },
                  { id: 'blistered_paint', label: 'Bubbling, peeling, or rippled paint on interior wooden trim' },
                  { id: 'wood_soil_contact', label: 'Wooden siding, porch posts, or mulch touching garden soil' }
                ].map((item) => {
                  const active = termiteSigns.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleTermiteSign(item.id)}
                      className={`p-3 rounded-xl border text-xs text-left transition flex items-center justify-between ${
                        active
                          ? 'bg-purple-950/40 border-purple-500 text-purple-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="ml-2 font-bold">{active ? '✓' : '+'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Risk Level: {termiteSigns.length >= 2 ? 'HIGH STRUCTURAL RISK' : 'EVALUATING RISK'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {termiteSigns.length} / 6 Indicators Present
                </span>
              </div>

              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong className="text-white">Professional Recommendation:</strong> If mud tubes or hollow wood are present, contact a certified structural pest inspector immediately. DIY aerosol sprays do not resolve termite colonies—they merely divert them to other load-bearing joists.
                </p>
                <p className="text-slate-400">
                  Maintain at least 6 inches of clearance between bare garden soil and wooden siding, and direct roof downspouts at least 5 feet away from the foundation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 5. MOSQUITO ELIMINATOR */}
        {activeSolver === 'mosquito' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🦟 Mosquito Breeding Eliminator</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Aedes mosquitoes breed in container water as small as a bottle cap. Eliminate breeding opportunities at the source.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                  1. Tip & Toss Weekly
                </span>
                <p className="text-slate-300">
                  Empty and scrub all water-holding vessels every 5 days: flower pot saucers, dog bowls, tire swings, bird baths, and kids’ toys.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-blue-400 uppercase tracking-wider text-[11px]">
                  2. Biological Bti Dunks
                </span>
                <p className="text-slate-300">
                  For permanent outdoor water features or rain barrels, use organic Bti (Bacillus thuringiensis israelensis) dunks. Harmless to pets, birds, and fish!
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                  3. Air Currents on Patios
                </span>
                <p className="text-slate-300">
                  Mosquitoes are extremely weak fliers. Placing an oscillating box or pedestal fan on your porch completely disrupts their flight and prevents landing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 6. BED BUG INSPECTOR */}
        {activeSolver === 'bedbug' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🛏️ Bed Bug Systematic Inspection</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Itchy bumps alone cannot reliably diagnose bed bugs. Follow the visual inspection checklist before treating.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-200">The 4-Zone Bed Inspection Routine:</h4>
              <ul className="space-y-2 text-slate-300 list-disc pl-4">
                <li><strong className="text-white">Zone 1: Mattress Piping:</strong> Pull back the fitted sheet. Use a flashlight and run an old credit card along the piping seams looking for dark ink-like fecal specks and translucent shed skins.</li>
                <li><strong className="text-white">Zone 2: Box Spring & Dust Ruffle:</strong> Inspect the plastic corner protectors and staple joints on the underside of the box spring.</li>
                <li><strong className="text-white">Zone 3: Headboard Screws:</strong> Check screw holes, bracket joints, and the wall immediately behind the headboard within 6 feet of the sleeping area.</li>
                <li><strong className="text-white">Zone 4: Interceptors:</strong> Place plastic bed bug interceptor traps under all 4 bed posts and pull the bed 6 inches away from the wall.</li>
              </ul>
            </div>
          </div>
        )}

        {/* 7. PLANT DOCTOR */}
        {activeSolver === 'plant' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🌱 Plant Doctor: Pest vs Non-Pest Diagnosis</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Do not automatically assume every yellow leaf is an insect. Differentiate environmental issues from pest damage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Plant Type</label>
                <input
                  type="text"
                  value={plantType}
                  onChange={(e) => setPlantType(e.target.value)}
                  placeholder="e.g. Garden Tomato, Monstera, Rose"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Affected Plant Part</label>
                <select
                  value={plantPart}
                  onChange={(e) => setPlantPart(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200"
                >
                  <option value="Leaves">Leaves & Foliage</option>
                  <option value="Stems">Stems & Branches</option>
                  <option value="Roots & Soil">Roots & Potting Soil</option>
                  <option value="Buds & Flowers">Buds & Flowers</option>
                  <option value="Fruit">Fruit / Vegetable</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Observed Symptoms</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'holes_in_leaves', label: 'Holes in leaves' },
                    { id: 'yellowing_leaves', label: 'Yellowing leaves' },
                    { id: 'sticky_leaves', label: 'Sticky honeydew' },
                    { id: 'fine_webbing', label: 'Fine silky webbing' },
                    { id: 'white_bugs', label: 'White cottony bugs' },
                    { id: 'sudden_wilting', label: 'Sudden wilting' }
                  ].map((sym) => {
                    const active = plantSymptoms.includes(sym.id);
                    return (
                      <button
                        key={sym.id}
                        type="button"
                        onClick={() => togglePlantSymptom(sym.id)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-medium border transition ${
                          active
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {active ? '✓ ' : ''}{sym.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={handlePlantDiagnose}
              disabled={loadingPlantDoc}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition disabled:opacity-50"
            >
              {loadingPlantDoc ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Consulting Horticultural Engine...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Run Plant Diagnostic Analysis</span>
                </>
              )}
            </button>

            {/* Diagnosis Result Card */}
            {plantDiagnosis && (
              <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 space-y-4 animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-emerald-400" />
                    <span>Diagnosis for {plantDiagnosis.plantName}</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Affected: {plantDiagnosis.affectedPart}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Possible Pests */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                      Potential Pest Culprits
                    </h4>
                    {plantDiagnosis.possiblePests.map((pest, idx) => (
                      <div key={idx} className="border-b border-slate-800/80 pb-2 last:border-0 space-y-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-slate-200">{pest.name}</strong>
                          <span className="text-emerald-400 font-bold">{pest.confidence}% match</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">{pest.description}</p>
                        <p className="text-teal-300 text-[11px]"><strong className="text-white">Organic Remedy:</strong> {pest.organicRemedy}</p>
                      </div>
                    ))}
                  </div>

                  {/* Non-Pest Causes */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                      Non-Pest / Cultural Factors (Important!)
                    </h4>
                    {plantDiagnosis.nonPestCauses.map((cause, idx) => (
                      <div key={idx} className="border-b border-slate-800/80 pb-2 last:border-0 space-y-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-slate-200">{cause.cause}</strong>
                          <span className="text-amber-400 capitalize">{cause.likelihood} likelihood</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">{cause.symptoms}</p>
                        <p className="text-emerald-300 text-[11px]"><strong className="text-white">Correction:</strong> {cause.correction}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <p><strong className="text-blue-400">Immediate Action:</strong> {plantDiagnosis.immediateActions.join(' ')}</p>
                  <p><strong className="text-purple-400">Horticultural Guidance:</strong> {plantDiagnosis.whenToSeekHorticulturalAdvice}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
