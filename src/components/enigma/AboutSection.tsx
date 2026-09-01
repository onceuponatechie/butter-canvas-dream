export function AboutSection() {
  return (
    <section id="about" className="px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted-ink">
          About
        </div>
        <div className="rounded-[28px] border border-black/10 bg-transparent px-6 py-12 sm:px-14 sm:py-16">
          <p className="text-center text-[clamp(18px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink/70">
            I'm Essy Udeme — a product person who cares about the seams. For the last decade I've
            built and shipped digital products with small teams, turning fuzzy ideas into things
            people actually use. I work on{" "}
            <span className="font-serif italic text-ink/70">products, people,</span> and the
            stories that connect them — writing teardowns, building systems, and handing the
            playbook over so others can move faster. Making things is how I make sense of the
            world.
          </p>
        </div>
      </div>
    </section>
  );
}
