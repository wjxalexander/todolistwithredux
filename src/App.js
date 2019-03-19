import React, { Component } from 'react';
import './App.css';
import {Input,Button,List} from 'antd'
import store from "./store"
import {Delete_todoItem, Add_todoItem, Change_inputVal} from "./store/actionTypes"


class App extends Component {
  constructor(props){
     super(props)
     this.state = store.getState()
     store.subscribe(this.handleChange)
  }
 
  render() {
    const {list,inputVal} = this.state
    return (
      <div className="App" style={{width: "50%", marginLeft: "20px"}}>
       <Input 
         style={{width:"300px"}} 
         value={inputVal} 
         onChange = {this.inputChange}/>
       <Button type="primary" onClick = {this.handleClick}>add a todolist</Button>
       <List
        size="large"
        header={<div>To Do List</div>}
        bordered
        dataSource={list}
        renderItem={(item,index) => (<List.Item onClick={()=>this.handleDelete(index)}>{item}</List.Item>)}
    />
      </div>
    );
  }
  inputChange = (e)=>{
    const action = {
      type: Change_inputVal,
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleChange = ()=>{
    this.setState(store.getState())
  }
  handleClick = ()=>{
    if(!this.state.inputVal.trim()) return;
    const action = {
      type: "add_todoItem",
      value: this.state.inputVal
    }
    store.dispatch(action)
  }
  handleDelete= (index) =>{
    const action = {
      type: Delete_todoItem,
      index
    }
    store.dispatch(action)
  }
}

export default App;
