import React from 'react';
import { AlertTriangle, PhoneCall, ShieldAlert, HeartPulse, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DangerousSafetyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border-2 border-red-500/80 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-red-500/30 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-red-600/30 rounded-xl border border-red-500 text-red-400">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-400 flex items-center gap-2">
                DANGEROUS ANIMAL SAFETY MODE
              </h2>
              <p className="text-xs text-slate-300">
                Immediate protocol for venomous snakes, scorpions, aggressive swarms, and wildlife encounters
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="bg-red-950/60 border border-red-700/60 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              NON-NEGOTIABLE SAFETY PRINCIPLE
            </h3>
            <p className="text-sm text-red-100 font-medium mt-1 leading-relaxed">
              Do NOT approach, capture, touch, corner, poke, throw stones at, burn, crush, poison, or physically handle any potentially dangerous animal!
            </p>
            <p className="text-xs text-red-200/80 mt-1">
              Over 70% of venomous bites and animal attacks happen when untrained individuals attempt to kill or catch an animal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Step 1 • Freeze</span>
              <p className="text-sm text-slate-200 mt-1">
                Stop moving. Sudden aggressive motions provoke defensive strikes from snakes, wasps, and wildlife.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Step 2 • Back Away</span>
              <p className="text-sm text-slate-200 mt-1">
                Slowly take three large steps backward. Maintain at least 6 to 10 feet (2 to 3 meters) of distance.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Step 3 • Evacuate Children & Pets</span>
              <p className="text-sm text-slate-200 mt-1">
                Quietly usher children and domestic pets indoors or into an enclosed safe room immediately.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Step 4 • Safe Visual Observation</span>
              <p className="text-sm text-slate-200 mt-1">
                If safe from a doorway, take a photo with digital zoom from a distance without approaching to assist identification.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4">
            <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-emerald-400" />
              SNAKEBITE & VENOMOUS STING EMERGENCY FIRST AID
            </h3>
            <ul className="text-xs text-slate-300 mt-2 space-y-1.5 list-disc pl-4">
              <li>
                <strong className="text-slate-100">Call emergency services immediately:</strong> Dial 911 / 112 / your local emergency hospital.
              </li>
              <li>
                <strong className="text-slate-100">Stay calm and still:</strong> Restrict physical movement. Do NOT run, as elevated heart rate accelerates venom spread.
              </li>
              <li>
                <strong className="text-slate-100">Remove jewelry & tight clothing:</strong> Remove rings, watches, and boots before swelling begins.
              </li>
              <li>
                <strong className="text-slate-100">Keep bite at heart level:</strong> Position limb at or slightly below heart level.
              </li>
              <li>
                <strong className="text-red-400">NEVER DO THIS:</strong> Do NOT cut with a blade, do NOT suck venom, do NOT apply a tourniquet, do NOT apply ice or electric shock.
              </li>
            </ul>
          </div>

          <div className="bg-blue-950/40 border border-blue-800/40 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-blue-300">Need Professional Assistance?</h4>
              <p className="text-xs text-slate-300">Contact local Animal Control, Wildlife Rescue, or a certified pest handler.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer">
                <PhoneCall className="w-3.5 h-3.5" />
                Emergency Hotline
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl border border-slate-600 transition"
          >
            I Understand — Close Alert
          </button>
        </div>
      </div>
    </div>
  );
};
