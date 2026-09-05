import laptopDash from "@/assets/essy-laptop-dash.jpg";
import insight from "@/assets/essy-insight.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import mouse from "@/assets/essy-mouse.jpg";

export type CaseStudy = {
  slug: string;
  name: string;
  year: string;
  role: string;
  body: string;
  img: string;
  stat: string;
  statLabel: string;
  summary: string;
  facts: { label: string; value: string }[];
  gallery: { src: string; caption: string }[];
  sections: { h: string; p: string[] }[];
  learned: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "streamline-dashboard",
    name: "Streamline Dashboard",
    year: "2026",
    role: "Product design · Research",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes without adding a single new tool.",
    img: laptopDash,
    stat: "38%",
    statLabel: "faster decision loop",
    summary:
      "A four-person revenue team was rebuilding the same report every morning by hand. I researched the ritual, redesigned it as one canvas, and shipped it without asking anyone to adopt a new tool.",
    facts: [
      { label: "Timeline", value: "9 weeks" },
      { label: "My role", value: "Research, product design, front-end" },
      { label: "Team", value: "Me + one engineer" },
      { label: "Outcome", value: "2 hours → 6 minutes daily" },
    ],
    gallery: [
      { src: laptopDash, caption: "The final canvas — one screen, one question at a time." },
      { src: notes, caption: "Ninety minutes of shadowing, turned into the first structure." },
    ],
    sections: [
      {
        h: "The problem",
        p: [
          "Every morning, someone exported three spreadsheets, pasted them into a fourth, and rebuilt the same chart. It took roughly two hours and produced a number nobody trusted by the afternoon.",
          "The team had asked for a new tool. What they actually had was a ritual problem wearing a tooling costume.",
        ],
      },
      {
        h: "What I did",
        p: [
          "I shadowed the morning routine for a week and wrote down every copy, paste, and correction. Forty-one steps, of which eleven existed only to fix an earlier step.",
          "Then I designed backwards from the one question the report was meant to answer: is today better or worse than expected, and where? Everything that did not serve that question was cut from the first screen.",
        ],
      },
      {
        h: "The hard decision",
        p: [
          "The team wanted filters for everything. I shipped four. Every extra filter reintroduced the thing we were removing — a decision about how to look at the data before you got to look at it.",
          "Two of the four filters were later removed as well. Nobody noticed.",
        ],
      },
    ],
    learned: [
      "A request for a new tool is usually a request for a shorter ritual.",
      "Shadowing beats interviewing — people describe the tidy version of their process.",
      "Cutting filters was more valuable than adding features.",
    ],
  },
  {
    slug: "insight-studio",
    name: "Insight Studio",
    year: "2025",
    role: "Web · Analytics",
    body: "A calmer analytics home for a research team who lived in eight tabs at once, rebuilt around one question at a time.",
    img: insight,
    stat: "4×",
    statLabel: "less tab switching",
    summary:
      "A research team had eight dashboards and no home. I rebuilt their analytics surface around questions instead of data sources, and the tab count collapsed.",
    facts: [
      { label: "Timeline", value: "6 weeks" },
      { label: "My role", value: "Product thinking, IA, design" },
      { label: "Team", value: "Me + two researchers" },
      { label: "Outcome", value: "8 tabs → 2" },
    ],
    gallery: [
      { src: insight, caption: "Questions as the top-level navigation, not data sources." },
      { src: mouse, caption: "Testing the new structure with the people who live in it." },
    ],
    sections: [
      {
        h: "The problem",
        p: [
          "Their dashboards were organised the way the data arrived — one per source. Answering a single real question meant visiting four of them and holding the numbers in your head.",
        ],
      },
      {
        h: "The reframe",
        p: [
          "I rewrote the navigation as the eleven questions the team actually asked each week, then worked out which data each question needed. Some questions turned out to need nothing new at all.",
          "Three of the eleven had no owner and no answer. Naming them was arguably the most useful part of the project.",
        ],
      },
      {
        h: "What shipped",
        p: [
          "Two surfaces: a weekly view answering the recurring questions, and a scratch view for the ad-hoc ones. The old dashboards stayed available for a month, then quietly went unused.",
        ],
      },
    ],
    learned: [
      "Organise around questions, not data sources.",
      "If a metric has no owner, it has no meaning.",
      "Leaving the old thing running is cheaper than arguing about the new one.",
    ],
  },
  {
    slug: "pocket-coach",
    name: "Pocket Coach",
    year: "2025",
    role: "Mobile · Behaviour design",
    body: "A pocket-sized nudge app that helps founders keep one promise a day, with streaks that forgive a missed morning.",
    img: phone,
    stat: "4.8★",
    statLabel: "early tester rating",
    summary:
      "A habit app built around one promise a day instead of a wall of goals — and a streak system designed to survive being broken.",
    facts: [
      { label: "Timeline", value: "7 weeks" },
      { label: "My role", value: "Concept, design, user testing" },
      { label: "Testers", value: "24 early users" },
      { label: "Outcome", value: "68% week-two retention" },
    ],
    gallery: [
      { src: phone, caption: "One promise, one screen, one tap." },
      { src: notes, caption: "The forgiving streak, worked out on paper first." },
    ],
    sections: [
      {
        h: "The insight",
        p: [
          "Every tester who abandoned a habit app told me the same story: they missed one day, the streak reset to zero, and the app became a monument to failure.",
        ],
      },
      {
        h: "The design bet",
        p: [
          "So the streak forgives. A missed day dims rather than deletes, and two good days in a row restore it. Cheating? Possibly. It kept people in the app, which is the only condition under which anything else can work.",
        ],
      },
      {
        h: "What I got wrong",
        p: [
          "The first version let you set five promises. Testers set five, kept none, and felt worse. Capping it at one felt almost insultingly simple and immediately worked better.",
        ],
      },
    ],
    learned: [
      "Punishing systems have great first weeks and no second month.",
      "A cap can be a feature.",
      "Ask people why they quit the last thing, not what they want from the new one.",
    ],
  },
  {
    slug: "sage-deck",
    name: "Sage Deck",
    year: "2024",
    role: "Brand · Deck system",
    body: "A deck kit that reads like a magazine and closes like a founder brief — built once, reused across every raise.",
    img: slide,
    stat: "12",
    statLabel: "slides, reused 40+ times",
    summary:
      "A twelve-slide deck system designed around how investors actually read: skim, stop, decide. Built once as a component library, reused across every version of the story.",
    facts: [
      { label: "Timeline", value: "4 weeks" },
      { label: "My role", value: "Narrative structure, design system" },
      { label: "Format", value: "Figma component library" },
      { label: "Outcome", value: "Reused for 40+ decks" },
    ],
    gallery: [
      { src: slide, caption: "One claim per slide, evidence directly beneath it." },
      { src: notes, caption: "Narrative order, argued out before anything was designed." },
    ],
    sections: [
      {
        h: "The problem",
        p: [
          "Founders were rebuilding decks from scratch for every conversation, and each rebuild drifted further from the story that worked.",
        ],
      },
      {
        h: "Structure before style",
        p: [
          "I fixed the narrative order first — problem, why now, the wedge, the evidence, the ask — and only then designed the slides. Style choices get much faster once the argument is settled.",
        ],
      },
      {
        h: "The three-second rule applied",
        p: [
          "Each slide had to be readable in three seconds with the presenter silent. Anything requiring narration moved into the appendix.",
        ],
      },
    ],
    learned: [
      "Fix the argument before the aesthetic.",
      "A deck that needs narration fails when it is forwarded — and it is always forwarded.",
      "Components beat templates: people edit components and copy templates badly.",
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
