import { ChevronRight } from "lucide-react";
import { settingSections } from "./mocks/settings.mocks";

function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-white mb-2">
          Configuración
        </h1>
        <p className="text-slate-400">Gestiona tu cuenta y preferencias</p>
      </div>

      {/* User Profile Card */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold">
              U
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-400 border-2 border-slate-900 rounded-full"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              Usuario GrowthFlow
            </h3>
            <p className="text-sm text-slate-400">usuario@email.com</p>
          </div>
          <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-xl transition-colors text-sm">
            Editar perfil
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider px-2">
              {section.title}
            </h3>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden divide-y divide-white/5">
              {section.items.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-5 hover:bg-slate-800/50 transition-colors text-left group"
                >
                  <div className="p-3 rounded-2xl bg-slate-800/50 group-hover:bg-slate-700/50 text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-medium text-white">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Plan Info */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg shadow-blue-500/20">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Plan Pro</h3>
            <p className="text-sm text-blue-100">
              5 automatizaciones activas de 10 disponibles
            </p>
          </div>
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
            Activo
          </span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <button className="w-full px-4 py-2.5 bg-white text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors">
          Mejorar a Plan Business
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/20 rounded-3xl p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-2">
          Zona de peligro
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Acciones irreversibles que afectan tu cuenta
        </p>
        <div className="space-y-2">
          <button className="w-full md:w-auto px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors text-sm border border-red-500/20">
            Exportar todos los datos
          </button>
          <button className="w-full md:w-auto px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors text-sm border border-red-500/20 md:ml-2">
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
export default Settings;
