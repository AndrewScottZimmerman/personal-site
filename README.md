# andrewzimmerman.com

A personal website for Andrew Scott Zimmerman (myself). Built with Nuxt 4, statically generated,
and to be deployed to AWS S3 + CloudFront via GitHub Actions.

The site is not yet live.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Nuxt 4 (Vue 3, static generation) |
| Styling | Tailwind CSS |
| Fonts | Source Serif 4, Inter, JetBrains Mono (Google Fonts) |
| Images | Sharp (WebP + JPEG/PNG fallbacks) |
| DNS | Cloudflare |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions + OIDC |
| IaC | Terraform |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, intro, navigation cards |
| `/about` | Background, biography, photography |
| `/projects` | Selected work and case studies |
| `/resume` | Employment history and skills |
| `/connect` | LinkedIn, GitHub, email |
| `/terms` | Terms of use |
| `/privacy` | Privacy policy |

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server at `http://localhost:3000`:

```bash
npm run dev
```

## Image Optimization

Resize, recompress, and generate WebP versions of all images in `public/images/`.
Originals are preserved in `public/images/originals/` and are never overwritten.

```bash
npm run optimize-images
```

## Production

Build and preview locally:

```bash
npm run build && npm run preview
```

Static output for deployment:

```bash
npm run generate
```

## Lighthouse Scores (Production Build)

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 97 | 100 | 100 | 100 |
| `/about` | 100 | 100 | 100 | 100 |
| `/projects` | 99 | 100 | 100 | 100 |
| `/resume` | 100 | 100 | 100 | 100 |
| `/connect` | 95 | 100 | 100 | 100 |

## Project Structure
personal-site/
├── app/
│   ├── assets/css/        # main.css — transitions, scroll-fade, focus styles
│   ├── components/        # Shared UI components
│   ├── data/              # Static content (navigation, home cards, etc.)
│   ├── pages/             # Route pages
│   └── plugins/           # scroll-fade directive
├── docs/                  # Design, decisions, pathway, compliance notes
├── public/
│   └── images/            # Optimized images (WebP + fallbacks)
│       └── originals/     # Pre-optimization originals
├── scripts/
│   └── optimize-images.mjs
├── nuxt.config.ts
└── tailwind.config.js

## Deployment Architecture
GitHub → GitHub Actions → nuxt generate → S3 sync → CloudFront invalidation
↑
Cloudflare DNS (CNAME)

## Documentation

| File | Description |
|---|---|
| `docs/pathway.md` | Build stages and progress |
| `docs/decisions.md` | Architectural decision log |
| `docs/design.md` | Design system reference |
| `docs/content-draft.md` | Content planning |
| `docs/compliance-notes-log.md` | Compliance review log |