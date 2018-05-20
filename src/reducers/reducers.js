'use strict';
import {combineReducers} from 'redux';
import {timeline} from '../store/store';
var initialState = timeline;

function fetchSuccess(state = initialState, action){
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.type;
    
        default:
            return state;
    }
}

function fetchFail(state = initialState, action){
    switch (action.type) {
        case 'FETCH_FAILED':
            return action.type;
    
        default:
            return state;
    }
}

function receiveTimeline(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_TIMELINE':
            return Object.assign({}, state, action.json);
        default:
            return state;
    }
}

export default combineReducers({
    receiveTimeline, 
    fetchFail, 
    fetchSuccess
});