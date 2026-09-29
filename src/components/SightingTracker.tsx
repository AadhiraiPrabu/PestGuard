import React, { useState } from 'react';
import {
  ClipboardList,
  Plus,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  Calendar,
  Check,
  Trash2,
  Bell,
  Activity,
  ChevronRight,
  TrendingUp,
  X
} from 'lucide-react';
import { PestSighting, ProblemReport, Reminder, ProblemStatus, SightingSeverity } from '../types/pest';

interface Props {
  sightings: PestSighting[];
  problems: ProblemReport[];
  reminders: Reminder[];
  onAddSighting: (sighting: Omit<PestSighting, 'id' | 'createdAt'>) => void;
  onUpdateSighting: (id: string, updates: Partial<PestSighting>) => void;
  onDeleteSighting: (id: string) => void;
  onAddProblem: (problem: Omit<ProblemReport, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdateProblem: (id: string, updates: Partial<ProblemReport>) => void;
  onDeleteProblem: (id: string) => void;
  onAddReminder: (reminder: Omit<Reminder, 'id'>) => void;
  onToggleReminder: (id: string, completed: boolean) => void;
  onDeleteReminder: (id: string) => void;
}

export const SightingTracker: React.FC<Props> = ({
  sightings,
  problems,
  reminders,
  onAddSighting,
  onUpdateSighting,
  onDeleteSighting,
  onAddProblem,
  onUpdateProblem,
  onDeleteProblem,
  onAddReminder,
  onToggleReminder,
  onDeleteReminder
}) => {
  const [activeSection, setActiveSection] = useState<'sightings' | 'problems' | 'reminders'>('sightings');
  const [showAddSightingModal, setShowAddSightingModal] = useState(false);
  const [showAddProblemModal, setShowAddProblemModal] = useState(false);
  const [showAddReminderModal, setShowAddReminderModal] = useState(false);

  // New Sighting Form State
  const [newSightingPestName, setNewSightingPestName] = useState('Odorous House Ant');
  const [newSightingLocation, setNewSightingLocation] = useState('Kitchen');
  const [newSightingCount, setNewSightingCount] = useState<'one' | 'few' | 'many' | 'hundreds'>('few');
  const [newSightingFreq, setNewSightingFreq] = useState<'first_time' | 'occasionally' | 'daily' | 'continuous'>('occasionally');
  const [newSightingSeverity, setNewSightingSeverity] = useState<SightingSeverity>('low');
  const [newSightingNotes, setNewSightingNotes] = useState('');
  const [newSightingAction, setNewSightingAction] = useState('Cleaned area and sealed food');

  // New Problem Form State
  const [newProblemTitle, setNewProblemTitle] = useState('Kitchen Ant Recurrence');
  const [newProblemPestName, setNewProblemPestName] = useState('Sugar Ant');
  const [newProblemLocation, setNewProblemLocation] = useState('Kitchen');
  const [newProblemStatus, setNewProblemStatus] = useState<ProblemStatus>('active');
  const [newProblemNotes, setNewProblemNotes] = useState('');

  // New Reminder Form State
  const [newReminderTitle, setNewReminderTitle] = useState('Inspect pantry for meal moths');
  const [newReminderCategory, setNewReminderCategory] = useState<'inspection' | 'cleaning' | 'treatment' | 'prevention' | 'professional'>('inspection');
  const [newReminderTargetDate, setNewReminderTargetDate] = useState(
    new Date(Date.now() + 86400000 * 7).toISOString().slice(0, 10)
  );
  const [newReminderFreq, setNewReminderFreq] = useState<'once' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly'>('monthly');

  const handleCreateSighting = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSighting({
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      pestName: newSightingPestName,
      location: newSightingLocation,
      numberObserved: newSightingCount,
      frequency: newSightingFreq,
      signsObserved: ['Live observation'],
      severity: newSightingSeverity,
      notes: newSightingNotes,
      actionTaken: newSightingAction,
      resolved: false
    });
    setShowAddSightingModal(false);
  };

