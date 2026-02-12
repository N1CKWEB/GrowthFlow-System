import { CheckCircle2, Zap, Activity, ArrowRight, Clock } from "lucide-react";
import React from "react";
import { automations, integrations } from "./mocks/automations.mocks";
import { CFormSwitch } from "@coreui/react";
import { Switch } from "./components/Switch";

function Automations() {
  const [automationStates, setAutomationStates] = React.useState<
    Record<string, boolean>
  >(
    automations.reduce((acc, auto) => ({ ...acc, [auto.id]: auto.active }), {}),
  );

  const handleToggle = (id: string) => {
    setAutomationStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeCount = Object.values(automationStates).filter(Boolean).length;
  const totalExecutions = automations.reduce(
    (sum, auto) => sum + auto.executions,
    0,
  );

  return (
    <main>
      <div className="min-h-screen">
        <div className="flex flex-col font-medium mb-10">
          <h2 className="text-3xl text-white">Automatizaciones</h2>
          <p className="text-[#90A1B9] mt-2">
            Configura y gestiona tus flujos automáticos
          </p>
        </div>

        <div className="grid grid-cols-3   gap-5 font-medium mb-20">
          <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-white/5 rounded-2xl p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <p className="text-sm text-slate-400">Activas</p>
            </div>{" "}
            <p className="text-white text-2xl">4</p>
          </div>

          <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <p className="text-sm text-slate-400">Ejecuciones</p>
            </div>{" "}
            <p className="text-white text-2xl">1025</p>
          </div>

          <div className="bg-linear-to-br from-blue-800 to-blue-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 ">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <p className="text-sm text-blue-100">Integraciones</p>
            </div>
            <p className="text-white text-2xl">2</p>
          </div>
        </div>

        <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">
            Integraciones conectadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50 border border-white/5"
              >
                <div className={`p-2.5 rounded-xl ${integration.color}`}>
                  {integration.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {integration.name}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <p className="text-xs text-emerald-400">Conectado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <h3 className="text-lg font-semibold text-white">
            Flujos de automatización
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {automations.map((automation) => (
              <div
                key={automation.id}
                className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon and Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`p-3.5 rounded-2xl ${automation.bgColor} ${automation.color}`}
                    >
                      {automation.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-white">
                          {automation.name}
                        </h4>
                        {automationStates[automation.id] && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                            Activa
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 mb-3">
                        {automation.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <ArrowRight className="w-3 h-3" />
                          <span>Trigger: {automation.trigger}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Activity className="w-3 h-3" />
                          <span>{automation.executions} ejecuciones</span>
                        </div>
                        {automation.lastRun && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            <span>{automation.lastRun}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className="text-sm text-slate-400 md:hidden">
                      {automationStates[automation.id]
                        ? "Activada"
                        : "Desactivada"}
                    </span>
                    <Switch
                      checked={automationStates[automation.id]}
                      onCheckedChange={() => handleToggle(automation.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full md:w-auto px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          <span>Crear nueva automatización</span>
        </button>
      </div>
    </main>
  );
}
export default Automations;
