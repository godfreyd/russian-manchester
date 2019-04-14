import React from 'react';
import * as Sentry from '@sentry/browser';

const withLocalStorage = ComposedComponent => {
    return class LocalStorage extends React.Component {
        getItem = key => {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                Sentry.captureException(error);
            }
        }

        setItem = (key, value) => {
            try {
                localStorage.setItem(key, value);
            } catch (error) {
                Sentry.captureException(error);
            }
        }

        removeItem = key => {
            try {
                localStorage.removeItem(key);
            } catch (error) {
                Sentry.captureException(error);
            }
        }

        clear = () => {
            try {
                localStorage.clear();
            } catch (error) {
                Sentry.captureException(error);
            }
        }

        render() {
            const localStorage = {
                getItem: this.getItem,
                setItem: this.setItem,
                removeItem: this.removeItem,
                clear: this.clear
            };

            return (
                <ComposedComponent
                    localStorage={localStorage}
                    {...this.props}
                />
            );
        }
    };
};

export default withLocalStorage;
