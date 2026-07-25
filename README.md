# RoQua Documentation

The site published at [docs.roqua.net](https://docs.roqua.net), built with
[Starlight](https://starlight.astro.build/) on [Astro](https://astro.build/).

## Development

```
npm install
npm start          # dev server on http://localhost:3030
npm run build      # static site into dist/
npm run preview    # serve the built site
npm run typecheck  # astro check
```

Pushing to `master` builds the site and rsyncs `dist/` to the web server; see
`.github/workflows/main.yml`.

## Where content lives

All pages are one Astro content collection under `src/content/docs/`:

| Path                        | URLs               | Notes                                     |
| --------------------------- | ------------------ | ----------------------------------------- |
| `docs/`                     | `/docs/**`         | User manual (Dutch)                       |
| `technical/`                | `/technical/**`    | Integration-partner docs (English)        |
| `en/`                       | `/en/**`           | English translations                      |
| `index.mdx`, `status.md`    | `/`, `/status/`    | Homepage and server status                |

Dutch is the root locale, so Dutch pages sit at the top level and their English
counterparts mirror the same path under `en/`. A page with no translation falls back
to the Dutch file, so `/en/technical/…` works without duplicating those files.

Files use the `.mdx` extension throughout, because pages mix Markdown with the
components in `src/components/`. Those must be imported per file — there is no global
component scope:

```mdx
import Screenshot from "@components/Screenshot.astro";

<Screenshot src="/screenshots/overzicht.png" />
```

Available components: `Icon`, `Screenshot`, `ScreenshotRow` and `Snapshot` (renders an
API example as HTTP/cURL/PowerShell tabs from a fixture in `src/data/snapshots/`).

Images referenced by URL live in `public/` (`/screenshots/**`, `/icons/**`, `/img/**`,
`/files/**`). Images placed next to a page and linked relatively are optimised by Astro.

## Sidebar

Top-level sections and their translated labels are set in `astro.config.mjs`; the pages
inside them are discovered automatically. Ordering comes from `sidebar.order` in each
page's frontmatter (lower first, unset sorts last alphabetically). A directory's
position is the lowest `order` of the pages it contains.

Group labels are taken from the title of the directory's `index.mdx`, via
`src/starlightRouteData.ts` — so a new subdirectory only needs an index page to get a
readable label.

## Release notes

`changelog/` holds release notes pushed here by other repositories' CI. They are not
currently published as part of the site.
