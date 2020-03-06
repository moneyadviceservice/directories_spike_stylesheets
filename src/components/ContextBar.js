import React, {Component} from 'react';

export class ContextBar extends Component {
  render = () =>
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
}
