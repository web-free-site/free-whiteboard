import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AdSlot } from '../components/ads/AdSlot'
import { SeoPage } from '../seo/pages'

interface Props {
  page: SeoPage
}

export const GuidePage: FC<Props> = ({ page }) => {
  return (
    <article className="guide-page">
      <h1>{page.h1}</h1>
      {page.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {page.faq.length > 0 ? (
        <section className="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">FAQ</h2>
          <dl>
            {page.faq.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
      <p>
        <Link to="/" className="btn-primary">
          Open the whiteboard
        </Link>
      </p>
      <AdSlot slot="betweenToolContent728x90" className="ad-content" />
      <AdSlot slot="content300x250" className="ad-content" />
    </article>
  )
}