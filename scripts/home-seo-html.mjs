import homeSeo from '../src/seo/homeSeo.json' with { type: 'json' }

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function homeSeoHtml() {
  const intro = homeSeo.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')
  const steps = homeSeo.howToSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n')
  const cases = homeSeo.useCases.map((u) => `<li>${escapeHtml(u)}</li>`).join('\n')
  const faq = homeSeo.faq
    .map(
      (item) =>
        `<div><dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.a)}</dd></div>`,
    )
    .join('\n')

  return `<section class="home-seo" aria-labelledby="home-seo-title">
<h1 id="home-seo-title">${escapeHtml(homeSeo.h1)}</h1>
${intro}
<h2>How to use</h2>
<ol>
${steps}
</ol>
<h2>Use cases</h2>
<ul>
${cases}
</ul>
<section class="faq" aria-labelledby="home-faq-title">
<h2 id="home-faq-title">FAQ</h2>
<dl>
${faq}
</dl>
</section>
</section>`
}

export function homeFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeSeo.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function homeWebAppJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Whiteboard',
    url: 'https://free-whiteboard.web-free.site/',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Free online whiteboard with PNG and SVG export. No sign-up.',
    browserRequirements: 'Requires JavaScript',
  }
}