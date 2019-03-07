import React from "react"
//import ReactDOM from "react-dom"
// import { HashRouter as Router,Link } from "react-router-dom";
// import Row from '../../ishow/LayoutComponent/row/index';
// import Col from '../../ishow/LayoutComponent/col/index';
// import NiuIcon from '../../ishow/LayoutComponent/icon/index';
import Layout from '../../ishow/LayoutComponent/layout/index';
// import NiuMenu from '../../ishow/LayoutComponent/menu/index';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
const { Header, Content, Footer, Sider } = Layout;

export default class Admin extends React.Component {

  constructor() {
    super();
    this.state = {
    };

  }

render(){
    return (
        <div>
           <h1>Layout基础布局</h1>
          <Layout style={{marginBottom:50}}>
            <Header style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
            <Content style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
            <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
          </Layout>
          <ViewCode name='Layout' code='0'/>
          <Layout style={{marginBottom:50}}>
            <Header style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
            <Layout>
              <Sider style={{ background: '#1D8CE0', padding:50 ,textAlign:'center',color:'#fff'}}>Sider</Sider>
              <Content style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
            </Layout>
            <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
          </Layout>
          <ViewCode name='Layout' code='1'/>
          <Layout style={{marginBottom:50}}>
            <Sider  style={{ background: '#1D8CE0', padding:50 ,textAlign:'center',color:'#fff'}}>Sider</Sider>
            <Layout>
              <Header  style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
              <Content  style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
              <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
            </Layout>
          </Layout>
          <ViewCode name='Layout' code='2'/>
          <ParamTable name='Layout'/>
          {/* <ParamTable name='Sider'/> */}
        </div>
    );
}
}

