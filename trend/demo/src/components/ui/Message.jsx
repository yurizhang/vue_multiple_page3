import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from "../../ishow/Button/Button";
import Tabs from "../../ishow/Tab/index";
import Message from '../../ishow/Message/Message';
import MessageBox from '../../ishow/MessageBox/index';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
// Button.Group = ButtonGroup;
// Collapse.Item = CollapseItem;
// Form.Item = FormItem;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  // componentDidMount() {
  //   //console.log(this.props);
  //   this.props.changeBread(['首页', 'UI', '消息弹框']);
  // }

  open() {
    Message({
      message: '恭喜你，这是一条成功消息',
      type: 'success',
      showClose: true
    });
  }

  open2() {
    Message({
      message: '警告哦，这是一条警告消息',
      type: 'warning',
      showClose: true
    });
  }

  open3() {
    Message({
        showClose: true,
        message: '这是一条消息提示',
        type: 'info'
    });
  }

  open4() {
    Message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
    });
  }
  onClick() {
    MessageBox.alert('这是一段内容', '标题名称');
  }
  onClick2() {
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    }).then(() => {
      Message({
        type: 'success',
        message: '删除成功!'
      });
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消删除'
      });
    });
  }
  onClick3() {
    MessageBox.prompt('请输入邮箱', '提示', {
      inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱格式不正确'
    }).then(({ value }) => {
      Message({
        type: 'success',
        message: '你的邮箱是: ' + value
      });
    }).catch(() => {
      Message({
        type: 'info',
        message: '取消输入'
      });
    });
  }
  onClick4() {
    MessageBox.msgbox({
      title: '消息',
      message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
      showCancelButton: true
    }).then(action => {
      Message({
        type: 'info',
        message: 'action: ' + action
      });
    })
  }
  render() {
    //for Collapse
    //const activeName = '1';
    return (
      <div className="App">
       <Tabs type="card" value="1" style={{marginBottom:40}} >
            <Tabs.Pane label="Message 消息弹框" name="1">
              <h2>Message 消息弹框</h2>
              <h3>常用的消息弹框</h3>
              <div style={{ marginBottom: 20 }}>
              <h3 style={{ margin: 20 }}> 用来显示「成功、警告、消息、错误」类的操作反馈。常用于主动操作后的反馈提示，与 通知弹框 的区别是后者更多用于系统级通知的被动提醒。</h3>
                <Button plain={true} onClick={this.open.bind(this)}>成功</Button>
                <Button plain={true} onClick={this.open2.bind(this)}>警告</Button>
                <Button plain={true} onClick={this.open3.bind(this)}>消息</Button>
                <Button plain={true} onClick={this.open4.bind(this)}>错误</Button>
                <ViewCode name="Message"  code="0"/>
              </div>
              <ParamTable name="Message" />
            </Tabs.Pane>
            <Tabs.Pane label="Message Box 信息提示" name="2">
              <h2>Message Box 信息提示</h2>
            <h3>信息提示框，模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。</h3>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{margin:20}}>查看消息提示，不可操作<Button type="text" onClick={this.onClick.bind(this)}>点我查看消息提示</Button></h3>
                <ViewCode name="MessageBox"  code="0"/>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{margin:20}}>查看消息提示，并可操作。<Button type="text" onClick={this.onClick2.bind(this)}>点我确认消息</Button></h3>
                <ViewCode name="MessageBox"  code="1"/>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{margin:20}}>类似于confirm对话框。 <Button type="text" onClick={this.onClick3.bind(this)}>点我提交内容</Button></h3>
                <ViewCode name="MessageBox"  code="2"/>
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{margin:20}}>自行定义不同内容。          <Button type="text" onClick={this.onClick4.bind(this)}>点我查看自定义内容</Button></h3>
                <ViewCode name="MessageBox"  code="3"/>
              </div>
              <ParamTable name="MessageBox" />
            </Tabs.Pane>
       </Tabs>  
      </div>
    );
  }
}

export default App;
