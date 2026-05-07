import Hero from '../components/home/Hero'
import CategoryGrid from '../components/home/CategoryGrid'

export default function HomePage() {
  return (
    <div className="page container" id="home-page">
      <Hero />
      <CategoryGrid />
    </div>
  )
}
