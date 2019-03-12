import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './saga';

const devCompose = process.env.NODE_ENV === 'development'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnchancers = devCompose || compose;

export function configureStore(state = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        state,
        composeEnchancers(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
