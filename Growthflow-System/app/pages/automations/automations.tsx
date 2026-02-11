import { CheckCircle2, Zap, Activity } from "lucide-react";
import React from "react";

function Automations() {
  return (
    <main>
      <div className="min-h-screen">
        <div className="flex flex-col font-medium mb-10">
          <h2 className="text-3xl text-white">Automatizaciones</h2>
          <p className="text-[#90A1B9] mt-2">
            Configura y gestiona tus flujos automáticos
          </p>
        </div>

        <div className="grid grid-cols-3   gap-5 font-medium">
          <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 backdrop-blur-xl">
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

          <div className="bg-linear-to-br from-blue-800 to-blue-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <p className="text-sm text-blue-100">Integraciones</p>
            </div>
            <p className="text-white text-2xl">2</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Automations;
