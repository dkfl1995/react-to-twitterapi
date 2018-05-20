import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/containers/js/App';

import combineReducers from './reducers/reducers';


var store = compose(applyMiddleware(thunk))(createStore)(combineReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') 
);