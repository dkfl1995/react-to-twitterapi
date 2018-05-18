'use strict';
import {combineReducers} from 'redux';
import {timeline} from '../store/store';
var initialState = timeline;

function fetchUserTimeline(state = initialState, action){
    return state;
}

export default combineReducers({
    fetchUserTimeline
});