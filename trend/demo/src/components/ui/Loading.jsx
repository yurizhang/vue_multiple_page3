import React, { Component } from 'react';
import './App.css';
//按需加载
import Table from '../../ishow/Table/TableStore';
import Loading from '../../ishow/Loading/Loading';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  constructor(props){
    super(props);
    this.table = {
        columns: [
          {
            label: "日期",
            prop: "date",
            width: 180
          },
          {
            label: "姓名",
            prop: "name",
            width: 180
          },
          {
            label: "地址",
            prop: "address"
          }
        ],
        data: [{
          date: '2016-05-02',
          name: '途牛大前端--张勇',
          address: '南京市玄武区699-32号途牛大厦'
        }, {
          date: '2016-05-04',
          name: '途牛大前端--张勇',
          address: '南京市玄武区699-32号途牛大厦'
        }, {
          date: '2016-05-01',
          name: '途牛大前端--张勇',
          address: '南京市玄武区699-32号途牛大厦'
        }, {
          date: '2016-05-03',
          name: '途牛大前端--张勇',
          address: '南京市玄武区699-32号途牛大厦'
        }]
      }
  };
  
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','加载']);
  // }
  

  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Loading 加载</h1>
        <h3>常用的加载</h3>
        <div style={{marginBottom:20}}>
            <div className="ishow-loading-demo">
                <Loading text="订单资源确认中">
                    <Table
                    style={{width: '100%'}}
                    columns={this.table.columns}
                    data={this.table.data}
                    />
                </Loading>
            </div>
        </div>
        <ViewCode name="Loading"  code="0"/>
        <ParamTable name='Loading'/>
      </div>
    );
  }
}

export default App;
