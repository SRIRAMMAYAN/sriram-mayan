# Next.js + Tailwind Portfolio — JavaScript (JSX) with Visual Effects

React 18 / Next.js 13 portfolio with scroll-reveal animations, SVG skill gauges,
lazy-loaded project images, navbar scroll effects, and hover lift cards.

---

## Tech Stack

| Layer       | Choice                                              |
|-------------|-----------------------------------------------------|
| Framework   | Next.js 13 (App Router, static export)             |
| UI Library  | Material Tailwind + Heroicons                      |
| Styling     | Tailwind CSS 3 + custom CSS (globals.css)          |
| Language    | JavaScript (JSX) — no TypeScript                   |
| Type hints  | PropTypes (runtime, dev-only)                      |
| Animations  | CSS + IntersectionObserver (no extra dependencies) |

---

## Visual Effects Implemented

### 1. SVG Skill Gauges (`src/components/skill-gauge.jsx`)
Animated 270° arc gauges that fill from 0 → target % when they scroll into view.
- Scroll-triggered via `IntersectionObserver`
- Smooth transition: `stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)`
- Pulsing glow via `gauge-active` CSS animation
- Accessible: `role="img"` + `aria-label`

### 2. Scroll-Reveal Layout Transitions (`src/components/section-transition.jsx`)
Add `className="reveal"` (and optionally `reveal-delay-N`) to any element inside
a `<SectionTransition>` wrapper — it fades up on scroll.
- Stagger delays: `reveal-delay-1` through `reveal-delay-6` (80 ms steps)
- CSS variables: `--ease-out-expo`, `--duration-slow`
- Uses `IntersectionObserver`, fires once per element

### 3. Lazy Image with Shimmer Placeholder (`src/components/lazy-image.jsx`)
- Shimmer skeleton shown until image loads
- `IntersectionObserver` delays the network request until near-viewport
- CSS hover-zoom: `img-zoom-wrap` class scales image 6% on hover
- Falls back to SVG icon placeholder if `src` is missing
- `loading="lazy"` + `decoding="async"` for browser-native hints

### 4. Navbar Scroll Shadow
Detects `window.scrollY > 20` and applies `navbar-scrolled` class:
`backdrop-filter: blur(10px)`, soft shadow, semi-transparent background.

### 5. Project Card Hover Lift
`project-card-wrap` CSS class: `translateY(-6px)` + box-shadow on hover,
spring easing via `cubic-bezier(0.34,1.56,0.64,1)`.

---

## Project Structure

```
portfolio-js/
├── scripts/
│   └── package.sh          ← build + zip script
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css     ← all animations & tokens
│   │   ├── hero.jsx        ← grain overlay + reveal
│   │   ├── skills.jsx      ← gauge row + skill cards
│   │   ├── projects.jsx    ← real project images
│   │   ├── clients.jsx
│   │   ├── resume.jsx
│   │   ├── testimonial.jsx
│   │   ├── popular-clients.jsx
│   │   └── contact-form.jsx
│   ├── components/
│   │   ├── index.js        ← barrel export
│   │   ├── navbar.jsx      ← scroll shadow
│   │   ├── footer.jsx      ← gradient line
│   │   ├── project-card.jsx← LazyImage + hover lift
│   │   ├── skill-gauge.jsx ← SVG arc gauge ✨
│   │   ├── lazy-image.jsx  ← shimmer + lazy load ✨
│   │   ├── section-transition.jsx ← scroll reveal ✨
│   │   ├── skill-card.jsx
│   │   ├── resume-item.jsx
│   │   ├── layout.jsx
│   │   └── fixed-plugin.jsx
│   └── hooks/
│       └── useScrollReveal.js  ← reusable hook
└── public/
    └── image/
        ├── avatar.png          ← hero photo
        ├── brain-tumor.jpg     ← project 1
        ├── deepfakes.webp      ← project 2
        ├── cancer-prediction.jpg ← project 3
        └── baby-cry.jpg        ← project 4
```

---

## How to Supply Project Images

### Option A — Local files (recommended)
Drop your images into `public/image/` and reference them as `/image/filename.jpg`:
```jsx
img: "/image/my-project.jpg"
```
Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`
Recommended size: 800×600 px, max 500 KB per image

### Option B — External URL
```jsx
img: "https://example.com/my-project.png"
```
Note: `next.config.js` has `images: { unoptimized: true }` so `<img>` tags are used directly.

### Replacing the hero avatar
Drop your photo at `public/image/avatar.png` (or change the `src` in `hero.jsx`).

---

## Image Ground Rules

| Rule | Details |
|---|---|
| Formats | JPG, PNG, WebP, SVG (SVG gives sharpest results at any size) |
| Max size | 500 KB for photos, 2 MB for SVG illustrations |
| Dimensions | 768×512 px minimum for project cards (1.5:1 ratio) |
| Hero photo | Portrait orientation, min 600×800 px |
| Licensing | Only use images you own or that are licensed for use |

---

## Accessibility

- All images have descriptive `alt` text
- `<IconButton>` has `aria-label` + `aria-expanded` for the mobile menu
- `<SkillGauge>` has `role="img"` + `aria-label="Python: 90%"`
- Reveal animations skip for users with `prefers-reduced-motion` (add to globals.css if needed):
  ```css
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; }
  }
  ```

---

## Running Locally

```bash
# 1. Install
npm install

# 2. Dev server (hot reload)
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build

# 4. Preview production build
npm run start
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Build + Package for Any Static Host

```bash
chmod +x scripts/package.sh
./scripts/package.sh
# → creates portfolio-dist.zip
```

Upload `portfolio-dist.zip` contents to Netlify, Vercel, or any static host.
