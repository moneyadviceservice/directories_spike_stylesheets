import React, {Component} from 'react';
import {MapsBanner} from './components/MapsBanner';
import {Header} from './components/Header';
import {ContextBar} from './components/ContextBar';
import {Main} from './components/Main';
import {ContactPanels} from './components/ContactPanels';
import {Footer} from './components/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <MapsBanner/>
      <Header/>
      <ContextBar/>
      <Main/>
      <ContactPanels/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
