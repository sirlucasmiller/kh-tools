import { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
  useParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import {
  DEFAULT_LANGUAGE,
  getLanguageMeta,
  getPreferredLanguage,
  normalizeLanguage,
  toLocalizedPath,
} from './i18n/languages'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/$/, '')

function LanguageRedirect() {
  return <Navigate to={`/${getPreferredLanguage()}`} replace />
}

function LanguageRoute() {
  const { i18n } = useTranslation()
  const { lng } = useParams()
  const location = useLocation()
  const language = normalizeLanguage(lng)

  useEffect(() => {
    if (!language) {
      return
    }

    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }

    document.documentElement.lang = getLanguageMeta(language).htmlLang
  }, [i18n, language])

  if (!language) {
    return (
      <Navigate
        to={`${toLocalizedPath(location.pathname, DEFAULT_LANGUAGE)}${location.search}${location.hash}`}
        replace
      />
    )
  }

  if (lng !== language) {
    return (
      <Navigate
        to={`${toLocalizedPath(location.pathname, language)}${location.search}${location.hash}`}
        replace
      />
    )
  }

  return <Layout />
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lng" element={<LanguageRoute />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<LanguageRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}
