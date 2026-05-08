import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCategoryById } from '../data/categories'
import AppCard from '../components/category/AppCard'
import ComparisonTable from '../components/category/ComparisonTable'
import EvidenceSection from '../components/category/EvidenceSection'
import PrivacySection from '../components/category/PrivacySection'
import ProsConsSection from '../components/category/ProsConsSection'
import Verdict from '../components/category/Verdict'
import EmptyState from '../components/common/EmptyState'
import NotFoundPage from './NotFoundPage'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import Seo from '../components/common/Seo'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const { t } = useTranslation()
  const homePath = useLocalizedPath('/')

  const category = getCategoryById(categoryId)

  if (!category) {
    return <NotFoundPage />
  }

  const hasApps = category.apps.length > 0
  const categoryName = t(`categoryNames.${category.id}`, category.id)
  const appNames = category.apps.map((app) => app.name).join(', ')
  const seoDescription = hasApps
    ? t('seo.category.description', {
        appNames,
        categoryName,
        count: category.apps.length,
      })
    : t('seo.category.emptyDescription', { categoryName })

  return (
    <div className="page container" id="category-page">
      <Seo
        title={categoryName}
        description={seoDescription}
        path={`/category/${category.id}`}
      />
      <Link to={homePath} className="category-page__back">
        ← {t('category.backToHome')}
      </Link>

      <header className="category-page__header">
        <div className="category-page__icon">{category.icon}</div>
        <h1 className="category-page__title">
          {categoryName}
        </h1>
        {hasApps && (
          <p className="category-page__description">
            {t('home.appsReviewed', { count: category.apps.length })}
          </p>
        )}
      </header>

      {!hasApps ? (
        <EmptyState />
      ) : (
        <>
          {/* App overview cards */}
          <div className="app-cards">
            {category.apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {/* Feature comparison table */}
          <ComparisonTable
            apps={category.apps}
            featureLabels={category.featureLabels}
            categoryId={category.id}
          />

          {/* Reviewed details and sources */}
          <EvidenceSection apps={category.apps} />

          {/* Privacy & Trust */}
          <PrivacySection apps={category.apps} />

          {/* Pros & Cons */}
          <ProsConsSection apps={category.apps} />

          {/* Verdict */}
          <Verdict
            verdict={category.verdict}
            apps={category.apps}
            categoryId={category.id}
          />
        </>
      )}
    </div>
  )
}
