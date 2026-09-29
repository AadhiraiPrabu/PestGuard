import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Shield,
  AlertTriangle,
  HeartHandshake,
  CheckCircle,
  ExternalLink,
  X,
  Compass,
  MapPin,
  Sparkles,
  BookmarkPlus,
  Info
} from 'lucide-react';
import { Pest, PestCategory, RiskLevel, Region } from '../types/pest';

interface Props {
  pests: Pest[];
  onSelectPestForComparison?: (pest: Pest) => void;
  onOpenSightingModal?: (pest: Pest) => void;
  onAskAiWithPest?: (pest: Pest) => void;
  initialSelectedPestId?: string | null;
  petSafeMode?: boolean;
  childSafeMode?: boolean;
}

const CATEGORIES: Array<{ id: PestCategory | 'all'; label: string }> = [
  { id: 'all', label: 'All Species' },
  { id: 'insects', label: 'Insects' },
  { id: 'arachnids', label: 'Spiders & Scorpions' },
  { id: 'rodents', label: 'Rodents' },
  { id: 'reptiles', label: 'Reptiles & Lizards' },
  { id: 'plant_pests', label: 'Plant Pests' },
  { id: 'myriapods', label: 'Centipedes & Millipedes' },
  { id: 'worms_invertebrates', label: 'Slugs & Worms' },
  { id: 'birds', label: 'Birds' },
  { id: 'mammals', label: 'Mammals & Bats' },
  { id: 'domestic_stray', label: 'Domestic / Strays' }
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const PestLibrary: React.FC<Props> = ({
  pests,
  onSelectPestForComparison,
  onOpenSightingModal,
  onAskAiWithPest,
  initialSelectedPestId,
  petSafeMode,
  childSafeMode
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PestCategory | 'all'>('all');
  const [selectedRisk, setSelectedRisk] = useState<RiskLevel | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [selectedPest, setSelectedPest] = useState<Pest | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // If initial pest provided
  React.useEffect(() => {
    if (initialSelectedPestId) {
      const found = pests.find((p) => p.id === initialSelectedPestId);
      if (found) setSelectedPest(found);
    }
  }, [initialSelectedPestId, pests]);

  // Filter logic
  const filteredPests = useMemo(() => {
    return pests.filter((pest) => {
      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = pest.commonName.toLowerCase().includes(q) || pest.scientificName.toLowerCase().includes(q);
        const matchesAliases = pest.aliases.some((a) => a.toLowerCase().includes(q));
        const matchesTags = pest.tags.some((t) => t.toLowerCase().includes(q));
        const matchesSigns = pest.signsOfPresence.some((s) => s.toLowerCase().includes(q));
        const matchesDesc = pest.description.toLowerCase().includes(q);
        const matchesLoc = pest.commonLocations.some((l) => l.toLowerCase().includes(q));
        if (!matchesName && !matchesAliases && !matchesTags && !matchesSigns && !matchesDesc && !matchesLoc) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all' && pest.category !== selectedCategory) {
        return false;
      }

      // Risk
      if (selectedRisk !== 'all' && pest.riskLevel !== selectedRisk) {
        return false;
      }

      // Location
      if (selectedLocation !== 'all') {
        const hasLoc = pest.commonLocations.some((loc) =>
          loc.toLowerCase().includes(selectedLocation.toLowerCase())
        );
        if (!hasLoc) return false;
      }

      // Region
      if (selectedRegion !== 'all') {
        if (!pest.regions.includes('global') && !pest.regions.includes(selectedRegion)) {
          return false;
        }
      }

      // Alphabet jump
      if (activeLetter) {
        if (!pest.commonName.toUpperCase().startsWith(activeLetter)) {
          return false;
        }
      }

      return true;
    });
  }, [pests, searchQuery, selectedCategory, selectedRisk, selectedLocation, selectedRegion, activeLetter]);

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'low':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            🟢 Low Risk
          </span>
        );
      case 'moderate':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            🟡 Moderate Concern
          </span>
        );
      case 'high':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-500/15 text-red-300 border border-red-500/40">
            🔴 High Concern
          </span>
        );
      case 'professional':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/40">
            ⚫ Pro Recommended
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Search Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-white">Pest & Wildlife Library</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Comprehensive scientific database covering 150+ common insects, arachnids, rodents, reptiles, and garden creatures.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
                showFilters
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filters {selectedRisk !== 'all' || selectedLocation !== 'all' ? '(Active)' : ''}</span>
            </button>
          </div>
        </div>

        {/* Search Input supporting symptoms */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveLetter(null);
            }}
            placeholder="Search by name, signs, or symptoms (e.g. 'tiny black insects', 'droppings', 'holes in leaves', 'webs', 'wood powder')..."
            className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Dropdowns Tray */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Risk Level</label>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300"
              >
                <option value="all">All Risk Levels</option>
                <option value="low">🟢 Low Risk / Harmless</option>
                <option value="moderate">🟡 Moderate Concern</option>
                <option value="high">🔴 High Concern / Dangerous</option>
                <option value="professional">⚫ Professional Recommended</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Found Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300"
              >
                <option value="all">All Locations</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Garden">Garden / Lawn</option>
                <option value="Basement">Basement</option>
                <option value="Roof">Roof / Attic</option>
                <option value="Living room">Living Room</option>
                <option value="Pantry">Pantry / Food Storage</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Geographic Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300"
              >
                <option value="all">Global / All Regions</option>
                <option value="north_america">North America</option>
                <option value="europe">Europe</option>
                <option value="india">India & South Asia</option>
                <option value="southeast_asia">Southeast Asia</option>
                <option value="australia">Australia</option>
                <option value="latin_america">Latin America</option>
              </select>
            </div>
          </div>
        )}

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveLetter(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* A-Z Index Bar */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pt-2 border-t border-slate-800 text-[11px] font-bold text-slate-400">
          <button
            onClick={() => setActiveLetter(null)}
            className={`px-2 py-0.5 rounded ${
              activeLetter === null ? 'bg-emerald-600 text-white' : 'hover:text-white'
            }`}
          >
            ALL
          </button>
          {ALPHABET.map((char) => (
            <button
              key={char}
              onClick={() => {
                setActiveLetter(char);
                setSearchQuery('');
              }}
              className={`px-1.5 py-0.5 rounded transition ${
                activeLetter === char
                  ? 'bg-emerald-600 text-white'
                  : 'hover:text-emerald-400'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Quick Stats */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2">
        <span>
          Showing <strong className="text-white">{filteredPests.length}</strong> species matching criteria
        </span>
        {petSafeMode && (
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            🐾 Pet-Safe Guidance Prioritized
          </span>
        )}
      </div>

      {/* Pest Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPests.map((pest) => (
          <div
            key={pest.id}
            onClick={() => setSelectedPest(pest)}
            className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden cursor-pointer transition shadow-lg hover:shadow-xl hover:-translate-y-1 flex flex-col"
          >
            {/* Image Banner */}
            <div className="relative h-44 bg-slate-950 overflow-hidden">
              <img
                src={pest.imageUrls[0]}
                alt={pest.commonName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

              {/* Badges on image */}
              <div className="absolute top-3 left-3">{getRiskBadge(pest.riskLevel)}</div>
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-md text-[10px] text-slate-300 font-mono">
                {pest.size}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {pest.commonName}
                </h3>
                <p className="text-xs font-mono italic text-slate-400">{pest.scientificName}</p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {pest.description}
                </p>
              </div>

              {/* Meta tags */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {pest.commonLocations.slice(0, 3).map((loc) => (
                    <span
                      key={loc}
                      className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] font-medium text-slate-400 border border-slate-800"
                    >
                      {loc}
                    </span>
                  ))}
                  {pest.beneficialStatus && pest.beneficialStatus.includes('POLLINATOR') && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-[10px] font-bold text-emerald-300 border border-emerald-700">
                      ★ Pollinator
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Safe Solution</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPests.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <Info className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">No matching pests found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms, clearing filters, or asking the AI Assistant to identify your observation.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedRisk('all');
              setSelectedLocation('all');
              setActiveLetter(null);
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Detailed Pest Profile Modal */}
      {selectedPest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-slate-100 shadow-2xl">
            {/* Modal Header Image */}
            <div className="relative h-56 bg-slate-950">
              <img
                src={selectedPest.imageUrls[0]}
                alt={selectedPest.commonName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              <button
                onClick={() => setSelectedPest(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {getRiskBadge(selectedPest.riskLevel)}
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {selectedPest.subCategory}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-white">{selectedPest.commonName}</h2>
                  <p className="text-xs font-mono italic text-emerald-400">{selectedPest.scientificName}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Dangerous Warning banner */}
              {selectedPest.isDangerous && (
                <div className="bg-red-950/80 border border-red-500 rounded-2xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-red-200">
                    <strong className="text-red-100 font-bold block text-sm mb-0.5">
                      DANGEROUS ANIMAL ADVISORY
                    </strong>
                    Do not approach, capture, or handle this creature. Keep children and pets indoors. Over 70% of bites happen during capture or kill attempts. Contact a local professional/wildlife service.
                  </div>
                </div>
              )}

              {/* Identification Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Identification Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPest.identificationFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Attributes Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Size</span>
                  <span className="text-slate-200 font-semibold">{selectedPest.size}</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Active Time</span>
                  <span className="text-slate-200 font-semibold capitalize">{selectedPest.activeTime}</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Seasonality</span>
                  <span className="text-slate-200 font-semibold">{selectedPest.seasonality}</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Primary Locations</span>
                  <span className="text-slate-200 font-semibold">{selectedPest.commonLocations.slice(0, 2).join(', ')}</span>
                </div>
              </div>

              {/* Risk Assessment Matrix */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs">
                <h4 className="font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Risk & Safety Assessment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <p><strong className="text-slate-200">Human Risk:</strong> {selectedPest.humanRisk}</p>
                  <p><strong className="text-slate-200">Pet Risk:</strong> {selectedPest.petRisk}</p>
                  <p><strong className="text-slate-200">Property Risk:</strong> {selectedPest.propertyRisk}</p>
                  <p><strong className="text-slate-200">Beneficial Role:</strong> {selectedPest.beneficialStatus}</p>
                </div>
              </div>

              {/* Non-Chemical Solutions & Prevention */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                    Safe Non-Chemical Solutions
                  </h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    {selectedPest.nonChemicalSolutions.map((sol, idx) => (
                      <li key={idx}>{sol}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-blue-400 uppercase tracking-wider text-[11px]">
                    Long-Term Prevention Methods
                  </h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                    {selectedPest.preventionMethods.map((prev, idx) => (
                      <li key={idx}>{prev}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Professional Guidance & Product Safety */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <p>
                  <strong className="text-purple-400">Professional Control Notes:</strong>{' '}
                  <span className="text-slate-300">{selectedPest.professionalControlNotes}</span>
                </p>
                <p>
                  <strong className="text-amber-400">Chemical Control General Guidance:</strong>{' '}
                  <span className="text-slate-300">{selectedPest.chemicalControlGeneralGuidance}</span>
                </p>
                {selectedPest.firstAidGeneralGuidance && (
                  <p>
                    <strong className="text-emerald-400">First Aid General Guidance:</strong>{' '}
                    <span className="text-slate-300">{selectedPest.firstAidGeneralGuidance}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  {onSelectPestForComparison && (
                    <button
                      onClick={() => {
                        onSelectPestForComparison(selectedPest);
                        setSelectedPest(null);
                      }}
                      className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-xl border border-slate-700 transition"
                    >
                      Compare with Another
                    </button>
                  )}
                  {onAskAiWithPest && (
                    <button
                      onClick={() => {
                        onAskAiWithPest(selectedPest);
                        setSelectedPest(null);
                      }}
                      className="px-3.5 py-2 bg-blue-600/30 hover:bg-blue-600/40 text-blue-200 text-xs font-semibold rounded-xl border border-blue-500/40 flex items-center gap-1.5 transition"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Ask AI About This</span>
                    </button>
                  )}
                </div>

                {onOpenSightingModal && (
                  <button
                    onClick={() => {
                      onOpenSightingModal(selectedPest);
                      setSelectedPest(null);
                    }}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-1.5"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>Record Sighting</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
