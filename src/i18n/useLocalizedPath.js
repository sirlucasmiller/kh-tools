import { useParams } from 'react-router-dom'
import { DEFAULT_LANGUAGE, normalizeLanguage, toLocalizedPath } from './languages'

export function useCurrentLanguage() {
  const { lng } = useParams()

  return normalizeLanguage(lng) ?? DEFAULT_LANGUAGE
}

export function useLocalizedPath(path) {
  const language = useCurrentLanguage()

  return toLocalizedPath(path, language)
}
