function LeadStats() {
  return (
    <div className="grid grid-cols-4 gap-5 font-medium">
      <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
        <h2 className="text-[#90A1B9] ">Total</h2>
        <p className="text-red-500 text-2xl">6</p>
      </div>
      <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
        <h2 className="text-[#90A1B9]">Nuevos</h2>
        <p className="text-blue-400 text-2xl">4</p>
      </div>
      <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
        <h2 className="text-[#90A1B9]">Calificados</h2>
        <p className="text-orange-400 text-2xl">2</p>
      </div>
      <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
        <h2 className="text-[#90A1B9]">Convertidos</h2>
        <p className="text-green-400 text-2xl">1</p>
      </div>
    </div>
  );
}

export default LeadStats;
