import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { GuidePage } from './pages/GuidePage'
import { RouteMeta } from './seo/Helmet'
import { SEO_PAGES } from './seo/pages'

const guidePaths = [
  '/online-whiteboard-no-sign-up',
  '/how-to-export-a-whiteboard-as-png',
  '/whiteboard-for-teaching',
]

function App() {
  const location = useLocation()
  const editorMode = location.pathname === '/'

  return (
    <Layout editorMode={editorMode}>
      <RouteMeta />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {guidePaths.map((path) => {
          const page = SEO_PAGES.find((p) => p.path === path)
          if (!page) return null
          return <Route key={path} path={path} element={<GuidePage page={page} />} />
        })}
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/about" element={<LegalPage kind="about" />} />
        <Route path="/contact" element={<LegalPage kind="contact" />} />
        <Route path="*" element={<GuidePage page={SEO_PAGES[0]} />} />
      </Routes>
    </Layout>
  )
}

export default App