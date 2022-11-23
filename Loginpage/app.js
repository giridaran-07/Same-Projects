import React from 'react';
import ReactDOM from 'react-dom';

import ReactStormpath, { Router, AuthenticatedRoute, LoginRoute } from 'react-stormpath';
import { Route, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

ReactStormpath.init({
  endpoints: {
    login: '/signin',
    register: ‘/signup’,
    forgotPassword: ‘/lostpass’
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <AuthenticatedRoute path='/' component={MainPage} />
    <LoginRoute path='/login' component={LoginPage} />
  </Router>,
  document.getElementById('root')
);
