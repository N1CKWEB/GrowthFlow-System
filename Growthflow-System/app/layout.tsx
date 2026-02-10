import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Sidebar from "~/components/Sidebar";
import type { View } from "./types/growthFlow.types";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1628] flex">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />
      ;
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Page Title & Search */}
              <div className="flex items-center gap-6 flex-1">
                <div>
                  <h2 className="text-2xl font-semibold text-white capitalize">
                    {currentView === "ai-assistant"
                      ? "AI Assistant"
                      : currentView}
                  </h2>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {currentView === "dashboard" &&
                      "Resumen general de tu negocio"}
                    {currentView === "leads" && "Gestión de leads y CRM"}
                    {currentView === "automations" && "Flujos automatizados"}
                    {currentView === "ai-assistant" && "Asistente inteligente"}
                    {currentView === "settings" && "Configuración del sistema"}
                  </p>
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-1 max-w-md">
                  <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/5 rounded-2xl text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30"
                    />
                  </div>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                {/* Language Selector */}
                <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-sm">
                  <span className="text-lg">🇺🇸</span>
                  <span>Eng (US)</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Notifications */}
                <button className="relative p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <button className="flex items-center gap-3 p-1.5 pr-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                    MG
                  </div>
                  <div className="text-left hidden xl:block">
                    <p className="text-sm font-medium text-white">
                      Maria García
                    </p>
                    <p className="text-xs text-slate-400">Admin</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 hidden xl:block" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="px-6 lg:px-8 xl:px-12 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
