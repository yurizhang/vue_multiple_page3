import React, { Component } from 'react';
import './App.css';
//按需加载
import Progress from '../../ishow/Progress/Progress';
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  // componentDidMount() {
  //   //console.log(this.props);
  //   this.props.changeBread(['首页', '数据', '进度条']);
  // }


  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Progress 进度条</h1>
        <h3>进度条的基本使用</h3>
        <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
          <Tabs.Pane label="线形进度条 — 百分比外显" name="1">

            <div style={{ marginBottom: 20 }}>
              <Progress percentage={0} style={{ marginBottom: 20 }} />
              <Progress percentage={70} style={{ marginBottom: 20 }} />
              <Progress percentage={100} status="success" style={{ marginBottom: 20 }} />
              <Progress percentage={50} status="exception" style={{ marginBottom: 20 }} />
            </div>

            <ViewCode name="Progress" code="0" />
          </Tabs.Pane>
          <Tabs.Pane label="线形进度条 — 百分比内显" name="2">

            <div style={{ marginBottom: 20 }}>
              <Progress strokeWidth={18} percentage={0} textInside style={{ marginBottom: 20 }} />
              <Progress strokeWidth={18} percentage={70} textInside style={{ marginBottom: 20 }} />
              <Progress strokeWidth={18} percentage={100} status="success" textInside style={{ marginBottom: 20 }} />
              <Progress strokeWidth={18} percentage={50} status="exception" textInside style={{ marginBottom: 20 }} />
            </div>
            <ViewCode name="Progress" code="1" />
          </Tabs.Pane>
          <Tabs.Pane label="环形进度条" name="3">
            <div style={{ marginBottom: 20 }}>
              <Progress type="circle" percentage={0} style={{ marginRight: 20 }} />
              <Progress type="circle" percentage={25} style={{ marginRight: 20 }} />
              <Progress type="circle" percentage={100} status="success" style={{ marginRight: 20 }} />
              <Progress type="circle" percentage={50} status="exception" />
            </div>
            <ViewCode name="Progress" code="2" />
          </Tabs.Pane>
        </Tabs>
        <ParamTable name='Progress' />
      </div>
    );
  }
}

export default App;
