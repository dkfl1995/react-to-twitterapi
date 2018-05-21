'use strict';

import React, {Component} from 'react';
import AppView from '../../view/js/AppView.jsx';
import {connect} from 'react-redux';
import {fetchTimeline} from '../../../actions/actions';

const mapStateToProps = function(state){
    return {
        state: state.receiveTimeline
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
    constructor(props){
        super(props);
        this.state = {
            props: this.props
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.state !== this.props.state){
            this.setState({props: nextProps});
        }
    }
    render(){
        let props = this.state.props;
        console.log('Props ',this.props);
        return(
            <div>
                <AppView {...props}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)