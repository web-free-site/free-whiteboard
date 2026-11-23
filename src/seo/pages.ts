import { SITE } from '../site'

export interface SeoPage {
  path: string
  title: string
  description: string
  h1: string
  keywords: string
  paragraphs: string[]
  faq: { q: string; a: string }[]
  kind?: 'guide' | 'legal' | 'home'
}

export const SEO_PAGES: SeoPage[] = [
  {
    path: '/',
    kind: 'home',
    title: 'Free Whiteboard — online drawing board | No sign-up',
    description:
      'Free online whiteboard in your browser. Draw, add shapes and text, pan and zoom, undo, export PNG or SVG. No account, no live collaboration — files stay on your device.',
    h1: 'Free Whiteboard — draw online with no sign-up',
    keywords: 'free whiteboard, online whiteboard, drawing board, export PNG, no sign up',
    paragraphs: [
      'Free Whiteboard gives you a full-height canvas for sketches, diagrams, and lesson notes without creating an account. Everything runs locally in the browser using the open-source Excalidraw editor.',
      'Use pen, shapes, arrows, and text. Pan and zoom for detail work, undo mistakes, and export PNG or SVG when you are done. Optional localStorage keeps your last board on this device only.',
      'There is no multiplayer room, no Firebase backend, and no upload to our servers — ideal for classrooms, brainstorming, and quick wireframes on slow networks.',
    ],
    faq: [
      {
        q: 'Is this whiteboard really free?',
        a: 'Yes. There is no subscription and no login required.',
      },
      {
        q: 'Where is my drawing stored?',
        a: 'In your browser localStorage until you clear site data or export a file.',
      },
      {
        q: 'Can I collaborate live with others?',
        a: 'No. This build disables live collaboration; export an image and share it instead.',
      },
    ],
  },
  {
    path: '/online-whiteboard-no-sign-up',
    kind: 'guide',
    title: 'Online whiteboard with no sign-up — draw in your browser',
    description:
      'Use a free online whiteboard with no account. Sketch, add shapes, and export PNG locally on any device.',
    h1: 'Online whiteboard with no sign-up',
    keywords: 'online whiteboard no sign up, free drawing board',
    paragraphs: [
      'You do not need an email or password to start drawing. Open Free Whiteboard, pick a tool, and sketch immediately.',
      'Because there is no server account, your board stays on this phone, tablet, or laptop. Use Export to share a PNG with colleagues or students.',
      'For a fresh start, clear the canvas from the editor menu or clear browser data for this site.',
    ],
    faq: [
      {
        q: 'Do I need to install an app?',
        a: 'No — any modern browser is enough.',
      },
      {
        q: 'Will my drawing sync to the cloud?',
        a: 'No cloud sync is provided. Save locally or export a file.',
      },
    ],
  },
  {
    path: '/how-to-export-a-whiteboard-as-png',
    kind: 'guide',
    title: 'How to export a whiteboard as PNG — quick guide',
    description:
      'Export your drawing board to PNG or SVG from the browser. Step-by-step for teachers and remote teams.',
    h1: 'How to export a whiteboard as PNG',
    keywords: 'export whiteboard PNG, download whiteboard SVG',
    paragraphs: [
      'Click the menu in the top-left of the canvas (hamburger icon), choose Export image, and pick PNG for slides or SVG for vector editing.',
      'Turn on background export if you want a solid color behind your lines. Transparent backgrounds are useful for slide decks.',
      'The file downloads to your device — nothing is uploaded to Free Whiteboard servers.',
    ],
    faq: [
      {
        q: 'What is the difference between PNG and SVG?',
        a: 'PNG is a flat image for quick sharing; SVG keeps shapes editable in design tools.',
      },
    ],
  },
  {
    path: '/whiteboard-for-teaching',
    kind: 'guide',
    title: 'Whiteboard for teaching — free browser canvas',
    description:
      'A lightweight teaching whiteboard for lessons and tutoring. Pan, zoom, undo, and export slides as images.',
    h1: 'Whiteboard for teaching',
    keywords: 'teaching whiteboard, classroom drawing online',
    paragraphs: [
      'Teachers use Free Whiteboard to explain steps, label diagrams, and highlight key ideas during live or recorded lessons.',
      'Pinch-zoom on tablets, use undo for quick fixes, and export frames as PNG to drop into slide decks or learning platforms.',
      'Because boards stay on the device, each student can keep their own copy without a shared room server.',
    ],
    faq: [
      {
        q: 'Can students draw at the same time in one room?',
        a: 'This site does not provide live multi-user rooms. Share exported images instead.',
      },
    ],
  },
  {
    path: '/privacy',
    kind: 'legal',
    title: 'Privacy — Free Whiteboard',
    description: 'How Free Whiteboard handles drawings, localStorage, and ads.',
    h1: 'Privacy policy',
    keywords: 'privacy whiteboard',
    paragraphs: [],
    faq: [],
  },
  {
    path: '/terms',
    kind: 'legal',
    title: 'Terms of use — Free Whiteboard',
    description: 'Terms for using the free browser whiteboard.',
    h1: 'Terms of use',
    keywords: 'terms whiteboard',
    paragraphs: [],
    faq: [],
  },
  {
    path: '/about',
    kind: 'legal',
    title: 'About — Free Whiteboard',
    description: 'About the Excalidraw-based free drawing board on web-free.site.',
    h1: 'About Free Whiteboard',
    keywords: 'about whiteboard excalidraw',
    paragraphs: [],
    faq: [],
  },
  {
    path: '/contact',
    kind: 'legal',
    title: 'Contact — Free Whiteboard',
    description: 'Contact for Free Whiteboard support.',
    h1: 'Contact',
    keywords: 'contact whiteboard',
    paragraphs: [],
    faq: [],
  },
]

export function pageForPath(pathname: string): SeoPage {
  return SEO_PAGES.find((p) => p.path === pathname) ?? SEO_PAGES[0]
}

export function canonicalFor(path: string): string {
  const p = path === '/' ? '' : path.replace(/\/$/, '')
  return `${SITE.canonicalHost}${p || '/'}`
}