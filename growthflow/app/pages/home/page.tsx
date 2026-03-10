"use client";

import Sidebar from "@/app/shared/components/Sidebar";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import MetricsCard from "./components/MetricsCard";
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
} from "recharts";
import { title } from "process";
import { AnimatedNumber } from "@/app/shared/components/AnimatedCounter";
import { attendanceData } from "./mocks/home.mocks";
import ReportLeads from "./components/ReportLeads";
import PerfomanceConvertion from "./components/PerfomanceConvertion";
import { user } from "@heroui/react";
export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen w-full flex bg-linear-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <motion.div
        className="flex-1 relative text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />

        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#100e1d] relative z-10 ">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-gray-400">
              Resumen general de tu negocio
            </p>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-10">
            <motion.div
              className="relative w-full group"
              whileHover={{ scale: 1.02 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />

              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-white/5 rounded-2xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </motion.div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <motion.button
              className="relative p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNotificationOpen(!notificationOpen)}
            >
              <Bell className="w-5 h-5" />

              <motion.span
                className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>

            {/* User */}
            <motion.button
              className="flex items-center gap-3 p-1.5 pr-4 rounded-xl bg-slate-800/50 hover:bg-slate-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-semibold">
                MG
              </div>

              <div className="text-left hidden xl:block">
                <p className="text-sm font-medium">Maria García</p>
                <p className="text-xs text-slate-400">Admin</p>
              </div>

              <ChevronDown className="w-4 h-4 text-slate-400 hidden xl:block" />
            </motion.button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6 relative z-10">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <MetricsCard
              icon={Users}
              number="1.420"
              porcentaje="12%"
              title="Total Leads"
              text="+12% desde ayer"
              iconBng="bg-emerald-500"
            />

            <MetricsCard
              icon={TrendingUp}
              number="320"
              porcentaje="8%"
              title="Conversiones"
              text="+8% desde ayer"
              iconBng="bg-blue-500"
            />

            <MetricsCard
              icon={DollarSign}
              number="324.200"
              porcentaje="15%"
              title="Ingresos Totales"
              text="+15% desde ayer"
              iconBng="bg-purple-500"
            />

            <MetricsCard
              icon={Target}
              number="98%"
              porcentaje="5%"
              title="Objetivos"
              text="+5% rendimiento"
              iconBng="bg-orange-500"
            />
          </div>
          <div className="grid grid-cols-3">
            <ReportLeads />
            <PerfomanceConvertion
              icon={Users}
              subtitle=""
              text=""
              text_recharts=""
              title=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
