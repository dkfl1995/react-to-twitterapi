'use strict';

import React, {Component} from 'react';
import '.././scss/App.scss';

class AppView extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            timeline: this.props.state
        };
        this.updateInputState = this.updateInputState.bind(this);
        console.log(this.props);
    }
    updateInputState(e){
        this.setState({username: e.target.value});
    }
    submitForm(){

    }
    render(){
        return (
            <div>
                <form onSubmit={(e) => {e.preventDefault(); this.props.fetchUserTimeline(this.state.username)}}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'><h1>Please insert a screen name of twitter user to fetch timeline down here</h1></div>
                            <div className='col-md-3'>
                                <div className="d-flex justify-content-center">
                                    <input type="text" className='form rounded' onChange={this.updateInputState} placeholder="realdonaldtrump"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center">
                                    <input type="submit" value="Get dat timeline"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default AppView;