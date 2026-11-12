# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page student portfolio, built on Tanveer Khan's portfolio template (no LICENSE in the original repo, so the footer keeps a credit line: keep it). Next.js 10 (pages router) + React 17 + styled-components, statically exported to `out/` and deployable to Firebase Hosting (project id in `.firebaserc` is still a placeholder).

No tests, no linter, no TypeScript, no `next.config.js`. Prettier is the only tooling: `yarn format` / `yarn format:check`. Package manager: yarn v1 (`yarn.lock` is committed).

`PORTFOLIO_NOTES.md` is the working list of `[BRACKETED]` placeholders still waiting for real info, with file and line for each, plus the checks that have been run. Keep it in sync with every content change.

## Commands

```bash
yarn dev      # dev server, :3000
yarn build    # next build && next export -> out/
yarn start    # next start (not used for the static export)
```

The scripts use the POSIX inline-env form (`NODE_OPTIONS=--openssl-legacy-provider next dev`), so on Windows yarn's default cmd.exe shell fails with `'NODE_OPTIONS' is not recognized`. Run them through Git Bash without editing package.json:

```bash
npm_config_script_shell="C:\Program Files\Git\bin\bash.exe" yarn dev
```

`--openssl-legacy-provider` is required: without it Next 10 crashes under Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED`. Verified working on Node 26. With no `next.config.js`, Next 10.2 uses webpack 5.

Deploy: build first, then `firebase deploy --only hosting` (serves `out/`).

## Architecture

**Content lives in `src/constants/constants.js`:** `projects`, `TimeLineData`, `Achievements`, full name, résumé path, social URLs, email, phone and location. Section intro paragraphs (Hero, About, Skills) and the footer closing line are written inline in their components.

**Page composition.** `src/pages/index.js` sets `<title>`/meta via `next/head`, then renders `Layout` (Header + `<main>` + Footer) around Hero, Projects, Technologies, Timeline, Acomplishments, in that order. Nav order differs from page order on purpose: Home, About, Skills, Projects, Achievements, Contact. Each nav link is a `next/link` with `passHref` to an `id`:

| Nav | id | Component | Heading |
| --- | --- | --- | --- |
| Home | `home` | Hero | h1 "Hi, I'm …" |
| About | `about` | TimeLine | "About Me" + 6-entry timeline (one year each) |
| Skills | `tech` | Technologies | "Skills" |
| Projects | `projects` | Projects | "Projects" |
| Achievements | `achievements` | Acomplishments (sic) | "Achievements" |
| Contact | `contact` | Footer (`FooterWrapper`) | "Contact Me" |

Renaming an id breaks the nav. Heading order is one h1 (Hero), h2 per section, h3 inside; components whose styled tag differs use `as="h3"`.

**Item-count limits.**
- `TimeLineData`: any count, one year per entry, newest first. It renders as a vertical list (`YearList`, max 720px) with a bulleted `items` array per year. Type sizes step off `SectionText`: year 28/24/20px, items 20/18/16px (desktop/md/sm).
- `Achievements`: any count; tiles share the row equally (`auto-fit`), one per row on phones. Each tile can carry an `image` (+ `alt`) shown at 3:2 above the title; clicking the tile opens the image in the `Lightbox` popup. Tiles have no external links. Certificate images live in `public/images/achievements/`, all rendered at 1500x1000 so the tiles match.
- `projects`: any count. One wide card per row: screenshot on the left at half the card width (2:1), title, description and stack on the right (`CardBody`). From `md` down the card stacks, image on top.

**Hero.** `index.js` renders `<Section grid>` with Hero (text) and `HeroVisual` (position: relative) holding `BgAnimation` and `ProfilePhoto` (`public/images/profile.jpg`), which is centred on the animation with `translate(-50%, -50%)`. The grid's children are forced to `width: 100%` (Section `grid` prop) because the `width: max-content` h1 otherwise pushes the text column under the animation. At `md` and below the grid stacks to one column.

The source carries no comments (removed on request on 2026-11-13); don't add new ones.

**Header.** No logo or name: the nav links are centred on the page (grid `1fr auto 1fr`) with the social icons on the right. From `lg` down the nav and the icons each get a centred row.

**Projects.** Card buttons: `visit` → "Live", `source` → "Code"; each renders only when set, so missing links are `null`, never `"#"`. All external links use `target="_blank" rel="noopener noreferrer"`. Images live in `public/images/projects/` (path per project's `image` field), and clicking one opens it in the `Lightbox` popup (`src/components/Lightbox/`: portal to `body`, closes on overlay click, the × button or Escape, locks page scroll while open; the image scales to the largest size the viewport allows, up to 1800px wide, with a light SVG sharpen filter); `Img` crops to 2:1 with `object-fit: cover` (matches the ~2.03:1 screenshots), and alt text comes from each project's `alt` field.

**Social icons** (header and footer) read `GithubUrl`, `LinkedInUrl`, `OtherUrl` (Facebook icon); `null` hides an icon. The phone column in the footer hides when `MobileNumber` is `null`.

**Styling is styled-components only.**
- `src/themes/default.js`: fonts, colors, breakpoints (all `max-width`). `html { font-size: 62.5% }`, so `1rem` = 10px.
- Fonts (Google Fonts, loaded in `_document.js`): `fonts.title` Schibsted Grotesk for the h1, `fonts.sub` Red Hat Display for h2–h6, `fonts.main` Montserrat for body text and buttons.
- Spacing scale (desktop / md / sm): 64 / 48 / 40px between sections (`Section` padding-top; the hero grid keeps its own); divider to title and title to text 24 / 20 / 16px; content blocks (`GridContainer`, `List`, `YearList`, `Boxes`, `LinkList`) add `margin-top` 16 / 12 / 8px, so title or intro to content is 40 / 32 / 24px. Every section, footer included, opens with a `SectionDivider` and none ends with one.
- `src/styles/GlobalComponents/index.js`: shared primitives (`Section`, `SectionTitle`, `SectionText`, `SectionDivider`, `ButtonBack`/`LinkButtonFront`). Reuse these.
- Per-component styles in sibling `<Name>Styles.js`.
- Never put a `//` comment inside styled CSS: one containing an apostrophe made stylis drop every rule after it, silently.
- `_document.js` does the styled-components SSR (`ServerStyleSheet`), paired with the babel plugin in `.babelrc`; keep both.

