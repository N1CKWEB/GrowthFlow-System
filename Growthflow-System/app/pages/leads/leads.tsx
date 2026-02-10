import { Filter, Mail, Phone, Search } from "lucide-react";
import LeadStats from "./components/LeadStats";
import { useState } from "react";

function Lead() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="">
      <div className="min-h-screen">
        <div className="flex flex-col font-medium mb-10">
          <h2 className="text-3xl text-white">Leads</h2>
          <p className="text-[#90A1B9] mt-2">
            Gestiona todos tus contactos y prospectos
          </p>
        </div>

        <div className="mb-20">
          <LeadStats />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/80 border border-white/5 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-white/5 rounded-2xl text-white hover:bg-slate-700/80 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
        </div>
              {/* Leads Table/Cards */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Nombre</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Contacto</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Origen</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Estado</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Valor</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Fecha</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-400"></th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-white/5 hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                        {lead.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{lead.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Phone className="w-3 h-3" />
                          {lead.phone}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${sourceColors[lead.source]}`}>
                      {sourceIcons[lead.source]}
                      {lead.source.charAt(0).toUpperCase() + lead.source.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig[lead.status].color}`}>
                      {statusConfig[lead.status].icon}
                      {statusConfig[lead.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {lead.value && <span className="text-emerald-400 font-medium">{lead.value}</span>}
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-sm">
                    {new Date(lead.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </main>
  );
}
export default Lead;
