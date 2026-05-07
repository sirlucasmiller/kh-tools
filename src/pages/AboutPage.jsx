import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="page container" id="about-page">
      <div className="about">
        <h1 className="category-page__title" style={{ marginBottom: 'var(--space-10)' }}>
          {t('about.title')}
        </h1>

        <section className="about__section">
          <h2 className="about__section-title">{t('about.whatIsThis')}</h2>
          <p className="about__text">{t('about.whatIsThisContent')}</p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">{t('about.whyTitle')}</h2>
          <p className="about__text">{t('about.whyContent')}</p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">{t('about.howItWorks')}</h2>
          <p className="about__text">{t('about.howItWorksContent')}</p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">{t('about.submitTitle')}</h2>
          <p className="about__text">{t('about.submitContent')}</p>
        </section>

        <section className="about__section">
          <div className="about__disclaimer">
            <h2 className="about__section-title">{t('about.disclaimerTitle')}</h2>
            <p className="about__text">{t('about.disclaimerContent')}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
