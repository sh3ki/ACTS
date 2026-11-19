# ACTS Computer College

A frontend-only, six-page React website for ACTS Computer College in Santa Cruz, Laguna.

## Run locally

Requires Node.js 20.19+.

```bash
npm install
npm run dev
```

For a production build, run `npm run build`. Serve the generated `dist/` folder with SPA fallback to `index.html` so direct visits to each route work.

## Content and assets

Institutional information lives in `src/data/`. The school logo is `logo.webp`. Optimized editorial photographs in `public/images/` are sourced from Unsplash and **are illustrative, not verified images of ACTS, its students, or its campus**. Replace these with approved school photographs before publishing. The custom contact form validates input locally, opens an email draft to the official school address, and offers a copy fallback; it does not transmit or store messages.

The original Unsplash photo IDs used in the editorial set are: `1562774053-701939374585`, `1522661067900-ab829854a57f`, `1522202176988-66273c2fd55f`, `1434030216411-0b793f4b4173`, `1571260899304-425eee4c7efc`, `1531482615713-2afd69097998`, `1552664730-d307ca884978`, `1507842217343-583bb7270b66`, `1541339907198-e08756dedf3f`, and `1497366811353-6870744d04b2`.

Routes: `/`, `/our-story`, `/academics`, `/admissions`, `/campus-life`, and `/contact`.
