import { useTranslation } from 'react-i18next'

const ISSUE_URL = 'https://github.com/sirlucasmiller/kh-tools/issues/new?template=app-submission.yml'

export default function EmptyState() {
  const { t } = useTranslation()

  return (
    <div className="empty-state" id="empty-state">
      <div className="empty-state__icon">📭</div>
      <h2 className="empty-state__title">{t('category.noAppsYet')}</h2>
      <p className="empty-state__text">
        {t('category.noAppsYetDescription')}
      </p>
      <a
        href={ISSUE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="empty-state__link"
      >
        {t('category.openIssue')} ↗
      </a>
    </div>
  )
}
