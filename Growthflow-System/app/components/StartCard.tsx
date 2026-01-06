type Props = {
  title: string;
  value: string;
  trend?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
};

export function StatCard({ title, value, trend, icon, highlight }: Props) {
  const isNegative = trend?.startsWith("-");

  return (
    <div
      className={`
        relative rounded-xl p-5 h-40 w-90 left-10 top-10
        flex flex-col justify-between
        border border-white/5
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        ${
          highlight
            ? "bg-blue-600 text-white"
            : "bg-gradient-to-br from-slate-800 to-slate-900"
        }
      `}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-full relative left-10
            ${highlight ? "bg-white/20" : "bg-blue-600/20 text-blue-400"}
          `}
        >
          {icon}
        </div>

        {trend && (
          <span
            className={`
              text-xl font-medium px-2 py-1 rounded-full relative right-10
              ${
                isNegative
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }
            `}
          >
            {trend}
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <p
          className={`text-lg relative left-10 bottom-7 ${highlight ? "text-white/80" : "text-slate-400"}`}
        >
          {title}
        </p>

        <p className="text-5xl font-semibold mt-1  relative left-10 bottom-7">
          {value}
        </p>
      </div>
    </div>
  );
}
