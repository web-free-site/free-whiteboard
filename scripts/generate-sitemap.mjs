import fs from 'node:fs'
import path from 'node:path'

const HOST = 'https://free-whiteboard.web-free.site'
const paths = [
  '/',
  '/online-whiteboard-no-sign-up',
  '/how-to-export-a-whiteboard-as-png',
  '/whiteboard-for-teaching',
  '/privacy',
  '/terms',
  '/about',
  '/contact',
]

const urls = paths
  .map(
    (p) => `  <url>
    <loc>${HOST}${p === '/' ? '/' : p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.join('dist', 'sitemap.xml'), xml)
console.log('Wrote sitemap.xml')