import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import store from '../../store';
import 'react-toastify/dist/ReactToastify.min.css';
import { setIsAuthenticated, signOutUser } from '../../actions/authAction.js';
import '../../styles/styles.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShippingFast,
  faLock,
  faMap,
  faFighterJet,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from '../SignIn/SignIn';
import NewOrderPage from '../Layout/NewOrderPage';
import OrderDetailsPage from '../Layout/OrderDetailsPage';
import ProfilePage from '../Layout/ProfilePage';

if (localStorage.getItem('token')) {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log('decodedToken', decodedToken);
  if (decodedToken) {
    store.dispatch(setIsAuthenticated(decodedToken));
  } else {
    store.dispatch(signOutUser());
  }
}

library.add(faShippingFast, faLock, faMap, faFighterJet, faPlus);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <>
          <ToastContainer autoClose={3000} position="top-right" />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/order-details" component={OrderDetailsPage} />
            <Route path="/new-order" component={NewOrderPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/" component={HomePage} />
          </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
