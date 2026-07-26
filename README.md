# Real Mohsin

Personal website built with [Gatsby 3](https://www.gatsbyjs.com/), React 17, and styled-components.

## Prerequisites

- **Node.js 20** (see `.nvmrc`)
- npm (bundled with Node)

## Getting started

1. Install and use the correct Node version

   With [nvm](https://github.com/nvm-sh/nvm):

   ```sh
   nvm install
   nvm use
   ```

   Or install Node 20 from [nodejs.org](https://nodejs.org).

2. Install dependencies

   ```sh
   npm install
   ```

   This project uses `legacy-peer-deps` (configured in `.npmrc`) because some Gatsby 3 plugins have outdated peer dependency ranges.

3. Start the development server

   ```sh
   npm run develop
   ```

   The site will be available at [http://localhost:8000](http://localhost:8000).

## Scripts

| Command | Description |
|---|---|
| `npm run develop` | Start the dev server with hot reload |
| `npm start` | Alias for `develop` |
| `npm run build` | Generate a production static build |
| `npm run serve` | Preview the production build locally |
| `npm run clean` | Clear Gatsby cache and build artifacts |

## Production

```sh
npm run build
npm run serve
```

## Project structure

- `content/` — Markdown for jobs, projects, and featured work
- `src/components/` — React components and page sections
- `src/config.js` — Site config (email, social links, colors)
- `gatsby-config.js` — Gatsby plugins and site metadata
