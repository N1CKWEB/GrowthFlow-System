import { ActivityItem } from "~/components/ActivityItem";
import { SectionTitle } from "~/components/SectionTitle";
import { StatCard } from "~/components/StartCard";
import {
  FiZap,
  FiHome,
  FiBarChart2,
  FiSettings,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Instagram,
  Webhook,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";
function Home() {
  // Mock data for automation tasks
  const automationTasks = [
    {
      name: "Instagram DM auto-reply",
      progress: 70,
      status: "En progreso",
      team: ["👤", "👤", "👤"],
    },
    {
      name: "Email follow-up sequence",
      progress: 90,
      status: "Casi completo",
      team: ["👤", "👤"],
    },
    {
      name: "Lead scoring con IA",
      progress: 30,
      status: "Iniciando",
      team: ["👤", "👤", "👤", "👤"],
    },
  ];
  const logo = "/assets/img/logo_blanco.png";

  return (
    <main className="min-h-screen bg-blue-900/25 pb-24">
      {/* Header */}
      <header className="px-6 pt-6 mb-8">
        <div className="flex items-center gap-4">
          <img src={logo} className="h-10" alt="GrowthFlow" />
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400">Resumen general de tu negocio</p>
      </header>

      {/* Stats */}
      <section className="px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1 mb-8">
        <StatCard
          title="Leads"
          value="1,320"
          trend="+12%"
          icon={<FiUsers size={18} />}
        />
        <StatCard
          title="Conversiones"
          value="320"
          trend="-2%"
          icon={<FiTrendingUp size={18} />}
        />
        <StatCard
          title="Ingresos"
          value="$324,200"
          trend="+32%"
          icon={<FiDollarSign size={18} />}
        />
        <StatCard
          title="Automatizaciones activas"
          value="8"
          icon={<FiZap size={18} />}
          highlight
        />
      </section>

      {/* Main Content Grid - 2 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative top-20 justify-center w-460">
        {/* Attendance/Leads Report - Bar Chart */}
        <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              Reporte de leads
            </h3>
            <p className="text-sm text-slate-400">
              Últimos 7 días · clasificación por estado
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-3xl font-semibold text-white">980</p>
              <p className="text-xs text-emerald-400 mt-1">▲ 8% Nuevos</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">310</p>
              <p className="text-xs text-slate-400 mt-1">En seguimiento</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">30</p>
              <p className="text-xs text-red-400 mt-1">▼ 2% Perdidos</p>
            </div>
          </div>

          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                // data={attendanceData}
                barGap={0}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(148, 163, 184, 0.05)"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                  style={{ fontSize: "11px" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  style={{ fontSize: "11px" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    borderRadius: "12px",
                    color: "#f1f5f9",
                  }}
                  cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
                />
                <Bar
                  dataKey="present"
                  fill="#3B82F6"
                  radius={[8, 8, 0, 0]}
                  barSize={20}
                />
                <Bar
                  dataKey="absent"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-500"></div>
              <span className="text-xs text-slate-400">Nuevos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-emerald-500"></div>
              <span className="text-xs text-slate-400">En seguimiento</span>
            </div>
          </div>
        </div>

        {/* Conversion Gauge */}
        <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Tasa de conversión
              </h3>
              <p className="text-sm text-slate-400">Performance del mes</p>
            </div>
            <button className="p-2 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Gauge Chart */}
          <div className="relative flex items-center justify-center h-[200px]">
            <svg viewBox="0 0 200 120" className="w-full">
              {/* Background arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="rgba(148, 163, 184, 0.1)"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Red section */}
              <path
                d="M 30 100 A 70 70 0 0 1 80 35"
                fill="none"
                stroke="#ef4444"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Orange section */}
              <path
                d="M 80 35 A 70 70 0 0 1 120 35"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Green section */}
              <path
                d="M 120 35 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#10b981"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Pointer */}
              <circle cx="100" cy="100" r="8" fill="#3B82F6" />
              <line
                x1="100"
                y1="100"
                x2="145"
                y2="60"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-8">
              <p className="text-5xl font-semibold text-white">80%</p>
              <p className="text-sm text-emerald-400 mt-1">+5% vs last month</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center mt-6">
            1,320 leads convertidos en 320 clientes este mes
          </p>
        </div>
      </div>

      {/* Second Row - Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Summary / Automation Progress */}
        <div className="lg:col-span-2 bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Resumen de automatizaciones
              </h3>
              <p className="text-sm text-slate-400">Proyectos activos</p>
            </div>
            <button className="p-2 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Automation Task List */}
          <div className="space-y-4">
            {automationTasks.map((task, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-slate-800/50 border border-white/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <p className="text-sm font-medium text-white">
                        {task.name}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400">{task.status}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {task.team.map((avatar, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs"
                        >
                          {avatar}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {task.progress}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-linear-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Automations - Compact */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Activas</h3>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              8 online
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-pink-500/10">
                <Instagram className="w-4 h-4 text-pink-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Instagram DM</p>
                <p className="text-xs text-slate-400">Auto-respuesta</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Webhook className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Follow-up</p>
                <p className="text-xs text-slate-400">Email secuencia</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Activity className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Lead Scoring</p>
                <p className="text-xs text-slate-400">Clasificación IA</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Zap className="w-4 h-4 text-orange-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Nurturing</p>
                <p className="text-xs text-slate-400">Campaña 3 días</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-slate-900/90 backdrop-blur border-t border-white/5 flex justify-around items-center text-slate-400">
        <FiHome className="text-xl text-blue-400" />
        <FiBarChart2 className="text-xl" />
        <FiZap className="text-xl" />
        <FiSettings className="text-xl" />
      </nav>
    </main>
  );
}

export default Home;
