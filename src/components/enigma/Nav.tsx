import { HelpCircle, User, Home, Settings, Menu } from "lucide-react";

export function Nav() {
  return (
    <div className="relative z-30 flex items-center justify-between px-8 pt-6">
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path
            d="M20 5.5A9 9 0 1 0 22.5 13"
            stroke="#111"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[15px] font-medium tracking-tight">Enigma</span>
      </div>

      <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 px-2 py-1.5 backdrop-blur">
        <NavPill icon={<Home size={14} />} label="Home" active />
        <NavPill icon={<Settings size={14} />} label="Technology" />
        <NavPill icon={<Menu size={14} />} label="Service" />
      </div>

      <div className="flex items-center gap-3">
        <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white transition hover:scale-105">
          <HelpCircle size={16} />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white transition hover:scale-105">
          <User size={16} />
        </button>
        <button className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition hover:opacity-90">
          Contact Us
        </button>
      </div>
    </div>
  );
}

function NavPill({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
        active ? "bg-butter text-ink" : "text-ink hover:bg-black/5"
      }`}
    >
      <span>{label}</span>
      <span className="grid h-5 w-5 place-items-center rounded-full border border-black/15">
        {icon}
      </span>
    </button>
  );
}