import React, {Component} from 'react';
import {MapsBanner} from './MapsBanner';
import {Header} from './Header';
import {ContextBar} from './ContextBar';
import {Main} from './Main';
import {Footer} from './Footer';

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
