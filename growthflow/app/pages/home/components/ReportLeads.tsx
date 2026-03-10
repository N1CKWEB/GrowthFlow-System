"use client";

import { AnimatedNumber } from "@/app/shared/components/AnimatedCounter";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { attendanceData } from "../mocks/home.mocks";

function ReportLeads() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-linear-to-br from-blue-950 to-blue-950/5 ml-10 rounded-2xl p-6 backdrop-blur-xl w-90"
    >
      <h3 className="text-xl font-semibold mb-1">Reporte de Leads</h3>

      <p className="text-sm text-slate-400 mb-6">
        Últimos 7 días · clasificación por estado
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-3xl font-semibold">
            <AnimatedNumber value="980" />
          </p>
          <p className="text-xs text-emerald-400 mt-1">▲ 8% Nuevos</p>
        </div>

        <div>
          <p className="text-3xl font-semibold">
            <AnimatedNumber value="310" />
          </p>
          <p className="text-xs text-slate-400 mt-1">En seguimiento</p>
        </div>

        <div>
          <p className="text-3xl font-semibold">
            <AnimatedNumber value="30" />
          </p>
          <p className="text-xs text-red-400 mt-1">▼ 2% Perdidos</p>
        </div>
        <div className="h-60 w-80 relative z-10">
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
      </div>
      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-blue-500"></div>
          <span className="text-xs text-slate-400">Nuevos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-500"></div>
          <span className="text-xs text-slate-400">En seguimiento</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ReportLeads;
