import React from 'react';
import {
  BarChart3,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Home,
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { PestSighting, ProblemReport } from '../types/pest';

interface Props {
  sightings: PestSighting[];
  problems: ProblemReport[];
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'];

export const AnalyticsDashboard: React.FC<Props> = ({ sightings, problems }) => {
  // Compute category stats
  const categoryMap: Record<string, number> = {};
  sightings.forEach((s) => {
    categoryMap[s.pestName] = (categoryMap[s.pestName] || 0) + 1;
  });

  const pestRankData = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  // Room location stats
  const roomMap: Record<string, number> = {};
  sightings.forEach((s) => {
    roomMap[s.location] = (roomMap[s.location] || 0) + 1;
  });

  const roomData = Object.entries(roomMap)
    .sort((a, b) => b[1] - a[1])
    .map(([room, count]) => ({ room, count }));

  // Problem status
  const resolvedCount = problems.filter((p) => p.status === 'resolved').length;
  const activeCount = problems.filter((p) => p.status === 'active').length;
  const improvingCount = problems.filter((p) => p.status === 'improving').length;
  const monitoringCount = problems.filter((p) => p.status === 'monitoring').length;

  const statusPieData = [
    { name: 'Resolved', value: resolvedCount || 1, color: '#10b981' },
    { name: 'Active', value: activeCount || 1, color: '#ef4444' },
    { name: 'Improving', value: improvingCount, color: '#f59e0b' },
    { name: 'Monitoring', value: monitoringCount, color: '#3b82f6' }
  ].filter((d) => d.value > 0);

  const topRoom = roomData[0]?.room || 'Kitchen';
  const topPest = pestRankData[0]?.name || 'Ants';

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-1">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Infestation Trends & Diagnostics</span>
            </div>
            <h1 className="text-2xl font-black text-white">Household Pest Analytics</h1>
            <p className="text-xs text-slate-400 mt-1">
              Data-driven insights to identify hot spots, verify prevention efficacy, and track seasonal pest occurrences.
            </p>
          </div>
        </div>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Total Sightings</span>
          <p className="text-2xl font-black text-white">{sightings.length}</p>
          <p className="text-[10px] text-emerald-400 font-medium">Logged encounters</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Most Affected Area</span>
          <p className="text-xl font-black text-emerald-400 truncate">{topRoom}</p>
          <p className="text-[10px] text-slate-400 font-medium">Primary hot spot</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Top Encountered</span>
          <p className="text-xl font-black text-amber-400 truncate">{topPest}</p>
          <p className="text-[10px] text-slate-400 font-medium">Most frequent species</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Resolved Ratio</span>
          <p className="text-2xl font-black text-blue-400">
            {problems.length > 0
              ? `${Math.round((resolvedCount / problems.length) * 100)}%`
              : '100%'}
          </p>
          <p className="text-[10px] text-blue-300 font-medium">Resolution rate</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Affected Rooms Bar Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Home className="w-4 h-4 text-emerald-400" />
            <span>Sightings by Location / Room</span>
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roomData.length > 0 ? roomData : [{ room: 'Kitchen', count: 2 }, { room: 'Bathroom', count: 1 }]}>
                <XAxis dataKey="room" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution Pie Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Infestation Problem Resolution Status</span>
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                />
                <Legend formatter={(val) => <span className="text-xs text-slate-300">{val}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
