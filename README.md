# Dating as a Service — Hugo

This is a Hugo reconstruction of the public website at
`https://daas.slavinrudakov.com/`.

## What is included

- 31 thesis pages and a complete collection index
- Structured thesis data in `data/theses.json`
- Reusable Hugo layouts and partials
- Local fonts, favicon, responsive styling, and JavaScript interactions
- Preloader, thesis filtering, reading progress, source apparatus, and next-page navigation

## Run locally

Install Hugo 0.162.0 or newer, then run:

```sh
hugo server
```

Open `http://localhost:1313/`.

## Production build

```sh
hugo --minify
```

The deployable website is written to `public/`.

The project is hosting-neutral. Before deploying, confirm the target platform
and update `baseURL` in `hugo.toml` if the final domain will not remain
`https://daas.slavinrudakov.com/`.

## Reconstruction note

The content and publicly delivered visual assets were recovered from the live
Framer site. Private Framer project files, editor metadata, and unpublished
server-side source are not part of this project.
