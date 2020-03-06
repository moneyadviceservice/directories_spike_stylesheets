import React, {Component} from 'react';

export class MapsBanner extends Component {
  render = () =>
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
}
