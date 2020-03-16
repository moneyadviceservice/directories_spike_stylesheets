import React from 'react';
import styled from 'styled-components'; 

const MapsBanner = ({className}) => (
  <div className={className}>
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
)

const StyledMapsBanner = styled(MapsBanner)`
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #143960;

  .l-maps_banner__content {
    display: inline;
    float: left;
    width: 96.6666666667%;
    margin-left: 1.6666666667%;
    margin-right: 1.6666666667%;
    height: 54px;
    padding: 13px 0; 
  }
`; 

export {StyledMapsBanner}
