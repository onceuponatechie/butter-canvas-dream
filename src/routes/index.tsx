import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/enigma/Preloader";
import { Nav } from "@/components/enigma/Nav";
import { Hero } from "@/components/enigma/Hero";
import { BentoGrid } from "@/components/enigma/BentoGrid";
import { PromiseSection } from "@/components/enigma/PromiseSection";
import { CasesSection } from "@/components/enigma/CasesSection";
import { TouchBand, Footer } from "@/components/enigma/TouchBand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-backdrop">
      <Preloader />
      {/* backdrop decorative circles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <svg className="absolute -left-40 -top-40 h-[500px] w-[500px]" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="240" fill="none" stroke="#EFF4B8" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -right-60 top-1/4 h-[600px] w-[600px]" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="290" fill="none" stroke="#EFF4B8" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -bottom-40 -right-20 h-[500px] w-[500px]" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="240" fill="none" stroke="#EFF4B8" strokeWidth="1.5" />
        </svg>
      </div>

      <main className="relative mx-auto my-4 max-w-[1440px] overflow-hidden rounded-[20px] bg-paper sm:my-8 sm:rounded-[28px]">
        <Nav />
        <Hero />
        <BentoGrid />
        <PromiseSection />
        <CasesSection />
        <TouchBand />
        <Footer />
      </main>
    </div>
  );
}
