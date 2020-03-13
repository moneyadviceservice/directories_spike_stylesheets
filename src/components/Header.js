import React, {Component} from 'react';

export class Header extends Component {
  render = () =>
    <header class="l-header" role="banner">
      <div class="l-constrained l-header__content">
        <div class="mas-logo">
          <a class="mas-logo__link" href="https://www.moneyadviceservice.org.uk/en">
            <img 
              alt="Money Advice Service" 
              class="mas-logo__img" 
              src="https://masjumpprdstorage.blob.core.windows.net/responsive-assets/a/logo-sprite-en-f13de50d8bcd8dbbabfbe56b441a8633.png"/>
          </a>
        </div>

        <div class="l-header__locale locale">
          <a class="locale__link" href="/cy">Cymraeg</a>
        </div>
      </div>
    </header>
}
