import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import Seo from '../components/common/Seo'

export default function NotFoundPage() {
  const { t } = useTranslation()
  const homePath = useLocalizedPath('/')

  return (
    <div className="page container" id="not-found-page">
      <Seo
        title={t('notFound.title')}
        description={t('notFound.description')}
        noindex
      />
      <div className="not-found">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">{t('notFound.title')}</h1>
        <p className="not-found__text">{t('notFound.description')}</p>
        <Link to={homePath} className="not-found__link">
          ← {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  )
}
