import React from 'react';
import {
  Camera,
  Search,
  Home,
  Sprout,
  ShieldAlert,
  AlertTriangle,
  PawPrint,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Wrench,
  BookOpen
} from 'lucide-react';
import { NavTab } from './Navbar';
import { PestSighting, ProblemReport, Reminder } from '../types/pest';

interface Props {
  onNavigate: (tab: NavTab) => void;
  onOpenDangerousModal: () => void;
  sightings: PestSighting[];
  problems: ProblemReport[];
  reminders: Reminder[];
  onOpenPestSearchWithTerm?: (term: string) => void;
}

export const Dashboard: React.FC<Props> = ({
  onNavigate,
  onOpenDangerousModal,
  sightings,
  problems,
  reminders,
  onOpenPestSearchWithTerm
}) => {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>PestGuard Safety Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Identify it. Understand it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Handle it safely.
            </span>
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            Science-backed pest identification, risk assessment, and non-toxic exclusion. We prioritize prevention, sanitation, and safety over indiscriminate poisons.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('identify')}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Identify from Photo</span>
            </button>

            <button
              onClick={() => onNavigate('library')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Browse 150+ Pest Library</span>
            </button>
          </div>
        </div>

        {/* Decorative backdrop elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/10 to-transparent pointer-events-none"></div>
      </div>

      {/* 6 Large Action Portals from Prompt Section 35 */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          What problem are you seeing?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* 1. Identify Photo */}
          <button
            onClick={() => onNavigate('identify')}
            className="group bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-emerald-400">
              📷 Photo Scanner
            </span>
            <span className="text-[10px] text-slate-400">Instant AI Identification</span>
          </button>

          {/* 2. Search Pest */}
          <button
            onClick={() => onNavigate('library')}
            className="group bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-blue-400">
              🔎 Search Signs
            </span>
            <span className="text-[10px] text-slate-400">Symptoms & Droppings</span>
          </button>

          {/* 3. Home Problem */}
          <button
            onClick={() => onNavigate('inspect')}
            className="group bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-amber-400">
              🏠 Home Inspect
            </span>
            <span className="text-[10px] text-slate-400">Room-by-Room Check</span>
          </button>

          {/* 4. Plant Problem */}
          <button
            onClick={() => onNavigate('solvers')}
            className="group bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-teal-400">
              🌱 Plant Doctor
            </span>
            <span className="text-[10px] text-slate-400">Pests vs Soil Issues</span>
          </button>

          {/* 5. Animal Encounter */}
          <button
            onClick={() => onNavigate('library')}
            className="group bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PawPrint className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-purple-400">
              🐾 Wildlife / Strays
            </span>
            <span className="text-[10px] text-slate-400">Humane Non-Harm Protocol</span>
          </button>

          {/* 6. 🚨 Dangerous Animal Safety */}
          <button
            onClick={onOpenDangerousModal}
            className="group bg-red-950/40 hover:bg-red-900/50 border border-red-500/60 hover:border-red-400 p-4 rounded-2xl flex flex-col items-center text-center space-y-2 transition shadow-lg shadow-red-950/50 hover:-translate-y-1 animate-pulse"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-600/30 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-red-200">
              🚨 Emergency Mode
            </span>
            <span className="text-[10px] text-red-300/80">Snakes, Scorpions, Swarms</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Recent Sightings & Active Problems */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Active Problems & Recurring Tracker */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Active Infestation Problems</span>
                </h3>
                <p className="text-xs text-slate-400">Ongoing issues being managed</p>
              </div>
              <button
                onClick={() => onNavigate('track')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>View Tracker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {problems.slice(0, 3).map((prob) => (
                <div
                  key={prob.id}
                  onClick={() => onNavigate('track')}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white">{prob.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-slate-300 border border-slate-800">
                        {prob.location}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Species: <strong className="text-slate-200">{prob.pestName}</strong> • Last seen: {prob.lastSeen}
                    </p>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider capitalize ${
                      prob.status === 'resolved'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : prob.status === 'improving'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {prob.status}
                  </span>
                </div>
              ))}

              {problems.length === 0 && (
                <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 text-center text-xs text-slate-400">
                  “Your home looks clear. Keep up your prevention routine.”
                </div>
              )}
            </div>
          </div>

          {/* Recent Sightings */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Recent Pest Sightings</span>
                </h3>
                <p className="text-xs text-slate-400">Chronological sighting log</p>
              </div>
              <button
                onClick={() => onNavigate('track')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>All Logs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {sightings.slice(0, 4).map((s) => (
                <div
                  key={s.id}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[11px]">
                      {s.pestName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">{s.pestName}</h5>
                      <span className="text-[11px] text-slate-400">
                        {s.location} • {s.date}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      s.resolved ? 'text-emerald-400 bg-emerald-950/60' : 'text-amber-400 bg-amber-950/60'
                    }`}
                  >
                    {s.resolved ? 'Resolved' : 'Active'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Reminders & Safe Knowledge */}
        <div className="lg:col-span-5 space-y-6">
          {/* Preventative Reminders */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Upcoming Reminders</span>
              </h3>
              <button
                onClick={() => onNavigate('track')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              {reminders.slice(0, 4).map((rem) => (
                <div
                  key={rem.id}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <p className="font-semibold text-slate-200">{rem.title}</p>
                    <span className="text-[10px] text-slate-400">Due: {rem.targetDate}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-300 font-mono">
                    {rem.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Problem Diagnostic Quick-Links */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Specialized Problem Solvers</span>
            </h3>

            <div className="space-y-2">
              {[
                { label: 'Ant Problem Solver', desc: 'Identify color, trails, and food source', tab: 'solvers' as NavTab },
                { label: 'Lizard in My House', desc: 'Humane 5-step non-harm release', tab: 'solvers' as NavTab },
                { label: 'Termite Risk Check', desc: 'Mud tubes, hollow wood, and sill plates', tab: 'solvers' as NavTab },
                { label: 'Bed Bug Inspector', desc: 'Mattress seams & interceptor guide', tab: 'solvers' as NavTab }
              ].map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(link.tab)}
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 cursor-pointer transition flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">{link.label}</h5>
                    <p className="text-[11px] text-slate-400">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
