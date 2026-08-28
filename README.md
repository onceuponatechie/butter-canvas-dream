# Pixel Perfect AI

I want to replicate this figma video pixel-perfect. 
Replication Guide — "Enigma" AI Tech Landing Page

Rebuilt from the actual video frames (1280×960, 21s, 30fps). Stack: Next.js + Tailwind + Framer Motion. Feed this to Claude Code section by section.

0. The big picture

This is a soft, light, "AI product" aesthetic — the opposite of an editorial serif site. Everything is:

One grotesque sans, black on white

Rounded everything: pills, cards with ~24–32px radii, circular icon buttons

A single pale butter-lime accent (#FCFFE1) used on section cards and small highlights

3D renders in cream/butter/peach as the imagery language

Floating "UI-inside-UI" stat cards layered over photos

The whole page framed as a rounded canvas floating on a grey desktop backdrop

1. Design tokens

Colors (sampled from the video)

colors: {
  backdrop: "#E4E4E4",  // grey desktop behind the page canvas
  paper:    "#FFFFFF",  // page canvas
  butter:   "#FCFFE1",  // section cards, pill highlights, watermark text
  butterDeep: "#F4F9C8",// slightly deeper tint for small highlights (approx)
  ink:      "#111111",  // black pills, dark stat cards, headline text
  muted:    "#8A8A8A",  // secondary text
  lilac:    "#F7F4F8",  // "Let's Get In Touch" band
}


Typography — ONE font family, no serif

Closest matches to the video: Neue Haas Grotesk / Aeonik / Helvetica Now. Free stand-ins: Inter (safest) or Hanken Grotesk (slightly warmer, closer to the small UI text).

Hero headline:        clamp(40px, 5vw, 72px), weight 500–600, leading 1.1, tracking -0.01em
Section headline:     clamp(36px, 4.5vw, 64px), weight 500, leading 1.15 (centered)
Card headings:        clamp(28px, 3vw, 44px), weight 500
Watermark text:       ~16vw, weight 500, gradient fill (see §7)
Stat numbers:         32–48px, weight 500
Body:                 14–16px, weight 400, leading 1.5, muted color
Small labels/chips:   12–13px, weight 500
Buttons:              14px, weight 500


Shape system

Buttons: full pills (rounded-full)

Section cards: rounded-[32px]

Photos and thumbnails: rounded-2xl to rounded-3xl

Floating stat cards: rounded-2xl with soft shadow shadow-[0_12px_40px_rgba(0,0,0,0.08)]

Icon buttons: perfect circles, 40–44px

2. The page canvas (do this first — it frames everything)

The site is NOT edge-to-edge. It's a rounded white card floating on grey:

<body class="bg-backdrop">
  <!-- decorative thin circles on the backdrop -->
  <div class="fixed inset-0 pointer-events-none">
    <!-- 3–4 large SVG circles, stroke #EFF4B8, stroke-width 1.5, no fill,
         positioned partially off-screen (top-left, right edge, bottom-right) -->
  </div>
  <main class="relative mx-auto my-8 max-w-[1440px] rounded-[28px] bg-paper overflow-hidden">
    ...all sections...
  </main>
</body>


Keep ~40–60px of grey visible around the canvas at desktop widths.

3. Preloader (0–3s) — the sphere

Full-canvas overlay, shown once on load:

Background: very light grey-white gradient.

Center: a large soft 3D sphere (~440px). Cheapest faithful build: a div with layered radial gradients —

background:  radial-gradient(circle at 35% 25%, #ffffff 0%, #f2f2f4 45%, #e7e7ea 70%, #dcdce0 100%);border-radius: 9999px;box-shadow:  0 40px 80px rgba(0,0,0,0.10),          /* drop */  inset 0 -30px 60px rgba(255,255,255,0.9); /* under-glow */


plus a blurred white crescent div hugging the bottom-left edge (the glow rim in the video). A looping 3D render video/WebM also works if you have one.

Brand name "Enigma" centered ON the sphere, ~48px, grey (#9A9A9A), typed letter by letter (stagger each character's opacity, 80ms apart).

Loading percentage below the sphere, ~16px, counts 0 → 100.

Nav (logo left, black "Contact Us" pill right) is already visible during the preloader.

Exit: when the counter hits 100, fade/scale the overlay out (0.6s) and reveal the hero.

// counter sketch
const [pct, setPct] = useState(0);
useEffect(() => {
  const t = setInterval(() => setPct(p => (p >= 100 ? (clearInterval(t), 100) : p + 1)), 24);
  return () => clearInterval(t);
}, []);


4. Navigation

Three zones on one row (px-8 pt-6, absolute over the hero):

Left: logo mark (angular broken-circle glyph) + "Enigma" wordmark, 15px.

Center: a pill container (rounded-full bg-white/70 backdrop-blur border border-black/5 px-2 py-1.5) holding three links, each = label + tiny line icon: Home ⌂ · Technology ⚙ · Service ▤. Active link gets a bg-butter pill behind it.

Right: two small circle icon buttons (help "?", user) + black pill Contact Us (bg-ink text-white px-5 py-2.5).

Left icon dock: a vertical rail fixed to the canvas's left edge, vertically centered — 4–5 small circular outline icons stacked with a thin connector line; the active one (anchor icon at top) sits in a bg-butter circle. At the bottom of the rail: a black circular button with a left/back arrow.

5. Hero — video background + floating cards

Structure (min-h-[92vh], relative):

Background: an abstract greyscale 3D swirl video, object-cover, heavily softened:

<video autoplay muted loop playsinline       class="absolute inset-0 h-full w-full object-cover opacity-70 blur-[2px] scale-105" /><!-- plus a white radial fade at the edges so it melts into the canvas -->


Source options: any slow abstract white/grey 3D loop (a rotating ribbon/rose shape). Blur + low contrast is what makes text readable on top.

Top-right micro copy: three short lines, 12px, right-aligned, muted: "Advantages Delivered, / Promises Kept: / Your Ongoing Success."

Left-center content:

Pill pair above the headline: Get Started (bg-butter, ink text) and Explore (white, thin border).

Headline, two lines, left-aligned: "AI Powered Tech Solutions / For Your Business".

Floating cards (absolutely positioned, each with the soft shadow, gentle idle float animation — translateY ±6px, 4s ease-in-out infinite, staggered):

"Explore Your Data" card — white, small, mini vertical bar chart (5 rounded black bars), "×" close dot top-right. Sits center-bottom.

Photo chip next to it — small rounded 3D device render with a tiny black circular icon overlapping its corner.

Avatar chip — pill with a small round photo + "Read The Interview •".

Right side: butter card — "Increased Revenue" + share icon, big 18%, and below it three numbered circles 01 02 03 (02 filled black = active).

Bottom-left: tiny "scroll" hint with a down arrow under the dock.

6. "Advantage Is Our Promise" + stacked cards

Header block (centered):

Headline across two lines: "Advantage [icon chips] Is Our Promise: / Fueling Your Success". The two inline chips sit mid-sentence at text height: a butter circle with a green trend-arrow, overlapping a black rounded square with a play icon.

Two pills below: Get Started (black) and Contact Us (very light grey).

Stacked cards effect — cards pin and pile as you scroll (each new card slides up over the previous, which shrinks slightly behind it — you can see the previous card's top edge peeking out in the video):

// per card: sticky positioning + scale based on scroll progress
<div className="sticky top-24" style={{ zIndex: i }}>
  <motion.div style={{ scale: prevCardScale }} className="rounded-[32px] bg-butter p-10 md:p-14">


(Framer Motion useScroll + useTransform: previous card scales 1 → 0.95 and dims slightly as the next arrives.)

Card anatomy (two-column, left text / right visual):

Outline pill badge: "Increased Revenue" / "Innovation Leadership"

Heading: "Cultivating Growth, Maximizing Revenue" / "Shaping Tomorrow through Innovation Today"

Body: 1–2 lines, 14px muted ("…average increase in revenue of 25% for our clients.")

Right: rounded 3D product photo (cream/orange devices) with floating overlays:

Card 1: white stat card — "18%" + mini bar chart + "increase in monthly sales"; plus a white chip "Revenue boost of 30% •" with a black circular trend icon.

Card 2: black stat card — a row of 4 circles (three cream-filled, one dark outline), big "66%", caption "Higher rate of new product development"; "···" dots above the card; two circle buttons (? and user) pinned bottom-right of the photo.

Numbers count up when the card enters view (17 → 66, etc.). Use a useInView + spring counter.

Transition row after the cards, three small texts across the width: AI Powered (left) · • Innovate Today, Transform Tomorrow (center) · Beyond Limits / Since 2015 (right), 12px.

7. "OUR CASES" — watermark + expanding filmstrip

Watermark: "OUR CASES" at ~16vw, one line, sitting BEHIND the nav and content (absolute top-0, z-0). Fill is a left-to-right gradient from butter (#FCFFE1-ish, slightly more saturated) into pale grey:

background: linear-gradient(90deg, #F3F8C9 0%, #F6F8E3 45%, #EBEBEB 100%);-webkit-background-clip: text; color: transparent;


Filmstrip: a single horizontal row of case thumbnails, center of the section — mixed sizes (small ~64px tall chips and larger ~150–220px tiles), all rounded-2xl, gaps ~16px. The active/featured ones are larger; labels ("E-commerce Optimization", "Manufacturing Efficiency", "Restaurant Turnaround", "Financial Services Strategy") appear in 13px muted text just above their tiles.

Scroll behavior: the section is pinned while thumbnails grow — tiles scale from the small strip into big tiles that eventually fill the row edge-to-edge (the video shows the same images at strip size, then much larger). Framer Motion: section wrapper h-[300vh], inner content sticky top-0 h-screen, tile scale mapped to scroll progress.

Bottom row: "Scroll to explore" (left, 13px) · black pill All Works (center) · ? and user circle buttons (right).

Thumbnail imagery: 3D renders in the same palette — white ribbed waves, dotted-gradient device, zen-garden ripples, butter cylinders, peach appliances. Match with similar abstract 3D renders (or your own Blender/spline shots) to keep the palette coherent.

8. "Let's Get In Touch" band

Full-width band, bg-lilac (#F7F4F8), py-16.

Centered: "Let's Get / In Touch" (two lines, ~36px, weight 500) with a white circular button (~76px) directly to its right containing a phone-call line icon. Hover: circle scales 1.08 and the icon wiggles.

The video ends here; below this, add a standard slim footer (logo, links, ©) in the same sans.

9. Motion inventory (everything animated in the video)

Preloader: letter-by-letter brand name + 0–100 counter + fade-out reveal

Hero background video loop (blurred, slow)

Floating cards: gentle idle bob, staggered

Stacked cards: pin + pile + scale-back on scroll

Stat numbers: count-up on enter (18%, 66%…)

Filmstrip: scroll-driven scale from strip → grid

Standard fade/rise reveals for headings (0.6–0.8s, ease-out)

Cursor-visible hovers: pills invert or tint butter, circles scale

No parallax text, no marquee, no letter-splitting on headlines beyond the preloader. Restraint again — just a different flavor of it.

10. Build order

Canvas frame + backdrop circles + tokens + font

Nav + left dock (static)

Hero: layout first, then background video, then floating cards, then idle float

Promise header + the two butter cards as plain sections

Convert to stacked-scroll effect + count-up numbers

OUR CASES watermark + static filmstrip, then the scroll-scale behavior

Get In Touch band + footer

Preloader last (it's an overlay — easiest to bolt on when the page works)

Mobile pass: dock hides, nav collapses to logo + burger + Contact pill, filmstrip becomes a swipeable row, stacked cards keep the effect (it works vertically)

11. Pixel-perfect checklist

[ ] ZERO serifs — one grotesque family, weights 400/500 only

[ ] Page floats on grey with visible rounded corners — never edge-to-edge

[ ] Butter (#FCFFE1) appears on: section cards, active nav pill, dock highlight, Get Started pill, watermark gradient — nowhere else

[ ] Every button is a pill or a circle

[ ] Hero text sits on a blurred video — if the video reads sharp, blur it more

[ ] Floating stat cards overlap photo edges (never fully inside, never fully outside)

[ ] Stat numbers animate; static numbers will feel dead compared to the reference

[ ] Watermark text sits behind the nav, not below it

[ ] Imagery is exclusively soft 3D renders in cream/butter/peach/grey

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b52c00a7-382b-408f-838f-47bb69ddc5a3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
