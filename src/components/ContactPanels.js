import React, {Component} from 'react';

export class ContactPanels extends Component {
  render = () =>
    <div className="l-contact-panels">
      <div className="l-contact-panel contact-panel__dynamic-content">
        <div className="contact-panel contact-panel__chat-open t-chat" id="js-chat">
          <h2 aria-level="2" className="contact-panel__heading" role="heading">
            <span className="icon icon--web-chat"></span>
            Web chat
          </h2>

          <div className="contact-panel__dynamic-content is-loaded" id="js-chat-content">
            <div className="contact-panel__preloader"></div>
            <p className="contact-panel__chat-description t-chat-description" id="js-chat-description">Got a question? Our advisers will point you in the right direction.</p>
          </div>

          <ul className="t-chat-opening-times contact-panel__list unstyled-list">
            <li className="contact-panel__additional-info">Monday to Friday, 8am to 6pm</li>
            <li className="contact-panel__additional-info">Saturday, 8am to 3pm</li>
            <li className="contact-panel__additional-info">Sunday and Bank Holidays, closed</li>
          </ul>

          <p className="smallprint">This service is currently only available in English.</p>

          <div className="contact-panel__button-container" id="js-chat-cta">
            <a className="contact-panel__button button t-chat-button" href="https://webchat.moneyadviceservice.org.uk/newchat/chat.aspx?domain=www.moneyadviceservice.org.uk&amp;timestamp=1583837956726&amp;session=692-1565175253025?domain=www.moneyadviceservice.org.uk&amp;timestamp=1583837986726&amp;session=692-1565175253025" target="_blank">Launch chat</a>
          </div>

          <p className="contact-panel__chat-javascript t-chat-javascript">
            Sorry, web chat is only available on
            <a href="http://www.enable-javascript.com/">internet browsers with JavaScript</a>.
          </p>
        </div>
      </div>

      <div className="l-contact-panel contact-panel__dynamic-content contact-panel__whatsapp">
        <div className="contact-panel contact-panel__chat-open" id="js-whatsapp">
          <h2 aria-level="2" className="contact-panel__heading" role="heading">WhatsApp</h2>

          <div className="contact-panel__dynamic-content is-loaded" id="js-whatsapp-content">
            <ul className="contact-panel__chat-description contact-panel__list unstyled-list" id="js-whatsapp-description">
              <li className="contact-panel__additional-info">
                <p>Need help sorting out your debts, have credit questions or want pensions guidance? Add +44 7701 342744 to your Whatsapp and send us a message.</p>
              </li>
              <li className="contact-panel__additional-info">
                <p>For everything else please contact us via Webchat or Telephone.</p>
              </li>
            </ul>

            <p className="smallprint">This service is currently only available in English.</p>

            <div className="contact-panel__button-container">
              <a className="contact-panel__button button t-whatsapp-button" href="https://wa.me/447701342744">Launch chat</a>
            </div>
          </div>
        </div>
      </div>

      <div className="l-contact-panel contact-panel__dynamic-content">
        <div className="contact-panel contact-panel--last">
          <h2 aria-level="2" className="contact-panel__heading t-contact-heading" role="heading">
            <span className="icon icon--call-us"></span>
            Contact us
          </h2>

          <ul className="contact-panel__list">
            <li className="t-contact-introduction contact-panel__additional-info contact-panel__contact-introduction">Give us a call for free and impartial money advice.</li>

            <li className="contact-panel__additional-info">
              <p className="contact-panel__contact-number">
                <a className="contact-panel__telephone t-contact-number" href="tel:+448001387777">
                  0800 138 7777
                </a>
              </p>
            </li>

            <li className="contact-panel__additional-info">Monday to Friday, 8am to 6pm</li>

            <li className="contact-panel__additional-info">Saturday, Sunday and Bank Holidays, closed</li>

            <li className="contact-panel__additional-info">
              <p>
                Our general email address is
                <a href="mailto:enquiries@maps.org.uk">enquiries@maps.org.uk</a>.
              </p>
            </li>

            <li className="contact-panel__additional-info">
              <div className="contact-panel__button-container">
                <a className="contact-panel__button button" href="mailto:enquiries@maps.org.uk">
                  Send Email
                </a>
              </div>
            </li>

            <li className="contact-panel__additional-info">
              <p>We will normally respond to your enquiry within 48 hours of receipt.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
}
