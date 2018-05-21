import React, {Component} from 'react';

export default class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: this.props.created_at,
            text: this.props.text,
            author: this.props.user.name
        };
        console.log('created' + this.state.text);
    }
    render(){
        return (
            <div className="comment"> 
                <div className="info">
                    <div className="">Author: {this.state.author}</div>
                    <div className="">{this.state.date}</div>
                </div>
                <div className="">{this.state.text}</div>
            </div>
        );
    }
}