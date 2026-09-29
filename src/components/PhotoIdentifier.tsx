import React, { useState, useRef } from 'react';
import {
  Camera,
  Upload,
  RefreshCw,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
  ChevronRight,
  ExternalLink,
  Save,
  BookmarkCheck,
  RotateCw
} from 'lucide-react';
import { AIIdentificationResult, RiskLevel } from '../types/pest';

interface Props {
  onSaveSighting?: (data: any) => void;
  onTrackProblem?: (data: any) => void;
  onOpenPestDetail?: (pestId: string) => void;
  onAskAiWithContext?: (query: string) => void;
  petSafeMode?: boolean;
  childSafeMode?: boolean;
}

const LOCATION_OPTIONS = [
  'Kitchen',
  'Bathroom',
  'Bedroom',
  'Living room',
  'Pantry / Food storage',
  'Balcony',
  'Garden',
  'Terrace',
  'Basement',
  'Garage',
  'Roof / Attic',
  'Store room',
  'Office',
  'Hostel',
  'Farm',
  'Vehicle',
  'Outside property',
  'Other'
];

const SIGN_OPTIONS = [
  'Live insects',
  'Droppings',
  'Bites/stings',
  'Webbing',
  'Holes in wood/plants',
  'Gnaw marks',
  'Damaged food',
  'Shed skin',
  'Eggs',
  'Bad smell',
  'Dead insects',
  'Nest / Tubes'
];

