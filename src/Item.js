import React, { Component } from 'react';
import './App.css';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            isDone: false
        }
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,
            isDone: this.props.isDone
        })
    }
    
    onClickDone(){
        this.setState({
            isDone : !this.state.isDone
        })
    }
    render() {
        return (
            <ul onClick={()=>{
                this.onClickDone();
            }} className={this.state.isDone ? "done" : ""}>{this.state.name}</ul>
        );
    }
}

export default Item;
