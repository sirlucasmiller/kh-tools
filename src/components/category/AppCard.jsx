import { useTranslation } from 'react-i18next'

export default function AppCard({ app }) {
  const { t } = useTranslation()
  const description = t(`apps.${app.id}.description`, app.description)

  return (
    <article
      className="app-card"
      id={`app-card-${app.id}`}
    >
      <h3 className="app-card__name">{app.name}</h3>
      <p className="app-card__developer">
        {t('category.developer')}: {app.developer}
      </p>
      <p className="app-card__description">{description}</p>

      <div className="app-card__platforms">
        {app.platforms.map((platform) => (
          <span key={platform} className="app-card__platform-badge">
            {t(`platforms.${platform}`, platform)}
          </span>
        ))}
      </div>

      <div className="app-card__links">
        {app.website && (
          <a
            href={app.website}
            target="_blank"
            rel="noopener noreferrer"
            className="app-card__link"
          >
            {t('category.visitWebsite')} ↗
          </a>
        )}
        {app.repository && (
          <a
            href={app.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="app-card__link"
          >
            {t('category.viewSource')} ↗
          </a>
        )}
      </div>
    </article>
  )
}
