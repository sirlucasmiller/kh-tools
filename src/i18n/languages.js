export const DEFAULT_LANGUAGE = 'pt'

export const LANGUAGE_OPTIONS = [
  {
    code: 'pt',
    htmlLang: 'pt-BR',
    label: 'Português',
  },
  {
    code: 'en',
    htmlLang: 'en',
    label: 'English',
  },
]

const LANGUAGE_ALIASES = {
  'pt-br': 'pt',
  pt_br: 'pt',
  pt: 'pt',
  'en-us': 'en',
  'en-gb': 'en',
  en: 'en',
}

export function normalizeLanguage(language) {
  if (!language) {
    return null
  }

  return LANGUAGE_ALIASES[String(language).toLowerCase()] ?? null
}

export function getLanguageMeta(language) {
  const normalizedLanguage = normalizeLanguage(language) ?? DEFAULT_LANGUAGE

  return (
    LANGUAGE_OPTIONS.find((option) => option.code === normalizedLanguage) ??
    LANGUAGE_OPTIONS[0]
  )
}

export function getLanguageFromPathname(pathname) {
  const [, language] = pathname.split('/')

  return normalizeLanguage(language)
}

export function stripLanguageFromPathname(pathname) {
  const parts = pathname.split('/')
  const language = normalizeLanguage(parts[1])

  if (!language) {
    return pathname || '/'
  }

  const pathWithoutLanguage = `/${parts.slice(2).join('/')}`

  return pathWithoutLanguage === '/' ? '/' : pathWithoutLanguage.replace(/\/$/, '')
}

export function toLocalizedPath(path, language) {
  const normalizedLanguage = normalizeLanguage(language) ?? DEFAULT_LANGUAGE
  const pathWithoutLanguage = stripLanguageFromPathname(path || '/')

  if (pathWithoutLanguage === '/') {
    return `/${normalizedLanguage}`
  }

  return `/${normalizedLanguage}${pathWithoutLanguage.startsWith('/') ? '' : '/'}${pathWithoutLanguage}`
}

export function getPreferredLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  const storedLanguage = normalizeLanguage(window.localStorage?.getItem('i18nextLng'))

  if (storedLanguage) {
    return storedLanguage
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  return (
    browserLanguages
      .map((language) => normalizeLanguage(language))
      .find(Boolean) ?? DEFAULT_LANGUAGE
  )
}
