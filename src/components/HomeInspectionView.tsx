import React, { useState } from 'react';
import {
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  Camera,
  ArrowRight,
  Shield,
  Home,
  Check,
  RotateCcw
} from 'lucide-react';
import { ROOM_INSPECTION_TEMPLATES, DEFAULT_PREVENTION_CHECKLIST } from '../data/pests/index';

interface Props {
  onTriggerIdentifyFromRoom?: (room: string) => void;
  onSaveSightingFromInspection?: (pestName: string, location: string, notes: string) => void;
}

export const HomeInspectionView: React.FC<Props> = ({
  onTriggerIdentifyFromRoom,
  onSaveSightingFromInspection
}) => {
  const rooms = Object.keys(ROOM_INSPECTION_TEMPLATES);
  const [selectedRoom, setSelectedRoom] = useState<string>('Kitchen');
  const [checklist, setChecklist] = useState(DEFAULT_PREVENTION_CHECKLIST);

  // Current inspection answers state: itemId -> { checked: boolean, found: boolean, notes: string }
  const [inspectionState, setInspectionState] = useState<Record<string, { checked: boolean; found: boolean; notes: string }>>({});

  const currentTemplate = ROOM_INSPECTION_TEMPLATES[selectedRoom] || [];

  const handleToggleCheck = (index: number) => {
    const key = `${selectedRoom}-${index}`;
    setInspectionState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        checked: !prev[key]?.checked,
        found: prev[key]?.found || false,
        notes: prev[key]?.notes || ''
      }
    }));
  };

  const handleSetFound = (index: number, found: boolean) => {
    const key = `${selectedRoom}-${index}`;
    setInspectionState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        checked: true,
        found,
        notes: prev[key]?.notes || ''
      }
    }));
  };

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const totalSteps = currentTemplate.length;
  const completedSteps = currentTemplate.filter((_, idx) => inspectionState[`${selectedRoom}-${idx}`]?.checked).length;
  const issuesFound = currentTemplate.filter((_, idx) => inspectionState[`${selectedRoom}-${idx}`]?.found).length;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Guided Preventative Inspection</span>
            </div>
            <h1 className="text-2xl font-black text-white">Home Inspection Mode</h1>
            <p className="text-xs text-slate-400 mt-1">
              Follow systematic room-by-room inspection checkpoints to uncover pest harborage points before an infestation escalates.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-800">
              {completedSteps} / {totalSteps} Checkpoints Complete
            </span>
          </div>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {rooms.map((room) => (
            <button
              key={room}
              onClick={() => setSelectedRoom(room)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedRoom === room
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {room}
            </button>
          ))}
        </div>
      </div>

      {/* Main Inspection Checkpoints List */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Home className="w-5 h-5 text-emerald-400" />
              <span>{selectedRoom} Inspection Checklist</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Inspect each critical harborage zone. If you spot live insects, droppings, or wood frass, trigger photo analysis.
            </p>
          </div>

          {issuesFound > 0 && (
            <span className="px-3 py-1 bg-red-950/60 border border-red-700/60 text-red-300 text-xs font-bold rounded-xl animate-pulse">
              ⚠️ {issuesFound} Issue{issuesFound > 1 ? 's' : ''} Flagged
            </span>
          )}
        </div>

        <div className="space-y-4">
          {currentTemplate.map((step, idx) => {
            const state = inspectionState[`${selectedRoom}-${idx}`];
            const isChecked = !!state?.checked;
            const hasFound = !!state?.found;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition space-y-3 ${
                  hasFound
                    ? 'bg-red-950/20 border-red-500/40'
                    : isChecked
                    ? 'bg-slate-950/80 border-emerald-500/40'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      {step.area}
                    </span>
                    <h3 className="text-sm font-bold text-white">{step.item}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl">{step.instructions}</p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-semibold">Common finds:</span>
                      {step.commonFinds.map((find, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400"
                        >
                          {find}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Yes / No Buttons */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-[11px] font-semibold text-slate-400">Found something here?</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSetFound(idx, false)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                          isChecked && !hasFound
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                        }`}
                      >
                        ✓ Clear (No)
                      </button>
                      <button
                        onClick={() => handleSetFound(idx, true)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                          isChecked && hasFound
                            ? 'bg-red-600 border-red-500 text-white animate-pulse'
                            : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-red-300'
                        }`}
                      >
                        ⚠️ Found Signs
                      </button>
                    </div>
                  </div>
                </div>

                {/* If Found: Action prompt */}
                {hasFound && (
                  <div className="pt-3 border-t border-red-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <p className="text-red-300 font-medium">
                      Pest evidence flagged in {step.area}. Identify or record sighting immediately.
                    </p>
                    <div className="flex items-center gap-2">
                      {onTriggerIdentifyFromRoom && (
                        <button
                          onClick={() => onTriggerIdentifyFromRoom(selectedRoom)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-1.5 shadow"
                        >
                          <Camera className="w-3.5 h-3.5" />
                          <span>Scan / Identify Photo</span>
                        </button>
                      )}
                      {onSaveSightingFromInspection && (
                        <button
                          onClick={() => onSaveSightingFromInspection(step.commonFinds[0], selectedRoom, `Flagged during ${selectedRoom} inspection: ${step.item}`)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700"
                        >
                          Log Sighting
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Routine Prevention Checklist */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-400" />
          <span>Universal Household Prevention Checklist</span>
        </h2>
        <p className="text-xs text-slate-400">
          Proactive physical exclusion and sanitation measures that stop infestations before they start.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleChecklistItem(item.id)}
              className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                item.done
                  ? 'bg-slate-950/60 border-slate-800 opacity-60'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition ${
                  item.done
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                {item.done ? '✓' : ''}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">{item.room}</span>
                <p className={`text-xs ${item.done ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                  {item.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
