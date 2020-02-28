import React, {Component} from 'react';

export class Header extends Component {
  render = () =>
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
}
