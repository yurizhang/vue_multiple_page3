import React from "react"
//import ReactDOM from "react-dom"
import { HashRouter as Router,Link } from "react-router-dom";
import Breadcrumb from '../../ishow/Breadcrumb/index';
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';
import NiuIcon from '../../ishow/LayoutComponent/icon/index';
import Layout from '../../ishow/LayoutComponent/layout/index';
import NiuMenu from '../../ishow/LayoutComponent/menu/index';
// import Tooltip from '../../ishow/Tooltip';
// import {NiuIcon,Layout,NiuMenu} from '../../ishow/index';
// import Tabs from "../../ishow/Tab/index";
// import Dropdown from '../../ishow/Dropdown/index'
import './admim.css';
import { menus as menusList } from '../../constants/menuslist';  // 菜单数据
import Crouter from "../../routes/index";  //路由数据
const { Header, Content, Footer, Sider } = Layout;
// const FormItem = Form.Item;
export default class Admin extends React.Component {

  constructor() {
    super();
    this.state = {
      collapsed: false,
      openKeys:[],
      rootSubmenuKeys : [],
      Breadcrumb:['首页','控制台'],
      BreadcrumbindexUrl:'/',
    };
  }


  onCollapse = (collapsed) => {
    //console.log(collapsed);
    this.setState({ collapsed });
  }
  onTrigg = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
  //SubMenu 展开/关闭的回调
  onOpenChange = (openKeys) => {
    //console.log(openKeys);  //所有展开的菜单
      //this.setState({ openKeys });
      // submenu keys of first level
      //const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
      //最后一次展开的菜单
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1); //用户点子菜单标题事件
      const RootMenu = menusList.find(item => item.key === latestOpenKey && item.sub);
      if (!RootMenu) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [], //只把最后一个打开，其它的都关掉
        });
      }
    // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   this.setState({ openKeys });
    // } else {
      // this.setState({
      //   openKeys: latestOpenKey ? [latestOpenKey] : [],
      // });
    // }
  }
  onClickItem=({ item, key, keyPath })=>{   //用户点菜单项目事件`  
    let obj={ item, key, keyPath };
    if(obj.keyPath && obj.keyPath.length<2){  //如果点击的是不是子菜单项目，就关闭所有子菜单。
      this.setState({
        openKeys:  []  //关闭所有打开的子菜单 
      });
    }
    this.queryForBread(obj.key);
    //key=   这里的key: '/app/ui', title: 'UI', icon: 'scan', key就是路由`
    //keyPath=如果子菜单里面这个数据会超过2，否则就是1 返回 ["/app/ui/buttons", "/app/ui"]
    //console.log( obj )
    //在这里调用面包应该更优雅
    // this.changeBread([''])  //根据key来得到对应的面包
  }
  queryForBread = (key)=>{
    let myBread = false;
    const tem = (item) => { // 遍历对象的key 返回面包屑
      if (item.key === key) {
        myBread = item.breadcrumb;
      } else if (item.sub) {
        if (item.sub.length) {
           for(let j = 0;j < item.sub.length ;j++){
            if(item.sub[j].key === key){
              myBread = item.sub[j].breadcrumb;
              break;
            }
          }
        } else {
          tem(item.sub);
        }
      } else {
        myBread = false;
      }
    }
    for(let i = 0; i < menusList.length; i++){
      let item = menusList[i];
      tem(item);
      if (myBread) {
        break;
      } 
    }
    this.changeBread(myBread ? myBread : ['首页','控制台']);
  }
 changeBread = (newBread)=>{
     //console.log("修改Breadcrumb");
      //return b;
      //定义这个组件用来修改面包，先转给路由，最后传给icon，button等
      this.setState({
        Breadcrumb:newBread
      });

 }

 callback(tab){
  if(tab.props.name==='1'){
    this.setState({action:'login'});
  }else{
    this.setState({action:'register'})
  }
}

  render() {

    const renderMenuItem =
      ({ key, title, icon, link, sub, ...props }) => {
        if (sub && sub.sub) {
          renderSubMenu({ key, title, icon, link, sub, ...props });
        } else if ((sub && !sub.sub) || 　!sub) {
          return (<NiuMenu.Item
            key={key || link}
            {...props}
          >
            <Link to={link || key} title={title}>
              {icon && <NiuIcon type={icon} />}
              <span className="nav-text">{title.length <= 8 ? title : title.slice(0, 8) + " ···"}</span>
            </Link>
          </NiuMenu.Item>)
        }
      };

const renderSubMenu =
    ({ key, title, icon, link, sub, ...props }) =>{
    if(title == "业务组件","表单")
       return <NiuMenu.SubMenu
            key={key || link}
            title={
                <span>
                    {icon && <NiuIcon type={icon} />}
                    <span className="nav-text">{title}</span>
                </span>
            }
            {...props}
        >
            {
              sub.sub ? renderSubMenu(sub) : sub.map(item => renderMenuItem(item))
            }
        </NiuMenu.SubMenu>
          };


    return (
        <Router>
      <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-custom-trigger">
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />

          <NiuMenu theme="dark" defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange.bind(this)}  onClick={this.onClickItem} mode="inline">

          {menusList && menusList.map(item => item.sub ?
            renderSubMenu(item) : renderMenuItem(item)
          )}

            {/* <Menu.Item key="1">
              <Icon type="pie-chart" />
              <Link to="/admin/bubblegum"><span className="nav-text">Option 1</span></Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Icon type="desktop" />
              <Link to="/admin/shoelaces"><span className="nav-text">Option 2</span></Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span><Link to="/admin">首页</Link></span>
            </Menu.Item> */}


          </NiuMenu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="space-between" align="middle">
                <Col span={24}>
                <NiuIcon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.onTrigg} />
                    {/* <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link">
                        Admin <Icon type="down" />
                        </a>
                    </Dropdown> */}
                </Col>
            </Row>

          </Header>

          <Content style={{ margin: '0 16px' }}>

            <Breadcrumb separator="/" style={{ margin: '16px 0' }}>
              {this.state.Breadcrumb.map((e,i)=>(
                      <Breadcrumb.Item key={i}>{e}</Breadcrumb.Item>
                  ))}
            </Breadcrumb>
 
            <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
              {/* 把修改面包的函数传下去 */}
              <Crouter changeBread={this.changeBread}></Crouter>

             {/*
              {routes.map((route, index) => (

                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
              ))}
            */}
            </div>


          </Content>
          <Footer style={{ textAlign: 'center' }}>
         TUNIU Design ©2018 Created by <a href="http://wiki.tuniu.org/display/SRDC/2.Tuniu+Backend+System+UI+Standard+2.0"  rel="noopener noreferrer" target="_blank">ElfTeam</a>
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

