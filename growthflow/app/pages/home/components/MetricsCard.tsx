"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Cards } from "../interfaces/home.interfaces";

function MetricsCard({
  icon: Icon,
  title,
  number,
  text,
  porcentaje,
  iconBng,
}: Cards) {
  return (
    <div className="relative w-65 h-55 rounded-3xl bg-linear-to-br from-blue-950 to-blue-950/5 p-6 flex flex-col justify-center ml-10 mt-10">
      {/* Porcentaje arriba derecha */}
      <div className="absolute top-6 right-6 bg-emerald-500/20 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-xl flex items-center gap-1">
        {porcentaje}
      </div>

      {/* Icono */}
      <div
        className={`w-14 h-14 rounded-full  ${iconBng} flex items-center justify-center mb-6`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Título */}
      <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>

      {/* Número */}
      <h2 className="text-white text-4xl font-semibold mb-2">{number}</h2>

      {/* Texto */}
      <p className="text-slate-400 text-sm">{text}</p>
    </div>
  );
}

export default MetricsCard;
