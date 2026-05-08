import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  toLocalizedPath,
} from '../src/i18n/languages.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')
const appDataDir = path.join(projectRoot, 'src', 'data', 'apps')

const DEFAULT_SITE_URL = 'https://sirlucasmiller.github.io/kh-tools'

function normalizeSiteUrl(url) {
  return url.replace(/\/$/, '')
}

function getSiteUrl() {
  const configuredUrl = process.env.VITE_SITE_URL ?? process.env.SITE_URL

  if (configuredUrl) {
    return normalizeSiteUrl(configuredUrl)
  }

  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repository] = process.env.GITHUB_REPOSITORY.split('/')

    return normalizeSiteUrl(`https://${owner}.github.io/${repository}`)
  }

  return DEFAULT_SITE_URL
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

async function getReviewedCategoryIds() {
  const files = await readdir(appDataDir)
  const categoryFiles = files.filter((file) => file.endsWith('.js'))
  const categories = await Promise.all(
    categoryFiles.map(async (file) => {
      const content = await readFile(path.join(appDataDir, file), 'utf8')
      const hasReviewedApps = !/export\s+const\s+apps\s*=\s*\[\s*\]/m.test(content)

      return hasReviewedApps ? file.replace(/\.js$/, '') : null
    }),
  )

  return categories.filter(Boolean).sort()
}

async function getRoutes() {
  const categoryRoutes = (await getReviewedCategoryIds()).map(
    (categoryId) => `/category/${categoryId}`,
  )

  return ['/', '/about', ...categoryRoutes]
}

function getAbsoluteUrl(siteUrl, route, language) {
  return `${siteUrl}${toLocalizedPath(route, language)}`
}

async function buildSitemap(siteUrl) {
  const routes = await getRoutes()
  const urls = routes.flatMap((route) =>
    LANGUAGE_OPTIONS.map((language) => ({
      loc: getAbsoluteUrl(siteUrl, route, language.code),
      alternates: [
        ...LANGUAGE_OPTIONS.map((alternateLanguage) => ({
          hreflang: alternateLanguage.htmlLang,
          href: getAbsoluteUrl(siteUrl, route, alternateLanguage.code),
        })),
        {
          hreflang: 'x-default',
          href: getAbsoluteUrl(siteUrl, route, DEFAULT_LANGUAGE),
        },
      ],
    })),
  )

  const entries = urls
    .map(
      ({ loc, alternates }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
${alternates
  .map(
    ({ hreflang, href }) =>
      `    <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}" />`,
  )
  .join('\n')}
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`
}

function buildRobotsTxt(siteUrl) {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
}

const siteUrl = getSiteUrl()

await mkdir(publicDir, { recursive: true })
await Promise.all([
  writeFile(path.join(publicDir, 'sitemap.xml'), await buildSitemap(siteUrl)),
  writeFile(path.join(publicDir, 'robots.txt'), buildRobotsTxt(siteUrl)),
])

console.log(`Generated SEO files for ${siteUrl}`)
