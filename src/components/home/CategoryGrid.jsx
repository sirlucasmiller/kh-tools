import { useTranslation } from 'react-i18next'
import { getCategories } from '../../data/categories'
import CategoryCard from './CategoryCard'

export default function CategoryGrid() {
  const { t } = useTranslation()
  const categories = getCategories({ includeEmpty: false })

  if (categories.length === 0) {
    return (
      <section id="categories-section">
        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', padding: 'var(--space-12) 0' }}>
          {t('home.noCategoriesYet')}
        </p>
      </section>
    )
  }

  return (
    <section id="categories-section">
      <h2 className="categories-section__title">
        {t('home.categoriesTitle')}
      </h2>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
