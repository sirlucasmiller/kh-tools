import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="hero">
      <h1 className="hero__title">{t('home.title')}</h1>
      <p className="hero__subtitle">{t('home.subtitle')}</p>
      <p className="hero__note">{t('home.note')}</p>
    </section>
  )
}
