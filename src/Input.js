import React, { Component } from 'react';
import './App.css';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
        }
    }

    onChangeInput(val) {
        this.setState({
            input: val
        })
    }
    onClick(val){
        this.props.onClickAdd(val);
    }
    render() {
        return (
            <div className="input">
                <input value={this.state.input} onChange={(ev) => {
                    this.onChangeInput(ev.target.value)
                }} />
                <button onClick={() => {
                    this.onClick(this.state.input);
                    this.setState({
                        input: ""
                    })
                }}>Add</button>
            </div>
        );
    }
}

export default Input;
