import { Anchor, Layers, ScanLine, Calendar, Hand, ArrowDown } from "lucide-react";

export function SideDock() {
  const items = [
    { icon: Anchor, active: true },
    { icon: Layers },
    { icon: ScanLine },
    { icon: Calendar },
    { icon: Hand },
  ];
  return (
    <div className="absolute left-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center">
      <div className="relative flex flex-col items-center gap-3">
        <div className="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-black/10" />
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className={`relative z-10 grid h-9 w-9 place-items-center rounded-full border transition ${
                it.active
                  ? "border-black/10 bg-butter"
                  : "border-black/10 bg-white"
              }`}
            >
              <Icon size={14} className="text-ink" />
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <button className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
          <ArrowDown size={14} />
        </button>
      </div>
    </div>
  );
}