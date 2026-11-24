import fs from 'node:fs'
import path from 'node:path'
import { homeFaqJsonLd, homeSeoHtml, homeWebAppJsonLd } from './home-seo-html.mjs'

const HOST = 'https://free-whiteboard.web-free.site'
const dist = path.resolve('dist')
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const homeDescription =
  'Free online whiteboard in your browser. Draw with Excalidraw tools, auto-save locally, export PNG or SVG. No account required.'

const pages = [
  {
    path: '/',
    title: 'Free Whiteboard — online drawing board | No sign-up',
    description: homeDescription,
    h1: null,
    snippet: null,
    home: true,
  },
  {
    path: '/online-whiteboard-no-sign-up',
    title: 'Online whiteboard with no sign-up — draw in your browser',
    description:
      'Use a free online whiteboard with no account. Sketch, add shapes, and export PNG locally on any device.',
    h1: 'Online whiteboard with no sign-up',
    snippet:
      '<p>Open Free Whiteboard in one tap, draw with pen and shapes, and keep your file on your device. No server storage, no live rooms.</p>',
  },
  {
    path: '/how-to-export-a-whiteboard-as-png',
    title: 'How to export a whiteboard as PNG — quick guide',
    description:
      'Export your drawing board to PNG or SVG from the browser. Step-by-step for teachers and remote teams.',
    h1: 'How to export a whiteboard as PNG',
    snippet:
      '<p>Use the export menu in the editor to download PNG or SVG. Your scene never leaves the browser unless you save the file.</p>',
  },
  {
    path: '/whiteboard-for-teaching',
    title: 'Whiteboard for teaching — free browser canvas',
    description:
      'A lightweight teaching whiteboard for lessons and tutoring. Pan, zoom, undo, and export slides as images.',
    h1: 'Whiteboard for teaching',
    snippet:
      '<p>Project diagrams, highlight steps, and save boards between classes with localStorage. Works on classroom laptops and tablets.</p>',
  },
  {
    path: '/privacy',
    title: 'Privacy — Free Whiteboard',
    description: 'How Free Whiteboard handles drawings, localStorage, and ads.',
    h1: 'Privacy policy',
    snippet:
      '<p>Drawings stay in your browser unless you export them. We do not run collaboration servers or user accounts.</p>',
  },
  {
    path: '/terms',
    title: 'Terms of use — Free Whiteboard',
    description: 'Terms for using the free browser whiteboard.',
    h1: 'Terms of use',
    snippet: '<p>Provided as-is. You are responsible for content you create and share.</p>',
  },
  {
    path: '/about',
    title: 'About — Free Whiteboard',
    description: 'About the Excalidraw-based free drawing board on web-free.site.',
    h1: 'About Free Whiteboard',
    snippet:
      '<p>Built with the MIT Excalidraw package for local sketching. Part of the web-free.site tool family.</p>',
  },
  {
    path: '/contact',
    title: 'Contact — Free Whiteboard',
    description: 'Contact for Free Whiteboard support.',
    h1: 'Contact',
    snippet: '<p>Email gentil@quevvy.com for support or corrections.</p>',
  },
]

function escapeMeta(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function jsonLdScript(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

function stripJsonLdType(html, type) {
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>\s*/gi,
    (block, body) => {
      try {
        const data = JSON.parse(body)
        if (data['@type'] === type) return ''
      } catch {
        if (body.includes(`"@type": "${type}"`) || body.includes(`"@type":"${type}"`)) return ''
      }
      return block
    },
  )
}

function injectHomeJsonLd(html) {
  html = stripJsonLdType(html, 'FAQPage')
  html = stripJsonLdType(html, 'WebApplication')
  const webApp = jsonLdScript(homeWebAppJsonLd())
  const faq = jsonLdScript(homeFaqJsonLd())
  return html.replace(
    /<meta name="theme-color"[^>]*>/,
    (tag) => `${tag}\n    ${webApp}\n    ${faq}`,
  )
}

function buildPage(page) {
  const url = HOST + (page.path === '/' ? '/' : page.path)
  let html = baseHtml
  html = html.replace(/<html lang="[^"]*"/, '<html lang="en"')
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeMeta(page.title)}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeMeta(page.description)}" />`,
  )
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`)
  } else {
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
  }
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeMeta(page.title)}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeMeta(page.description)}" />`,
  )
  if (page.home) {
    html = injectHomeJsonLd(html)
    const seoBlock = homeSeoHtml()
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <noscript>${seoBlock}</noscript>`,
    )
  } else {
    const seoBlock = `<section id="seo-prerender" class="seo-prerender"><h1>${page.h1}</h1>${page.snippet}</section>`
    html = html.replace('<div id="root"></div>', `${seoBlock}\n    <div id="root"></div>`)
  }
  if (!html.includes('/wf-ads.js')) {
    html = html.replace('</body>', '    <script src="/wf-ads.js" defer></script>\n  </body>')
  }
  return html
}

for (const page of pages) {
  if (page.path === '/') {
    fs.writeFileSync(path.join(dist, 'index.html'), buildPage(page))
    continue
  }
  const dir = path.join(dist, page.path.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(page))
}

console.log('Prerendered', pages.length, 'route shells from Vite index.html')