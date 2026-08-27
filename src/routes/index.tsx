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
  head: () => ({
    meta: [
      { title: "Essy Udeme — Products, people, and the stories between them" },
      {
        name: "description",
        content:
          "Portfolio of Essy Udeme: product case studies, tools & templates, essays, and resources for builders and storytellers.",
      },
      { property: "og:title", content: "Essy Udeme — Products, people, stories" },
      {
        property: "og:description",
        content:
          "Case studies, tools & templates, and a living notebook of experiments by Essy Udeme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-backdrop">
      <Preloader />
      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-paper">
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
