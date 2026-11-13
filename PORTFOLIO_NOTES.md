# Portfolio notes

Working notes for turning this template into my portfolio. Not part of the site.

## Placeholders to fill

Real content went in on 2026-11-13. These are the placeholders that are still left. Search for `[` if line numbers drift.

### Projects

No placeholders left. Each card shows the year it was built and its stack. The Student Information System screenshot was re-cropped to 1400x700 so the login card sits in the middle (left edge extended by mirroring the plain background, toast and top bar cropped out); the original .jpg was replaced.

### Achievements

No placeholders left. The two seminar tiles come from JPSSITE (Junior Philippine Student Society of Information Technology Educators) certificates of attendance, both at La Consolacion University Philippines: Pace Level Up v. 4.0, "IT Trends: Navigating the Ever - Changing Digital Landscape" (12 October 2023), and Pace Level Up v. 4.1, "From Pixels to Perfection: Unleashing Creativity in Game Development and Graphic Designing" (6 December 2023). Tiles use the short titles. Images were center-cropped from 2000x1414 to 3:2 (40px of border off top and bottom, no text lost) and saved as 1500x1000 JPGs. 2023 has no timeline entry yet.

Microsoft Access and Excel are one tile (both are on the same Certiport transcript). Certificate images are in public/images/achievements/, both 1500x1000 (3:2): the C# certificate scaled to fit, the transcript scaled with a thin band of its own grey background added top and bottom. The transcript shows my home address and school email.

### Repo files

| Placeholder | File:line | What goes there |
| --- | --- | --- |
| `[FIREBASE PROJECT ID]` | .firebaserc:3 | Needed before `firebase deploy` |
| `[LIVE SITE URL]` | README.md:4 | Once deployed |
| `[RESUME FILE]` | src/constants/constants.js:72 | Only if a Resume button is added (see below). Not linked anywhere now |

Everything else (name, logo, email, phone, location, social links, Hero, Skills, timeline, achievements, footer line) is real content now.

## Decisions waiting on me

- **Résumé.** No résumé was given, so the Hero's second button is now **Contact Me** → `#contact`. To switch back, drop the PDF in `public/`, set `ResumeUrl`, and use the snippet in the comment at src/components/Hero/Hero.js:38-40.
- **Tagline.** "Future Full-Stack Engineer from Malolos, Bulacan" is live (src/components/Hero/Hero.js:20).
- **Favicon.** `public/favicon.ico` is still a plain purple square.
- **Unused `axios` dependency.** Not imported anywhere; removing it is optional.
- **Carousel dot focus ring.** The template sets `outline: none` on the dots, so keyboard focus is invisible. Left alone.
- **Timeline 2026 entry vs. Achievements.** The 2026 timeline entry mentions the freeCodeCamp C# certification, but its Achievements tile says "October 2025" (src/constants/constants.js). One of the two needs changing.

## Timeline split (2026-11-13)

