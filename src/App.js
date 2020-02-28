import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <div class="l-maps_banner">
        <div class="l-constrained">
          <div class="l-maps_banner__content">
            <a href="https://moneyandpensionsservice.org.uk/" target="_blank" class="maps_banner__link">
              <span class="maps_banner__mps-text">
                <span>The Money Advice</span>
                <span>Service is provided by</span>
              </span>

              <span class="maps_banner__mps-logo"></span>

              <span class="visually-hidden">opens in a new window</span>
            </a>
          </div>
        </div>
      </div>

      <header class="l-header" role="banner">
        <div class="l-constrained l-header__content">
          <div class="mas-logo">
            <a class="mas-logo__link" href="https://www.moneyadviceservice.org.uk/en">
              MAS logo goes here
            </a>
          </div>

          <div class="l-header__locale locale">
            <a class="locale__link" href="/cy">Cymraeg</a>
          </div>
        </div>
      </header>

      <div class="l-context-bar">
        <div class="l-constrained">
          <nav class="breadcrumbs" role="navigation" aria-label="breadcrumbs">
            <ul class="unstyled-list">
              <li class="breadcrumbs__item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                <a class="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en" itemprop="url">
                  <span itemprop="title">Home</span>
                </a>
              </li>
              <li class="breadcrumbs__item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                <span class="visually-hidden">&gt;</span>
                <span class="breadcrumbs__divider" aria-hidden="true"></span>
                <a class="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en/categories/pensions-and-retirement" itemprop="url">
                  <span itemprop="title">Pensions and Retirement</span>
                </a>
              </li>
              <li class="breadcrumbs__item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                <span class="visually-hidden">&gt;</span>
                <span class="breadcrumbs__divider" aria-hidden="true"></span>
                <a class="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en/categories/getting-advice-about-retirement" itemprop="url">
                  <span itemprop="title">Financial Advice</span>
                </a>
              </li>
              <li class="breadcrumbs__item" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                <span class="visually-hidden">&gt;</span>
                <span class="breadcrumbs__divider" aria-hidden="true"></span>
                <a class="breadcrumbs__link" href="/en" itemprop="url">
                  <span itemprop="title">Retirement Adviser Directory</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <div class="l-constrained">
          <div class="l-2col">
            <div class="l-2col-main">
              <h1 class="l-landing-page__title" role="heading" aria-level="1">Find a retirement adviser</h1>    </div>
            <div class="l-2col-side l-landing-page__register-link">
              <a href="https://radsignup.moneyadviceservice.org.uk/">Register or login as a firm on the directory</a>
            </div>
          </div>
        </div>

        <div class="l-landing-page__find-adviser">
          <div class="l-constrained">
            <section class="l-landing-page__2col search-filter l-landing-page__search-filter t-search-filter" data-further-info="">
              This is a form element
                Input goes here

                <div class="search-filter--container">
                  <div class="l-results__filter">
                    <fieldset class="form__group search-filter__section">
                      <legend class="l-landing-page__search-filter__header">How would you like to receive advice? <a href="" class="icon--further-info" role="button" data-further-info-trigger="" aria-label="Further information">i</a></legend>
                      <div class="is-hidden further-info__content" data-further-info-target="">
                        <p class="further-info__paragraph">Many financial advisers will meet in you in person either at their office, your home, or a place convenient to you.   If you prefer to meet your adviser face-to-face then you should choose the ‘in-person’ option and give your postcode.</p>
                        <p class="further-info__paragraph">However, increasingly, there are advisers who offer advice by telephone or online only.  These advisers often have less overheads and if you are happy to receive advice this way, you may find it can save you money.  Choose the ‘phone or online only’ option.</p>
                        <p class="further-info__paragraph">Or you can contact advisers offering both options to compare service and costs.</p>
                        <p class="further-info__paragraph">The important thing to remember is that all the advisers on the Money Advice Service Directory – no matter how they offer advice – are fully regulated.  You have exactly the same protection whether you see someone face-to-face or deal with them exclusively by phone or online.</p>
                      </div>
                  <div class="l-results__form-row">

                  <div class="search-filter">
                    <section id="in-person">
                      <div class=" form__row">
                        <div class="form__group-item">
                          Input goes here
                          <label class="search-filter__advice-label" for="search_form_advice_method_face_to_face">In person</label>
                        </div>

                        <div class="form__group-item is-hidden" data-results-filter-target="">
                          Input goes here
                          <label class="form__label-heading visually-hidden" for="search_form_postcode">Postcode</label>
                        </div>
                      </div>
                    </section>

                    <section id="phone_or_online">
                      <div class=" form__row">
                        <div class="form__group-item">
                          Input goes here
                          <label class="search-filter__advice-label" for="search_form_advice_method_phone_or_online">Phone or Online</label>
                        </div>

                        <div class="form__group-item"></div>
                      </div>
                    </section>

                    <section id="search_firm_name">
                      <div class=" form__row">
                        <div class="form__group-item">
                          Input goes here
                          <label class="search-filter__advice-label" for="search_form_advice_method_firm_name_search">Search for a firm by name</label>
                        </div>

                        <div class="form__group-item is-hidden" data-results-filter-target="">
                          <label class="form__label-heading visually-hidden" for="search_form_firm_name">Firm name</label>
                          Input goes here
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <button class="button button--primary search-filter__button">
                  <span class="button--compact__text">Search</span>
                  SVG
                </button>
              </fieldset>
            </div>
          </div>
        Form element ends here
      </section>

      <section class="l-landing-page__2col">
              <h2 class="l-landing-page__trust-banner__header l-landing-page__section-header" role="heading" aria-level="2">Search our directory of regulated advisers</h2>

              <ul class="list-benefits banner-list">
                  <li data-further-info="">
                    All advisers are authorised and regulated by the Financial Conduct Authority (FCA)
                      <a href="" class="icon--further-info" role="button" data-further-info-trigger="" aria-label="Further information">
          i
        </a>

                      <p class="is-hidden further-info__content" data-further-info-target="">The FCA is the UK’s financial regulator and sets rules that firms employing financial advisers must follow when providing advice and selling financial products. This means you are covered if things go wrong and they can be fined or shut down if they break the rules. Regulated financial advisers must also have a certain level of qualifications before they can practice, which are set by the FCA.</p>
                  </li>
                  <li data-further-info="">
                    All advisers offer personalised financial advice
                      <a href="" class="icon--further-info" role="button" data-further-info-trigger="" aria-label="Further information">
          i
        </a>

                      <p class="is-hidden further-info__content" data-further-info-target="">This means advisers must collect enough information from you to be able to make a personal recommendation. If the recommendation turns out to be unsuitable you can complain firstly to the adviser’s firm and then to the Financial Ombudsman if your complaint is rejected. Advisers on the directory are also covered by the Financial Services Compensation Scheme meaning you’ll be able to claim compensation if you lose money as a direct result of them going bust.</p>
                  </li>
                  <li data-further-info="">
                    All advisers can choose from a wide range of providers
                  </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

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
    </div>
  );
}

export default App;
