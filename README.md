# Sumon Debnath — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS v4. It is a
static, dark-only, single-page site: sections are navigated by anchor links and
there is no client-side router. Contact is email-only (no form or backend).

## Requirements

- **Node.js 22+** (Vite requires `^20.19.0 || >=22.12.0`)
- npm (ships with Node)

## Getting started

```bash
npm install        # install dependencies (use npm ci for a clean, lockfile-exact install)
npm run dev        # start the dev server with hot reload
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

| Script                 | What it does                                              |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload.                     |
| `npm run build`        | Produce the static site in `dist/`.                       |
| `npm run preview`      | Serve the built `dist/` locally.                          |
| `npm run lint`         | Check all JS/JSX with ESLint.                             |
| `npm run format`       | Format all eligible files with Prettier (writes changes). |
| `npm run format:check` | Check formatting without changing files (used in CI).     |

## Editing content

All visible content lives in **`src/data/portfolio.js`** — it is the single
source of truth. Components render whatever is present and hide UI for empty or
missing fields, so you can add or remove entries without touching JSX.

- `profile` — name, role, intro, About paragraphs, and email.
- `sections` — section titles (including "Education & Training").
- `skills` — an array of `{ category, items }` groups.
- `projects` — project cards; optional `repos` is an array of `{ label, href }`.
- `experience` / `education` — timeline entries (`startDate`, `endDate`, `status`, …).
- `problemSolving` — platforms and optional linktree.
- `socialLinks` / `resume` — footer and nav links.

### Filling in TODO URLs

Several links are intentionally left blank rather than guessed. Search the data
file for `TODO` and fill each `''` / `null` from your own sources:

- the `Frontend` repo `href` on the E-Commerce project,
- project `live` / `github` URLs,
- the Codeforces and CodeChef profile URLs and usernames.

Leave any field you don't have a real URL for empty — blank links render
nothing and never break the build.

> SEO metadata in `index.html` (title, descriptions, and the JSON-LD
> `jobTitle` / `knowsAbout`) is maintained **separately** from the data file.
> Update it too whenever the role or skill list changes, and keep the canonical
> URL there in sync with `public/sitemap.xml`.

## Deploying

The site is configured for **Netlify** via `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

Because there is no client-side router, no SPA rewrite rule is needed. Netlify
serves the themed `dist/404.html` (copied from `public/404.html` during build)
for unmatched paths. For another host, set the same build command and publish
directory in that host's dashboard and confirm it serves `404.html` for 404s.

## Continuous integration

`.github/workflows/ci.yml` installs with `npm ci` and runs `npm run lint` and
`npm run build` on every push to `main` and on every pull request.
