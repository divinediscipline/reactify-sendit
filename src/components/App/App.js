import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShippingFast,
  faLock,
  faMap,
  faFighterJet
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';

library.add(faShippingFast, faLock, faMap, faFighterJet);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
