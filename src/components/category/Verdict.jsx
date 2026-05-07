import { useTranslation } from 'react-i18next'

export default function Verdict({ verdict, apps, categoryId }) {
  const { t } = useTranslation()

  if (!verdict) return null

  const recommendedAppIds =
    verdict.recommendedAppIds ??
    (verdict.recommendedAppId ? [verdict.recommendedAppId] : [])
  const recommendedApps = recommendedAppIds
    .map((appId) => apps.find((app) => app.id === appId))
    .filter(Boolean)

  if (recommendedApps.length === 0) return null

  const isTie = verdict.type === 'tie' || recommendedApps.length > 1

  return (
    <div className="section" id="verdict-section">
      <h2 className="section__title">{t('category.verdictTitle')}</h2>
      <div className="verdict">
        <p className="verdict__label">
          {t(isTie ? 'category.verdictTie' : 'category.verdictSummary')}
        </p>
        <h3 className="verdict__app-name">
          {recommendedApps.map((app) => app.name).join(' + ')}
        </h3>
        {verdict.summary && (
          <p className="verdict__summary">
            {t(`verdicts.${categoryId}.summary`, verdict.summary)}
          </p>
        )}
      </div>
    </div>
  )
}
