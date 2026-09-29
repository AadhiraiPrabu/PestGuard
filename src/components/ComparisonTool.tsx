import React, { useState } from 'react';
import { GitCompare, CheckCircle, Info, Sparkles, ArrowRightLeft } from 'lucide-react';
import { Pest, PestComparison } from '../types/pest';
import { PEST_COMPARISONS } from '../data/pests/comparisons';

interface Props {
  pests: Pest[];
  preSelectedPestA?: Pest | null;
  onOpenPestDetail?: (pestId: string) => void;
}

export const ComparisonTool: React.FC<Props> = ({
  pests,
  preSelectedPestA,
  onOpenPestDetail
}) => {
  const [selectedComparisonId, setSelectedComparisonId] = useState<string>('bee-vs-wasp');
  const [customPestAId, setCustomPestAId] = useState<string>(
    preSelectedPestA ? preSelectedPestA.id : 'bee-honey'
  );
  const [customPestBId, setCustomPestBId] = useState<string>('wasp-paper');
  const [mode, setMode] = useState<'preset' | 'custom'>('preset');

  const activePreset = PEST_COMPARISONS.find((c) => c.id === selectedComparisonId) || PEST_COMPARISONS[0];

  const pestA = pests.find((p) => p.id === customPestAId) || pests[0];
  const pestB = pests.find((p) => p.id === customPestBId) || pests[1];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1">
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparative Diagnostic Engine</span>
            </div>
            <h1 className="text-2xl font-black text-white">“What Is This?” Species Comparison</h1>
            <p className="text-xs text-slate-400 mt-1">
              Distinguish look-alike creatures quickly to avoid misidentifying beneficial pollinators as aggressive wasps, or termites as harmless ants.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode('preset')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                mode === 'preset'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              Curated Key Presets
            </button>
            <button
              onClick={() => setMode('custom')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                mode === 'custom'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              Custom Compare Any 2
            </button>
          </div>
        </div>

        {/* Preset Selector Badges */}
        {mode === 'preset' && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {PEST_COMPARISONS.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComparisonId(comp.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedComparisonId === comp.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {comp.title}
              </button>
            ))}
          </div>
        )}

        {/* Custom Dropdown Selector */}
        {mode === 'custom' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Select First Specimen (A)</label>
              <select
                value={customPestAId}
                onChange={(e) => setCustomPestAId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200"
              >
                {pests.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.commonName} ({p.subCategory})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Select Second Specimen (B)</label>
              <select
                value={customPestBId}
                onChange={(e) => setCustomPestBId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200"
              >
                {pests.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.commonName} ({p.subCategory})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Comparison View Table / Cards */}
      {mode === 'preset' ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-black text-white">{activePreset.title}</h2>
            <p className="text-xs text-emerald-400 font-semibold mt-1 leading-relaxed">
              {activePreset.keyDifferentiators}
            </p>
          </div>

          {/* Side by side comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-200 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 w-1/4">Key Feature</th>
                  <th className="py-3 px-4 w-1/3 text-emerald-300">{activePreset.speciesA}</th>
                  <th className="py-3 px-4 w-1/3 text-amber-300">{activePreset.speciesB}</th>
                  <th className="py-3 px-4 w-1/4 text-slate-400">Practical Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {activePreset.comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/40 transition">
                    <td className="py-3.5 px-4 font-bold text-white align-top">{row.feature}</td>
                    <td className="py-3.5 px-4 text-slate-300 align-top leading-relaxed">{row.speciesAValue}</td>
                    <td className="py-3.5 px-4 text-slate-300 align-top leading-relaxed">{row.speciesBValue}</td>
                    <td className="py-3.5 px-4 text-slate-400 italic align-top leading-relaxed text-[11px]">{row.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specimen A Card */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900 relative">
                <img src={pestA.imageUrls[0]} alt={pestA.commonName} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 border border-slate-700 text-emerald-300">
                  {pestA.subCategory}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{pestA.commonName}</h3>
                <p className="text-xs font-mono text-emerald-400 italic">{pestA.scientificName}</p>
                <p className="text-xs text-slate-300 mt-2">{pestA.description}</p>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <p><strong className="text-slate-200">Size:</strong> {pestA.size}</p>
                <p><strong className="text-slate-200">Risk:</strong> {pestA.riskLevel.toUpperCase()}</p>
                <p><strong className="text-slate-200">Locations:</strong> {pestA.commonLocations.slice(0, 3).join(', ')}</p>
                <p><strong className="text-slate-200">Beneficial Role:</strong> {pestA.beneficialStatus}</p>
              </div>
            </div>

            {/* Specimen B Card */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900 relative">
                <img src={pestB.imageUrls[0]} alt={pestB.commonName} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 border border-slate-700 text-amber-300">
                  {pestB.subCategory}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{pestB.commonName}</h3>
                <p className="text-xs font-mono text-amber-400 italic">{pestB.scientificName}</p>
                <p className="text-xs text-slate-300 mt-2">{pestB.description}</p>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <p><strong className="text-slate-200">Size:</strong> {pestB.size}</p>
                <p><strong className="text-slate-200">Risk:</strong> {pestB.riskLevel.toUpperCase()}</p>
                <p><strong className="text-slate-200">Locations:</strong> {pestB.commonLocations.slice(0, 3).join(', ')}</p>
                <p><strong className="text-slate-200">Beneficial Role:</strong> {pestB.beneficialStatus}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