"2025–2026" became two entries: **2025** (Cafe Rencontre, Student Information System, Certiport Access) and **2026** (LCUP UBMS System, freeCodeCamp C#). Six entries no longer fit the template's fixed 196px cards, so above 768px every entry is an equal column of the track (`flex: 1 1 0`, 24px gap, tops aligned) and year headings have `white-space: nowrap`. The md-and-down swipe carousel is unchanged. Each change is marked `/* fix: … */` in src/components/TimeLine/TimeLineStyles.js.

Checked at 1440 / 1100 / 900 px (6 equal columns of 153 / 147 / 114px, same top, every year on one line) and 768 / 390px (carousel, 6 dots). No sideways scroll at any width.

## Layout fixes (2026-11-13)

Each fix is marked `/* layout fix: … */` in the styled component.

| Problem | Cause | Fix |
| --- | --- | --- |
| Hero animation covered the h1 and intro at 1024px; with the real name it would have at every width | Hero `Section` has `margin: 0 auto`, so as a grid item it sized to fit its content, and the `width: max-content` h1 made it 32px wider than its column | Section with the `grid` prop makes its children `width: 100%; min-width: 0` (GlobalComponents/index.js) |
| No gap between text and animation | Template grid has no gap | `padding-right: 24px` on `LeftSection`. 24px keeps both buttons on one row at 1024px and leaves the animation's size alone |
| Photo needed to sit on the animation | – | New `HeroVisual` (position: relative, align-self: start) wraps `BgAnimation` and `ProfilePhoto` (absolute, translate(-50%, -50%), 60% wide up to 320px, 4:5, 28px radius, 2px `background2` border). Hero stacks to one column at ≤768px |
| Nav wrapped onto two rows at 1024–1440px | `Div2` spanned grid columns 2–3 of 5, leaving column 4 empty | `grid-area: 1 / 2 / 2 / 5` (HeaderStyles.js) |
| Projects flush against the window edge below 1136px | `<Section nopadding>` in Projects.js, from the original repo | Removed `nopadding`; all sections now share the 48px gutter |
| Third project card shorter and stuck on the left | Rows sized to content; `auto-fill` puts an odd card in column 1 | `grid-auto-rows: 1fr` and the odd last card spans the row, centred (ProjectsStyles.js) |
| Achievement titles spilled out of tiles | `Box` had fixed heights (144 / 210 / 135px) | `min-height` instead. My earlier `BoxNum` font cut was reverted to the template's 36/28px. Phones: one tile per row instead of 2+1 |
| Footer email split mid-word on desktop | `LinkColumn` max-width 220px and 220px grid tracks | Removed the max-width; tracks are `minmax(85px, max-content)` |

The header is `position: static` in the template (not sticky), so anchor jumps land at the top of each section with nothing covering them.

## Mobile and tablet fixes (2026-11-13)

All inside `sm` (≤640px) or `md` (≤768px) media queries, marked `/* mobile fix: … */`. Desktop geometry at 1024 / 1280 / 1440px was snapshotted before and compared after: 0 of 188 elements moved.

| Section | Problem | Cause | Fix |
| --- | --- | --- | --- |
| Header, 768px | Nav and icons wrapped onto extra lines | Desktop grid (links in ~440px, icons in ~134px) still used at 641–768px | Template's two-row mobile header (logo + icons, then nav) now starts at `md`, 48px sides |
| Header, phones | Nav's second row overflowed the header; logo 10px from the edge; logo wrapped at 360px; links 36px tall | `grid-template-rows: repeat(2, 60px)`, `padding: 1rem`, logo in columns 1–2 only, inline links | Rows `60px auto`, 16px sides, logo spans columns 1–3, links inline-block at 44px tall |
| Hero, 768px | Text started at 96px and ran off the right edge | `Section`'s md padding ignored `nopadding`, so the hero got 48px inside 48px | md padding respects `nopadding` |
| Hero, phones | Buttons 32px tall; photo 197px at 360px | `ButtonBack` sm height; photo at 60% of the box | Buttons 44px; photo `clamp(200px, 62%, 240px)` |
| Projects, ≤768px | Live/Code 38px tall | Padding only | `min-height: 44px` |
| About, phones | Carousel dots were 11px tap targets | 3px dot + 4px padding | 44px buttons, same 3px dot; the active scale now applies to the dot, not the 44px box |
| Contact, phones | Email split mid-word; phone link 18px tall | Three 105px columns, 12px text on 18px line | One column, 16px text, 44px links |
| Contact, 768px | Facebook icon wrapped to its own line; links 28px tall | `flex-wrap: wrap` + slogan min-width squeezing the icons | `flex-shrink: 0`; links 44px |

Not needed: `overflow-x: hidden` (no horizontal scroll at any width, fixed at the cause) and `scroll-margin-top` (the header is `position: static`, so nothing covers a section after a nav jump).

## Known template quirks

- Nav links now use `passHref`, so each `<a>` has a real `href` (`/#about` etc.): keyboard-focusable and working without JS.
- In styled-components CSS, use `/* */` comments. A `//` comment containing an apostrophe silently dropped every rule after it during the nav fix.
- `yarn dev` on Windows fails in cmd.exe (`'NODE_OPTIONS' is not recognized`). Run it with Git Bash as the script shell: `npm_config_script_shell="C:\Program Files\Git\bin\bash.exe" yarn dev`.

## Checks done

- **Mobile pass (2026-11-13), CDP mobile emulation at 360 / 390 / 430 / 768px, plus 1024 / 1280 / 1440px.** Zero overlaps, nothing within 12px of the screen edge, nothing clipped, no tap target under 44px, no horizontal scroll. Side padding 16px on phones and 48px on tablet, for every section and the header. Nav: all 6 links land on their section at 1440 / 1280 / 768 / 360px. Carousel: touch swipe 32→336px moves the active dot; tapping dot 4 then dot 1 scrolls to 488 then 32px. All 24 links resolve; new-tab links have rel and aria-labels. Desktop geometry unchanged (0 of 188 elements moved at each width). `yarn build` from a clean `.next/`: exit 0, no warnings.

- **Layout pass (2026-11-13), dev server, CDP emulation at 1024 / 1280 / 1440px (plus 768 / 375).** Pairwise box-overlap scan of every heading, paragraph, link, image, button and the animation: the only overlap left is the photo on the animation, which is intended. No element outside its parent, no horizontal scroll at any width. Every section heading starts at the same x (48 / 120 / 200px). All three project cards 534px tall with buttons at the same offset. Achievement tiles 293px (1024) and 331px wide, text inside. Hero buttons on one row at ≥768px. Email on one line at ≥768px. `yarn build` from a clean `.next/`: exit 0, no warnings.

- **Timeline carousel at 375px** (About pass), run as true mobile emulation over the DevTools protocol, because headless windows can't go below ~492px. Tapping dots 2 → 4 → 1 → 0 scrolled the track to 336 / 640 / 184 / 32 px and moved the active dot each time. Scrolling the track to 488px set dot 3 active. No sideways page scroll. At 1280px all 5 cards fit in the 1040px track. Touch swipe was verified later, in the final check.
- **Skills section at 1280 / 768 / 375px** (Skills pass), same emulation. Three columns on desktop and tablet, stacked icon-left rows on phones, as the template does. No sideways page scroll at any width.
- **Projects grid with 3, 4 and 5 cards at 1280 / 768 / 375px** (Projects pass). Extra cards were DOM clones and images were generated 16:9 stand-ins. Desktop: 2 columns (2+1, 2+2, 2+2+1), cards in a row share a height. Tablet and phone: one column. No card or description overflow, images held 16:9, no sideways page scroll anywhere. Both buttons render with `rel="noopener noreferrer"`.
- **Achievement tiles at 1280 / 1024 / 768 / 375px with 4, 5, 6 tiles** (Achievements pass). Desktop rows 4, 4+1, 4+2; phones 2+2, 2+2+1, 2+2+2. At the template's 36px, two-line names like "Dean's Lister" and "CCNA 1 Certified" overflowed the fixed 144px tile, and single words overflowed its width at 1024px. Shortening couldn't fix that, because the slot only fits ~10 characters. So `BoxNum` went 36→28px (desktop) and 28→22px (768px), with `/* fix: */` comments; phones keep 24px. After that, sample names with short issuers fit at every width and count. Long issuers still overflow at 768px only, hence the ~20 character limit.
- **Footer at 1280 / 375px**: "Contact Me" heading, Call / Email / Based in columns, closing line, icons and credit all render. No sideways scroll.
- **Final check, against the built `out/` export.**
  - **Nav:** all 6 links (Home, About, Skills, Projects, Achievements, Contact) clicked at 1440px and 375px; each scrolled to its section.
  - **Links:** 24 anchors. None point to "#", every in-page target exists, and every new-tab link has `rel="noopener noreferrer"`. The only 404s are placeholders: the 3 social links ×2, the résumé PDF, and the 6 project links.
  - **Responsive:** no horizontal scroll at 375 / 768 / 1024 / 1440px, no card overflow, images hold 16:9. Achievement tiles overflow only with the bracket placeholders.
  - **Carousel:** a real touch swipe at 375px scrolled 32→336px and moved the active dot.
  - **Accessibility:** one h1, no skipped heading levels, every img has alt, every icon-only link and button has an aria-label.
  - **Console:** only the 3 missing project images (404).
  - **Build:** `yarn build` from a clean `.next/` exits 0 with no warnings. Don’t build while `yarn dev` is running: `next export` then copies dev hot-update files into `out/`.

## Content update (2026-11-14)

- Hero h1 is now "Hi, I'm Adi"; About says "I'm Adi". `FullName` is "James Adrian W. Dysangco" and still feeds the page title, meta description and photo alt.
- Tagline "Web developer" → "Future Full-Stack Engineer" (the only "web developer" in the site).
- Tools & Design now names ChatGPT, Claude, GitHub Copilot and Gemini as text. The column has one icon (FaTools), not one per tool, and react-icons 4.12.0 has no Gemini, Copilot or Claude icons anyway.
- Achievements grid is now 2 columns on desktop and tablet (AcomplishmentsStyles.js). With 4 tiles in one row they were 242px (1440) and 152px (768) wide, and "Foundational" ran past the tile edge. Phones stay one per row.
- Checked at 390 / 768 / 1440px over CDP: no overlaps, no horizontal scroll, no tile text overflow, the h1 keeps its 32 / 56 / 65px size and doesn't touch the animation. `next build && next export` from a clean `.next/`: exit 0.
- Footer template credit removed (and the keep-it rule in CLAUDE.md). README.md:42 still says "Design inspired by Tanveer Khan's portfolio template".
