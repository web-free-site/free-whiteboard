import { FC, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AdSlot, SponsoredSmartlink, useAdScripts } from './ads/AdSlot'
import { SITE } from '../site'

interface Props {
  children: ReactNode
  editorMode?: boolean
}

export const Layout: FC<Props> = ({ children, editorMode }) => {
  const location = useLocation()
  useAdScripts()

  const isHome = location.pathname === '/'
  const showSidebar = !editorMode

  return (
    <div className={`site${editorMode ? ' site--editor' : ''}`}>
      <header className="site-header">
        <AdSlot slot="header728x90" className="ad-header" label="Sponsored" />
        <div className="site-header__inner">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden>
              Wb
            </span>
            <span className="brand__text">
              <strong>{SITE.name}</strong>
              <small>{SITE.tagline}</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            <Link to="/">Draw</Link>
            <Link to="/online-whiteboard-no-sign-up">No sign-up</Link>
            <Link to="/how-to-export-a-whiteboard-as-png">Export PNG</Link>
            <Link to="/whiteboard-for-teaching">Teaching</Link>
          </nav>
        </div>
        {isHome ? <AdSlot slot="homeTop728x90" className="ad-home-top" /> : null}
      </header>

      <div className="site-body">
        <main className="site-main">{children}</main>
        {showSidebar ? (
          <aside className="site-sidebar" aria-label="Sidebar">
            <AdSlot slot="sidebar160x600" className="ad-sidebar" />
          </aside>
        ) : null}
      </div>

      {!editorMode ? (
        <AdSlot slot="mobileSticky320x50" className="ad-mobile-sticky" label="Sponsored" />
      ) : null}

      <footer className="site-footer">
        <p>
          <a href={SITE.hubUrl} rel="noopener noreferrer">
            More free tools on web-free.site
          </a>
          {' · '}
          <a href="https://github.com/excalidraw/excalidraw" rel="noopener noreferrer">
            MIT Excalidraw
          </a>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
          {' · '}
          <Link to="/terms">Terms</Link>
          {' · '}
          <Link to="/about">About</Link>
          {' · '}
          <Link to="/contact">Contact</Link>
          {' · '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </p>
        <p className="muted">Drawings stay on your device unless you export them. No live collaboration.</p>
        <SponsoredSmartlink />
      </footer>
    </div>
  )
}