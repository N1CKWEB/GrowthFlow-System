type Props = {
  title: string;
  value: string;
  trend?: string;
  img?: string;
};

export function StatCard({ title, value, trend, img }: Props) {
  img = "/assets/img/forward.png";

  return (
    <div
      className="rounded-xl
  bg-linear-to-br from-slate-800 to-slate-900
  p-5
  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
  border border-white/5 w-70 h-40"
    >
      <p className="text-xl text-slate-400 relative left-4 top-7">{title}</p>

      <div className="mt-2 flex items-start justify-between">
        <span className="text-3xl font-semibold text-white relative top-11 left-5 justify-center">
          {value}
        </span>

        {trend && (
          <span
            className={`text-sm relative top-21 right-27 ${
              trend.startsWith("-") ? "text-red-400" : "text-green-400"
            }`}
          >
            {trend}
          </span>
        )}
        <div className="bg-blue-600 rounded-full relative bottom-3 right-2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
