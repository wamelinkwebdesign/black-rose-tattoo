# Black Rose Tattoo & Gallery — Next.js Website

## Project Overview
Demo website for Black Rose Tattoo And Gallery, a tattoo studio in Amsterdam Centrum (Dirk van Hasseltssteeg 56, 1012 NE Amsterdam). 344 perfect 5-star Google reviews.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Cormorant Garamond (headings) + Inter (body) via next/font
- **Images**: next/image with custom loader for basePath prefix

## Design System

### Color Palette
- Dark: `#0D0D0D` (primary background)
- Rose: `#8B2252` (deep red-purple accent)
- Cream: `#F0EBE3` (text, off-white)
- Gold: `#C4A46B` (subtle accents, labels)
- Mid: `#1A1A1A` (card/section backgrounds)

### Typography
- Headings: Cormorant Garamond (300, 400, italic) — elegant, light, timeless
- Body: Inter (400, 500) — clean, modern

### Vibe
Dark, elegant, botanical. Editorial tattoo magazine aesthetic, not punk/grunge. "Black Rose" is the central motif.

## Project Structure
```
app/           → Root layout, page, globals.css
components/    → Nav, Hero, Studio, Portfolio, Boeken, Footer
public/images/ → Local photos (photo1-10 from Google Places)
```

## Components
- **Nav.tsx** — Fixed, transparent on hero, dark bg on scroll, hide-on-scroll-down
- **Hero.tsx** — Fullscreen Hannya mask photo, "BLACK ROSE" in spaced Cormorant
- **Studio.tsx** — Story, stats (344 reviews, 5.0 rating), branded merch photos
- **Portfolio.tsx** — Masonry grid of tattoo work (6 photos)
- **Boeken.tsx** — "Plan je consult" section, contact card, Google Maps link
- **Footer.tsx** — Minimal, dark, brand + address

## iOS Safari Rules (Critical)
1. NEVER animate opacity on children of position:fixed elements
2. NEVER use transition-all on fixed elements — use explicit properties
3. Nav logo and hamburger: plain div/button, not motion.div/motion.button

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npx vercel --prod --yes` — Deploy to Vercel

## Content Rules
- Language: Dutch (Nederlands)
- No em dashes — use commas, colons, or rephrase
- Opening hours: "Bekijk Google Maps voor actuele openingstijden"

## Config
- basePath: `/demos/black-rose`
- Custom image loader at `image-loader.ts` prefixes `/demos/black-rose`
- Redirect `/` → `/demos/black-rose/` in vercel.json
