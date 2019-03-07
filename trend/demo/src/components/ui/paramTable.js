import React, { Component } from 'react';
import './App.css';
import {TableList} from './ConstantData/TableList';
class ParamTable extends Component {
  render() {
    const objName = this.props.name;
    const MethodsList = (TableList[objName].Method && TableList[objName].Method.length)?TableList[objName].Method:null;
    const EventList = (TableList[objName].Events && TableList[objName].Events.length)?TableList[objName].Events:null;
    const paramList = (TableList[objName].List && TableList[objName].List.length) ? TableList[objName].List : ((TableList[objName].Options && TableList[objName].Options.length) ? TableList[objName].Options : []);
    const title = TableList[objName].List ? '参数' : ((TableList[objName].Options) ? '选项' : '');
    const renderAttrTableTr =
    ({ param, instruction, type, optional, defaultvalue},index) =>
        <tr key={index}>
          <td>{param}</td>
          <td>{instruction}</td>
          <td>{type}</td>
          <td>{optional}</td>
          <td>{defaultvalue}</td>
        </tr>;
    const renderEventsTableTr = 
    ({eventName,instruction,callbackParam},index)=>
        <tr key={index}>
        <td>{eventName}</td>
        <td>{instruction}</td>
        <td>{callbackParam}</td>
      </tr>;
    const renderMethodsTableTr = 
    ({methodName,instruction,methodParam},index)=>
        <tr key={index}>
        <td>{methodName}</td>
        <td>{instruction}</td>
        <td>{methodParam}</td>
      </tr>;
    return (
      <div>
        <h2>{this.props.name}&nbsp;&nbsp;{title}</h2>
        <table className="grid" align="center">
           <thead>
             <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
             </tr>
           </thead>
           <tbody>
              {paramList && paramList.map((item,index) =>renderAttrTableTr(item,index))}
           </tbody>
         </table>
         {EventList && (
           <div>
               <h2>{this.props.name}&nbsp;&nbsp;事件</h2>
              <table className="grid" align="center">
              <thead>
                <tr>
                   <th>事件名称</th>
                   <th>说明</th>
                   <th>回调参数</th>
                </tr>
              </thead>
              <tbody>
                 {EventList && EventList.map((item,index) =>renderEventsTableTr(item,index))}
              </tbody>
            </table>
            </div>
         )}
              {MethodsList && (
           <div>
               <h2>{this.props.name}&nbsp;&nbsp;方法</h2>
              <table className="grid" align="center">
              <thead>
                <tr>
                   <th>方法名称</th>
                   <th>说明</th>
                   <th>参数</th>
                </tr>
              </thead>
              <tbody>
                 {MethodsList && MethodsList.map((item,index) =>renderMethodsTableTr(item,index))}
              </tbody>
            </table>
            </div>
         )}
      </div>
    );
  }
}

export default ParamTable;
