# Free Whiteboard

Browser-based drawing board at [free-whiteboard.web-free.site](https://free-whiteboard.web-free.site/). Built with Vite, React, TypeScript, and the MIT [@excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) package.

- No sign-up; optional `localStorage` save on the device
- PNG / SVG export via Excalidraw
- No live collaboration or Firebase
- Prerendered SEO pages, `sitemap.xml`, Adsterra placeholders in `public/ads.json`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Deploy with Cloudflare Workers (`wrangler.toml`); do not commit `account_id`.

## License

MIT for this site; Excalidraw is MIT — see `LICENSE` and `LICENSE-UPSTREAM`.