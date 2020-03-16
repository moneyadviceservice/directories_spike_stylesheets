import React, {Component} from 'react';

export class Header extends Component {
  render = () =>
    <header className="l-header" role="banner">
      <div className="l-constrained l-header__content">
        <div className="mas-logo">
          <a className="mas-logo__link" href="https://www.moneyadviceservice.org.uk/en">
            MAS logo goes here
          </a>
        </div>

        <div className="l-header__locale locale">
          <a className="locale__link" href="/cy">Cymraeg</a>
        </div>
      </div>
    </header>
}
