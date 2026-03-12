"use client";

import { Insights } from "../interfaces/home.interfaces";
import { Insight } from "../mocks/home.mocks";

function InsightsCard({ title, subtitle, icon: Icon, bgColor }: Insights) {
  return (
    <div className="p-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
        <div className="bg-linear-to-br from-blue-950 to-blue-950/5 border border-white/10 rounded-3xl p-8 w-105">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Icon className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-purple-500" />

            <div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
          </div>
          {Insight.map((analist, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${analist.bgColor} border rounded-2xl p-5 mb-4  transition`}
            >
              <h3 className={`text-white font-medium mb-1`}>{analist.title}</h3>

              <p className="text-sm text-slate-300 mb-3">{analist.subtitle}</p>

              <span className="text-emerald-400 text-sm font-medium">
                {analist.text}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-linear-to-br from-blue-950 to-blue-950/5 border border-white/10 rounded-3xl p-8 w-105">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Icon className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-pink-500 to-purple-500" />

            <div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
          </div>
          {Insight.map((analist, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${analist.bgColor} border rounded-2xl p-5 mb-4  transition`}
            >
              <h3 className={`text-white font-medium mb-1`}>{analist.title}</h3>

              <p className="text-sm text-slate-300 mb-3">{analist.subtitle}</p>

              <span className="text-emerald-400 text-sm font-medium">
                {analist.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsightsCard;
