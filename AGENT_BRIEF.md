# Cursor agent brief — free-whiteboard

Target: https://free-whiteboard.web-free.site
Repo name (wrangler `name`): `free-whiteboard`
English name: "Free Whiteboard". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **local online whiteboard**: draw, add shapes and text, pan/zoom, undo, and export PNG or SVG. Collaboration / live rooms are **out of scope** (no server). Files stay on the device (download + optional localStorage).

## Recommended base (use this)

- Repo: https://github.com/OXOYO/XBoard
- License: MIT (keep `LICENSE.md`, credit OXOYO / XBoard in the footer and on `/about`)
- Stars: 405
- Last commit: 14 May 2025, 09:28 Africa/Kigali — `f6e9ed336e` on `master`
- Official demo: `http://oxoyo.co/XBoard/`
- Stack: a complete Vue CLI whiteboard (`npm run build` emits static files): canvas drawing, no declared backend in `package.json` (Vue, vuex, @antv/g6, html2canvas, etc.). English the UI. If the Vue 2 toolchain cannot produce a clean static export, use the backup below rather than fighting a broken build.
- Cloudflare: yes — static assets / Workers with assets. You must add prerendered HTML for every public page (no bare SPA fallback).
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE.md` is a real MIT file (Copyright (c) 2019-present, OXOYO). Dependencies are frontend-only; no Firebase or paid API in the declared list.
- Why this one: MIT with a real license file, a complete working website (not only an SDK), and 405 stars.

## Backup (official MIT Excalidraw package; do not fork the monorepo)

- Package: `@excalidraw/excalidraw` from https://github.com/excalidraw/excalidraw
- License: MIT (keep the license text, credit Excalidraw)
- Stars: 136172
- Last commit: 21 Nov 2026, 20:23 Africa/Kigali — `9c2e462ec2` on `master`
- Official demo: `https://excalidraw.com`
- The full Excalidraw monorepo includes collaboration infrastructure. **Do not import Firebase, rooms, or the official backend.** Scaffold a small Vite + React static shell that embeds the MIT `@excalidraw/excalidraw` package, with local-only save and PNG/SVG export. Prerender marketing/how-to/legal HTML around the editor. This backup is preferred if XBoard's Vue 2 build is impractical.

`quickdrawjs/quickdraw` (MIT, Copyright (c) 2026 Quickdraw contributors, 625 stars, last commit 21 Nov 2026, 14:40 Africa/Kigali, `b832c873ad`) is an SDK monorepo, not a product site. You may use `@quickdrawjs/react` the same way as the Excalidraw package, not as an imported server.

## Do not use these

- tldraw (its current license is not MIT/Apache/BSD/ISC).
- Whiteboards that require a WebRTC/Matrix/Firebase server, or any "multiplayer room" backend.
- Desktop-only or Electron boards as the shipped app (XBoard must stay a static website).

## What to build on top of OXOYO/XBoard (or the Excalidraw backup)

1. Import the chosen base into this repo, keep the MIT license, and credit the upstream. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free Whiteboard". English primary. No FR/SW translations of the site. The home tool is a drawing board with pen, shapes or text as available, undo, and export to PNG and (if already supported) SVG. No sign-in, no live collaboration, no share-room links that need a server.
3. Keep everything 100% in the browser. No accounts, no paid APIs, no API keys. Optional localStorage is fine.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not cover the canvas or break drawing/export.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-whiteboard.web-free.site`; English how-to pages, at least `/online-whiteboard-no-sign-up`, `/how-to-export-a-whiteboard-as-png`, and `/whiteboard-for-teaching` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-whiteboard.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=whiteboard`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the nine other sites in this batch (50 tools in total). Show **Free Whiteboard** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=whiteboard`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=whiteboard`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=whiteboard`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=whiteboard`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=whiteboard`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=whiteboard`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=whiteboard`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=whiteboard`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=whiteboard`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=whiteboard`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=whiteboard`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=whiteboard`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=whiteboard`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=whiteboard`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=whiteboard`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=whiteboard`), Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=whiteboard`), Free Meme Generator (`https://free-meme-generator.web-free.site/?ref=whiteboard`), Free Color Picker (`https://free-color-picker.web-free.site/?ref=whiteboard`), Free GIF Maker (`https://free-gif-maker.web-free.site/?ref=whiteboard`), Free Photo Editor (`https://free-photo-editor.web-free.site/?ref=whiteboard`), Free Logo Maker (`https://free-logo-maker.web-free.site/?ref=whiteboard`).
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/en/?ref=whiteboard`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=whiteboard`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=whiteboard`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=whiteboard`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=whiteboard`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=whiteboard`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=whiteboard`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=whiteboard`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=whiteboard`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=whiteboard`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=whiteboard`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=whiteboard`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=whiteboard`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=whiteboard`), Free Citation Generator (`https://free-citation-generator.web-free.site/?ref=whiteboard`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=whiteboard`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=whiteboard`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=whiteboard`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=whiteboard`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=whiteboard`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=whiteboard`), Free Video Converter (`https://free-video-converter.web-free.site/?ref=whiteboard`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=whiteboard`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=whiteboard`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=whiteboard`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=whiteboard`).
     - **Time:** Free Time Zone Converter (`https://free-time-zone-converter.web-free.site/?ref=whiteboard`).
     - **Drawing:** **Free Whiteboard**.
     - **Random & pickers:** Free Spin Wheel (`https://free-spin-wheel.web-free.site/?ref=whiteboard`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-whiteboard"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-whiteboard.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally, draw a stroke and a shape or text, undo, export a PNG, open the file, check mobile at 390px, confirm no collaboration server is called, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes are not ready yet (sites are not live). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23bplaceholder`). After a browser agent writes real keys to `adsterra-codes.md`, a later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-whiteboard.web-free.site — site ID 6222779
Popunder b0d8cf2ac3c5528d1d6046f336c288df
Native Banner 6064b99ab2546c27378da9b93d81014d
Smartlink ca5b51556786095f13561d605a24e0a4
Social Bar ee17411d15182adc2693df94733f9245
468x60 47d451e06e429e063dfa0d9259c17e40
160x300 e6b8e3ff0c962d574d6ac0dd2ab8d843
320x50 31fb39248b80cb2a86bec6c8a02a38e1
300x250 336592cfd168ef5d695bda4c3957a621
160x600 fbf30823d87e65ab4b8a66f9e7a2ca14
728x90 cc0e2ffb47947e71fa493512e7d886c3
