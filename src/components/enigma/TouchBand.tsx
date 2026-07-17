import { Phone } from "lucide-react";

export function TouchBand() {
  return (
    <section className="bg-lilac px-8 py-24">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-6">
        <h2 className="text-[clamp(32px,4vw,54px)] font-medium leading-[1.05] tracking-tight">
          Let's Get
          <br />
          In Touch
        </h2>
        <button className="group grid h-[76px] w-[76px] place-items-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-transform hover:scale-110">
          <Phone size={22} className="transition-transform group-hover:rotate-12" />
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-8 text-[12px] text-muted-ink">
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
          <path d="M20 5.5A9 9 0 1 0 22.5 13" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span className="font-medium text-ink">Enigma</span>
      </div>
      <div className="flex gap-6">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
      <div>© 2026 Enigma</div>
    </footer>
  );
}