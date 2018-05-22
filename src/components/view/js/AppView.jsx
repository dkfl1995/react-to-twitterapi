'use strict';

import React, {Component} from 'react';
import Comment from './Comment.jsx';
import '.././scss/App.scss';

class AppView extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            timeline: []
        };
        this.updateInputState = this.updateInputState.bind(this);
        this.buildComments = this.buildComments.bind(this);
        console.log("our timeline: ", this.props.state);
    }
    updateInputState(e){
        this.setState({username: e.target.value});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.state !== this.props.state){
            console.log('Update: ', this.state);
            this.setState({timeline: nextProps.state});
        }
    }
    buildComments(timeline){
        console.log('BUILDING');
        if(typeof timeline === 'object'){
            var list = Object.values(timeline).map((value, index) => {
                return <div key={value.id_str}><Comment {...value} /></div> 
            });
            if (!list){return <div></div>}else{return list;}
            
        }else{
            return null;
        }
    }
    render(){
        // var comments = null;
        // comments = this.buildComments(this.state.timeline);
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
                            <div className="comments">
                                {this.buildComments(this.state.timeline)}
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default AppView;