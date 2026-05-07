import { useTranslation } from 'react-i18next'

export default function PrivacySection({ apps }) {
  const { t } = useTranslation()

  if (apps.length === 0) return null

  const getValueClass = (key, value) => {
    if (key === 'dataCollection') {
      return value === 'none' || value === 'minimal'
        ? 'privacy-card__value--good'
        : 'privacy-card__value--warn'
    }
    if (key === 'openSource' || key === 'offlineCapable') {
      return value ? 'privacy-card__value--good' : 'privacy-card__value--warn'
    }
    return ''
  }

  const formatValue = (key, value) => {
    if (key === 'openSource' || key === 'offlineCapable') {
      return value ? t('privacy.yes') : t('privacy.no')
    }
    return t(`privacy.${value}`, value)
  }

  return (
    <div className="section" id="privacy-section">
      <h2 className="section__title">{t('category.privacyTitle')}</h2>
      <div className="privacy-grid">
        {apps.map((app) => (
          <div key={app.id} className="privacy-card">
            <h3 className="privacy-card__name">{app.name}</h3>
            {Object.entries(app.privacy).map(([key, value]) => (
              <div key={key} className="privacy-card__row">
                <span className="privacy-card__label">
                  {t(`privacy.${key}`, key)}
                </span>
                <span
                  className={`privacy-card__value ${getValueClass(key, value)}`}
                >
                  {formatValue(key, value)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
