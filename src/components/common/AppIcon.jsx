import { useState } from 'react'

const iconPalettes = [
  ['#2a6f97', '#61a6c8'],
  ['#2e7d52', '#8fbc8f'],
  ['#6b5b95', '#b8a9d9'],
  ['#7a5c2e', '#d2a85f'],
  ['#8f3d4b', '#d97987'],
]

function getInitials(name) {
  const initials = String(name ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return initials || '?'
}

function getPalette(seed) {
  const index = Array.from(String(seed ?? '')).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  ) % iconPalettes.length

  return iconPalettes[index]
}

function resolvePublicAsset(src) {
  if (!src || /^[a-z][a-z\d+.-]*:/i.test(src) || src.startsWith('//')) {
    return src
  }

  if (!src.startsWith('/')) {
    return src
  }

  const basePath = import.meta.env.BASE_URL

  return `${basePath}${src.slice(1)}`
}

export default function AppIcon({ className = '', name, src, size }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const label = name ?? ''
  const resolvedSrc = resolvePublicAsset(src)
  const [startColor, endColor] = getPalette(label)
  const style = size
    ? {
        '--app-icon-size': `${size}px`,
        '--app-icon-start': startColor,
        '--app-icon-end': endColor,
      }
    : {
        '--app-icon-start': startColor,
        '--app-icon-end': endColor,
      }

  if (resolvedSrc && failedSrc !== resolvedSrc) {
    return (
      <img
        src={resolvedSrc}
        alt=""
        className={`app-icon ${className}`}
        loading="lazy"
        width={size}
        height={size}
        onError={() => setFailedSrc(resolvedSrc)}
      />
    )
  }

  return (
    <span
      className={`app-icon app-icon--fallback ${className}`}
      aria-hidden="true"
      style={style}
    >
      {getInitials(name)}
    </span>
  )
}
