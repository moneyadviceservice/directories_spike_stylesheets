import React, {Component} from 'react';

export class Footer extends Component {
  render = () =>
    <footer class="l-footer">
      <div class="l-footer-primary t-footer-primary">
        <div class="l-constrained">
          <div class="l-footer-primary__left">
            <ul class="l-footer-primary__social-sharing t-footer-social-links">
              <li class="l-footer-primary__list--left">
                <div class="footer-primary__list-item">
                  <a class="button facebook-link t-facebook-link" lang="en" href="https://www.facebook.com/MoneyAdviceService?ref=mas" target="_blank">
                    <span class="icon icon--facebook"></span>
                    <span class="visually-hidden">Facebook - Opens in a new window</span>
                  </a>
                  <p class="social-sharing__counter">
                    <span class="social-sharing__counter__total">72k</span>
                    <span class="social-sharing__counter__label">Likes</span>
                  </p>
                </div>
              </li>

              <li class="l-footer-primary__list--centre">
                <div class="footer-primary__list-item">
                  <a class="button twitter-link t-twitter-link" lang="en" href="https://twitter.com/YourMoneyAdvice" target="_blank">
                    <span class="icon icon--twitter"></span>
                    <span class="visually-hidden">Twitter - Opens in a new window</span>
                  </a>
                  <p class="social-sharing__counter">
                    <span class="social-sharing__counter__total">45k</span>
                    <span class="social-sharing__counter__label">Followers</span>
                  </p>
                </div>
              </li>

              <li class="l-footer-primary__list--right">
                <div class="footer-primary__list-item">
                  <a class="button youtube-link t-youtube-link" lang="en" href="https://www.youtube.com/user/MoneyAdviceService" target="_blank">
                    <span class="icon icon--youtube"></span>
                    <span class="visually-hidden">Youtube - Opens in a new window</span>
                  </a>
                  <p class="social-sharing__counter">
                    <span class="social-sharing__counter__total">5.6m</span>
                    <span class="social-sharing__counter__label">Views</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="l-footer-primary__right">
            <nav role="navigation" aria-label="footer">
              <ul class="l-footer-primary__list">
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/about-us">About us</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/our-debt-work">Our debt work</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/media-centre">Media centre</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="http://www.fincap.org.uk/">Financial Capability</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/partners">Partners</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/static/jobs">Jobs</a>
                </li>
                <li class="footer-primary__list-item footer-primary__corporate-link">
                  <a href="https://www.moneyadviceservice.org.uk/en/categories/tools-and-calculators">Tools &amp; calculators</a>
                </li>
              </ul>

              <div class="footer-primary__blog">
                <a target="_blank" class="footer-primary__blog-link" href="https://blog.moneyadviceservice.org.uk">Blog</a>
              </div>

              <div class="footer-primary__clear-english">
                <a class="footer-primary__clear-english-link" href="https://www.clearest.co.uk/silver-standard" target="_blank">
                  <span class="icon icon--clear-english"></span>

                  <span class="footer-primary__clear-english-text">
                    <span>Clear English Standard</span>
                    <span>Winning Website</span>
                    <span>Silver Level</span>
                  </span>
                  <span class="visually-hidden">Clear English Award - <span class="translation_missing" title="translation missing: en.footer.new-window-label">New Window Label</span></span>
                </a>
              </div>
            </nav>
          </div>

          <p class="footer-primary__copyright">© Copyright 2020 The Money Advice Service 120 Holborn, London EC1N 2TD</p>
        </div>
      </div>

      <div class="l-footer-secondary t-footer-secondary">
        <div class="l-constrained">
          <div class="l-footer-secondary--inner">
            <div class="l-footer-secondary__list--left">
              <ul class="l-footer-secondary__list">
                <li class="l-footer-secondary__list-item  l-language-link">
                  <a class="t-cy-link" href="https://www.moneyadviceservice.org.uk/cy/empty" lang="cy">
                    <span class="icon icon--globe"></span>
                    Cymraeg
                  </a>
                </li>

                <li class="l-footer-secondary__list-item accessibility-feedback-link">
                  <a class="footer-secondary__link" href="http://accessin.org/usersubmit_mas.php?param=nojscript" onclick="window.open('http://accessin.org/usersubmit_mas.php?param=' + window.location,'',
                         'resizable=yes,location=no,scrollbars=yes,toolbar=no,left=20,top=0,height=900,width=800');
                         return false;" title="Please use this button to tell us if you have an accessibility issue on our website" target="_blank">
                    <span class="icon icon--accessibility"></span>Report an accessibility problem
                    <span class="visually-hidden">Feedback form opens in a new window</span>
                  </a>
                </li>

                <li class="l-footer-secondary__list-item footer-secondary__mps-link">
                  <a href="https://moneyandpensionsservice.org.uk/" target="_blank">
                    <span class="footer-secondary__mps-text">
                      <span>The Money</span>
                      <span>Advice Service</span>
                      <span>is provided by</span>
                    </span>
                    MAPS logo from Yeast
                    <span class="visually-hidden">opens in a new window</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="l-footer-secondary__list--right">
              <ul class="l-footer-secondary__list">
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/contact-us">Contact us</a>
              </li>
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/terms-and-conditions">Terms &amp; conditions</a>
              </li>
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/corporate/privacy">Privacy notice</a>
              </li>
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/accessibility">Accessibility</a>
              </li>
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/static/cookie_notice_en">Cookies</a>
              </li>
              <li class="l-footer-secondary__list-item footer-secondary__link-item">
                <a href="https://www.moneyadviceservice.org.uk/en/sitemap">Sitemap</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
}
