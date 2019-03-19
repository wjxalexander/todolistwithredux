import React, { Component } from 'react';
import './App.css';
import {Input,Button,List} from 'antd'
import store from "./store"

class App extends Component {
  constructor(props){
     super(props)
     this.state = store.getState()
  }
  render() {
    const {list,inputVal} = this.state
    return (
      <div className="App" style={{width: "50%", marginLeft: "20px"}}>
       <Input style={{width:"300px"}} value={inputVal}/>
       <Button type="primary">add a todolist</Button>
       <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={item => (<List.Item>{item}</List.Item>)}
    />
      </div>
    );
  }
}

export default App;
