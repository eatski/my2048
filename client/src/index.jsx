import React from 'react';
import { render } from 'react-dom';
import App from '@/components/App';
import submit from '@/reducers';
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import sagas from './saga'
import '@/style.scss';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(submit,{cells:null},applyMiddleware(sagaMiddleware,logger));

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);

sagaMiddleware.run(sagas);
