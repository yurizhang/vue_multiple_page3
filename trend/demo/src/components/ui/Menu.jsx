import React, { Component } from 'react';
import './App.css';
//按需加载
import Menu from '../../ishow/Menu/index.js';
import ParamTable from './paramTable';
import ViewCode from './viewCode';
//import {Button,ButtonGroup,Tabs,TabPane,Collapse,CollapseItem,Message} from '../../components/ishow/index.js'; //一次性加载完
class App extends Component {
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','Nav','菜单']);
  // }
  constructor(props) {
    super(props);
    this.state = {

  }

  }
  onSelect() {

  }
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Menu 菜单</h1>
        <h3>Menu的基本使用</h3>
        <div style={{marginBottom:20}}>
        <h4>theme:dark</h4>
          <Menu theme="dark" defaultActive="1" className="ishow-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
            <Menu.Item index="1">处理中心</Menu.Item>
            <Menu.SubMenu index="2" title="我的工作台">
              <Menu.Item index="2-1">选项1</Menu.Item>
              <Menu.Item index="2-2">选项2</Menu.Item>
              <Menu.Item index="2-3">选项3</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3">订单管理</Menu.Item>
          </Menu>
          <div style={{marginTop:20}}>
          <Menu defaultActive="1" className="ishow-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
            <Menu.Item index="1">处理中心</Menu.Item>
            <Menu.SubMenu index="2" title="我的工作台">
              <Menu.Item index="2-1">选项1</Menu.Item>
              <Menu.Item index="2-2">选项2</Menu.Item>
              <Menu.Item index="2-3">选项3</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item index="3">订单管理</Menu.Item>
          </Menu>
          </div>
        </div>
        <ViewCode name="Menu" code="0"/>
        <ParamTable name='Menu'/>
        <ParamTable name='SubMenu'/>
        <ParamTable name='MenuGroup'/>
        <ParamTable name='MenuItem'/>
      </div>
    );
  }
}

export default App;
