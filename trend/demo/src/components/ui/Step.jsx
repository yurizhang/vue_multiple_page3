import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from '../../ishow/Button/Button';
import Steps from '../../ishow/Steps/index.js';
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  // componentDidMount() {
  //   //console.log(this.props);
  //   this.props.changeBread(['首页', 'Nav', '步骤']);
  // }
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    }
  }
  next() {
    let active = this.state.active + 1;
    if (active > 3) {
      active = 0;
    }
    this.setState({ active });
  }
  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Steps 菜单</h1>
        <h3>Steps的基本使用</h3>
        <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
          <Tabs.Pane label="基础用法" name="1">
            <div style={{ margin: 20 }}>
              <Steps space={200} active={this.state.active} finishStatus="success">
                <Steps.Step title="步骤 1"></Steps.Step>
                <Steps.Step title="步骤 2"></Steps.Step>
                <Steps.Step title="步骤 3"></Steps.Step>
              </Steps>
              <Button onClick={() => this.next()}>下一步</Button>
            </div>
            <ViewCode name="Steps" code='3'/>
          </Tabs.Pane>
          <Tabs.Pane label="含状态步骤条" name="2">
            <div style={{ margin: 20 }}>
              <Steps space={100} active={1} finishStatus="success">
                <Steps.Step title="已完成"></Steps.Step>
                <Steps.Step title="进行中"></Steps.Step>
                <Steps.Step title="步骤 3"></Steps.Step>
              </Steps>
            </div>
            <ViewCode name="Steps" code='0'/>
          </Tabs.Pane>
          <Tabs.Pane label="有描述的步骤条" name="3">
            <div style={{ margin: 20 }}>
              <Steps space={200} active={1}>
                <Steps.Step title="步骤 1" description="这是一段很长很长很长的描述性文字"></Steps.Step>
                <Steps.Step title="步骤 2" description="这是一段很长很长很长的描述性文字"></Steps.Step>
                <Steps.Step title="步骤 3" description="这是一段很长很长很长的描述性文字"></Steps.Step>
              </Steps>
            </div>
            <ViewCode name="Steps" code='1'/>
          </Tabs.Pane>
          <Tabs.Pane label="带图标的步骤条" name="4">
            <div style={{ margin: 20 }}>
              <Steps space={100} active={1}>
                <Steps.Step title="步骤 1" icon="edit"></Steps.Step>
                <Steps.Step title="步骤 2" icon="upload"></Steps.Step>
                <Steps.Step title="步骤 3" icon="picture"></Steps.Step>
              </Steps>
            </div>
            <ViewCode name="Steps" code='2'/>

          </Tabs.Pane>
        </Tabs>




        <ParamTable name='Steps' />
        <ParamTable name='Step' />
      </div>
    );
  }
}

export default App;
