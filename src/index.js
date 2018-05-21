import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/containers/js/App';
import {configureStore} from '../src/store/store';
import rootReducers from './reducers/reducers';

var store = compose(applyMiddleware(thunk))(createStore)(rootReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') 
);