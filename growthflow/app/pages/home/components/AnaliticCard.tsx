import { LucideIcon } from "lucide-react";
import { Insights } from "../interfaces/home.interfaces";

function InsightsIA({ title, subtitle, icon: Icon, bgColor }: Insights) {
  return (
    <div className="p-6 relative z-10">
      <div>
        <div></div>
        <div className="bg-linear-to-br from-blue-950 to-blue-950/5 border border-white/10 rounded-3xl p-8 w-105">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-purple-500">
              ✨
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">AI Insights</h2>
              <p className="text-sm text-slate-400">
                Análisis inteligente en tiempo real
              </p>
            </div>
          </div>

          {/* Insight 1 */}
          <div className="bg-linear-to-br from-red-700 to-red-400 border rounded-2xl p-5 mb-4  transition ">
            <h3 className="text-white font-medium mb-1">
              Incremento en conversiones
            </h3>

            <p className="text-sm text-slate-300 mb-3">
              Tus leads de Instagram muestran un 23% más de engagement.
              Considera aumentar la frecuencia de DMs.
            </p>

            <span className="text-emerald-400 text-sm font-medium">
              +23% esta semana
            </span>
          </div>

          {/* Insight 2 */}
          <div className="bg-orange-500/10 border border-orange-400/20 rounded-2xl p-5 mb-4 hover:bg-orange-500/15 transition">
            <h3 className="text-white font-medium mb-1">
              Leads sin seguimiento
            </h3>

            <p className="text-sm text-slate-300 mb-3">
              42 leads esperan respuesta hace más de 48h. Activa una secuencia
              automática de follow-up.
            </p>

            <span className="text-orange-400 text-sm font-medium flex items-center gap-1">
              Ver leads →
            </span>
          </div>

          {/* Insight 3 */}
          <div className="bg-blue-500/10 border border-blue-400/20 rounded-2xl p-5 hover:bg-blue-500/15 transition">
            <h3 className="text-white font-medium mb-1">
              Mejor horario de contacto
            </h3>

            <p className="text-sm text-slate-300 mb-3">
              La IA detectó que 18:00-20:00 es el momento con mayor tasa de
              respuesta (78%).
            </p>

            <span className="text-blue-400 text-sm font-medium">
              Aplicar en automatizaciones
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InsightsIA;
