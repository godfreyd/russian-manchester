/* globals document */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { configureStore } from '../../redux/store';
import { getInitialState } from '../../redux/state';

import MetrikaCounter from '../../common.components/metrika-counter';

import UserPage from '../../pages/user';
import MainPage from '../../pages/main';
import ErrorPage from '../../pages/error';

import './index.css';

export default class App extends Component {
    render() {
        const { lang, title, metrikaId, env } = this.props.appData;

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
                    <Route exact path="/user/:login" render={props => <UserPage key={props.match.params.login} login={props.match.params.login} {...props} />} />
                    <Route component={ErrorPage} />
                </Switch>
                {env === 'production' &&
                    <MetrikaCounter
                        metrika={{
                            id: metrikaId,
                            clickmap: true,
                            trackLinks: true,
                            webvisor: true,
                            accurateTrackBounce: true
                        }}
                    />
                }
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
