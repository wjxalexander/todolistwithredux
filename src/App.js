import React, { Component } from 'react';
import './App.css';
import {Input,Button,List} from 'antd'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "50%", marginLeft: "20px"}}>
       <Input style={{width:"300px"}} />
       <Button type="primary">add a todolist</Button>
       <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
    />
      </div>
    );
  }
}

export default App;
