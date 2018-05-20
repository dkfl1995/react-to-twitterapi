'use strict';

import React, {Component} from 'react';
import AppView from '../../view/js/AppView.jsx';
import {connect} from 'react-redux';
import {fetchTimeline} from '../../../actions/actions';

const mapStateToProps = function(state){
    return {
        state
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        fetchUserTimeline: screenName => {
            dispatch(fetchTimeline(screenName));
        }
    };
};

class App extends Component{
    render(){
        let props = this.props;
        return(
            <div>
                <AppView {...props}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)