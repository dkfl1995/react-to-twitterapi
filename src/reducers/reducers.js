'use strict';
import {combineReducers} from 'redux';
import {timeline} from '../store/store';

var initialState = [];
console.log(initialState);

function fetchSuccess(state = false, action){
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.type;
    
        default:
            return state;
    }
}

function fetchFail(state = false, action){
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
            console.log("res: ", action.json);
            return Object.assign({}, state, action.json);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    receiveTimeline, 
    fetchFail, 
    fetchSuccess
});
export default rootReducer;