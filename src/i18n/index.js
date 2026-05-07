import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'
import ptBR from './locales/pt-BR/translation.json'
import {
  getLanguageFromPathname,
  getLanguageMeta,
  getPreferredLanguage,
} from './languages'

const resources = {
  en: { translation: en },
  pt: { translation: ptBR },
}

const initialLanguage =
  typeof window === 'undefined'
    ? 'pt'
    : getLanguageFromPathname(window.location.pathname) ?? getPreferredLanguage()

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    interpolation: {
      escapeValue: false,
    },
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = getLanguageMeta(language).htmlLang

  if (typeof window !== 'undefined') {
    window.localStorage?.setItem('i18nextLng', language)
  }
})

export default i18n
