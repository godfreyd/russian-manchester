/* globals document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { configureStore } from '../../redux/store';
import { getInitialState } from '../../redux/state';

import './index.css';

import AdminPage from '../../pages/admin';
// import UserPage from '../../pages/user';
import MainPage from '../../pages/main';
import ErrorPage from '../../pages/error';

export default class App extends Component {

    render() {
        // const { lang, title } = this.props.appData;

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
                    <Route component={ErrorPage} />
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

App.propTypes = {
    appData: PropTypes.object
};

App.childContextTypes = {
    lang: PropTypes.string
};

App.getInitialState = getInitialState;
App.configureStore = configureStore;
