import React, {Component} from 'react';

export class MapsBanner extends Component {
  render = () =>
    <div className="l-maps_banner">
      <div className="l-constrained">
        <div className="l-maps_banner__content">
          <a href="https://moneyandpensionsservice.org.uk/" target="_blank" className="maps_banner__link">
            <span className="maps_banner__mps-text">
              <span>The Money Advice</span>
              <span>Service is provided by</span>
            </span>

            <span className="maps_banner__mps-logo"></span>

            <span className="visually-hidden">opens in a new window</span>
          </a>
        </div>
      </div>
    </div>
}
