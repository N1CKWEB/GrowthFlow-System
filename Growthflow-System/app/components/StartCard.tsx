type Props = {
  title: string;
  value: string;
  trend?: string;
};

export function StatCard({ title, value, trend }: Props) {
  return (
    <div
      className="rounded-2xl
  bg-linear-to-br from-slate-800 to-slate-900
  p-6
  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
  border border-white/5"
    >
      <p className="text-sm text-slate-400">{title}</p>

      <div className="mt-2 flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>

        {trend && (
          <span
            className={`text-sm ${
              trend.startsWith("-") ? "text-red-400" : "text-green-400"
            }`}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
