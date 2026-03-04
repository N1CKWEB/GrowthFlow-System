"use client";

import Sidebar from "@/app/shared/components/Sidebar";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-900 to-slate-950 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Fondo animado opcional */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />

        <div className="flex mx-auto bg-[#100e1d] font-medium  z-10 p-3 text-white ">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Resumen general de tu negocio
            </p>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-auto">
            <motion.div
              className="relative w-full group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/5 rounded-2xl text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
              />
            </motion.div>
          </div>
          {/* Notifications */}
          <motion.button
            className="relative p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group  "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <Bell className="w-5 h-5 relative z-10 " />
            <motion.span
              className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          {/* User Profile */}
          <motion.button
            className="flex items-center gap-3 p-1.5 pr-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold relative z-10">
              MG
            </div>
            <div className="text-left hidden xl:block relative z-10">
              <p className="text-sm font-medium text-white">Maria García</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 hidden xl:block relative z-10" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
