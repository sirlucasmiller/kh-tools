import { useTranslation } from 'react-i18next'

const GITHUB_REPO = 'https://github.com/sirlucasmiller/kh-tools'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__inner">
        <span className="footer__text">
          {t('footer.openSource')}
        </span>
        <div className="footer__links">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            id="footer-github"
          >
            {t('footer.github')}
          </a>
          <a
            href={`${GITHUB_REPO}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            id="footer-license"
          >
            {t('footer.license')}
          </a>
        </div>
      </div>
    </footer>
  )
}
