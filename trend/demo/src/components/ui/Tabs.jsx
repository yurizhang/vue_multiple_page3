import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from "../../ishow/Button/index";
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        tabs: [{
            title: 'Tab 1',
            name: 'Tab 1',
            content: 'Tab 1 content',
          }, {
            title: 'Tab 2',
            name: 'Tab 2',
            content: 'Tab 2 content',
          }],
          tabIndex: 2,
    }
  };
  
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','标签页']);
  // }

  addTab() {
    const { tabs, tabIndex } = this.state;
    const index = tabIndex + 1;
  
    tabs.push({
      title: 'new Tab',
      name: 'Tab ' + index,
      content: 'new Tab content',
    });
    this.setState({
      tabs,
      tabIndex: index,
    });
  }
  
  removeTab(tab) {
    const { tabs } = this.state;
  
    tabs.splice(tab.key.replace(/^\.\$/, ''), 1);
    this.setState({
      tabs,
    });
  }
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Tabs 标签页</h1>
        <h3>常用的标签页</h3>
        <div style={{marginBottom:20}}>
        <h3>基本标签页</h3>
        <Tabs activeName="2" addable={true} onTabClick={ (tab) => console.log(tab.props.name) } className="tabs_border_bottom">
            <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
            <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
            <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
            <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
        </Tabs>
        <ViewCode name="Tab" code="0"/>
        </div>
        <div style={{marginBottom:20}}>
        <h3>选项卡样式的标签页</h3>
        <Tabs type="card" value="1" className="tabs_border" >
            <Tabs.Pane label="首页" name="1" >首页</Tabs.Pane>
            <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
            <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
            <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
        </Tabs>
        <ViewCode name="Tab" code="1"/>
        </div>
        <div style={{marginBottom:20}}>
        <h3>可关闭的标签页</h3>
          <Tabs type="card" closable activeName="1" onTabRemove={(tab) => console.log(tab.props.name)} className="tabs_border">
            <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
            <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
            <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
            <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
        </Tabs>
        <ViewCode name="Tab" code="2"/>
        </div>
        <div style={{marginBottom:20}}>
        <h3>卡片化标签页 type=‘border-card’</h3>
          <Tabs type="border-card" activeName="1" className="tabs_border_bottom">
            <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
            <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
            <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
            <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
        </Tabs>
        <ViewCode name="Tab" code="3"/>
        </div>
        <div style={{marginBottom:20}}>
        <h3>可添加减少的标签页</h3>
          <div style={{ marginBottom: '20px' }}>
                <Button size="small" onClick={() => this.addTab()}>add tab</Button>
            </div>
          <Tabs type="card" value="Tab 2" onTabRemove={(tab) => this.removeTab(tab)} onTabAdd={console.log('added')} className="tabs_border">
                {
                this.state.tabs.map((item, index) => {
                    return <Tabs.Pane key={index} closable label={item.title} name={item.name}>{item.content}</Tabs.Pane>
                })
                }
            </Tabs>
            <ViewCode name="Tab" code="4"/>
            </div>
        <ParamTable name='Tab'/>
        <ParamTable name='TabPane'/>
      </div>
    );
  }
}

export default App;
