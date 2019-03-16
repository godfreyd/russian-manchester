import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as Sentry from '@sentry/browser';
import Helmet from 'react-helmet';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import { configureStore } from './redux/store';
import { getInitialState } from './redux/state';

// import UserPage from 'pages/user';
import AdminPage from 'pages/admin';
import MainPage from 'pages/main';
// import ErrorPage from 'pages/error';


export default class App extends Component {

  // componentDidMount() {
  //     const { sentry } = this.props.appData;

  //     Sentry.init({ ...sentry });
  // }

  render() {
    return (
      <div className="App">
        <Helmet>
            <html lang='ru' />
            <title>Магазин</title>
            <meta property="og:type" content="website" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/search" component={MainPage} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// App.getInitialState = getInitialState;
// App.configureStore = configureStore;

// export default App;


App.propTypes = {
  appData: PropTypes.object
};

App.childContextTypes = {
  lang: PropTypes.string,
  i18n: PropTypes.object
};

App.getInitialState = getInitialState;
App.configureStore = configureStore;
