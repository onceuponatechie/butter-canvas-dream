export type Kit = {
  slug: string;
  title: string;
  desc: string;
  category: "Product" | "Career" | "Money" | "Writing" | "Learning";
  format: string;
  price: "Free" | "₦5,000" | "₦12,000";
  file: string;
  tint: string;
  /** masonry weight — taller cards break the grid rhythm */
  span: "short" | "tall";
};

export const kitCategories = ["All", "Product", "Career", "Money", "Writing", "Learning"] as const;

export const kits: Kit[] = [
  {
    slug: "product-brief",
    title: "Product Brief One-Pager",
    desc: "Turn a fuzzy idea into a scope you can hand to someone else. Problem, user, bet, and the smallest thing worth shipping first.",
    category: "Product",
    format: "Markdown · 1 page",
    price: "Free",
    file: "/kits/product-brief-one-pager.md",
    tint: "bg-[#f3f6ef]",
    span: "tall",
  },
  {
    slug: "idea-scorecard",
    title: "Idea Scorecard",
    desc: "The four-question rubric I ran against a year of notes. Twelve ideas in, two out.",
    category: "Product",
    format: "Markdown · scoring sheet",
    price: "Free",
    file: "/kits/idea-scorecard.md",
    tint: "bg-[#fbfbf4]",
    span: "short",
  },
  {
    slug: "pitch-deck-outline",
    title: "Pitch Deck Outline",
    desc: "Twelve slides in the order investors actually read them, with the one claim each slide is allowed to make.",
    category: "Product",
    format: "Markdown · 12 slides",
    price: "₦12,000",
    file: "/kits/pitch-deck-outline.md",
    tint: "bg-[#f4f2f8]",
    span: "tall",
  },
  {
    slug: "teardown-template",
    title: "Product Teardown Template",
    desc: "How I take apart a product in ninety minutes and come out with something worth publishing.",
    category: "Learning",
    format: "Markdown · worksheet",
    price: "Free",
    file: "/kits/product-teardown-template.md",
    tint: "bg-[#f6f4ee]",
    span: "short",
  },
  {
    slug: "weekly-input-sheet",
    title: "Weekly Input Sheet",
    desc: "Track the four inputs you control instead of the outcome you only see once a semester.",
    category: "Learning",
    format: "Markdown · weekly tracker",
    price: "Free",
    file: "/kits/weekly-input-sheet.md",
    tint: "bg-[#f2f5f6]",
    span: "tall",
  },
  {
    slug: "career-experiment-log",
    title: "Career Experiment Log",
    desc: "Three experiments per path, logged with evidence, so you stop choosing a career from imagination.",
    category: "Career",
    format: "Markdown · log",
    price: "Free",
    file: "/kits/career-experiment-log.md",
    tint: "bg-[#f4f6f0]",
    span: "short",
  },
  {
    slug: "portfolio-audit",
    title: "Portfolio Audit Checklist",
    desc: "Twenty-two checks that decide whether a stranger believes you in the first three seconds.",
    category: "Career",
    format: "Markdown · checklist",
    price: "₦5,000",
    file: "/kits/portfolio-audit-checklist.md",
    tint: "bg-[#fbf7f2]",
    span: "tall",
  },
  {
    slug: "freelance-rate-sheet",
    title: "Freelance Rate & Scope Sheet",
    desc: "The quote structure I used to double my rate without losing the client. Scope, revisions, and the line about extras.",
    category: "Money",
    format: "Markdown · template",
    price: "₦5,000",
    file: "/kits/freelance-rate-sheet.md",
    tint: "bg-[#f6f3ea]",
    span: "short",
  },
  {
    slug: "first-100k-plan",
    title: "First ₦100k Sprint Plan",
    desc: "A thirty-day plan built from what actually converted — proof first, offer second.",
    category: "Money",
    format: "Markdown · 30-day plan",
    price: "Free",
    file: "/kits/first-100k-sprint-plan.md",
    tint: "bg-[#f2f6f1]",
    span: "tall",
  },
  {
    slug: "essay-skeleton",
    title: "Essay Skeleton",
    desc: "The structure behind every Why Not Build? piece: notice, question, test, tell.",
    category: "Writing",
    format: "Markdown · outline",
    price: "Free",
    file: "/kits/essay-skeleton.md",
    tint: "bg-[#f7f6f2]",
    span: "short",
  },
  {
    slug: "landing-page-copy",
    title: "Landing Page Copy Blocks",
    desc: "Fill-in-the-blank blocks that answer what, for whom, and why now above the fold.",
    category: "Writing",
    format: "Markdown · copy blocks",
    price: "₦5,000",
    file: "/kits/landing-page-copy-blocks.md",
    tint: "bg-[#f3f4f7]",
    span: "tall",
  },
  {
    slug: "one-thumb-test",
    title: "One-Thumb Mobile Test",
    desc: "A thirty-second check per screen that catches two-thirds of mobile mistakes.",
    category: "Product",
    format: "Markdown · checklist",
    price: "Free",
    file: "/kits/one-thumb-mobile-test.md",
    tint: "bg-[#f1f5f2]",
    span: "short",
  },
];
