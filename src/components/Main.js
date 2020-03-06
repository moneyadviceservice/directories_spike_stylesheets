import React, {Component} from 'react';

export class Main extends Component {
  render = () =>
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
}
