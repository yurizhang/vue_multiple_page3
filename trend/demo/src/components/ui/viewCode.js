import React, { Component } from 'react';
import './App.css';
import { CodeList } from './ConstantData/CodeList';
//按需加载
import Collapse from '../../ishow/Collapse/index';
import PrismCode from 'react-prism';
class ViewCode extends Component {

  updateCode = (newCode) => {
    // this.setState({
    //     code: newCode,
    // });
  }
  //for copy
  copyCode = () => {
    // Copy(this.state.code);
    // Message.success('successfully copied !');
  };

  render() {
    //for Collapse
    const _name = this.props.name;
    const _codeNum = this.props.code;
    const _codeList = (CodeList[_name].Code && CodeList[_name].Code.length) ? CodeList[_name].Code : '没有代码哦~';

    return (
      <div className="codeCollapse" style={{ marginTop: 20, marginBottom: 20 }}>
        <Collapse value="1">
          <Collapse.Item title="查看代码" name="1" style={{background:'#000',fontSize:'16'}}>
           {/* <pre><code className="language-jsx">{_codeList[_codeNum]}</code></pre> */}
            {/*}<Button type="primary" icon="document" onClick={this.copyCode} size="small" type="success" style={{marginBottom:25}}>copyCode</Button>*/}

            {/*<pre><code style={{ color: 'green' }} font-family: 'Verdana';>
              {_codeList[_codeNum]}
            </code></pre>*/}
           <PrismCode className="language-jsx">{_codeList[_codeNum]}</PrismCode>
          </Collapse.Item>
        </Collapse>
      </div>
    );
  }
}

export default ViewCode;
