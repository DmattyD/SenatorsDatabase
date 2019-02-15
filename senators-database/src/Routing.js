import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// this imports the router component from React
import Party from './components/party';
import State from './components/state';
import Name from './components/SearchName';
import Home from './components/Home';
import Header from './components/header';



const Routing = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Party" component={Party} />
        <Route path="/Name" component={Name} />
        <Route path="/Header" component={Header} />
        <Route path="/State" component={State} />
    </Switch>
    </Router>
  );
  


export default Routing;