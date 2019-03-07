import React, { Component } from 'react';
import Icon from '../../ishow/Icon/Icon';
import {Link } from "react-router-dom";
import Collapse from '../../ishow/Collapse/index';
// import CO1 from '../image/compatible_chrome.gif'
// import CO2 from '../image/compatible_firefox.gif'
// import CO3 from '../image/compatible_ie.gif'
// import Autocomplete from 'react-autocomplete';
// import Input from '../../ishow/Input';
export default class App extends Component {
    // componentDidMount(){
    //     //console.log(this.props);
    //     this.props.changeBread(['首页','控制台']);
    //   }

    render() {
        const code0 = `import Button from 'ishow-ui/lib/Button'`
        const code1 = `import {Button} from 'ishow-ui'`;
        const code2 = `yarn add react-click-outside async-validator classnames throttle-debounce warning raf css-animation enquire.js omit.js rc-menu rc-tooltip`;
        const code3 = `cnpm install @tuniu/ishow --save [因为cnpm不稳定，不建议使用]`;
        const code4 = `npm install -g create-react-app`;
        const code5 = `create-react-app my-app`;
        const code6 = `cd my-app`;
        const code7 = 'npm start 或者 yarn start';
        const code8 = 'yarn install';
        const code9 = 'yarn start';
        const Button = `render(){
            return (
              <div>
                <Button type="primary">我是个按钮</Button>
              </div>
            )
          }`;
        return (
            <div>
                <h1>iShow UI - Tuniu Backend System UI Standard 2.0</h1>
                <h2 style={{ marginTop: '20 !important' }}>特性</h2>
                <ul style={{ marginTop: 20 }}>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共40+个实用组件。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>几行代码即可轻松导入的React组件。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>使用 ES6 构建，提供完整的独立安装包，支持按需加载。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>基于 yarn + webpack + react +babel 的工作流</li>
                    
                </ul>
                <h2 style={{ marginTop: '20 !important' }}>基本规范</h2>
                <ul style={{ marginTop: 20 }}>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>默认字体首先为宋体，大小12px。字体代码font-family: "宋体";"Helvetica Neue","Helvetica","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑","Arial","sans-serif"。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>Tab标签底部需要线条2px #20a0ff<Link to="/app/nav/tabs" title="标签页">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>表格内文字左对齐，左间距设为4px，表格数据默认50条/页<Link to="/app/data/table" title="表格">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>表格行行高28px，鼠标移入移出效果为淡蓝色#edf7ff <Link to="/app/data/table" title="表格">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>当有需要填写人名的输入框时，应提供模糊搜索建议，人名信息对接OA。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>高级搜索组件左对齐，包括查询&重置按钮<Link to="/app/public/advancedSearch" title="高级搜索">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>所有模态框提交时与windows系统统一：左边是“确定”，右边是“取消”。弹出窗口应该最小宽度，确定小屏也能正常显示<Link to="/app/ui/Dialog" title="对话框">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>select下拉框无数据时，有最小高度<Link to="/app/form/formElements" title="表单元素">(详见)</Link>。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>tab页内容块不要阴影。</li>
                    <li style={{ listStyleType: 'circle', fontSize: 16, marginBottom: 10 }}>表格顶部搜索，和内容之间，功能按钮时间应该适当的留白。<Link to="/app/public/advancedSearch" title="高级搜索">(详见)</Link></li>
                </ul>
                <h2 style={{ marginTop: '20 !important' }}>使用方法</h2>
                <ul style={{ marginTop: 20 }}>
                    <pre>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>直接下载已经配置好的ishow前端工程：</p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;点击此处下载已配置好的ishow工程： <a href="./ishow_default_webpack4.zip" style={{ textDecoration: 'underline' }}> &nbsp;ishow_default_webpack4.zip</a> </p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;进入解压缩后的目录并执行安装命令：<code style={{ color: 'green' }}><span>{code8}</span></code> 然后执行命令: <code style={{ color: 'green' }}><span>{code9}</span></code></p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;请先确认电脑已经安装了node 8.11+和yarn工具</p>
                    </pre>
                    <Collapse >
                        <Collapse.Item title="也可以使用react脚手架自行配置使用：" name="1">
                        <pre>
                            {/* <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>也可以使用react脚手架自行配置使用：</p> */}
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;只需要一条命令,安装create-react-app：<code style={{ color: 'green' }}><span>{code4}</span></code></p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;装完之后，生成一个新的项目，可以使用下面的命令：<code style={{ color: 'green' }}><span>{code5}</span></code></p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;进入项目目录：<code style={{ color: 'green' }}><span>{code6}</span></code></p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;这个时候，使用下面的命令就可以开始开发应用了：<code style={{ color: 'green' }}><span>{code7}</span></code></p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;默认情况下，会在开发环境下启动一个服务器，监听在3000端口，它会主动给你打开浏览器的，可以立刻就看到这个app的效果。</p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>ishow安装方法(以下二选一即可)：</p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;<a href="./ishow.zip" style={{ textDecoration: 'underline' }}>1. <Icon className='ishow-icon-document' />&nbsp;点击此处下载ishow安装包</a> 
                            <span style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;&nbsp;&nbsp;使用这种方式，您需要安装如下依赖：<code style={{ color: 'green' }}><span >{code2}</span></code></span>
                            </p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;2. 使用淘宝镜像安装：<code style={{ color: 'green' }}><span>{code3}</span></code></p>

                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>ishow使用方法：</p>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>1. 按需加载：</p>
                            <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{code0}</p></code>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>2. 一次性加载：</p>
                            <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{code1}</p></code>
                            <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>使用示例：</p>
                            <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{Button}</p></code>
                        </pre>
                        </Collapse.Item>
                    </Collapse>
                    {/* <pre>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>也可以使用react脚手架自行配置使用：</p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;只需要一条命令,安装create-react-app：<code style={{ color: 'green' }}><span>{code4}</span></code></p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;装完之后，生成一个新的项目，可以使用下面的命令：<code style={{ color: 'green' }}><span>{code5}</span></code></p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;进入项目目录：<code style={{ color: 'green' }}><span>{code6}</span></code></p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;这个时候，使用下面的命令就可以开始开发应用了：<code style={{ color: 'green' }}><span>{code7}</span></code></p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;默认情况下，会在开发环境下启动一个服务器，监听在3000端口，它会主动给你打开浏览器的，可以立刻就看到这个app的效果。</p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>ishow安装方法(以下二选一即可)：</p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;<a href="./ishow.zip" style={{ textDecoration: 'underline' }}>1. <Icon className='ishow-icon-document' />&nbsp;点击此处下载ishow安装包</a> 
                        <span style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;&nbsp;&nbsp;使用这种方式，您需要安装如下依赖：<code style={{ color: 'green' }}><span >{code2}</span></code></span>
                        </p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>&nbsp;&nbsp;2. 使用淘宝镜像安装：<code style={{ color: 'green' }}><span>{code3}</span></code></p>

                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>ishow使用方法：</p>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>1. 按需加载：</p>
                        <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{code0}</p></code>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>2. 一次性加载：</p>
                        <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{code1}</p></code>
                        <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 14 }}>使用示例：</p>
                        <code style={{ color: 'green' }}><p style={{ margin: 10 }}>{Button}</p></code>
                    </pre> */}
                </ul>
                <h2 style={{ marginTop: '20 !important' }}>浏览器兼容性</h2>
                <div style={{ marginLeft: '40px' }}>
                    <p style={{ color: '#1D8CE0', fontFamily: 'microsoft yahei', fontSize: 16, fontWeight: 'bold' }}>再更低版本的浏览器兼容之前，我们建议您使用如下版本及以上的浏览器，以确保我们的页面正常展示。</p>
                    <table className="compatible_table" style={{ borderCollapse: 'collapse', textAlign: 'center', margin: '20px 0' }}>
                        <thead style={{ borderCollapse: 'collapse' }}>
                            <tr>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}><img src="./image/compatible_chrome.gif" alt="" /></td>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}><img src="./image/compatible_firefox.gif" alt="" /></td>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}><img src="./image/compatible_ie.gif" alt="" /></td>
                            </tr>
                        </thead>
                        <tbody style={{ borderCollapse: 'collapse' }}>
                            <tr>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}>Chrome 54+</td>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}>FireFox 43+</td>
                                <td style={{ border: '1px solid #999', borderCollapse: 'collapse', padding: '10px' }}>IE11+（需安装 babel-polyfill 依赖）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 style={{ marginTop: '20 !important' }}>更新日志</h2>
                <ul style={{ marginTop: 20, listStyle: 'none', color: '#606266' }}>
                    <li><a href="http://wiki.tuniu.org/display/SRDC/2.iShowUI">http://wiki.tuniu.org/display/SRDC/2.iShowUI</a></li>
                </ul>
                <h2 style={{ marginTop: '20 !important' }}>联系我们</h2>
                <ul style={{ marginTop: 20, listStyle: 'none', color: '#606266' }}>
                    <li>大前端研发部：<a href="mailto:zhangyong5@tuniu.com">zhangyong5@tuniu.com</a></li>
                </ul>
            </div>
        );
    }

}