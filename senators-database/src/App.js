import React, { Component } from 'react';
import './App.css';
import Routing from './Routing'
//import Senators from './components/senatorsDB';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Routing/>
   
      </div>
      // <div className="App">
      //  <Senators/>return (SENATORS.map((s) => ({SENATORS.name})))
      // </div>
    );
  }

}

export default App;
