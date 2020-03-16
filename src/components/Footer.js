import React, {Component} from 'react';

export class Footer extends Component {
  render = () =>
    <footer className="l-footer">
      <div className="l-footer-primary t-footer-primary">
        <div className="l-constrained">
          <div className="l-footer-primary__left">
            <ul className="l-footer-primary__social-sharing t-footer-social-links">
              <li className="l-footer-primary__list--left">
                <div className="footer-primary__list-item">
                  <a className="button facebook-link t-facebook-link" lang="en" href="https://www.facebook.com/MoneyAdviceService?ref=mas" target="_blank">
                    <span className="icon icon--facebook"></span>
                    <span className="visually-hidden">Facebook - Opens in a new window</span>
                  </a>
                  <p className="social-sharing__counter">
                    <span className="social-sharing__counter__total">72k</span>
                    <span className="social-sharing__counter__label">Likes</span>
                  </p>
                </div>
              </li>

              <li className="l-footer-primary__list--centre">
                <div className="footer-primary__list-item">
                  <a className="button twitter-link t-twitter-link" lang="en" href="https://twitter.com/YourMoneyAdvice" target="_blank">
                    <span className="icon icon--twitter"></span>
                    <span className="visually-hidden">Twitter - Opens in a new window</span>
                  </a>
                  <p className="social-sharing__counter">
                    <span className="social-sharing__counter__total">45k</span>
                    <span className="social-sharing__counter__label">Followers</span>
                  </p>
                </div>
              </li>

              <li className="l-footer-primary__list--right">
                <div className="footer-primary__list-item">
                  <a className="button youtube-link t-youtube-link" lang="en" href="https://www.youtube.com/user/MoneyAdviceService" target="_blank">
                    <span className="icon icon--youtube"></span>
                    <span className="visually-hidden">Youtube - Opens in a new window</span>
                  </a>
                  <p className="social-sharing__counter">
                    <span className="social-sharing__counter__total">5.6m</span>
                    <span className="social-sharing__counter__label">Views</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="l-footer-primary__right">
            <nav role="navigation" aria-label="footer">
              <ul className="l-footer-primary__list">
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/about-us">About us</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/our-debt-work">Our debt work</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/media-centre">Media centre</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="http://www.fincap.org.uk/">Financial Capability</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/partners">Partners</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/jobs">Jobs</a>
                </li>
                <li className="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/tools-and-calculators">Tools &amp; calculators</a>
                </li>
              </ul>

              <div className="footer-primary__blog">
                <a target="_blank" className="footer-primary__blog-link" href="https://blog.moneyadviceservice.org.uk">Blog</a>
              </div>

              <div className="footer-primary__clear-english">
                <a className="footer-primary__clear-english-link" href="https://www.clearest.co.uk/silver-standard" target="_blank">
                  <span className="icon icon--clear-english"></span>

                  <span className="footer-primary__clear-english-text">
                    <span>Clear English Standard</span>
                    <span>Winning Website</span>
                    <span>Silver Level</span>
                  </span>
                  <span className="visually-hidden">Clear English Award - <span className="translation_missing" title="translation missing: en.footer.new-window-label">New Window Label</span></span>
                </a>
              </div>
            </nav>
          </div>

          <p className="footer-primary__copyright">© Copyright 2020 The Money Advice Service 120 Holborn, London EC1N 2TD</p>
        </div>
      </div>

      <div className="l-footer-secondary t-footer-secondary">
        <div className="l-constrained">
          <div className="l-footer-secondary--inner">
            <div className="l-footer-secondary__list--left">
              <ul className="l-footer-secondary__list">
                <li className="l-footer-secondary__list-item  l-language-link">
                  <a className="t-cy-link" href="https://www.moneyadviceservice.org.uk/cy/empty" lang="cy">
                    <span className="icon icon--globe"></span>
                    Cymraeg
                  </a>
                </li>

                <li className="l-footer-secondary__list-item accessibility-feedback-link">
                  <a className="footer-secondary__link" href="http://accessin.org/usersubmit_mas.php?param=nojscript" title="Please use this button to tell us if you have an accessibility issue on our website" target="_blank">
                    <span className="icon icon--accessibility"></span>Report an accessibility problem
                    <span className="visually-hidden">Feedback form opens in a new window</span>
                  </a>
                </li>

                <li className="l-footer-secondary__list-item footer-secondary__mps-link">
                  <a href="https://moneyandpensionsservice.org.uk/" target="_blank">
                    <span className="footer-secondary__mps-text">
                      <span>The Money</span>
                      <span>Advice Service</span>
                      <span>is provided by</span>
                    </span>
                    MAPS logo from Yeast
                    <span className="visually-hidden">opens in a new window</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="l-footer-secondary__list--right">
              <ul className="l-footer-secondary__list">
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/contact-us">Contact us</a>
              </li>
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/terms-and-conditions">Terms &amp; conditions</a>
              </li>
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/corporate/privacy">Privacy notice</a>
              </li>
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/accessibility">Accessibility</a>
              </li>
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/cookie_notice_en">Cookies</a>
              </li>
              <li className="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/sitemap">Sitemap</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
}
