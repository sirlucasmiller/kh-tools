import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import khIcon from '../../assets/kh_icon.png'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import LanguageSelector from './LanguageSelector'

const GITHUB_REPO = 'https://github.com/sirlucasmiller/kh-tools'
const ISSUE_URL = `${GITHUB_REPO}/issues/new?template=app-submission.yml`

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const homePath = useLocalizedPath('/')
  const aboutPath = useLocalizedPath('/about')

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header" id="site-header">
      <div className="container header__inner">
        <Link to={homePath} className="header__logo" onClick={closeMenu}>
          <img
            src={khIcon}
            alt=""
            className="header__logo-icon"
            width="28"
            height="28"
          />
          KH Tools
        </Link>

        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="menu-toggle"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <Link
            to={homePath}
            className="header__link"
            onClick={closeMenu}
            id="nav-home"
          >
            {t('header.home')}
          </Link>
          <Link
            to={aboutPath}
            className="header__link"
            onClick={closeMenu}
            id="nav-about"
          >
            {t('header.about')}
          </Link>
          <a
            href={ISSUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header__link header__link--accent"
            onClick={closeMenu}
            id="nav-submit"
          >
            {t('header.submitApp')} ↗
          </a>
          <LanguageSelector onChange={closeMenu} />
        </nav>
      </div>
    </header>
  )
}
