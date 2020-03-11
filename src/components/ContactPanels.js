import React, {Component} from 'react';

export class ContactPanels extends Component {
  render = () =>
    <div class="l-contact-panels">
      <div class="l-contact-panel contact-panel__dynamic-content">
        <div class="contact-panel contact-panel__chat-open t-chat" id="js-chat">
          <h2 aria-level="2" class="contact-panel__heading" role="heading">
            <span class="icon icon--web-chat"></span>
            Web chat
          </h2>

          <div class="contact-panel__dynamic-content is-loaded" id="js-chat-content">
            <div class="contact-panel__preloader"></div>
            <p class="contact-panel__chat-description t-chat-description" id="js-chat-description">Got a question? Our advisers will point you in the right direction.</p>
          </div>

          <ul class="t-chat-opening-times contact-panel__list unstyled-list">
            <li class="contact-panel__additional-info">Monday to Friday, 8am to 6pm</li>
            <li class="contact-panel__additional-info">Saturday, 8am to 3pm</li>
            <li class="contact-panel__additional-info">Sunday and Bank Holidays, closed</li>
          </ul>

          <p class="smallprint">This service is currently only available in English.</p>

          <div class="contact-panel__button-container" id="js-chat-cta">
            <a class="contact-panel__button button t-chat-button" href="https://webchat.moneyadviceservice.org.uk/newchat/chat.aspx?domain=www.moneyadviceservice.org.uk&amp;timestamp=1583837956726&amp;session=692-1565175253025?domain=www.moneyadviceservice.org.uk&amp;timestamp=1583837986726&amp;session=692-1565175253025" target="_blank">Launch chat</a>
          </div>

          <p class="contact-panel__chat-javascript t-chat-javascript">
            Sorry, web chat is only available on
            <a href="http://www.enable-javascript.com/">internet browsers with JavaScript</a>.
          </p>
        </div>
      </div>

      <div class="l-contact-panel contact-panel__dynamic-content contact-panel__whatsapp">
        <div class="contact-panel contact-panel__chat-open" id="js-whatsapp">
          <h2 aria-level="2" class="contact-panel__heading" role="heading">WhatsApp</h2>

          <div class="contact-panel__dynamic-content is-loaded" id="js-whatsapp-content">
            <ul class="contact-panel__chat-description contact-panel__list unstyled-list" id="js-whatsapp-description">
              <li class="contact-panel__additional-info">
                <p>Need help sorting out your debts, have credit questions or want pensions guidance? Add +44 7701 342744 to your Whatsapp and send us a message.</p>
              </li>
              <li class="contact-panel__additional-info">
                <p>For everything else please contact us via Webchat or Telephone.</p>
              </li>
            </ul>

            <p class="smallprint">This service is currently only available in English.</p>

            <div class="contact-panel__button-container">
              <a class="contact-panel__button button t-whatsapp-button" href="https://wa.me/447701342744">Launch chat</a>
            </div>
          </div>
        </div>
      </div>

      <div class="l-contact-panel contact-panel__dynamic-content">
        <div class="contact-panel contact-panel--last">
          <h2 aria-level="2" class="contact-panel__heading t-contact-heading" role="heading">
            <span class="icon icon--call-us"></span>
            Contact us
          </h2>

          <ul class="contact-panel__list">
            <li class="t-contact-introduction contact-panel__additional-info contact-panel__contact-introduction">Give us a call for free and impartial money advice.</li>

            <li class="contact-panel__additional-info">
              <p class="contact-panel__contact-number">
                <a class="contact-panel__telephone t-contact-number" href="tel:+448001387777">
                  0800 138 7777
                </a>
              </p>
            </li>

            <li class="contact-panel__additional-info">Monday to Friday, 8am to 6pm</li>

            <li class="contact-panel__additional-info">Saturday, Sunday and Bank Holidays, closed</li>

            <li class="contact-panel__additional-info">
              <p>
                Our general email address is
                <a href="mailto:enquiries@maps.org.uk">enquiries@maps.org.uk</a>.
              </p>
            </li>

            <li class="contact-panel__additional-info">
              <div class="contact-panel__button-container">
                <a class="contact-panel__button button" href="mailto:enquiries@maps.org.uk">
                  Send Email
                </a>
              </div>
            </li>

            <li class="contact-panel__additional-info">
              <p>We will normally respond to your enquiry within 48 hours of receipt.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
}
