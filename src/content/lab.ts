import insight from "@/assets/essy-insight.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import mouse from "@/assets/essy-mouse.jpg";
import books from "@/assets/essy-books.jpg";

export type LabEntry = {
  slug: string;
  kind: "Teardown" | "Experiment" | "Decision log";
  title: string;
  excerpt: string;
  stat: string;
  statLabel: string;
  date: string;
  cover: string;
  coverAlt: string;
  question: string;
  sections: { h: string; p: string[] }[];
  verdict: string;
};

export const lab: LabEntry[] = [
  {
    slug: "first-sixty-seconds",
    kind: "Teardown",
    title: "How one app earns the first sixty seconds",
    excerpt:
      "A frame-by-frame read of the fastest onboarding I have used, and the three moves that make it work.",
    stat: "60s",
    statLabel: "to first real action",
    date: "Aug 2026",
    cover: mouse,
    coverAlt: "A hand on a mouse at a desk",
    question: "What makes an onboarding feel fast when it is not actually shorter?",
    sections: [
      {
        h: "What I measured",
        p: [
          "I timed the gap between first click and first meaningful action across six tools. The winner was not the one with the fewest screens — it was the one where the first screen already contained real content.",
        ],
      },
      {
        h: "The three moves",
        p: [
          "One: open inside a filled example, not an empty state. Two: ask for account details after value, not before. Three: make the first action a single change to something that already exists.",
        ],
      },
    ],
    verdict:
      "Speed is perceived, not measured. Put the user inside the work immediately and the same number of steps feels half as long.",
  },
  {
    slug: "pricing-page-feel",
    kind: "Teardown",
    title: "The pricing page that sells on feel, not maths",
    excerpt:
      "Same prices, different page, very different conversion. A close read of where the decision actually happens.",
    stat: "3×",
    statLabel: "conversion, prices unchanged",
    date: "Aug 2026",
    cover: slide,
    coverAlt: "A slide open on a laptop screen",
    question: "Can a pricing page change conversion without changing the price?",
    sections: [
      {
        h: "What changed",
        p: [
          "The tiers were identical. What moved was the order of information: outcome first, features second, price third, and a single sentence naming who each tier is wrong for.",
        ],
      },
      {
        h: "Why naming the wrong fit helps",
        p: [
          "Telling someone a tier is not for them reads as honesty, and honesty is the scarcest thing on a pricing page. It also stops people self-selecting into the plan they will churn out of.",
        ],
      },
    ],
    verdict:
      "People do not compare prices. They look for permission to choose. Give it to them explicitly.",
  },
  {
    slug: "idea-evaluation-experiment",
    kind: "Experiment",
    title: "I scored twelve of my own ideas before building any of them",
    excerpt:
      "A one-page scoring sheet, run against a year of notes. Two ideas survived, and one of them is now a product.",
    stat: "12 → 2",
    statLabel: "ideas that survived scoring",
    date: "Jul 2026",
    cover: notes,
    coverAlt: "A notebook filled with handwritten notes",
    question: "Can you filter your own ideas honestly with a rubric?",
    sections: [
      {
        h: "The rubric",
        p: [
          "Four scores out of five: do I understand the person, can I reach them, can I ship a version in two weeks, and would I still care in three months. Anything under fifteen was archived.",
        ],
      },
      {
        h: "What the archive taught me",
        p: [
          "Nine of the ten rejected ideas failed the same criterion — I could not reach the person. It was never the idea. It was always distribution.",
        ],
      },
    ],
    verdict:
      "A rubric will not make you right, but it makes your bias visible, which is nearly as useful.",
  },
  {
    slug: "empty-state-copy",
    kind: "Teardown",
    title: "Twelve words that turn a dead end into a next step",
    excerpt:
      "The best UX writing I read this year was an empty state. Here is a close read of why it works.",
    stat: "12",
    statLabel: "words in the whole screen",
    date: "Jul 2026",
    cover: books,
    coverAlt: "Books stacked beside a desk",
    question: "What does great empty-state writing actually do?",
    sections: [
      {
        h: "The anatomy",
        p: [
          "It names the state without apology, explains what appears here, and offers exactly one action. No illustration doing the job the sentence should be doing.",
        ],
      },
      {
        h: "The move to steal",
        p: [
          "Write the empty state before the full state. If you cannot explain what the screen is for in one sentence, the screen is not finished.",
        ],
      },
    ],
    verdict:
      "Empty states are the cheapest place to sound like a competent human. Almost nobody uses them that way.",
  },
  {
    slug: "one-week-frontend-sprint",
    kind: "Decision log",
    title: "Why I rebuilt my own site instead of buying a template",
    excerpt:
      "The decision, the trade-offs I accepted, and what the extra eleven days actually bought me.",
    stat: "11",
    statLabel: "extra days spent, on purpose",
    date: "Jun 2026",
    cover: insight,
    coverAlt: "An interface being reviewed on screen",
    question: "Is building it yourself worth the slower launch?",
    sections: [
      {
        h: "The decision",
        p: [
          "A template would have launched in three days. Building it myself took two weeks. I chose the two weeks because the site was also meant to be evidence that I can build.",
        ],
      },
      {
        h: "What it cost and bought",
        p: [
          "It cost a fortnight and a lot of layout debugging. It bought a real understanding of components, state, and animation timing — plus the ability to change anything later without asking anyone.",
        ],
      },
    ],
    verdict:
      "Build it yourself when the artefact is also the proof. Buy the template when it is only a container.",
  },
  {
    slug: "one-thumb-test",
    kind: "Experiment",
    title: "The one-thumb test I run on every screen now",
    excerpt:
      "A thirty-second check that catches most of my mobile mistakes before anyone else sees them.",
    stat: "30s",
    statLabel: "per screen to run",
    date: "Jun 2026",
    cover: phone,
    coverAlt: "A phone held in one hand",
    question: "How do you catch mobile problems without a research budget?",
    sections: [
      {
        h: "The test",
        p: [
          "Hold the phone in one hand, standing, and try to complete the main action with your thumb only. Then throttle the network and do it again.",
        ],
      },
      {
        h: "What it catches",
        p: [
          "Tap targets in the top corners, forms that lose their content on reload, and loading states that say nothing. Roughly two-thirds of my mobile bugs are one of those three.",
        ],
      },
    ],
    verdict:
      "You do not need a lab to test mobile. You need your own hand and a worse connection.",
  },
];

export const labKinds = ["All", "Teardown", "Experiment", "Decision log"] as const;

export const getLab = (slug: string) => lab.find((l) => l.slug === slug);
