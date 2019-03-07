import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from '../../ishow/Button/Button';
import Dropdown from '../../ishow/Dropdown/index.js';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Message from '../../ishow/Message/Message';
class App extends Component {
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','Nav','下拉菜单']);
  // }
  constructor(props) {
    super(props);
  
    this.state = {

  }

  }

  handleClick() {
    alert('button click');
  }
  handleCommand(command) {
    Message('click on item ' + command);
  }
  render(){
    //for Collapse
    return (
      <div className="App">
        <h1>Dropdown 菜单</h1>
        <h3>Dropdown的基本使用</h3>
        <div style={{marginBottom:20}}>
        <div>
      <Dropdown menu={(
        <Dropdown.Menu  style={{position:'absolute',top:36,left:3}}>
          <Dropdown.Item>张勇</Dropdown.Item>
          <Dropdown.Item>陈瑜婷</Dropdown.Item>
          <Dropdown.Item>盛瑜</Dropdown.Item>
          <Dropdown.Item>刘兴</Dropdown.Item>
          <Dropdown.Item>赵斐昊</Dropdown.Item>
          <Dropdown.Item>黄杰</Dropdown.Item>
          <Dropdown.Item>刘泽琼</Dropdown.Item>
          <Dropdown.Item>唐媛媛</Dropdown.Item>
        </Dropdown.Menu>
      )}>
        <Button type="primary">
          途牛ELF-Team成员<i className="ishow-icon-caret-bottom ishow-icon--right"></i>
        </Button>
      </Dropdown>&nbsp;&nbsp;
      <Dropdown splitButton={true} onCommand={this.handleCommand.bind(this)} type="primary" onClick={this.handleClick.bind(this)} menu={(
        <Dropdown.Menu>
               <Dropdown.Item command="张勇">张勇</Dropdown.Item>
          <Dropdown.Item command="陈瑜婷" divided>陈瑜婷</Dropdown.Item>
          <Dropdown.Item command="盛瑜">盛瑜</Dropdown.Item>
          <Dropdown.Item command="刘兴">刘兴</Dropdown.Item>
          <Dropdown.Item command="赵斐昊" disabled>赵斐昊</Dropdown.Item>
          <Dropdown.Item command="黄杰">黄杰</Dropdown.Item>
          <Dropdown.Item command="刘泽琼">刘泽琼</Dropdown.Item>
          <Dropdown.Item command="唐媛媛">唐媛媛</Dropdown.Item>
        </Dropdown.Menu>
      )}>更多菜单</Dropdown>

      <ViewCode name="Dropdown" code="0"/>
    </div>
        </div>
        <ParamTable name='Dropdown'/>
        <ParamTable name='DropdownMenuItem'/>
      </div>
    );
  }
}

export default App;
