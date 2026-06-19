# Sideline — Final Polish Pass (9.5 → 10/10, Launch-Ready)

This pass refines Sideline into a premium product site (Linear / Mercury / Raycast
feel) — **without redesigning** the brand, logo, neon-green accent, dark theme,
layouts, or messaging direction. No fake metrics, testimonials, counts, or
countdowns were introduced. All illustrative UI stays clearly labeled
Preview / Sample / Example.

---

## Improvements Made

### 1. Signature ecosystem hero (Home is now the strongest page)
The single-phone hero was replaced with a **signature ecosystem visual**: a central
Sideline hub ("One home") connected by glowing lines to four product mini-cards —
**Communities** (live game-day room), **Predictions** (KC/BUF split bar),
**Creators** (Coach D premium feed), and **Competition** (#1 Season Leader). A
visitor now understands all four pillars within ~5 seconds, and it establishes a
repeatable visual identity rather than showing one screen of the app.

*Why it's better:* it communicates the whole product at once, reads as intentional
(not a dashboard dump), and gives Sideline an ownable motif beyond the logo/color.

### 2. Repeatable Sideline visual language
The hub-and-spoke ecosystem motif (from the About diagram) is now reused subtly:
the Home hero hub + connectors, and small neon "node" markers on the footer column
headings. Used sparingly so it signals brand without becoming decoration.

### 3. Upgraded footer (Product / Company / Legal)
The thin 3-line footer became a proper, compact sitemap footer:
- **Brand block** — logo, one-line positioning, and a "Join the Waitlist" CTA.
- **Product** (Communities, Creators, Competition), **Company** (About, Contact),
  **Legal** (Privacy, Terms) — with hover transitions and node-accent headings.
- Legal disclaimer (not affiliated / not a sportsbook) retained in a clean bottom bar.
- On mobile the three nav columns share one row (not stacked), so the richer footer
  only adds ~300px instead of ~600px.

### 4. Mobile breathing room
Increased vertical rhythm where sections felt compressed without bloating length:
- **Home** — content sections bumped `py-7 → py-9/10` for clearer separation.
- **Creators** — stacked feature rows go `py-3 → py-6` on mobile (tight on desktop).
- Card hover/elevation kept consistent across the grid.

### 5. Micro-interaction polish
Built on the existing system (button sheen + lift + active-press, card hover-lift,
scroll-reveal, reduced-motion fallbacks). The new ecosystem pillar cards use the
shared card hover-lift, and footer links/CTAs have deliberate hover feedback
(color + arrow nudge). Nothing flashy.

### 6. Carried-forward refinements
Product-forward heroes on Compete (`RankingTable` + streak/challenge chips) and
Creators (`Creator Command Center`) remain clean and athlete-photo-free; honest
placeholder content throughout.

---

## Verification

- `npm run build` — passes (TypeScript + lint clean).
- **Horizontal-overflow audit:** every page renders at exactly its viewport width
  (desktop 1440px / mobile 390px content width) — **no real horizontal overflow**.
  *(Note: the headless DOM probe reports a transient `<img>` natural-width reading
  for the Next/Image logo before paint; the painted layout and `cssContentSize`
  confirm 390/1440 with no clipping — verified visually in the screenshots.)*
- **Heroes verified at full resolution** (1440 @2x): Home ecosystem, Compete, and
  Creators all render correctly with no clipping or misaligned cards.

| Page | Desktop (h) | Mobile (h) |
| --- | --- | --- |
| Home | 4892 | 8277 |
| Communities | 4168 | 5435 |
| Creators | 3751 | 6760 |
| Compete | 3905 | 6373 |
| About | 4843 | 7236 |
| Contact | 3018 | 4955 |
| Waitlist | 2436 | 3137 |

(Height deltas vs. previous pass are almost entirely the richer global footer
[~+300px/page mobile] plus added Home breathing room; offset by the mobile footer
column layout.)

---

## Screenshot File List

| Page | Desktop | Mobile |
| --- | --- | --- |
| Home | `home-desktop.png` | `home-mobile.png` |
| Communities | `communities-desktop.png` | `communities-mobile.png` |
| Creators | `creators-desktop.png` | `creators-mobile.png` |
| Compete | `compete-desktop.png` | `compete-mobile.png` |
| About | `about-desktop.png` | `about-mobile.png` |
| Contact | `contact-desktop.png` | `contact-mobile.png` |
| Waitlist | `waitlist-desktop.png` | `waitlist-mobile.png` |

Desktop = 1440px wide. Mobile = 390px wide @2x. All full-page, freshly captured.

---

## Files Modified (this pass)

- `app/page.tsx` — replaced single-phone hero with the `HeroEcosystem` signature
  visual (hub + 4 pillar cards + connectors); added mobile breathing room.
- `app/components/LegalFooter.tsx` — full Product/Company/Legal footer with brand
  block, waitlist CTA, node-accent headings, mobile 3-column layout.
- `app/creators/page.tsx` — more mobile vertical rhythm on stacked feature rows.
- `scripts/shoot.mjs`, `scripts/measure.mjs`, `scripts/heroshot.mjs` — capture +
  overflow-audit tooling.

---

## Remaining Weaknesses / Notes

- **Static product previews.** The hero/section UIs are illustrative; once real data
  exists, the Preview/Sample labels and mocked rows should be replaced with live data.
- **Home mobile length (~8.3k px).** Inherent to a full marketing page with the new
  richer footer; further trimming would mean cutting real value content.
- **No real social proof yet.** Pre-launch by design — trust is carried by clarity,
  honesty, and the founding-member framing rather than logos/testimonials.
- **`StadiumCta` crowd image** remains (reads as stadium energy, not a generic
  athlete); could move to a CSS treatment later for full consistency.
