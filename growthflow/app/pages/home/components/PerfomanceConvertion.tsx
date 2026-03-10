"use client";

import { AnimatedNumber } from "@/app/shared/components/AnimatedCounter";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Convertion } from "../interfaces/home.interfaces";

function PerfomanceConvertion({
  title,
  subtitle,
  icon: Icon,
  text,
  text_recharts,
}: Convertion) {
  return (
    <div className="bg-linear-to-br from-blue-950 to-blue-950/5 ml-10 rounded-2xl p-6 backdrop-blur-xl w-90">
      <h2 className="flex items-center mx-auto font-semibold text-xl text-white ">
        {title}
      </h2>
      <p className="text-sm text-gray-400 font-semibold mt-1 ">{subtitle}</p>
      <div className="absolute top-6 right-6  text-sm font-semibold px-3 py-1 rounded-xl flex items-center gap-1">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 45 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-700/50 transition-colors "
        >
          <Icon className="w-4 h-4 text-slate-400" />
        </motion.button>
      </div>

      <div>
        <svg viewBox="0 0 200 120" className="w-full">
          {/* Background arc */}
          <path
            d="M 30 100 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="rgba(148, 163, 184, 0.1)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Red section */}
          <motion.path
            d="M 30 100 A 70 70 0 0 1 80 35"
            fill="none"
            stroke="#ef4444"
            strokeWidth="20"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          {/* Orange section */}
          <motion.path
            d="M 80 35 A 70 70 0 0 1 120 35"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="20"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          {/* Green section */}
          <motion.path
            d="M 120 35 A 70 70 0 0 1 170 100"
            fill="none"
            stroke="#10b981"
            strokeWidth="20"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          {/* Pointer */}
          <circle cx="100" cy="100" r="8" fill="#3B82F6" />
          <line
            x1="100"
            y1="100"
            x2="145"
            y2="60"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {/* Center text */}
        <h2 className="text-center text-green-400 font-semibold px-20 mt-10">
          {text}
        </h2>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-8 ">
          <motion.p
            className="text-5xl font-semibold text-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <AnimatedNumber value="80%" />
          </motion.p>
        </div>
      </div>

      <p className="text-center text-sm text-[#90A1B9] font-semibold mt-13">
        {text_recharts}
      </p>
    </div>
  );
}

export default PerfomanceConvertion;
