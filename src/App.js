import React, {Component} from 'react';
import {MapsBanner} from './components/MapsBanner';
import {Header} from './components/Header';
import {ContextBar} from './components/ContextBar';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

function App() {
  return (
    <div>
      <MapsBanner/>

      <Header/>

      <ContextBar/>

      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
