export function translatedList(t, key, fallback = []) {
  const value = t(key, {
    defaultValue: fallback,
    returnObjects: true,
  })

  return Array.isArray(value) ? value : fallback
}
