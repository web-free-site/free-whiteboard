import fs from 'node:fs'
import path from 'node:path'

const REF = 'whiteboard'
const HUB = `https://web-free.site/?ref=${REF}`

const CLOUDFLARE =
  '<!-- Cloudflare Web Analytics --><script defer src=\'https://static.cloudflareinsights.com/beacon.min.js\' data-cf-beacon=\'{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}\'></script><!-- End Cloudflare Web Analytics -->'

const link = (host, label) =>
  `<li><a href="https://${host}.web-free.site/?ref=${REF}">${label}</a></li>`

const moreToolsHtml = `<aside id="wf-more-tools" class="wf-more-tools" aria-labelledby="wf-mt-title">
  <style>
    .wf-more-tools{box-sizing:border-box;width:100%;margin:2.5rem 0 0;padding:1.5rem 1rem 2rem;border-top:1px solid rgba(0,0,0,.12);background:rgba(248,249,251,.97);color:#1a1a1a;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.5}
    .wf-more-tools *{box-sizing:border-box}
    .wf-more-tools h2{margin:0 0 .35rem;font-size:1.15rem;font-weight:700}
    .wf-more-tools .wf-mt-lead{margin:0 0 1rem;color:#333}
    .wf-more-tools .wf-mt-lead a{color:#0b57d0}
    .wf-more-tools .wf-mt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem 1.25rem}
    .wf-more-tools h3{margin:0 0 .4rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:#444}
    .wf-more-tools ul{margin:0;padding:0;list-style:none}
    .wf-more-tools li{margin:0 0 .25rem}
    .wf-more-tools a{color:#0b57d0;text-decoration:underline}
    .wf-more-tools a:hover{text-decoration:none}
    @media (prefers-color-scheme:dark){
      .wf-more-tools{background:rgba(22,24,28,.96);color:#f2f2f2;border-top-color:rgba(255,255,255,.14)}
      .wf-more-tools .wf-mt-lead,.wf-more-tools h3{color:#c8c8c8}
      .wf-more-tools a{color:#8ab4f8}
    }
  </style>
  <h2 id="wf-mt-title">More free tools</h2>
  <p class="wf-mt-lead">These utilities run in your browser. Browse the full list on <a href="${HUB}">web-free.site</a>.</p>
  <div class="wf-mt-grid">
    <div class="wf-mt-cat wf-mt-guides"><h3>Guides on this site</h3><ul>
      <li><a href="/online-whiteboard-no-sign-up">Online whiteboard with no sign-up</a></li>
      <li><a href="/how-to-export-a-whiteboard-as-png">How to export a whiteboard as PNG</a></li>
      <li><a href="/whiteboard-for-teaching">Whiteboard for teaching</a></li>
    </ul></div>
    <div class="wf-mt-cat"><h3>Documents &amp; writing</h3><ul>
      ${link('free-word-counter', 'Free Word Counter')}
      ${link('free-pdf-converter', 'Free PDF Converter')}
      ${link('free-cv-maker', 'Free CV Maker')}
      ${link('free-invoice-generator', 'Free Invoice Generator')}
      ${link('free-typing-test', 'Free Typing Test')}
      ${link('free-signature-generator', 'Free Signature Generator')}
      ${link('free-email-signature-generator', 'Free Email Signature Generator')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Images &amp; codes</h3><ul>
      ${link('free-qr-code-creator', 'Free QR Code Creator')}
      ${link('free-image-resizer', 'Free Image Resizer')}
      ${link('free-image-to-text', 'Free Image to Text')}
      ${link('free-background-remover', 'Free Background Remover')}
      ${link('free-image-compressor', 'Free Image Compressor')}
      ${link('free-heic-to-jpg', 'Free HEIC to JPG Converter')}
      ${link('free-image-upscaler', 'Free Image Upscaler')}
      ${link('free-passport-photo-maker', 'Free Passport Photo Maker')}
      ${link('free-png-to-svg', 'Free PNG to SVG Converter')}
      ${link('free-meme-generator', 'Free Meme Generator')}
      ${link('free-color-picker', 'Free Color Picker')}
      ${link('free-gif-maker', 'Free GIF Maker')}
      ${link('free-photo-editor', 'Free Photo Editor')}
      ${link('free-logo-maker', 'Free Logo Maker')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Calculators &amp; currency</h3><ul>
      ${link('free-online-calculator', 'Free Online Calculator')}
      ${link('free-currency-converter', 'Free Currency Converter')}
      ${link('free-unit-converter', 'Free Unit Converter')}
      ${link('free-loan-calculator', 'Free Loan Calculator')}
      ${link('free-age-calculator', 'Free Age Calculator')}
      ${link('free-percentage-calculator', 'Free Percentage Calculator')}
      ${link('free-bmi-calculator', 'Free BMI Calculator')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Text &amp; SEO</h3><ul>
      ${link('free-ai-humanizer', 'Free AI Humanizer')}
      ${link('free-seo-generator', 'Free SEO Generator')}
      ${link('free-backlink-generator', 'Free Backlink Generator')}
      ${link('free-json-formatter', 'Free JSON Formatter')}
      ${link('free-text-to-speech', 'Free Text to Speech')}
      ${link('free-speech-to-text', 'Free Speech to Text')}
      ${link('free-diff-checker', 'Free Diff Checker')}
      ${link('free-citation-generator', 'Free Citation Generator')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Audio &amp; video</h3><ul>
      ${link('free-video-to-mp3', 'Free Video to MP3 Converter')}
      ${link('free-mp3-cutter', 'Free MP3 Cutter')}
      ${link('free-screen-recorder', 'Free Screen Recorder')}
      ${link('free-video-compressor', 'Free Video Compressor')}
      ${link('free-video-to-gif', 'Free Video to GIF Converter')}
      ${link('free-audio-converter', 'Free Audio Converter')}
      ${link('free-video-converter', 'Free Video Converter')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Files</h3><ul>
      ${link('free-zip-tool', 'Free ZIP Tool')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Test data</h3><ul>
      ${link('free-fake-address-generator', 'Free Fake Address Generator')}
      ${link('free-fake-name-generator', 'Free Fake Name Generator')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Security &amp; passwords</h3><ul>
      ${link('free-password-generator', 'Free Password Generator')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Time</h3><ul>
      ${link('free-time-zone-converter', 'Free Time Zone Converter')}
    </ul></div>
    <div class="wf-mt-cat"><h3>Drawing</h3><ul><li><strong>Free Whiteboard</strong></li></ul></div>
    <div class="wf-mt-cat"><h3>Random &amp; pickers</h3><ul>
      ${link('free-spin-wheel', 'Free Spin Wheel')}
    </ul></div>
  </div>
</aside>

${CLOUDFLARE}`

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (ent.name.endsWith('.html')) out.push(p)
  }
  return out
}

const dist = path.resolve('dist')
if (!fs.existsSync(dist)) {
  console.error('dist/ not found — run vite build first')
  process.exit(1)
}

let touched = 0
for (const file of walk(dist)) {
  let html = fs.readFileSync(file, 'utf8')
  if (html.includes('id="wf-more-tools"')) continue
  if (!html.includes('</body>')) continue
  html = html.replace('</body>', `\n${moreToolsHtml}\n</body>`)
  fs.writeFileSync(file, html)
  touched++
}

console.log(`Injected wf-more-tools into ${touched} HTML file(s)`)