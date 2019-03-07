import React, { Component } from 'react';
import './App.css';
//按需加载
import Breadcrumb from '../../ishow/Breadcrumb/index.js';
import IconPlus from '../../ishow/LayoutComponent/icon/index';
import MessageBox from '../../ishow/MessageBox/index';
import trendFun from '../../plugs/function';

//import {Button,ButtonGroup,Tabs,TabPane,Collapse,CollapseItem,Message} from '../../components/ishow/index.js'; //一次性加载完
import ViewCode from './viewCode';
import ParamTable from './paramTable';
const trendCommonFun = new trendFun()
// const userId = Number(trendCommonFun.getSingleCookie('userId'));
class App extends Component {
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','Nav','面包屑']);
  // }
  constructor(props) {
    super(props);
  
    this.state = {

  }

  }
  copyUrl = () => {
    let flag = trendCommonFun.copyTextToClipboard(window.location.href);
    if (flag) {
      MessageBox.msgbox({
        title: '提示',
        message: '已成功复制到剪切板！',
        type: 'success'
      });
    } else {
      MessageBox.msgbox({
        title: '提示',
        message: "复制失败了",
        type: 'warning'
      });
    }
  }

  render(){
    //for Collapse
    return (
      <div className="App" >
        <h1>Breadcrumb 菜单</h1>
        <h3>Breadcrumb的基本使用</h3>
        <div style={{ margin: 20}} >
          <Breadcrumb separator="/">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>活动管理</Breadcrumb.Item>
            <Breadcrumb.Item>活动列表</Breadcrumb.Item>
            <Breadcrumb.Item>活动详情</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        
        <ViewCode name="Breadcrumb" code="0"/>
        <h3>BOSS3框架的推荐使用</h3>
        {/* <div className="allInOneBreadCrumbs"  >
          <div>
            <Breadcrumb separator="/">
             <Breadcrumb.Item>投诉管理系统</Breadcrumb.Item>
             <Breadcrumb.Item>投诉单查询</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <span className="allInOneBreadCrumbsButton">
            <i title="刷新" className="anticon anticon-reload"></i>
          </span>  
        </div> */}
        <div className="allInOneBreadCrumbs" style={{ position: "relative", marginBottom: 20 }}>
          <Breadcrumb separator="/" style={{ display: 'inline-block' }}>
            <Breadcrumb.Item>投诉管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>投诉单{this.props.complaintSheetID}</Breadcrumb.Item>
          </Breadcrumb>
          <span style={{ position: "absolute", cursor: 'pointer', right: 0 }}>
            <IconPlus type="reload" title="刷新" onClick={() => window.location.reload()} /> <IconPlus type="copy" title="复制url" onClick={() => this.copyUrl()} /></span>
        </div>
        <ViewCode name="Breadcrumb" code="1" />
        
        <ParamTable name='Breadcrumb'/>
      </div>
    );
  }
}

export default App;
