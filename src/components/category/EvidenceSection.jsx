import { useTranslation } from 'react-i18next'
import { translatedList } from '../../i18n/translationHelpers'

export default function EvidenceSection({ apps }) {
  const { t } = useTranslation()
  const appsWithEvidence = apps.filter(
    (app) => app.details?.length > 0 || app.sources?.length > 0,
  )

  if (appsWithEvidence.length === 0) return null

  return (
    <div className="section" id="evidence-section">
      <h2 className="section__title">{t('category.evidenceTitle')}</h2>
      <p className="section__subtitle">{t('category.evidenceSubtitle')}</p>

      <div className="evidence-grid">
        {appsWithEvidence.map((app) => (
          <article key={app.id} className="evidence-card">
            <h3 className="evidence-card__name">{app.name}</h3>

            {app.details?.length > 0 && (
              <ul className="evidence-card__list">
                {translatedList(t, `apps.${app.id}.details`, app.details).map(
                  (detail, index) => (
                    <li key={index} className="evidence-card__item">
                      {detail}
                    </li>
                  ),
                )}
              </ul>
            )}

            {app.sources?.length > 0 && (
              <div className="evidence-card__sources">
                <p className="evidence-card__sources-title">
                  {t('category.sources')}
                </p>
                <div className="evidence-card__links">
                  {app.sources.map((source, index) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="evidence-card__link"
                    >
                      {t(
                        `apps.${app.id}.sources.${index}.label`,
                        source.label,
                      )}{' '}
                      ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
