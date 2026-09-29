import React from 'react';
import {
  Shield,
  Camera,
  Search,
  Wrench,
  ClipboardList,
  GitCompare,
  MessageSquare,
  BarChart3,
  Home,
  AlertTriangle,
  PawPrint,
  Baby,
  Menu,
  X
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'identify'
  | 'library'
  | 'solvers'
  | 'inspect'
  | 'track'
  | 'compare'
  | 'assistant'
  | 'analytics'
  | 'admin';

interface Props {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenDangerousModal: () => void;
  petSafeMode: boolean;
  setPetSafeMode: (val: boolean) => void;
  childSafeMode: boolean;
  setChildSafeMode: (val: boolean) => void;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  onOpenDangerousModal,
  petSafeMode,
  setPetSafeMode,
  childSafeMode,
  setChildSafeMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Home', icon: Home },
    { id: 'identify' as NavTab, label: 'Identify Photo', icon: Camera, highlight: true },
    { id: 'library' as NavTab, label: 'Pest Library', icon: Search },
    { id: 'solvers' as NavTab, label: 'Solvers', icon: Wrench },
    { id: 'inspect' as NavTab, label: 'Home Inspect', icon: ClipboardList },
    { id: 'track' as NavTab, label: 'Tracker & Logs', icon: ClipboardList },
    { id: 'compare' as NavTab, label: 'Compare', icon: GitCompare },
    { id: 'assistant' as NavTab, label: 'AI Assistant', icon: MessageSquare },
    { id: 'analytics' as NavTab, label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Banner with Safety Modes & Emergency Alert */}
      <div className="bg-slate-950 px-4 py-1.5 border-b border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-3 text-slate-400">
          <span className="hidden sm:inline font-medium text-emerald-400">PestGuard Safety Engine</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline italic text-slate-400">“Identify it. Understand it. Handle it safely.”</span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Pet Safe Mode Toggle */}
          <button
            onClick={() => setPetSafeMode(!petSafeMode)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition ${
              petSafeMode
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
            title="Filters advice prioritizing pet-safe non-toxic recommendations"
          >
            <PawPrint className="w-3.5 h-3.5" />
            <span>Pet Mode: {petSafeMode ? 'ON' : 'OFF'}</span>
          </button>

          {/* Child Safe Mode Toggle */}
          <button
            onClick={() => setChildSafeMode(!childSafeMode)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition ${
              childSafeMode
                ? 'bg-blue-950 text-blue-300 border border-blue-600'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
            title="Prioritizes non-chemical approaches and highlights safety warnings"
          >
            <Baby className="w-3.5 h-3.5" />
            <span>Child Mode: {childSafeMode ? 'ON' : 'OFF'}</span>
          </button>

          {/* 🚨 Dangerous Animal Safety Button */}
          <button
            onClick={onOpenDangerousModal}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600/90 hover:bg-red-600 text-white shadow-sm shadow-red-600/50 animate-pulse transition"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>🚨 DANGEROUS ANIMAL</span>
          </button>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-black tracking-tight text-white">PestGuard</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Identify • Understand • Handle Safely</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                      : item.highlight
                      ? 'bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setActiveTab('identify')}
              className="p-2 rounded-xl bg-emerald-600 text-white"
              title="Quick Camera Identify"
            >
              <Camera className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-1 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
