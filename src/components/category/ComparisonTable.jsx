import { useTranslation } from 'react-i18next'

export default function ComparisonTable({ apps, featureLabels, categoryId }) {
  const { t } = useTranslation()
  const featureKeys = Object.keys(featureLabels)

  if (apps.length === 0 || featureKeys.length === 0) return null

  return (
    <div className="section" id="comparison-section">
      <h2 className="section__title">{t('category.comparisonTitle')}</h2>
      <p className="section__subtitle">{t('category.comparisonSubtitle')}</p>

      <div className="comparison-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>{t('category.featuresTitle')}</th>
              {apps.map((app) => (
                <th key={app.id}>{app.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((featureKey) => (
              <tr key={featureKey}>
                <td>
                  {t(
                    `categoryFeatures.${categoryId}.${featureKey}`,
                    featureLabels[featureKey],
                  )}
                </td>
                {apps.map((app) => (
                  <td key={app.id}>
                    {app.features[featureKey] ? (
                      <span className="comparison-table__check">✓</span>
                    ) : (
                      <span className="comparison-table__cross">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* Platforms row */}
            <tr>
              <td>{t('category.platforms')}</td>
              {apps.map((app) => (
                <td key={app.id}>
                  {app.platforms
                    .map((p) => t(`platforms.${p}`, p))
                    .join(', ')}
                </td>
              ))}
            </tr>

            {/* Pricing row */}
            <tr>
              <td>{t('category.pricing')}</td>
              {apps.map((app) => (
                <td key={app.id}>
                  {t(`pricing.${app.pricing}`, app.pricing)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
