import React, { Component } from 'react';
import './App.css';
//按需加载
import Icon from '../../ishow/Icon/Icon';
import Button from '../../ishow/Button/Button';
import ViewCode from './viewCode';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false //控制dialog，true显示，false关闭
    };
  }
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','图标']);
  // }
  render() {
    let IconList = [
        "arrow-left",
        "arrow-down",
        "arrow-right",
        "arrow-up",
        "caret-left",
        "caret-bottom",
        "caret-top",
        "caret-right",
        "d-arrow-left",
        "d-arrow-right",
        "minus",
        "plus",
        "close",
        "check",
        "d-caret",
        "document",
        "message",
        "date",
        "time",
        "view",
        "menu",
        "more",
        "star-on",
        "star-off",
        "picture",
        "delete",
        "search",
        "edit",
        "share",
        "setting",
        "upload",
        "upload2",
        "loading"
      ];
    return (
      <div className="App">
        <h1>Icon 图标</h1>
        <h2>使用方法</h2>
        <p>直接通过设置属性名name为iconName（loading、upload等）来使用即可。例如：</p>
        <div style={{paddingTop:20,paddingBottom:20}}>
          <i className="ishow-icon-edit" style={{fontSize:20}}></i>&nbsp;&nbsp;
          <i className="ishow-icon-share" style={{fontSize:20}}></i>&nbsp;&nbsp;
          <i className="ishow-icon-delete" style={{fontSize:20}}></i>&nbsp;&nbsp;
          <Button type="info" icon="search">搜索</Button>
          <ViewCode name="Icon" code='0'/>
        </div>
        {/* 图标区 */}
        <h2>图标集合</h2>
        <ul className="icon-list">
          {IconList.map((v, i) =>
            <li key={i}><span><Icon name={v} />ishow-icon-{v}</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
