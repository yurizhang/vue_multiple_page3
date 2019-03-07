import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from '../../ishow/Button/index';
import ButtonGroup from "../../ishow/Button/ButtonGroup";
import Tabs from "../../ishow/Tab/Tabs";
import TabPane from "../../ishow/Tab/TabPane";
import Collapse from "../../ishow/Collapse/Collapse";
import CollapseItem from "../../ishow/Collapse/CollapseItem";
import Message from "../../ishow/Message/Message";

//import {Button,ButtonGroup,Tabs,TabPane,Collapse,CollapseItem,Message} from '../../components/ishow/index.js'; //一次性加载完
import ViewCode from './viewCode';
import ParamTable from './paramTable';
Tabs.Pane = TabPane;
Button.Group = ButtonGroup;
Collapse.Item = CollapseItem;
class App extends Component {
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','按钮']);
  // }

  //for button
   clickme = () =>{
      Message.warning("hello");
      //编程式跳转
      this.props.history.push('/app/ui/icons');
  }  
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Button 按钮</h1>
        <h2>常用的操作按钮</h2>
        <div>
          <Tabs type="card" value="1" style={{marginBottom:40}} >
            <Tabs.Pane label="基础按钮" name="1">
              <h3 style={{margin:20}}>基础用法</h3>
              <Button onClick={this.clickme.bind(this)}>普通按钮</Button>
              <Button type="primary">主要按钮</Button>
              <Button type="text">文字按钮</Button>
              <ViewCode name="Button" code="0"/>
            </Tabs.Pane>
            <Tabs.Pane label="禁用按钮" name="2">
               <h3 style={{margin:20}}>禁用按钮，disabled属性，boolean，默认false（不是禁用状态）</h3>
              <Button plain={true} disabled={true}>普通按钮</Button>
              <Button type="primary" disabled={true}>主要按钮</Button>
              <Button type="text" disabled={true}>文字按钮</Button>
              <ViewCode name="Button" code="1"/>
            </Tabs.Pane>
            <Tabs.Pane label="加载中按钮" name="3">
              <h3 style={{margin:20}}>加载中按钮，loading属性，boolean，默认false（不是加载状态）<p style={{color:'#F56C6C',display:"inline"}}>（注意：执行表单提交操作时，建议将按钮设置为此状态，以避免重复提交）</p></h3>
              <Button type="primary" loading={true}>加载中</Button>
              <ViewCode name="Button" code="2"/>
            </Tabs.Pane>
            <Tabs.Pane label="有颜色的按钮" name="4">
            <h3 style={{margin:20}}>有颜色的按钮，type属性，string，可选值：success，warning，danger，info如下所示；</h3>
            <h3 style={{margin:20}}>plain属性，boolean，hover时展示不同颜色（true），默认false</h3>
              <Button type="success">成功按钮</Button>
              <Button type="warning">警告按钮</Button>
              <Button type="danger">危险按钮</Button>
              <Button type="info">信息按钮</Button>
              <Button plain={true} type="success">成功按钮</Button>
              <Button plain={true} type="warning">警告按钮</Button>
              <Button plain={true} type="danger">危险按钮</Button>
              <Button plain={true} type="info">信息按钮</Button>
              <ViewCode name="Button" code="3"/>
            </Tabs.Pane>
            <Tabs.Pane label="图标按钮" name="5">
              <h3 style={{margin:20}}>带图标的按钮：icon属性，string，接受一个图标名称</h3>
              <Button type="primary" icon="edit"></Button>
              <Button type="primary" icon="share"></Button>
              <Button type="primary" icon="delete"></Button>
              <Button type="primary" icon="search">搜索</Button>
              <Button type="primary">上传<i className="ishow-icon-upload ishow-icon-right"></i></Button>
              <ViewCode name="Button" code="4"/>
            </Tabs.Pane>
            <Tabs.Pane label="不同尺寸按钮" name="6">
              <h3 style={{margin:20}}>不同尺寸的按钮，size属性，string，可选值：large，small，mini，不加为正常大小</h3>
              <Button type="primary" size="large">大型按钮</Button>
              <Button type="primary">正常按钮</Button>
              <Button type="primary" size="small">小型按钮</Button>
              <Button type="primary" size="mini">超小按钮</Button>
              <ViewCode name="Button" code="6"/>
            </Tabs.Pane>
            <Tabs.Pane label="按钮组" name="7">
            <h3 style={{margin:20}}>按钮组，使用ButtonGroup，一般用于需要统一样式的或者有关联的按钮组合</h3>
              <Button.Group>
                <Button type="primary" icon="arrow-left">上一页</Button>
                <Button type="primary">下一页<i className="ishow-icon-arrow-right ishow-icon-right"></i></Button>
              </Button.Group>
              &nbsp;&nbsp;&nbsp;
              <Button.Group>
                <Button type="primary" icon="edit"></Button>
                <Button type="primary" icon="share"></Button>
                <Button type="primary" icon="delete"></Button>
              </Button.Group>
              <ViewCode name="Button" code="5"/>
            </Tabs.Pane>
          </Tabs>
        </div>
        <div>
        </div>
        <ParamTable name='Button'/>
      </div>
    );
  }
}

export default App;
