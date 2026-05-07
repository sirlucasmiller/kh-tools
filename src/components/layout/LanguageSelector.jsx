import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  LANGUAGE_OPTIONS,
  stripLanguageFromPathname,
  toLocalizedPath,
} from '../../i18n/languages'
import { useCurrentLanguage } from '../../i18n/useLocalizedPath'

export default function LanguageSelector({ onChange }) {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const currentLanguage = useCurrentLanguage()

  const handleChange = (event) => {
    const nextLanguage = event.target.value
    const currentPath = stripLanguageFromPathname(location.pathname)
    const nextPath = toLocalizedPath(currentPath, nextLanguage)

    onChange?.()
    navigate(`${nextPath}${location.search}${location.hash}`)
  }

  return (
    <label className="language-selector">
      <span className="sr-only">{t('language.select')}</span>
      <select
        className="language-selector__select"
        value={currentLanguage}
        onChange={handleChange}
        aria-label={t('language.select')}
      >
        {LANGUAGE_OPTIONS.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  )
}
