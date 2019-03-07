import React, { Component } from 'react';
import './App.css';
//按需加载
import Pagination from '../../ishow/Pagination/Pagination';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Tabs from "../../ishow/Tab/index";
class App extends Component {
  // componentDidMount() {
  //   //console.log(this.props);
  //   this.props.changeBread(['首页', '数据', '分页']);
  // }


  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Pagination 分页</h1>
        <h3>分页的基本使用</h3>
        <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
          <Tabs.Pane label="基本分页" name="1">
            <div style={{ margin: 20 }}>
              <div className="first">
                <div className="block">
                  <p className="demonstration" style={{margin:10}}>页数较少时的效果</p>
                  <Pagination layout="prev, pager, next" total={50} />
                </div>
                <div className="block">
                  <p className="demonstration" style={{margin:10}}>大于 7 页时的效果</p>
                  <Pagination layout="prev, pager, next" total={1000} />
                </div>
              </div>
            </div>
            <ViewCode name="Pagination" code="0"/>
          </Tabs.Pane>
          <Tabs.Pane label="简洁小巧的分页" name="2">
            <div style={{ margin: 20 }}>
              <Pagination layout="prev, pager, next" total={50} small={true} />
            </div>
            <ViewCode name="Pagination" code="1"/>
          </Tabs.Pane>
          <Tabs.Pane label="完整功能的分页" name="3">
            <div style={{ margin: 20 }}>
              <div className="block">
                <span className="demonstration">完整功能</span>
                <Pagination layout="total,sizes,prev,pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5} />
              </div>
            </div>
            <ViewCode name="Pagination" code="2"/>
          </Tabs.Pane>
        </Tabs>



        <ParamTable name='Pagination' />
      </div>
    );
  }
}

export default App;
