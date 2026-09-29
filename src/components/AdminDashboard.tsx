import React, { useState } from 'react';
import {
  ShieldAlert,
  Plus,
  Users,
  Building,
  Save,
  Trash2,
  Settings,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Pest, HouseholdProfile, PestCategory, RiskLevel } from '../types/pest';

interface Props {
  pests: Pest[];
  household: HouseholdProfile;
  onUpdateHousehold: (household: Partial<HouseholdProfile>) => void;
  onAddCustomPest: (pest: Omit<Pest, 'id'>) => void;
  onDeleteCustomPest: (id: string) => void;
}

export const AdminDashboard: React.FC<Props> = ({
  pests,
  household,
  onUpdateHousehold,
  onAddCustomPest,
  onDeleteCustomPest
}) => {
  const [activeTab, setActiveTab] = useState<'household' | 'custom_pests'>('household');

  // Household state
  const [houseName, setHouseName] = useState(household.name);
  const [propertyType, setPropertyType] = useState(household.propertyType);
  const [hasPets, setHasPets] = useState(household.hasPets);
  const [hasChildren, setHasChildren] = useState(household.hasChildren);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // New Custom Pest state
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [category, setCategory] = useState<PestCategory>('insects');
  const [subCategory, setSubCategory] = useState('Ants');
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('low');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('5 - 10 mm');
  const [location, setLocation] = useState('Kitchen');

  const handleSaveHousehold = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateHousehold({
      name: houseName,
      propertyType,
      hasPets,
      hasChildren
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleCreateCustomPest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commonName.trim()) return;

    onAddCustomPest({
      commonName,
      scientificName: scientificName || 'Species unidentified',
      category,
      subCategory,
      description: description || 'User-added local specimen entry.',
      identificationFeatures: ['Custom observation'],
      size,
      color: ['Brown'],
      habitat: 'Residential structure',
      activeTime: 'all_day',
      seasonality: 'Year-round',
      foundIndoors: true,
      foundOutdoors: true,
      commonLocations: [location],
      foodSources: ['Scavenged food'],
      attractants: ['Moisture and crumbs'],
      signsOfPresence: ['Visible specimens'],
      riskLevel,
      humanRisk: 'Nuisance level',
      petRisk: 'Low',
      propertyRisk: 'Low',
      foodContaminationRisk: 'Low',
      plantDamageRisk: 'None',
      beneficialStatus: 'Outdoor scavenger',
      preventionMethods: ['Seal cracks and store food in airtight containers'],
      nonChemicalSolutions: ['Physical exclusion, vacuuming, and cleaning'],
      professionalControlNotes: 'Consult certified operator if extensive.',
      chemicalControlGeneralGuidance: 'Follow product label strictly.',
      safetyWarnings: ['Do not apply unverified home remedies.'],
      firstAidGeneralGuidance: 'Wash with soap and water.',
      imageUrls: ['https://images.unsplash.com/photo-1549557116-3e74c8df634f?w=600&auto=format&fit=crop&q=80'],
      aliases: [],
      regionalNames: [],
      regions: ['global'],
      tags: ['custom pest', location.toLowerCase()]
    });

    setCommonName('');
    setScientificName('');
    setDescription('');
    alert('Custom pest entry added successfully to local store!');
  };

  const customPests = pests.filter((p) => p.id.startsWith('pest-custom-'));

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-1">
              <Settings className="w-3.5 h-3.5" />
              <span>Administration & Household Config</span>
            </div>
            <h1 className="text-2xl font-black text-white">Administrator Portal</h1>
            <p className="text-xs text-slate-400 mt-1">
              Configure multi-member household settings, safety modes, and add custom local species entries.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('household')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'household'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Household Profile
            </button>
            <button
              onClick={() => setActiveTab('custom_pests')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'custom_pests'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Custom Species ({customPests.length})
            </button>
          </div>
        </div>
      </div>

      {/* Household Tab */}
      {activeTab === 'household' && (
        <form
          onSubmit={handleSaveHousehold}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6"
        >
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-400" />
              <span>Household & Multi-User Configuration</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Settings automatically adjust safety advice across all problem solvers and identification scans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Household / Property Name</label>
              <input
                type="text"
                value={houseName}
                onChange={(e) => setHouseName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              >
                <option value="apartment">Apartment / Flat</option>
                <option value="house">Single-Family House</option>
                <option value="farm">Farm / Agricultural</option>
                <option value="office">Commercial Office</option>
                <option value="hostel">Hostel / Dormitory</option>
                <option value="shop">Retail Shop</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Domestic Pets Present</h4>
                <p className="text-[11px] text-slate-400">Excludes toxic chemicals; prioritizes pet safety.</p>
              </div>
              <input
                type="checkbox"
                checked={hasPets}
                onChange={(e) => setHasPets(e.target.checked)}
                className="w-5 h-5 rounded bg-slate-900 border-slate-700 text-emerald-500 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Children Present in Home</h4>
                <p className="text-[11px] text-slate-400">Emphasizes low-risk approaches and hazard alerts.</p>
              </div>
              <input
                type="checkbox"
                checked={hasChildren}
                onChange={(e) => setHasChildren(e.target.checked)}
                className="w-5 h-5 rounded bg-slate-900 border-slate-700 text-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {savedSuccess ? (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Settings saved successfully!
              </span>
            ) : (
              <span className="text-xs text-slate-500">All household members share synchronized sightings.</span>
            )}

            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      )}

      {/* Custom Species Tab */}
      {activeTab === 'custom_pests' && (
        <div className="space-y-6">
          <form
            onSubmit={handleCreateCustomPest}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4"
          >
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-emerald-400" />
              <span>Add Custom / Regional Species Entry</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Common Name</label>
                <input
                  type="text"
                  value={commonName}
                  onChange={(e) => setCommonName(e.target.value)}
                  placeholder="e.g. Desert Brown Cricket"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Scientific Name</label>
                <input
                  type="text"
                  value={scientificName}
                  onChange={(e) => setScientificName(e.target.value)}
                  placeholder="e.g. Gryllus alogus"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="insects">Insects</option>
                  <option value="arachnids">Arachnids</option>
                  <option value="rodents">Rodents</option>
                  <option value="reptiles">Reptiles</option>
                  <option value="plant_pests">Plant Pests</option>
                  <option value="myriapods">Myriapods</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Risk Classification</label>
                <select
                  value={riskLevel}
                  onChange={(e) => setRiskLevel(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="low">🟢 Low Risk / Harmless</option>
                  <option value="moderate">🟡 Moderate Concern</option>
                  <option value="high">🔴 High Concern / Dangerous</option>
                  <option value="professional">⚫ Professional Help Recommended</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Diagnostic features, behavioral profile, and habitat notes..."
                rows={2}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition"
              >
                Add to Database
              </button>
            </div>
          </form>

          {/* List of Custom Pests */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white">User-Added Custom Species</h3>
            {customPests.length > 0 ? (
              <div className="space-y-2">
                {customPests.map((cp) => (
                  <div
                    key={cp.id}
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white">{cp.commonName}</h4>
                      <p className="text-[10px] text-emerald-400 font-mono italic">{cp.scientificName}</p>
                    </div>
                    <button
                      onClick={() => onDeleteCustomPest(cp.id)}
                      className="p-1 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">No custom species created yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
