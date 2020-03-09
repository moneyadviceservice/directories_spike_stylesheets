import React from 'react';
import {StyledMapsBanner} from './components/MapsBanner';
import {Header} from './components/Header';
import {ContextBar} from './components/ContextBar';
import {Main} from './components/Main';
import {ContactPanels} from './components/ContactPanels';
import {Footer} from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <StyledMapsBanner/>
      <Header/>
      <ContextBar/>
      <Main/>
      <ContactPanels/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
