export function ActivityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <span className="w-2 h-2 rounded-full bg-blue-500" />
      {text}
    </div>
  );
}
