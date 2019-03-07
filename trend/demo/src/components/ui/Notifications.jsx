import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from "../../ishow/Button/Button";
import Notification from '../../ishow/Notification/NotificationCenter';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  };
  
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','通知弹框']);
  // }
  open3() {
    Notification({
      title: '成功',
      message: '这是一条成功的提示消息',
      type: 'success'
    });
  }
  
  open4() {
    Notification({
      title: '警告',
      message: '这是一条警告的提示消息',
      type:'warning',
      iconClass:'ishow-icon-time', //可与type同时使用，同时设置为iconClass的图标
      duration: 0
    });
  }
  
  open5() {
    Notification.info({
      title: '消息',
      message: '这是一条消息的提示消息'
    });
  }
  
  open6() {
    Notification.error({
      title: '错误',
      message: '这是一条错误的提示消息，并且不会自动关闭',
      duration: 0
      
    });
  }
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Notification 通知弹框</h1>
        <h3>常用的通知弹框</h3>
        <h3 style={{ margin: 20 }}>悬浮出现在页面右上角，显示全局的通知提醒消息。</h3>
        <div style={{marginBottom:20}}>
            <Button onClick={this.open3.bind(this)}>成功</Button>
            <Button onClick={this.open4.bind(this)}>警告</Button>
            <Button onClick={this.open5.bind(this)}>消息</Button>
            <Button onClick={this.open6.bind(this)}>错误消息并且不会自动关闭</Button>
            <ViewCode name="Notification" code="0" />
        </div>
        <div style={{marginBottom:20}}>

        </div>
        <div style={{marginBottom:20}}>

        </div>
        <div style={{marginBottom:20}}>

        </div>
        <div style={{marginBottom:20}}>

            </div>
        <ParamTable name='Notification'/>
      </div>
    );
  }
}

export default App;
