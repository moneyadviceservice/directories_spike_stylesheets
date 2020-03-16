import React, {Component} from 'react';

export class ContextBar extends Component {
  render = () =>
    <div className="l-context-bar">
      <div className="l-constrained">
        <nav className="breadcrumbs" role="navigation" aria-label="breadcrumbs">
          <ul className="unstyled-list">
            <li className="breadcrumbs__item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
              <a className="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en" itemProp="url">
                <span itemProp="title">Home</span>
              </a>
            </li>
            <li className="breadcrumbs__item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="visually-hidden">&gt;</span>
              <span className="breadcrumbs__divider" aria-hidden="true"></span>
              <a className="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en/categories/pensions-and-retirement" itemProp="url">
                <span itemProp="title">Pensions and Retirement</span>
              </a>
            </li>
            <li className="breadcrumbs__item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="visually-hidden">&gt;</span>
              <span className="breadcrumbs__divider" aria-hidden="true"></span>
              <a className="breadcrumbs__link" href="https://www.moneyadviceservice.org.uk/en/categories/getting-advice-about-retirement" itemProp="url">
                <span itemProp="title">Financial Advice</span>
              </a>
            </li>
            <li className="breadcrumbs__item" itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="visually-hidden">&gt;</span>
              <span className="breadcrumbs__divider" aria-hidden="true"></span>
              <a className="breadcrumbs__link" href="/en" itemProp="url">
                <span itemProp="title">Retirement Adviser Directory</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
}
