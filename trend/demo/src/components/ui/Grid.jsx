import React from "react"
//import ReactDOM from "react-dom"
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
// import NiuIcon from '../../ishow/LayoutComponent/icon/index';
// import Layout from '../../ishow/LayoutComponent/layout/index';
export default class Admin extends React.Component {

  constructor() {
    super();
    this.state = {
    };

  }

render(){
    return (
        <div>
            <h1>Grid 栅格</h1>
            <h2>基础栅格</h2>
            <h3>从堆叠到水平排列。</h3>
            <h3>使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</h3>
            <Row style={{marginBottom:30}}>
                <Col span={12} style={{background:'#99A9BF',padding:20,textAlign:'center',color:'#fff'}}>col-12</Col>
                <Col span={12} style={{background:'#C0CCDA',padding:20,textAlign:'center',color:'#fff'}}>col-12</Col>
            </Row>
            <Row style={{marginBottom:30}}>
                <Col span={8} style={{background:'#8492A6',padding:20,textAlign:'center',color:'#fff'}}>col-8</Col>
                <Col span={8} style={{background:'#99A9BF',padding:20,textAlign:'center',color:'#fff'}}>col-8</Col>
                <Col span={8} style={{background:'#C0CCDA',padding:20,textAlign:'center',color:'#fff'}}>col-8</Col>
            </Row>
            <Row style={{marginBottom:30}}>
                <Col span={6} style={{background:'#1F2D3D',padding:20,textAlign:'center',color:'#fff'}}>col-6</Col>
                <Col span={6} style={{background:'#324057',padding:20,textAlign:'center',color:'#fff'}}>col-6</Col>
                <Col span={6} style={{background:'#475669',padding:20,textAlign:'center',color:'#fff'}}>col-6</Col>
                <Col span={6} style={{background:'#8492A6',padding:20,textAlign:'center',color:'#fff'}}>col-6</Col>
            </Row>
            <ViewCode name='Grid' code='0'/>
            <ParamTable name='Row'/>
            <ParamTable name='Col'/>
        </div>
    )
}
}