  const handleCreateProblem = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProblem({
      title: newProblemTitle,
      pestName: newProblemPestName,
      location: newProblemLocation,
      firstNoticed: new Date().toISOString().slice(0, 10),
      lastSeen: new Date().toISOString().slice(0, 10),
      frequency: 'daily',
      status: newProblemStatus,
      notes: newProblemNotes,
      actionsTaken: [
        { date: new Date().toISOString().slice(0, 10), action: 'Problem logged into tracker' }
      ]
    });
    setShowAddProblemModal(false);
  };

  const handleCreateReminder = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReminder({
      title: newReminderTitle,
      category: newReminderCategory,
      targetDate: newReminderTargetDate,
      frequency: newReminderFreq,
      completed: false
    });
    setShowAddReminderModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Monitoring & Recurring Log</span>
            </div>
            <h1 className="text-2xl font-black text-white">Sightings & Infestation Tracker</h1>
            <p className="text-xs text-slate-400 mt-1">
              Maintain an audit trail of pest encounters, track recurring infestations to resolution, and schedule preventative inspection reminders.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSection('sightings')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                activeSection === 'sightings'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Sightings ({sightings.length})
            </button>
            <button
              onClick={() => setActiveSection('problems')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                activeSection === 'problems'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Infestation Tracker ({problems.length})
            </button>
            <button
              onClick={() => setActiveSection('reminders')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                activeSection === 'reminders'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              Reminders ({reminders.filter((r) => !r.completed).length})
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: SIGHTINGS LOG */}
      {activeSection === 'sightings' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Historical Sightings Log</span>
            </h2>
            <button
              onClick={() => setShowAddSightingModal(true)}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Log New Sighting</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sightings.map((s) => (
              <div
                key={s.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{s.pestName}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {s.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {s.date} {s.time}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      s.resolved
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {s.resolved ? 'Resolved' : 'Active'}
                  </span>
                </div>

                {s.photoUrl && (
                  <div className="h-32 rounded-xl overflow-hidden bg-slate-950">
                    <img src={s.photoUrl} alt="Sighting capture" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="space-y-1 text-xs text-slate-300">
                  <p>
                    <strong className="text-slate-400">Observed:</strong> {s.numberObserved} ({s.frequency})
                  </p>
                  <p>
                    <strong className="text-slate-400">Action Taken:</strong> {s.actionTaken}
                  </p>
                  {s.notes && (
                    <p className="text-slate-400 italic">"{s.notes}"</p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onUpdateSighting(s.id, { resolved: !s.resolved })}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{s.resolved ? 'Mark as Re-opened' : 'Mark as Resolved'}</span>
                  </button>
                  <button
                    onClick={() => onDeleteSighting(s.id)}
                    className="text-slate-500 hover:text-red-400 p-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {sightings.length === 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-xs text-slate-400">
              No pest sightings recorded yet. Use the camera tool or button above to log your first observation.
            </div>
          )}
        </div>
      )}

      {/* SECTION 2: INFESTATION TRACKER */}
      {activeSection === 'problems' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Active Infestation Progression</span>
            </h2>
            <button
              onClick={() => setShowAddProblemModal(true)}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Track New Problem</span>
            </button>
          </div>

          <div className="space-y-4">
            {problems.map((prob) => {
              const statusColors = {
                active: 'bg-red-500/20 text-red-300 border-red-500/40',
                improving: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
                monitoring: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
                resolved: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              };

              return (
                <div
                  key={prob.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{prob.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Target: <strong className="text-slate-200">{prob.pestName}</strong> • Location: <strong className="text-slate-200">{prob.location}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={prob.status}
                        onChange={(e) => onUpdateProblem(prob.id, { status: e.target.value as any })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${statusColors[prob.status]} bg-slate-950`}
                      >
                        <option value="active">🔴 Active</option>
                        <option value="improving">🟡 Improving</option>
                        <option value="monitoring">🔵 Monitoring</option>
                        <option value="resolved">🟢 Resolved</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">First Noticed</span>
                      <span className="text-slate-200 font-semibold">{prob.firstNoticed}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Last Seen</span>
                      <span className="text-slate-200 font-semibold">{prob.lastSeen}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Frequency</span>
                      <span className="text-slate-200 font-semibold capitalize">{prob.frequency}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Actions Taken</span>
                      <span className="text-slate-200 font-semibold">{prob.actionsTaken.length} milestones</span>
                    </div>
                  </div>

                  {/* Actions Timeline */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Action Milestones Timeline
                    </h4>
                    <div className="space-y-1.5 pl-2 border-l border-slate-700">
                      {prob.actionsTaken.map((act, idx) => (
                        <div key={idx} className="relative pl-3 text-xs">
                          <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span className="text-slate-400 font-mono text-[11px] mr-2">{act.date}:</span>
                          <span className="text-slate-200">{act.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => {
                        const newAction = prompt('Enter new action taken (e.g. "Sealed baseboard cracks with silicone"):');
                        if (newAction && newAction.trim()) {
                          onUpdateProblem(prob.id, {
                            actionsTaken: [
                              ...prob.actionsTaken,
                              { date: new Date().toISOString().slice(0, 10), action: newAction.trim() }
                            ]
                          });
                        }
                      }}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      + Add Action Milestone
                    </button>
                    <button
                      onClick={() => onDeleteProblem(prob.id)}
                      className="text-slate-500 hover:text-red-400 p-1 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 3: REMINDERS */}
      {activeSection === 'reminders' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Inspection & Sanitation Reminders</span>
            </h2>
            <button
              onClick={() => setShowAddReminderModal(true)}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Set Reminder</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {reminders.map((rem) => (
              <div
                key={rem.id}
                className={`bg-slate-900 border rounded-2xl p-4 space-y-3 transition ${
                  rem.completed ? 'border-slate-800/60 opacity-60' : 'border-slate-800 shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <button
                      onClick={() => onToggleReminder(rem.id, !rem.completed)}
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center transition mt-0.5 ${
                        rem.completed
                          ? 'bg-emerald-600 border-emerald-500 text-white'
                          : 'border-slate-600 bg-slate-950 text-transparent hover:border-emerald-500'
                      }`}
                    >
                      ✓
                    </button>
                    <div>
                      <h4 className={`text-xs font-bold ${rem.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                        {rem.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block mt-0.5">
                        Due: {rem.targetDate} ({rem.frequency})
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onDeleteReminder(rem.id)}
                    className="text-slate-600 hover:text-red-400 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: ADD SIGHTING */}
      {showAddSightingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <form
            onSubmit={handleCreateSighting}
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-100 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Log Pest Sighting</h3>
              <button type="button" onClick={() => setShowAddSightingModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Pest Name</label>
              <input
                type="text"
                value={newSightingPestName}
                onChange={(e) => setNewSightingPestName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  value={newSightingLocation}
                  onChange={(e) => setNewSightingLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Quantity</label>
                <select
                  value={newSightingCount}
                  onChange={(e) => setNewSightingCount(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="one">Just One</option>
                  <option value="few">A Few (2-5)</option>
                  <option value="many">Many (6-20)</option>
                  <option value="hundreds">Hundreds</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Action Taken</label>
              <input
                type="text"
                value={newSightingAction}
                onChange={(e) => setNewSightingAction(e.target.value)}
                placeholder="e.g. Wiped trails with vinegar, sealed food in jars"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowAddSightingModal(false)}
                className="px-4 py-2 bg-slate-800 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-xl shadow"
              >
                Save Sighting
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: ADD PROBLEM */}
      {showAddProblemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <form
            onSubmit={handleCreateProblem}
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-100 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Track Recurring Problem</h3>
              <button type="button" onClick={() => setShowAddProblemModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Problem Title</label>
              <input
                type="text"
                value={newProblemTitle}
                onChange={(e) => setNewProblemTitle(e.target.value)}
                placeholder="e.g. Kitchen Ant Infestation"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Pest Species</label>
                <input
                  type="text"
                  value={newProblemPestName}
                  onChange={(e) => setNewProblemPestName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  value={newProblemLocation}
                  onChange={(e) => setNewProblemLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowAddProblemModal(false)}
                className="px-4 py-2 bg-slate-800 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-xl shadow"
              >
                Start Tracking
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: ADD REMINDER */}
      {showAddReminderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <form
            onSubmit={handleCreateReminder}
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 text-slate-100 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Create Prevention Reminder</h3>
              <button type="button" onClick={() => setShowAddReminderModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Task / Description</label>
              <input
                type="text"
                value={newReminderTitle}
                onChange={(e) => setNewReminderTitle(e.target.value)}
                placeholder="e.g. Inspect pantry, Pour water down drains"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Target Date</label>
                <input
                  type="date"
                  value={newReminderTargetDate}
                  onChange={(e) => setNewReminderTargetDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Frequency</label>
                <select
                  value={newReminderFreq}
                  onChange={(e) => setNewReminderFreq(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="once">One-Time</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowAddReminderModal(false)}
                className="px-4 py-2 bg-slate-800 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-xl shadow"
              >
                Set Reminder
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
