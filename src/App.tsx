import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { PhotoIdentifier } from './components/PhotoIdentifier';
import { PestLibrary } from './components/PestLibrary';
import { SpecializedSolvers } from './components/SpecializedSolvers';
import { ComparisonTool } from './components/ComparisonTool';
import { SightingTracker } from './components/SightingTracker';
import { HomeInspectionView } from './components/HomeInspectionView';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { PestGuardAiChat } from './components/PestGuardAiChat';
import { AdminDashboard } from './components/AdminDashboard';
import { DangerousSafetyModal } from './components/DangerousSafetyModal';
import { PEST_DATABASE } from './data/pests/index';
import {
  Pest,
  PestSighting,
  ProblemReport,
  Reminder,
  HouseholdProfile
} from './types/pest';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [isDangerousModalOpen, setIsDangerousModalOpen] = useState(false);
  const [petSafeMode, setPetSafeMode] = useState(true);
  const [childSafeMode, setChildSafeMode] = useState(true);

  // Core Data
  const [pests, setPests] = useState<Pest[]>(PEST_DATABASE);
  const [sightings, setSightings] = useState<PestSighting[]>([]);
  const [problems, setProblems] = useState<ProblemReport[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [household, setHousehold] = useState<HouseholdProfile>({
    id: 'household-default',
    name: 'My Home',
    propertyType: 'house',
    region: 'global',
    hasPets: true,
    petTypes: ['dog', 'cat'],
    hasChildren: true,
    members: [{ id: 'm1', name: 'Primary Resident', role: 'owner' }]
  });

  // Cross-component interaction states
  const [selectedPestForComparison, setSelectedPestForComparison] = useState<Pest | null>(null);
  const [initialLibraryPestId, setInitialLibraryPestId] = useState<string | null>(null);
  const [aiAssistantQuery, setAiAssistantQuery] = useState<string>('');

  // Fetch initial data from Express backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pestsRes, sightingsRes, problemsRes, remindersRes, householdRes] = await Promise.all([
          fetch('/api/pests').then((r) => r.json()).catch(() => ({ pests: PEST_DATABASE })),
          fetch('/api/sightings').then((r) => r.json()).catch(() => ({ sightings: [] })),
          fetch('/api/problems').then((r) => r.json()).catch(() => ({ problems: [] })),
          fetch('/api/reminders').then((r) => r.json()).catch(() => ({ reminders: [] })),
          fetch('/api/household').then((r) => r.json()).catch(() => ({ household: null }))
        ]);

        if (pestsRes?.pests) setPests(pestsRes.pests);
        if (sightingsRes?.sightings) setSightings(sightingsRes.sightings);
        if (problemsRes?.problems) setProblems(problemsRes.problems);
        if (remindersRes?.reminders) setReminders(remindersRes.reminders);
        if (householdRes?.household) setHousehold(householdRes.household);
      } catch (err) {
        console.warn('Backend fetch error, relying on local seed state:', err);
      }
    };
    fetchData();
  }, []);

  // Handlers for Sightings
  const handleAddSighting = async (newSightingData: Omit<PestSighting, 'id' | 'createdAt'>) => {
    try {
      const res = await fetch('/api/sightings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSightingData)
      });
      const data = await res.json();
      if (data.sighting) {
        setSightings((prev) => [data.sighting, ...prev]);
      }
    } catch {
      const fallback: PestSighting = {
        ...newSightingData,
        id: `sighting-${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      setSightings((prev) => [fallback, ...prev]);
    }
  };

  const handleUpdateSighting = async (id: string, updates: Partial<PestSighting>) => {
    try {
      await fetch(`/api/sightings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (err) {
      console.warn('Update sighting failed:', err);
    }
    setSightings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const handleDeleteSighting = async (id: string) => {
    try {
      await fetch(`/api/sightings/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Delete sighting failed:', err);
    }
    setSightings((prev) => prev.filter((s) => s.id !== id));
  };

  // Handlers for Problems
  const handleAddProblem = async (newProbData: Omit<ProblemReport, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const res = await fetch('/api/problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProbData)
      });
      const data = await res.json();
      if (data.problem) {
        setProblems((prev) => [data.problem, ...prev]);
      }
    } catch {
      const fallback: ProblemReport = {
        ...newProbData,
        id: `problem-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProblems((prev) => [fallback, ...prev]);
    }
  };

  const handleUpdateProblem = async (id: string, updates: Partial<ProblemReport>) => {
    try {
      await fetch(`/api/problems/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (err) {
      console.warn('Update problem failed:', err);
    }
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const handleDeleteProblem = async (id: string) => {
    try {
      await fetch(`/api/problems/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Delete problem failed:', err);
    }
    setProblems((prev) => prev.filter((p) => p.id !== id));
  };

  // Handlers for Reminders
  const handleAddReminder = async (newRemData: Omit<Reminder, 'id'>) => {
    try {
      const res = await fetch('/api/reminders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRemData)
      });
      const data = await res.json();
      if (data.reminder) {
        setReminders((prev) => [...prev, data.reminder]);
      }
    } catch {
      const fallback: Reminder = {
        ...newRemData,
        id: `reminder-${Date.now()}`
      };
      setReminders((prev) => [...prev, fallback]);
    }
  };

  const handleToggleReminder = async (id: string, completed: boolean) => {
    try {
      await fetch(`/api/reminders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
      });
    } catch (err) {
      console.warn('Toggle reminder failed:', err);
    }
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completed } : r))
    );
  };

  const handleDeleteReminder = async (id: string) => {
    try {
      await fetch(`/api/reminders/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Delete reminder failed:', err);
    }
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  // Household & Admin Handlers
  const handleUpdateHousehold = async (updates: Partial<HouseholdProfile>) => {
    try {
      const res = await fetch('/api/household', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      const data = await res.json();
      if (data.household) setHousehold(data.household);
    } catch {
      setHousehold((prev) => ({ ...prev, ...updates }));
    }
  };

  const handleAddCustomPest = async (newPestData: Omit<Pest, 'id'>) => {
    try {
      const res = await fetch('/api/admin/pests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPestData)
      });
      const data = await res.json();
      if (data.pest) {
        setPests((prev) => [...prev, data.pest]);
      }
    } catch {
      const fallbackPest: Pest = {
        ...newPestData,
        id: `pest-custom-${Date.now()}`
      };
      setPests((prev) => [...prev, fallbackPest]);
    }
  };

  const handleDeleteCustomPest = async (id: string) => {
    try {
      await fetch(`/api/admin/pests/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Delete custom pest failed:', err);
    }
    setPests((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDangerousModal={() => setIsDangerousModalOpen(true)}
        petSafeMode={petSafeMode}
        setPetSafeMode={setPetSafeMode}
        childSafeMode={childSafeMode}
        setChildSafeMode={setChildSafeMode}
      />

      {/* Main App Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {activeTab === 'dashboard' && (
          <Dashboard
            onNavigate={setActiveTab}
            onOpenDangerousModal={() => setIsDangerousModalOpen(true)}
            sightings={sightings}
            problems={problems}
            reminders={reminders}
            onOpenPestSearchWithTerm={(term) => {
              setActiveTab('library');
            }}
          />
        )}

        {activeTab === 'identify' && (
          <PhotoIdentifier
            onSaveSighting={handleAddSighting}
            onTrackProblem={handleAddProblem}
            onOpenPestDetail={(pestId) => {
              setInitialLibraryPestId(pestId);
              setActiveTab('library');
            }}
            onAskAiWithContext={(query) => {
              setAiAssistantQuery(query);
              setActiveTab('assistant');
            }}
            petSafeMode={petSafeMode}
            childSafeMode={childSafeMode}
          />
        )}

        {activeTab === 'library' && (
          <PestLibrary
            pests={pests}
            initialSelectedPestId={initialLibraryPestId}
            onSelectPestForComparison={(p) => {
              setSelectedPestForComparison(p);
              setActiveTab('compare');
            }}
            onOpenSightingModal={(p) => {
              handleAddSighting({
                date: new Date().toISOString().slice(0, 10),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                pestId: p.id,
                pestName: p.commonName,
                location: p.commonLocations[0] || 'Kitchen',
                numberObserved: 'few',
                frequency: 'occasionally',
                signsObserved: ['Live observation'],
                severity: p.riskLevel === 'high' ? 'severe' : 'low',
                notes: `Identified from library: ${p.description}`,
                actionTaken: p.nonChemicalSolutions[0] || 'Monitored',
                resolved: false
              });
              setActiveTab('track');
            }}
            onAskAiWithPest={(p) => {
              setAiAssistantQuery(`I found a ${p.commonName} (${p.scientificName}) in my home. What should I do right now to safely handle it?`);
              setActiveTab('assistant');
            }}
            petSafeMode={petSafeMode}
            childSafeMode={childSafeMode}
          />
        )}

        {activeTab === 'solvers' && (
          <SpecializedSolvers
            petSafeMode={petSafeMode}
            onAskAiWithQuery={(q) => {
              setAiAssistantQuery(q);
              setActiveTab('assistant');
            }}
            onOpenSightingWithPest={(pName, loc) => {
              handleAddSighting({
                date: new Date().toISOString().slice(0, 10),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                pestName: pName,
                location: loc,
                numberObserved: 'few',
                frequency: 'occasionally',
                signsObserved: ['Logged from specialized solver'],
                severity: 'low',
                notes: 'Solved with interactive module',
                actionTaken: 'Followed safe step-by-step guidance',
                resolved: false
              });
              setActiveTab('track');
            }}
          />
        )}

        {activeTab === 'inspect' && (
          <HomeInspectionView
            onTriggerIdentifyFromRoom={(room) => {
              setActiveTab('identify');
            }}
            onSaveSightingFromInspection={(pestName, loc, notes) => {
              handleAddSighting({
                date: new Date().toISOString().slice(0, 10),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                pestName,
                location: loc,
                numberObserved: 'one',
                frequency: 'occasionally',
                signsObserved: ['Flagged during inspection'],
                severity: 'low',
                notes,
                actionTaken: 'Flagged for cleaning & sealing',
                resolved: false
              });
              setActiveTab('track');
            }}
          />
        )}

        {activeTab === 'track' && (
          <SightingTracker
            sightings={sightings}
            problems={problems}
            reminders={reminders}
            onAddSighting={handleAddSighting}
            onUpdateSighting={handleUpdateSighting}
            onDeleteSighting={handleDeleteSighting}
            onAddProblem={handleAddProblem}
            onUpdateProblem={handleUpdateProblem}
            onDeleteProblem={handleDeleteProblem}
            onAddReminder={handleAddReminder}
            onToggleReminder={handleToggleReminder}
            onDeleteReminder={handleDeleteReminder}
          />
        )}

        {activeTab === 'compare' && (
          <ComparisonTool
            pests={pests}
            preSelectedPestA={selectedPestForComparison}
            onOpenPestDetail={(pestId) => {
              setInitialLibraryPestId(pestId);
              setActiveTab('library');
            }}
          />
        )}

        {activeTab === 'assistant' && (
          <PestGuardAiChat
            initialQuery={aiAssistantQuery}
            petSafeMode={petSafeMode}
            childSafeMode={childSafeMode}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsDashboard
            sightings={sightings}
            problems={problems}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard
            pests={pests}
            household={household}
            onUpdateHousehold={handleUpdateHousehold}
            onAddCustomPest={handleAddCustomPest}
            onDeleteCustomPest={handleDeleteCustomPest}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300">PestGuard</span>
            <span>•</span>
            <span>“Identify it. Understand it. Handle it safely.”</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('admin')}
              className="text-slate-400 hover:text-emerald-400 transition cursor-pointer"
            >
              Admin & Household Settings
            </button>
            <span>•</span>
            <button
              onClick={() => setIsDangerousModalOpen(true)}
              className="text-red-400 hover:text-red-300 transition cursor-pointer font-semibold"
            >
              🚨 Dangerous Animal Protocol
            </button>
          </div>
        </div>
      </footer>

      {/* Global Dangerous Animal Emergency Safety Modal */}
      <DangerousSafetyModal
        isOpen={isDangerousModalOpen}
        onClose={() => setIsDangerousModalOpen(false)}
      />
    </div>
  );
};
export default App;
