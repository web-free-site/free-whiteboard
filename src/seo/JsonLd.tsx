import { FC, useEffect } from 'react'
import { SITE } from '../site'
import { SeoPage, canonicalFor } from './pages'

const SCRIPT_ID = 'wf-jsonld'

function buildJsonLd(page: SeoPage): object[] {
  const url = canonicalFor(page.path)
  const graphs: object[] = []

  if (page.path === '/' || page.kind === 'home') {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE.name,
      url,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: page.description,
      browserRequirements: 'Requires JavaScript',
      creator: { '@type': 'Organization', name: 'web-free.site' },
    })
  }

  if (page.faq.length > 0) {
    graphs.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }

  return graphs
}

export const PageJsonLd: FC<{ page: SeoPage }> = ({ page }) => {
  useEffect(() => {
    const data = buildJsonLd(page)
    let el = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = SCRIPT_ID
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data.length === 1 ? data[0] : data)
  }, [page])

  return null
}