import React, { Component } from 'react';
import './App.css';
import Party from './components/party';
import State from './components/state';
import Name from './components/SearchName';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find Your Senator!</h1>
        <Name/>
        <Home/>
        <Party/>
        <br></br>
        <State/>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      
    );
  }
}

export default App;