export const PhotoIdentifier: React.FC<Props> = ({
  onSaveSighting,
  onTrackProblem,
  onOpenPestDetail,
  onAskAiWithContext,
  petSafeMode,
  childSafeMode
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('Kitchen');
  const [countObserved, setCountObserved] = useState<'one' | 'few' | 'many' | 'hundreds'>('few');
  const [frequency, setFrequency] = useState<'first_time' | 'occasionally' | 'daily' | 'continuous'>('occasionally');
  const [selectedSigns, setSelectedSigns] = useState<string[]>(['Live insects']);
  const [userNotes, setUserNotes] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIIdentificationResult | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (under 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image file is too large (max 10MB). Please select a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
      setError(null);
      setResult(null);
      setSavedSuccess(false);
    };
    reader.readAsDataURL(file);
  };

  const toggleSign = (sign: string) => {
    setSelectedSigns((prev) =>
      prev.includes(sign) ? prev.filter((s) => s !== sign) : [...prev, sign]
    );
  };

  const handleIdentify = async () => {
    if (!imagePreview && !userNotes.trim()) {
      setError('Please upload a photo or describe the creature and symptoms you observed.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = {
        imageBase64: imagePreview,
        location: selectedLocation,
        userNotes: `Observed at: ${selectedLocation}. Quantity: ${countObserved}. Frequency: ${frequency}. Signs observed: ${selectedSigns.join(
          ', '
        )}. Notes: ${userNotes}`
      };

      const res = await fetch('/api/ai/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Identification request failed');
      }

      const data = await res.json();
      setResult(data.result);
    } catch (err: any) {
      console.error(err);
      setError('Identification analysis encountered an issue. Please try again with clear details.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToLog = () => {
    if (!result) return;
    if (onSaveSighting) {
      onSaveSighting({
        pestId: result.primary.pestId,
        pestName: result.primary.name,
        location: selectedLocation,
        numberObserved: countObserved,
        frequency,
        signsObserved: selectedSigns,
        photoUrl: imagePreview,
        severity: result.primary.riskLevel === 'high' ? 'severe' : result.primary.riskLevel === 'moderate' ? 'moderate' : 'low',
        notes: userNotes || result.primary.description,
        actionTaken: result.immediateSafeActions[0] || 'Identified and monitored.',
        resolved: false
      });
      setSavedSuccess(true);
    }
  };

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'low':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            LOW RISK / HARMLESS
          </span>
        );
      case 'moderate':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            MODERATE CONCERN
          </span>
        );
      case 'high':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/40 flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            HIGH CONCERN / DANGEROUS
          </span>
        );
      case 'professional':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            PROFESSIONAL HELP RECOMMENDED
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Title Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Camera className="w-3.5 h-3.5" />
          <span>Multimodal Pest & Wildlife Scanner</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Identify from Photo & Symptoms</h1>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Upload an image, specify where you found it, and receive an instant scientific risk assessment with safe non-toxic handling protocols.
        </p>
      </div>

      {/* Safety Notice */}
      <div className="bg-amber-950/40 border border-amber-600/40 rounded-2xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-200/90 leading-relaxed">
          <strong className="text-amber-100 font-bold">Important Safety Reminder:</strong> Never approach, corner, or provoke potentially venomous snakes, spiders, or unknown wild animals to obtain a closer photograph. Maintain safe distance; take photos using digital zoom from across the room or behind glass.
        </div>
      </div>

      {/* Upload and Form Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        {/* Left Column: Photo Upload & Preview */}
        <div className="md:col-span-5 space-y-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
            Pest Photograph
          </label>

          <div
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition flex flex-col items-center justify-center min-h-[240px] overflow-hidden ${
              imagePreview
                ? 'border-emerald-500/60 bg-slate-950'
                : 'border-slate-700 bg-slate-950/60 hover:border-emerald-500 hover:bg-slate-900/60'
            }`}
          >
            {imagePreview ? (
              <div className="relative w-full h-full flex flex-col items-center">
                <img
                  src={imagePreview}
                  alt="Captured specimen"
                  className="max-h-64 rounded-xl object-contain shadow-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImagePreview(null);
                  }}
                  className="mt-3 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg flex items-center gap-1.5 border border-slate-600"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  Change Photo
                </button>
              </div>
            ) : (
              <div className="space-y-3 py-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Camera className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">Take a Photo or Upload Image</p>
                  <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, WEBP up to 10MB</p>
                </div>
                <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-slate-700">
                  Select File
                </span>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Observation Notes / Description</label>
            <textarea
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder="e.g. Tiny black ants crawling near the kitchen sink edge; leaves of houseplants have sticky residue."
              rows={3}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Right Column: Context & Discovery Details */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Where did you find it?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {LOCATION_OPTIONS.slice(0, 9).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition ${
                    selectedLocation === loc
                      ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              {LOCATION_OPTIONS.map((loc) => (
                <option key={loc} value={loc}>
                  More locations: {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Quantity Observed</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'one', label: 'Just One' },
                  { id: 'few', label: 'A Few (2-5)' },
                  { id: 'many', label: 'Many (6-20)' },
                  { id: 'hundreds', label: 'Hundreds' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCountObserved(item.id as any)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-center transition ${
                      countObserved === item.id
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Frequency Seen</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'first_time', label: 'First Time' },
                  { id: 'occasionally', label: 'Occasionally' },
                  { id: 'daily', label: 'Daily' },
                  { id: 'continuous', label: 'Continuous' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrequency(item.id as any)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-center transition ${
                      frequency === item.id
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Signs Observed (select all that apply)
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SIGN_OPTIONS.map((sign) => {
                const selected = selectedSigns.includes(sign);
                return (
                  <button
                    key={sign}
                    type="button"
                    onClick={() => toggleSign(sign)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition ${
                      selected
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {selected ? '✓ ' : ''}
                    {sign}
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-950/60 border border-red-700/60 rounded-xl text-xs text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="button"
            onClick={handleIdentify}
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Analyzing Specimen with Scientific Engine...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Submit for Safe Identification</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Identification Results Card */}
      {result && (
        <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
          {/* Top Result Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-black text-white">{result.primary.name}</h2>
                <span className="text-xs font-mono text-emerald-400 italic">
                  ({result.primary.scientificName})
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">{result.primary.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {getRiskBadge(result.primary.riskLevel)}

              <div className="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Confidence</span>
                <span className="text-lg font-black text-emerald-400">{result.primary.confidence}%</span>
              </div>
            </div>
          </div>

          {/* Dangerous Animal Safety Alert if applicable */}
          {result.primary.isDangerous && (
            <div className="bg-red-950/80 border-2 border-red-500 rounded-2xl p-4 sm:p-5 flex items-start gap-4 animate-pulse">
              <AlertTriangle className="w-8 h-8 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-red-200">
                  ⚠️ DANGEROUS ANIMAL ENCOUNTER SAFETY PROTOCOL
                </h3>
                <p className="text-sm text-red-100 font-semibold mt-1">
                  Do not approach or handle this animal. Keep people and pets away and contact an appropriate local professional/wildlife service.
                </p>
                <p className="text-xs text-red-300/80 mt-1">
                  Never attempt to catch, corner, kill, poison, or burn this creature. Maintain distance and contact local emergency or certified wildlife authorities.
                </p>
              </div>
            </div>
          )}

          {/* Alternative Possibilities */}
          {result.alternatives && result.alternatives.length > 0 && (
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                Alternative Possibilities (Never rely on 100% certainty)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.alternatives.map((alt, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-200">{alt.name}</span>
                      {alt.scientificName && (
                        <span className="text-[11px] text-slate-400 italic block">{alt.scientificName}</span>
                      )}
                      <p className="text-[11px] text-slate-400 mt-1">{alt.reason}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md shrink-0">
                      {alt.confidence}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why is it here? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Why Is It Appearing?
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                {result.whyHere.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Immediate Safe Steps Right Now
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                {result.immediateSafeActions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prevention & Safe Removal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                Long-Term Prevention
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                {result.prevention.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                Safe Removal & Non-Chemical Methods
              </h4>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                {result.safeRemoval.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cleaning Guidance & When to Call Pro */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
                When to Seek Professional Assistance
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {result.professionalRecommendation}
              </p>
            </div>

            <div className="border-t border-slate-800 pt-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Cleaning & Sanitation Precautions
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {result.cleaningGuidance.join(' ')}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <div className="text-[11px] text-slate-400 italic">
              {result.uncertaintyDisclaimer}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {result.primary.pestId && onOpenPestDetail && (
                <button
                  type="button"
                  onClick={() => onOpenPestDetail(result.primary.pestId!)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5 transition"
                >
                  <span>Full Scientific Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {onAskAiWithContext && (
                <button
                  type="button"
                  onClick={() => onAskAiWithContext(`I found ${result.primary.name} in my ${selectedLocation}. What specific safe steps should I take?`)}
                  className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/40 text-blue-200 text-xs font-semibold rounded-xl border border-blue-500/40 flex items-center gap-1.5 transition"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ask PestGuard AI</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleSaveToLog}
                disabled={savedSuccess}
                className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 transition ${
                  savedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40'
                }`}
              >
                {savedSuccess ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>Saved to Sightings Log</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Record in Sighting Log</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
