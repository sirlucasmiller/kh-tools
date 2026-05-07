import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

export default function CategoryCard({ category }) {
  const { t } = useTranslation()
  const appCount = category.apps.length
  const categoryPath = useLocalizedPath(`/category/${category.id}`)

  return (
    <Link
      to={categoryPath}
      className="category-card"
      id={`category-card-${category.id}`}
    >
      <span className="category-card__icon">{category.icon}</span>
      <span className="category-card__name">
        {t(`categoryNames.${category.id}`, category.id)}
      </span>
      <span className="category-card__meta">
        {t('home.appsReviewed', { count: appCount })}
      </span>
      <span className="category-card__arrow">
        {t('home.exploreCategory')} →
      </span>
    </Link>
  )
}