**No runtime data.** The page is fully static; there are no API calls.

## Portfolio rules (apply to every task)

TEMPLATE IS FINAL
- Do not change layout, styled-components styles, src/themes/default.js (colors, fonts, breakpoints), animations, or component structure.
- Only change: text content, data arrays in constants, images in public/, link targets, alt text, page <title>/meta, and the number of items in existing arrays.
- If something is missing (a nav link, a section id), reuse the existing component and styled elements exactly. Add no new styled components unless a responsive bug forces it, and keep that fix minimal.
- No new npm packages. Icons only from what the template already imports (react-icons, etc.).
- Remove all of Tanveer's content: name, links, resume PDF, images, GitHub API calls, firebase project id references, and the README text about him.

NO UI SLOP
- No added gradients, glow effects, emoji headings, typing animations, or decoration.
- No invented numbers ("50+ projects", follower counts, skill percentages). Achievements are real certificates, awards, and seminars.
- No stock or placeholder images left in the final build.

HUMAN-SOUNDING TEXT
- First person, plain words, mixed sentence lengths. It should sound like a real student talking about their own work.
- Banned: passionate, driven, dedicated, leverage, seamless, cutting-edge, innovative, robust, dynamic, journey, "dive into", "crafting digital experiences", "turning ideas into reality", "results-driven", "highly motivated", "fast-paced world".
- No triple-adjective lists, no em-dash chains, no slogan-style closing lines.
- Specific over impressive: say what was built, with what tool, for whom, and what was hard.
- Don't start every sentence with "I".

PLACEHOLDERS
- Until real info is provided, use [BRACKETED] placeholders. Keep every placeholder, with its file and line, in PORTFOLIO_NOTES.md.
