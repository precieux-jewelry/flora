export function RatingBar({ label, value }: { label: string; value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-600">{label}</span>
        <span className="font-semibold tabular-nums">{value.toFixed(1)}</span>
      </div>
      <div className="h-1.5 rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-flora-400 to-flora-600"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
