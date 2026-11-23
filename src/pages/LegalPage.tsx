import { FC } from 'react'
import { SITE } from '../site'
import { AdSlot } from '../components/ads/AdSlot'

type Kind = 'privacy' | 'terms' | 'about' | 'contact'

const copy: Record<Kind, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy',
    body: [
      'Free Whiteboard stores your last scene in browser localStorage only. We do not operate a user database or upload your drawings to our servers.',
      'There is no live collaboration backend. Exported PNG or SVG files go wherever you save them on your device.',
      'When enabled, Adsterra ad codes may set cookies; see their policy when ads are active.',
      `Contact: ${SITE.contactEmail} for privacy questions.`,
    ],
  },
  terms: {
    title: 'Terms of use',
    body: [
      'This tool is provided as-is without warranty. You are responsible for content you create and share.',
      'Do not use the site for unlawful content. The operator may update these terms.',
    ],
  },
  about: {
    title: 'About',
    body: [
      'Free Whiteboard is a browser-based sketch pad for teachers, students, and teams who need a quick diagram without signing in.',
      'The editor embeds the open-source MIT Excalidraw package. We do not enable Firebase, rooms, or other collaboration services from the upstream project.',
      `Part of the web-free.site family — ${SITE.hubUrl}`,
      `Operator: Gentil M., Kigali, Rwanda — ${SITE.gentilUrl}`,
    ],
  },
  contact: {
    title: 'Contact',
    body: [`Email ${SITE.contactEmail} for support, partnerships, or corrections.`],
  },
}

interface Props {
  kind: Kind
}

export const LegalPage: FC<Props> = ({ kind }) => {
  const c = copy[kind]
  return (
    <article className="legal-page">
      <h1>{c.title}</h1>
      {c.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <AdSlot slot="content300x250" className="ad-content" />
      <AdSlot slot="content468x60" className="ad-content" />
    </article>
  )
}