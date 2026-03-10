"use client";

import { LucideIcon } from "lucide-react";
import {} from "recharts";
interface Convertion {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  text: string;
  text_recharts: string;
}
function PerfomanceConvertion({
  title,
  subtitle,
  icon,
  text,
  text_recharts,
}: Convertion) {
  return (
    <div className="bg-linear-to-br from-blue-950 to-blue-950/5 ml-10 rounded-2xl p-6 backdrop-blur-xl w-90">
      <h2>Tasa de conversión</h2>
      <p>Perfomance del mes</p>

      <div>
        <p>+5% vs last month</p>
      </div>
    </div>
  );
}

export default PerfomanceConvertion;
