import { FC, ReactNode, createContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageForPath, canonicalFor } from './pages'
import { PageJsonLd } from './JsonLd'

const Ctx = createContext({})

export const HelmetProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Ctx.Provider value={{}}>{children}</Ctx.Provider>
)

export function usePageMeta() {
  const location = useLocation()
  const page = pageForPath(location.pathname)

  useEffect(() => {
    document.title = page.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', page.description)
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = page.description
      document.head.appendChild(m)
    }
  }, [location.pathname, page.description, page.title])

  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = canonicalFor(page.path)
      document.head.appendChild(link)
    } else {
      canonical.href = canonicalFor(page.path)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', page.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', page.description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalFor(page.path))

    document.documentElement.lang = 'en'
  }, [location.pathname, page.path, page.description, page.title])
}

export const RouteMeta: FC = () => {
  const location = useLocation()
  const page = pageForPath(location.pathname)
  usePageMeta()
  return <PageJsonLd page={page} />
}