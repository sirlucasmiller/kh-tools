import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getDirectoryApps } from '../../data/app-directory'
import { toLocalizedPath } from '../../i18n/languages'
import { useCurrentLanguage } from '../../i18n/useLocalizedPath'
import AppIcon from '../common/AppIcon'

export default function AppDirectory() {
  const { t } = useTranslation()
  const language = useCurrentLanguage()
  const apps = getDirectoryApps()

  if (apps.length === 0) {
    return null
  }

  return (
    <section className="app-directory" aria-labelledby="app-directory-title">
      <div className="app-directory__header">
        <h2 className="app-directory__title" id="app-directory-title">
          {t('home.appDirectoryTitle')}
        </h2>
        <p className="app-directory__subtitle">
          {t('home.appDirectorySubtitle')}
        </p>
      </div>

      <div className="app-directory__list">
        {apps.map((app) => {
          const appName = t(`directoryApps.${app.id}.name`, app.name)
          const translatedAppDescription = t(`apps.${app.id}.description`, app.description)
          const description = t(
            `directoryApps.${app.id}.description`,
            translatedAppDescription,
          )
          const comparisonPath = app.comparison
            ? `${toLocalizedPath(`/category/${app.comparison.categoryId}`, language)}#app-card-${app.comparison.appId}`
            : null
          const categoryName = app.comparison
            ? t(`categoryNames.${app.comparison.categoryId}`, app.comparison.categoryId)
            : null

          return (
            <article className="directory-app" key={app.id}>
              <AppIcon
                name={appName}
                src={app.iconSrc}
                className="directory-app__icon"
                size={52}
              />
              <div className="directory-app__content">
                <div className="directory-app__heading">
                  <h3 className="directory-app__name">{appName}</h3>
                  <span
                    className={`directory-app__status ${
                      app.comparison
                        ? 'directory-app__status--ready'
                        : 'directory-app__status--pending'
                    }`}
                  >
                    {app.comparison
                      ? t('home.comparisonAvailable')
                      : t('home.comparisonPending')}
                  </span>
                </div>

                <p className="directory-app__description">{description}</p>

                <div className="directory-app__footer">
                  <div className="directory-app__platforms">
                    {app.platforms.map((platform) => (
                      <span key={platform} className="directory-app__platform">
                        {t(`platforms.${platform}`, platform)}
                      </span>
                    ))}
                  </div>

                  <div className="directory-app__actions">
                    {app.website && (
                      <a
                        href={app.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="directory-app__link"
                      >
                        {t('home.visitAppWebsite')} ↗
                      </a>
                    )}
                    {app.repository && (
                      <a
                        href={app.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="directory-app__link"
                      >
                        {t('home.viewAppRepository')} ↗
                      </a>
                    )}
                    {comparisonPath && (
                      <Link
                        to={comparisonPath}
                        className="directory-app__link directory-app__link--primary"
                        aria-label={t('home.viewComparisonInCategory', {
                          appName,
                          categoryName,
                        })}
                      >
                        {t('home.viewComparison')} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
