import React, { Component } from 'react';
import './App.css';
import Item from "./Item"
import Input from "./Input"

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:"",
      data : [
        {
          name: "item 1",
          isDone: false
        },
        {
          name: "item 2",
          isDone: false
        },
        {
          name: "item 3",
          isDone: true
        },
      ]
    }
  }
  onClickAdd = (val) =>{
    console.log(val);
    this.setState({
      data:[...this.state.data,{
        name: val,
        isDone: false
      }]
    })
  }
  onClickDone(index){
      let data = [...this.state.data];
      data = data.map((item, i)=>{
        if(i === index){
          item.isDone = !item.isDone;
        }
        return item;
      })


    this.setState({
      data: [...data]
    })
  }
  render() {
      return (
        <div className="App">
          <h1>Todo List</h1>
          <Input onClickAdd={this.onClickAdd}/>
          <li>
            {this.state.data.map((item,index)=>{
              return (
                <Item name={item.name} isDone={item.isDone}/>
              )
            })}
          </li>
        </div>
      );
    }
  }

export default App;
