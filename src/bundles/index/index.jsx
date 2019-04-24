/* globals document */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { configureStore } from '../../redux/store';
import { getInitialState } from '../../redux/state';

import './index.css';

import MainPage from '../../pages/main';

export default class App extends Component {
    render() {
        const { lang, title } = this.props.appData;

        return (
            <div className="app">
                <Helmet>
                    <html lang={lang} />
                    <title>{title}</title>
                    <meta property="og:type" content="website" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                </Helmet>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/search" component={MainPage} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    appData: propTypes.object
};

App.childContextTypes = {
    lang: propTypes.string,
    i18n: propTypes.object
};

App.getInitialState = getInitialState;
App.configureStore = configureStore;
