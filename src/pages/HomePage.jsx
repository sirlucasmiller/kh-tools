import Hero from '../components/home/Hero'
import CategoryGrid from '../components/home/CategoryGrid'
import Seo from '../components/common/Seo'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="page container" id="home-page">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} />
      <Hero />
      <CategoryGrid />
    </div>
  )
}
