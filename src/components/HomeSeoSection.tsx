import { FC } from 'react'
import homeSeo from '../seo/homeSeo.json'

export const HomeSeoSection: FC = () => {
  return (
    <section className="home-seo" aria-labelledby="home-seo-title">
      <h1 id="home-seo-title">{homeSeo.h1}</h1>
      {homeSeo.intro.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <h2>How to use</h2>
      <ol>
        {homeSeo.howToSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <h2>Use cases</h2>
      <ul>
        {homeSeo.useCases.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <section className="faq" aria-labelledby="home-faq-title">
        <h2 id="home-faq-title">FAQ</h2>
        <dl>
          {homeSeo.faq.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  )
}