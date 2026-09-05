import books from "@/assets/essy-books.jpg";
import notes from "@/assets/essy-notes.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import phone from "@/assets/essy-phone.jpg";
import reading from "@/assets/essy-reading.jpg";
import insight from "@/assets/essy-insight.jpg";
import mouse from "@/assets/essy-mouse.jpg";

export type Post = {
  slug: string;
  title: string;
  kicker: string;
  category: "Products" | "Careers" | "Money" | "Education" | "Law × Tech" | "Personal";
  date: string;
  read: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  takeaway: string;
  body: { h?: string; p: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "capability-before-certainty",
    title: "I stopped trying to pick a career and started collecting evidence",
    kicker: "I become",
    category: "Careers",
    date: "28 Aug 2026",
    read: "7 min",
    excerpt:
      "Choosing a title from imagination is guessing. Testing one through real work is research. Here is the system I run on myself.",
    cover: reading,
    coverAlt: "Essy reading beside a window with a notebook open",
    takeaway:
      "Run three small paid or public experiments before you accept any label. Let the evidence choose.",
    body: [
      {
        p: [
          "For about a year I treated my career like a multiple-choice question. Product manager, designer, engineer, founder, lawyer — pick one, commit, and hope the imagined version of the job matches the real one.",
          "The problem is that I was choosing with almost no data. I had read about these jobs. I had watched people do them on the internet. I had never actually done them long enough to know what a bad Tuesday in each one feels like.",
        ],
      },
      {
        h: "Imagination is a terrible research method",
        p: [
          "Imagination flatters the work. It shows you the launch, not the fourteenth revision of a spec nobody read. It shows you the courtroom, not the four hundred pages of discovery.",
          "So I swapped the question. Instead of \"what do I want to be?\" I asked \"what can I build this month that would tell me something true about one of these paths?\"",
        ],
      },
      {
        h: "The three-experiment rule",
        p: [
          "Every path gets three experiments before it gets an opinion. One where I research, one where I build, one where I tell someone about it and watch their face.",
          "For product, that was a real teardown, a shipped prototype, and a decision log I published. For frontend, it was learning enough to rebuild my own site instead of buying a template. For law × tech, it was reading actual regulation instead of takes about regulation.",
          "Three is small enough to finish and large enough to stop being a fluke.",
        ],
      },
      {
        h: "What it changed",
        p: [
          "I still cannot tell you my final job title, and I have made peace with that. What I can tell you is which parts of the work I return to without being asked, which is a far more useful signal than a title.",
          "Capability came before certainty. It usually does. You do not have to know the answer to start building your way into it.",
        ],
      },
    ],
  },
  {
    slug: "onboarding-rebuilt-three-times",
    title: "I rebuilt one onboarding flow three times. Only the third one worked",
    kicker: "I build",
    category: "Products",
    date: "14 Aug 2026",
    read: "6 min",
    excerpt:
      "The first version was clever. The second was clean. The third was the one people actually finished — and it was the least impressive to look at.",
    cover: laptopDash,
    coverAlt: "A dashboard being designed on a laptop",
    takeaway:
      "Cut every step that does not move the user closer to their first real outcome. Cleverness is a tax.",
    body: [
      {
        p: [
          "The first flow had a personality quiz. Five questions, animated transitions, a little confetti at the end. I was extremely proud of it. Forty-one percent of people finished it.",
        ],
      },
      {
        h: "Version two: clean, still wrong",
        p: [
          "So I stripped it. Three screens, no quiz, one clear progress bar. Completion moved to fifty-eight percent, which felt like a win until I watched the session recordings.",
          "People were finishing the flow and then sitting on an empty screen. I had optimised the corridor and forgotten the room.",
        ],
      },
      {
        h: "Version three: start inside the work",
        p: [
          "The third version had no onboarding screens at all. The product opened with one pre-filled example already inside it, and a single prompt: change one thing.",
          "Everything else — the account details, the preferences, the invite step — moved to the moment it actually mattered. Completion hit eighty-three percent, and more importantly, people came back the next day.",
        ],
      },
      {
        h: "What I would tell past me",
        p: [
          "Onboarding is not a tour. It is the shortest possible path to the user doing the real thing once. Every screen that delays that moment is a tax you are charging a stranger who has not yet decided to trust you.",
          "Also: the version that works will usually be less fun to design. Ship it anyway.",
        ],
      },
    ],
  },
  {
    slug: "thirty-days-hundred-k",
    title: "I gave myself 30 days to make ₦100k with a skill I barely had",
    kicker: "I try",
    category: "Money",
    date: "2 Aug 2026",
    read: "8 min",
    excerpt:
      "Not a hustle story. A record of what actually converted, what wasted two weeks, and what the number taught me about pricing my own time.",
    cover: mouse,
    coverAlt: "A hand on a mouse beside a keyboard at a desk",
    takeaway:
      "Sell the outcome you have already produced once, not the skill you are still learning.",
    body: [
      {
        p: [
          "I picked a number because vague ambition does not create pressure. Thirty days, one hundred thousand naira, using only things I could already half do.",
        ],
      },
      {
        h: "Week one was wasted on positioning",
        p: [
          "I spent six days designing an offer. A name, a deck, tiers. Zero naira. Nobody buys a tier structure from someone they have never seen produce anything.",
          "What broke the drought was posting one thing I had already made and adding a single line: I can do this for you.",
        ],
      },
      {
        h: "What converted",
        p: [
          "Three things, in order: a decked-out pitch deck rebuild, a landing page for someone who had copy but no page, and a Notion system I had built for myself and simply cleaned up.",
          "All three were things I had already made once for free. The proof did the selling. The skill was almost secondary.",
        ],
      },
      {
        h: "The pricing lesson",
        p: [
          "My first quote was ₦15,000 because I was scared. The same work, quoted at ₦45,000 two weeks later, closed faster — because the higher number read as confidence and attracted a client who wanted it done properly.",
          "I finished at ₦127,000. The money mattered less than the discovery that I could generate money on demand with a laptop and a week of attention. That is the thing you cannot un-know.",
        ],
      },
    ],
  },
  {
    slug: "who-owns-ai-generated-work",
    title: "Who actually owns AI-generated work?",
    kicker: "I question",
    category: "Law × Tech",
    date: "21 Jul 2026",
    read: "9 min",
    excerpt:
      "Everyone is shipping with generative tools. Very few people can tell you who owns the output, and the answer changes depending on where you stand.",
    cover: books,
    coverAlt: "A stack of books on a desk",
    takeaway:
      "If AI output is central to what you sell, write ownership and provenance into your contracts now.",
    body: [
      {
        p: [
          "I went looking for a simple answer and came back with a map instead. Ownership of AI output is not one question — it is at least four, stacked.",
        ],
      },
      {
        h: "Four questions hiding inside one",
        p: [
          "First: was the output authored, in the legal sense, by a human? Most copyright frameworks still want a human author somewhere in the chain.",
          "Second: what did the tool's terms of service actually grant you? Many grant broad usage rights while saying nothing useful about exclusivity.",
          "Third: what went in? Training data and the prompts you paste both carry risk, especially if the prompt contained someone else's confidential material.",
          "Fourth: who bears the liability if the output infringes? This is the question founders skip and lawyers open with.",
        ],
      },
      {
        h: "Why builders should care before they need to",
        p: [
          "If you are shipping a product where AI output is the deliverable — copy, art, code, summaries — ownership is not an abstract debate. It is a clause in the contract you are about to sign.",
          "The practical move is unglamorous: know which tool produced what, keep a record, and write the ownership and indemnity terms explicitly instead of inheriting whatever the default is.",
        ],
      },
      {
        h: "Where I landed",
        p: [
          "Technology moves first and rules arrive later, but the gap is where the interesting work lives. If you build in that gap deliberately rather than accidentally, you get to shape how it closes.",
        ],
      },
    ],
  },
  {
    slug: "rebuilding-my-academic-record",
    title: "My grades tanked. Here is the system I am rebuilding with",
    kicker: "I become",
    category: "Education",
    date: "9 Jul 2026",
    read: "5 min",
    excerpt:
      "The honest version, including the semester I would rather not publish. Recovery turned out to be a systems problem, not a discipline problem.",
    cover: notes,
    coverAlt: "A notebook open beside a laptop",
    takeaway:
      "Track inputs you control weekly, not outcomes you only see once a semester.",
    body: [
      {
        p: [
          "There was a semester where I was building, freelancing, learning to code, and technically also a student. Something had to give, and it was the thing with the slowest feedback loop.",
        ],
      },
      {
        h: "Discipline was the wrong diagnosis",
        p: [
          "I assumed I needed to try harder. What I actually needed was a shorter feedback loop, because a semester is far too long to find out you are off track.",
        ],
      },
      {
        h: "The weekly input sheet",
        p: [
          "Now I track four inputs every week: hours of focused reading, past questions attempted, one summary written in my own words per course, and one question I could not answer.",
          "None of them are grades. All of them are things I can do on a Tuesday whether or not I feel capable that day.",
        ],
      },
      {
        h: "The uncomfortable part",
        p: [
          "Publishing this while it is still in progress is the point. The brand is not a finished person handing out instructions — it is someone collecting evidence in public, including the evidence that stings.",
        ],
      },
    ],
  },
  {
    slug: "three-second-decision",
    title: "Designing for the three-second decision",
    kicker: "I notice",
    category: "Products",
    date: "26 Jun 2026",
    read: "6 min",
    excerpt:
      "Landing pages, decks, and product surfaces all get judged in about three seconds. Here is how I structure them to earn the next scroll.",
    cover: insight,
    coverAlt: "An analytics interface on a screen",
    takeaway:
      "Answer what, for whom, and why now above the fold. Everything else is a bonus round.",
    body: [
      {
        p: [
          "Nobody reads your page. They scan it, form a hypothesis, and either keep going or leave. Three seconds is roughly the budget.",
        ],
      },
      {
        h: "The three questions",
        p: [
          "What is this? Who is it for? Why should I care right now? If a stranger cannot answer all three from the first screen, no amount of beautiful typography below it will rescue the page.",
        ],
      },
      {
        h: "One idea per surface",
        p: [
          "Decks fail the same way pages do: too many ideas per slide. I now hold myself to one claim per surface, with the evidence directly underneath it and nothing else competing for attention.",
        ],
      },
      {
        h: "Proof beats adjectives",
        p: [
          "\"Powerful, intuitive, seamless\" says nothing. A number, a screenshot, or a specific before-and-after says everything. Replace every adjective you can with evidence and the page gets shorter and stronger at the same time.",
        ],
      },
    ],
  },
  {
    slug: "phone-first-nigeria",
    title: "Most of my users are on one hand, one thumb, and bad network",
    kicker: "I notice",
    category: "Products",
    date: "12 Jun 2026",
    read: "5 min",
    excerpt:
      "Designing from a Lagos context changes your defaults. Weight, tap targets, and offline states stop being nice-to-haves.",
    cover: phone,
    coverAlt: "A phone held in one hand showing an app screen",
    takeaway:
      "Design the slow-network, one-thumb version first. The desktop version is the easy one.",
    body: [
      {
        p: [
          "Every product I have tested here gets used the same way: standing up, one hand, on a connection that occasionally gives up entirely.",
        ],
      },
      {
        h: "What that changes",
        p: [
          "Heavy hero images become a cost, not a flourish. Anything below the thumb arc might as well not exist. Loading states need to say what is happening, because a spinner on a bad network reads as broken.",
        ],
      },
      {
        h: "The offline question",
        p: [
          "The most useful thing I added to a project last year was not a feature. It was remembering what the user had typed when the connection dropped mid-form.",
        ],
      },
      {
        h: "Constraint as an advantage",
        p: [
          "If it works well on a mid-range Android on patchy data, it will feel luxurious everywhere else. Building from the harder context is not a limitation — it is a better starting brief.",
        ],
      },
    ],
  },
];

export const postCategories = [
  "All",
  "Products",
  "Careers",
  "Money",
  "Education",
  "Law × Tech",
  "Personal",
] as const;

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
