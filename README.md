# James Adrian Dysangco | Portfolio

My personal portfolio: a one-page site with who I am, the projects I've built, my skills, my certificates, and how to reach me.

**Live Demo:** [LIVE SITE URL](https://example.com)

## Tech stack

- Next.js 10 (pages router), exported as a static site
- React 17
- styled-components
- react-icons
- Google Fonts: Schibsted Grotesk, Red Hat Display, Montserrat

## Features

- Sections: Home, Projects, Skills, About Me (with a timeline), Achievements, Contact
- Project screenshots and certificates open in a full-screen popup
- Responsive layout for desktop, tablet and phone
- Fully static: no backend, no API calls
- Contact links for Gmail, email, phone, GitHub, LinkedIn and Facebook

## Run locally

Needs Node 17 or newer.

```bash
npm install
npm run dev       # http://localhost:3000
```

`npm run build` builds and exports the static site to `out/`.

On Windows, the scripts use POSIX shell syntax, so run them through Git Bash:

```bash
npm_config_script_shell="C:\Program Files\Git\bin\bash.exe" npm run dev
```

## Credit

Design inspired by Tanveer Khan's portfolio template.
