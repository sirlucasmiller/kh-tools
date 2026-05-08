import { useEffect } from 'react'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  getLanguageMeta,
  toLocalizedPath,
} from '../../i18n/languages'
import { useCurrentLanguage } from '../../i18n/useLocalizedPath'

const SITE_NAME = 'KH Tools'
const SEO_ATTRIBUTE = 'data-kh-tools-seo'

function getSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')

  if (configuredOrigin) {
    return configuredOrigin
  }

  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return ''
}

function getBasePath() {
  const baseUrl = import.meta.env.BASE_URL ?? '/'

  if (baseUrl === '/') {
    return ''
  }

  return `/${baseUrl.replace(/^\/|\/$/g, '')}`
}

function getAbsoluteUrl(path, language) {
  const origin = getSiteOrigin()
  const basePath = getBasePath()
  const localizedPath = toLocalizedPath(path, language)

  return `${origin}${basePath}${localizedPath}`
}

function upsertMeta(selector, attributes) {
  const existingElement = document.head.querySelector(selector)
  const element = existingElement ?? document.createElement('meta')

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })

  element.setAttribute(SEO_ATTRIBUTE, 'true')

  if (!existingElement) {
    document.head.appendChild(element)
  }
}

function upsertLink(selector, attributes) {
  const existingElement = document.head.querySelector(selector)
  const element = existingElement ?? document.createElement('link')

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })

  element.setAttribute(SEO_ATTRIBUTE, 'true')

  if (!existingElement) {
    document.head.appendChild(element)
  }
}

export default function Seo({ title, description, path = '/', noindex = false }) {
  const language = useCurrentLanguage()

  useEffect(() => {
    const meta = getLanguageMeta(language)
    const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`
    const canonicalUrl = getAbsoluteUrl(path, language)
    const alternateUrls = LANGUAGE_OPTIONS.map((option) => ({
      ...option,
      url: getAbsoluteUrl(path, option.code),
    }))

    document.title = fullTitle
    document.documentElement.lang = meta.htmlLang

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: meta.htmlLang.replace('-', '_'),
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: fullTitle,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    if (noindex) {
      upsertMeta('meta[name="robots"]', {
        name: 'robots',
        content: 'noindex,follow',
      })
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove()
    }

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    document.head
      .querySelectorAll(`link[rel="alternate"][${SEO_ATTRIBUTE}]`)
      .forEach((element) => element.remove())

    alternateUrls.forEach((option) => {
      upsertLink(`link[rel="alternate"][hreflang="${option.htmlLang}"]`, {
        rel: 'alternate',
        hreflang: option.htmlLang,
        href: option.url,
      })
    })

    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: getAbsoluteUrl(path, DEFAULT_LANGUAGE),
    })
  }, [description, language, noindex, path, title])

  return null
}
