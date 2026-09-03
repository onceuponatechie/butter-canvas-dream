export function AboutSection() {
  return (
    <section id="about" className="px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted-ink">
          What I Do
        </div>
        <div className="bg-veil rounded-[28px] px-6 py-12 ring-1 ring-black/[0.07] sm:px-14 sm:py-16">
          <p className="mx-auto max-w-[24ch] text-center text-[clamp(18px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink/70 sm:max-w-none">
            I follow curiosity down rabbit holes — into products, people, and the technology
            shaping both. Then I turn what I find into experiments, tools, and stories you can
            actually use.{" "}
            <span className="font-serif italic text-ink/70">Research, build, tell</span> — that
            loop is how I make sense of the world, and how I'm building my way into the answer.
          </p>
        </div>
      </div>
    </section>
  );
}
