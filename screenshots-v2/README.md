# Sideline Marketing Site — Screenshots for Review

Full-page screenshots of the current Sideline marketing site (desktop + mobile).
Use these to review layout, copy, conversion flow, and mobile experience.

**Captured:** June 19, 2026 (launch-readiness pass)  
**Build:** production (`npm run build` + `next start`)  
**Desktop:** 1440px wide  
**Mobile:** 390px wide @2x  
**Overflow audit:** 0px on all 7 pages at both viewports  

---

## Current Version Summary

Launch-readiness pass — copy, trust, CTA consistency, and mobile polish. No redesign.

### Homepage
- Headline: **"One place for the whole game."**
- Clear product positioning: four pillars, not a sportsbook, not a chat app, founding member access
- Primary CTA: **Join as a Founding Member**

### Site-wide CTA standard
- Primary (waitlist links): **Join as a Founding Member**
- Form submit: **Become a Founding Member**
- Secondary CTAs remain page-specific (Explore Communities, See Fans Compete, etc.)

### Trust & legal safety
- No fake metrics, testimonials, countdowns, or scarcity
- Compete page: skill-based predictions, reputation, leaderboards — not betting language
- Creators page: no guaranteed earnings; sample/preview labels on dashboard UI
- Footer: not affiliated with leagues/teams; not a sportsbook; does not accept wagers

### Mobile
- `overflow-x-hidden` on body; responsive hero badges; 0px horizontal overflow verified on all pages

---

## Screenshot Files

| Page | Desktop | Mobile | Desktop height | Mobile height |
| --- | --- | --- | --- | --- |
| Home | `home-desktop.png` | `home-mobile.png` | 5291px | 8659px |
| Communities | `communities-desktop.png` | `communities-mobile.png` | 4164px | 5399px |
| Creators | `creators-desktop.png` | `creators-mobile.png` | 3807px | 6804px |
| Compete | `compete-desktop.png` | `compete-mobile.png` | 4021px | 6569px |
| About | `about-desktop.png` | `about-mobile.png` | 4889px | 7423px |
| Contact | `contact-desktop.png` | `contact-mobile.png` | 3042px | 4979px |
| Waitlist | `waitlist-desktop.png` | `waitlist-mobile.png` | 2715px | 3527px |

All images are full-page PNG captures — nothing cropped.

---

## Notes for Reviewers

- All leaderboard, community, and creator UI is **illustrative** (Preview / Sample / Example labels)
- Pre-launch honest positioning throughout
- Privacy and Terms pages linked from footer (`/privacy`, `/terms`)
