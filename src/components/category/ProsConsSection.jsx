import { useTranslation } from 'react-i18next'
import { translatedList } from '../../i18n/translationHelpers'

export default function ProsConsSection({ apps }) {
  const { t } = useTranslation()

  if (apps.length === 0) return null

  return (
    <div className="section" id="pros-cons-section">
      <h2 className="section__title">{t('category.prosAndCons')}</h2>
      <div className="pros-cons-grid">
        {apps.map((app) => (
          <div key={app.id} className="pros-cons-card">
            <h3 className="pros-cons-card__name">{app.name}</h3>

            {translatedList(t, `apps.${app.id}.pros`, app.pros).length > 0 && (
              <>
                <p className="pros-cons-card__section-title pros-cons-card__section-title--pro">
                  {t('category.pros')}
                </p>
                <ul className="pros-cons-card__list">
                  {translatedList(t, `apps.${app.id}.pros`, app.pros).map((pro, i) => (
                    <li key={i} className="pros-cons-card__item pros-cons-card__item--pro">
                      {pro}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {translatedList(t, `apps.${app.id}.cons`, app.cons).length > 0 && (
              <>
                <p className="pros-cons-card__section-title pros-cons-card__section-title--con">
                  {t('category.cons')}
                </p>
                <ul className="pros-cons-card__list">
                  {translatedList(t, `apps.${app.id}.cons`, app.cons).map((con, i) => (
                    <li key={i} className="pros-cons-card__item pros-cons-card__item--con">
                      {con}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
