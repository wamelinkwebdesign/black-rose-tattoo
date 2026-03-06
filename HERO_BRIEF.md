# Hero Rebuild Brief

Complete rebuild of Hero component. Current version looks bad — Seal crashes into text, background photo doesn't load, buttons are ugly.

## Background photo — MUST work
Use a plain HTML img tag (NOT next/image) for the background:
- src="/demos/black-rose/images/gallery-1.jpg"
- style: position absolute, inset 0, width 100%, height 100%, objectFit cover, zIndex 0
- Add dark overlay div on top: linear-gradient from rgba(0,0,0,0.7) to rgba(8,8,8,0.85), zIndex 1

## Layout — two clear zones, NO overlapping
Desktop (lg:grid-cols-2 gap-0):
- LEFT column: heading text + tagline + buttons ONLY
- RIGHT column: Rose Seal ONLY
- They must NOT overlap AT ALL

Mobile (single column):
- heading text + tagline
- Rose Seal (300px, centered, mt-12)
- buttons below seal

## Typography
h1 with three display:block spans:
- "Where Art" — cream color
- "Meets" — cream color  
- "Skin." — color #C41E3A (crimson)
Font: Playfair Display, clamp(3rem, 8vw, 7rem), lineHeight 0.9

## Rose Seal — standalone in its own column
- Size: 320px mobile, 420px desktop
- Thin crimson border circle
- SVG rose in center
- Rotating text around edge: "BLACK ROSE TATTOO & GALLERY · AMSTERDAM · EST. 2015 ·"
- Soft red glow: boxShadow 0 0 60px rgba(196,30,58,0.15)
- Float animation: translateY 0 to -10px, 4s infinite ease-in-out
- NO overlap with text — separate column

## Buttons — elegant, side by side, no emojis
Two buttons in a flex row with gap-4:
1. "Book a Session" — bg #C41E3A, white text, px-7 py-3, text-[11px], tracking-[0.25em], uppercase
2. "View Gallery" — border border-white/30, white text, same sizing
No full width. No emojis.

## Tagline
Below heading: "Amsterdam Centrum · Est. 2015 · By Appointment"
Style: text-xs, tracking-[0.3em], text-white/40, uppercase, mt-6

## After building:
1. npm run build — fix errors
2. git add -A && git commit -m "fix: clean hero rebuild — photo, no overlap, elegant buttons"
3. git push
4. npx vercel --prod --yes
5. Run: openclaw system event --text "Done: Black Rose hero clean rebuild klaar" --mode now
