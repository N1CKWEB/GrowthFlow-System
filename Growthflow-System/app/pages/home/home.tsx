import React from "react";
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
  Sparkles,
  TrendingDown,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
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
import type { MetricCardProps } from "~/interfaces/growthFlow.interfaces";
import { attendanceData, automationTasks } from "~/mocks/growthFlow.mocks";

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  highlighted,
  iconColor = "from-blue-500 to-cyan-500",
  iconBg = "bg-blue-500/10",
}) => {
  const isPositive = change && change > 0;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 ${
        highlighted
          ? "bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20"
          : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Circular Icon */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            highlighted ? "bg-white/20" : iconBg
          }`}
        >
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${iconColor} flex items-center justify-center shadow-lg`}
          >
            <div className="text-white">{icon}</div>
          </div>
        </div>
        {change !== undefined && (
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${
              isPositive
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            <span className="text-xs font-semibold">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      <div>
        <p
          className={`text-sm mb-1 ${
            highlighted ? "text-blue-100" : "text-slate-400"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-3xl font-semibold ${
            highlighted ? "text-white" : "text-white"
          }`}
        >
          {value}
        </p>
        {change !== undefined && (
          <p className="text-xs text-slate-400 mt-1">
            {isPositive ? "+" : ""}
            {change}% from yesterday
          </p>
        )}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Metrics Grid - With colorful circular icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <MetricCard
          title="Total Leads"
          value="1,320"
          change={12}
          icon={<Users className="w-5 h-5" />}
          iconColor="from-emerald-500 to-teal-500"
          iconBg="bg-emerald-500/10"
        />
        <MetricCard
          title="Conversiones"
          value="320"
          change={8}
          icon={<TrendingUp className="w-5 h-5" />}
          iconColor="from-blue-500 to-cyan-500"
          iconBg="bg-blue-500/10"
        />
        <MetricCard
          title="Total Ingresos"
          value="$324,200"
          change={15}
          icon={<DollarSign className="w-5 h-5" />}
          iconColor="from-purple-500 to-pink-500"
          iconBg="bg-purple-500/10"
        />
        <MetricCard
          title="Tasa Conversión"
          value="24.2%"
          change={5}
          icon={<Target className="w-5 h-5" />}
          iconColor="from-orange-500 to-amber-500"
          iconBg="bg-orange-500/10"
        />
      </div>

      {/* Main Content Grid - 3 columns on XL screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Attendance/Leads Report - Bar Chart */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
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

          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData} barGap={0}>
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
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
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

        {/* Active Automations - Now in first row on XL screens */}
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

      {/* Second Row - Automation tasks full width */}
      <div className="grid grid-cols-1">
        {/* Task Summary / Automation Progress */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
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
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights Section - Professional & Clean */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights Card */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">AI Insights</h3>
              <p className="text-sm text-purple-300">
                Análisis inteligente en tiempo real
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Insight 1 - Positive */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/20">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white mb-1">
                    Incremento en conversiones
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tus leads de Instagram muestran un 23% más de engagement.
                    Considera aumentar la frecuencia de DMs.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-medium text-emerald-400">
                      +23% esta semana
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight 2 - Warning */}
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-500/20">
                  <AlertCircle className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white mb-1">
                    Leads sin seguimiento
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    42 leads esperan respuesta hace más de 48h. Activa una
                    secuencia automática de follow-up.
                  </p>
                  <button className="flex items-center gap-1 mt-2 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors">
                    Ver leads <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Insight 3 - Info */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white mb-1">
                    Mejor horario de contacto
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    La IA detectó que 18:00-20:00 es el momento con mayor tasa
                    de respuesta (78%).
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-medium text-blue-400">
                      Aplicar en automatizaciones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recommendations */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              Acciones recomendadas
            </h3>
            <p className="text-sm text-slate-400">
              Sugerencias personalizadas para optimizar
            </p>
          </div>

          <div className="space-y-3">
            {/* Action 1 */}
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-700/50 transition-all group text-left">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">
                  Crear secuencia de nurturing
                </p>
                <p className="text-xs text-slate-400">
                  Para leads en fase de consideración
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Action 2 */}
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-purple-500/30 hover:bg-slate-700/50 transition-all group text-left">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">
                  Optimizar respuestas Instagram
                </p>
                <p className="text-xs text-slate-400">
                  Mejorar tiempo de respuesta en 40%
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Action 3 */}
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-700/50 transition-all group text-left">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">
                  Analizar patrones de conversión
                </p>
                <p className="text-xs text-slate-400">
                  Identificar oportunidades de mejora
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Action 4 */}
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-orange-500/30 hover:bg-slate-700/50 transition-all group text-left">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <TrendingDown className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">
                  Recuperar leads perdidos
                </p>
                <p className="text-xs text-slate-400">
                  Campaña de reactivación automática
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Footer CTA */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all text-white font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Explorar más insights con IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
