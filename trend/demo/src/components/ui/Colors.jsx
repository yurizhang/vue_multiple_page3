import React, { Component } from 'react';
import './App.css';
import Tabs from '../../ishow/Tab/index';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Color 色彩 / FontFamily 字体</h1>
        <h3>常用的表单元素如下：</h3>
        <div>
            <Tabs type="card" value="1" style={{ marginBottom: 40}}>
              <Tabs.Pane label="Colors" name="1">
                <div style={{marginBottom:20}}>
                    <h3>基本色彩</h3>
                    <div className="demo-color-box" style={{backgroundColor:'#58B7FF'}}>Light Blue<div className="value">#58B7FF</div></div>
                    <div className="demo-color-box" style={{backgroundColor:'#20A0FF'}}>Blue<div className="value">#20A0FF</div></div>
                    <div className="demo-color-box" style={{backgroundColor:'#1D8CE0'}}>Dark Blue<div className="value">#1D8CE0</div></div>
                  </div>
                  <div style={{marginBottom:20}}>
                    <h3>牛人专用色彩</h3>
                    <div className="demo-color-box bg-success">Success<div className="value">#67C23A</div></div>
                    <div className="demo-color-box bg-warning">Warning<div className="value">#E6A23C</div></div>
                    <div className="demo-color-box bg-danger">Danger<div className="value">#F56C6C</div></div>
                    <div className="demo-color-box bg-info">Info<div className="value">#909399</div></div>
                  </div>
                  <div style={{marginBottom:20}}>
                    <h3>文字边框色彩</h3>
                    <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
                    <div className="demo-color-box-group">
                        <div className="demo-color-box-vertical bg-text-primary">黑色<div className="value">#303133</div></div>
                        <div className="demo-color-box-vertical bg-text-regular">亮黑色<div className="value">#606266</div></div>
                        <div className="demo-color-box-vertical bg-text-secondary">极其亮黑色<div className="value">#909399</div></div>
            
                    </div>
                    <div className="demo-color-box-group">
                        <div className="demo-color-box-vertical bg-border-base">银灰色<div className="value">#DCDFE6</div></div>
                        <div className="demo-color-box-vertical bg-border-light">亮银灰色<div className="value">#E4E7ED</div></div>
                        <div className="demo-color-box-vertical bg-border-lighter">极其亮银灰色<div className="value">#EBEEF5</div></div>
                    </div>
                    <div className="demo-color-box-group">
                        <div className="demo-color-box-vertical bg-border-gray">灰色<div className="value">#DCDFE6</div></div>
                        <div className="demo-color-box-vertical bg-border-lightgray">亮灰色<div className="value">#E4E7ED</div></div>
                        <div className="demo-color-box-vertical bg-border-lightergray">极其亮灰色<div className="value">#EBEEF5</div></div>
                    </div>
                  </div>
              </Tabs.Pane>

              <Tabs.Pane label="FontFamily" name="2">
                <div className="contentFont">
                    <h2 className="typography">Typography字体</h2>    
                    <p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>

                    <h3 className="zwzt">中文字体</h3>
                    <div className="pingfang demo_box">
                        <div className="hchf">途牛</div>
                        <div className="pf little_box">PingFang SC</div>
                    </div>
                    <div className="hiragino demo_box">
                            <div className="hchf">途牛</div>
                            <div className="hsg little_box">Hiragino Sans GB</div>
                    </div>
                    <div className="microsoft demo_box">
                            <div className="hchf">途牛</div>
                            <div className="my little_box">Microsoft YaHei</div>
                    </div>

                    <h3 className="ywsz">英文字体</h3>
                    <div className="helveticaN demo_box">
                            <div className="helveticaN hchf">iShow</div>
                            <div className="hn little_box">Helvetica Neue</div>
                    </div>
                    <div className="helvetica demo_box">
                            <div className="helvetica hchf">iShow</div>
                            <div className="he little_box">Helvetica</div>
                    </div>
                    <div className="arial demo_box">
                            <div className="arial hchf">iShow</div>
                            <div className="ar little_box">Arial</div>
                    </div>
                    <h3 className="ywsz">数字字体</h3>
                    <div className="helveticaN demo_box">
                            <div className="songti numbers">0123456789</div>
                            <div className="hn little_box">宋体</div>
                    </div>
                    <div className="helvetica demo_box">
                            <div className="yahei numbers">0123456789</div>
                            <div className="he little_box">微软雅黑</div>
                    </div>
                    <div className="arial demo_box">
                            <div className="thomas numbers">0123456789</div>
                            <div className="ar little_box">thomas(等宽字体)</div>
                    </div>
                    <h3 className="ffdm">Font-family代码</h3>
                    <div className="language_style">
                        <span className="font-family">font-family</span>
                        <span className="token1 string">: </span>
                        <span className="token1 string"> "宋体";</span>
                        <span className="token string">"Helvetica Neue",</span>
                        <span className="token1 string">"Helvetica",</span>
                        <span className="token string">"PingFang SC",</span>
                        <span className="token1 string">"Hiragino Sans GB",</span>
                        <span className="token string">"Microsoft YaHei",</span>
                        <span className="token1 string">"微软雅黑",</span>
                        <span className="token string">"Arial",</span>
                        
                        <span className="token string">"sans-serif",</span>

                    </div>

                    <h3>字体使用规范</h3>
                    <table className="demo-size1" >
                      <caption >Microsoft YaHei/微软雅黑</caption>                 
                        <tbody>               
                            <tr>
                                <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                              <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                              <p>0123456789</p>
                                </td>
                                <td className="color-dark">12px Extra Extra small</td>
                            </tr>
                                <tr>
                                    <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">14px Small</td>
                                </tr>
                                <tr>
                                        <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">16px Medium</td>
                                    </tr>
                                    <tr>
                                            <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                    <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                    <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">18px largeSmall</td>
                                        </tr>
                                        <tr>
                                               <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                      <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">20px Extra large</td>
                                            </tr>
                                        
                        </tbody>
                    </table>
                    <br/>
                    <br/>

                    <table className="demo-size2" >
                            <caption>宋体</caption>
                        <tbody>
                            <tr>
                                <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                              <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                              <p>0123456789</p>
                                </td>
                                <td className="color-dark">12px Extra Extra small</td>
                            </tr>
                                <tr>
                                    <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">14px Small</td>
                                </tr>
                                <tr>
                                        <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">16px Medium</td>
                                    </tr>
                                    <tr>
                                            <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                    <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                    <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">18px largeSmall</td>
                                        </tr>
                                        <tr>
                                                <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                      <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">20px Extra large</td>
                                            </tr>
                                        
                        </tbody>
                    </table>
                    <br/>
                    <br/>

                    <table className="demo-size3" >
                            <caption>Helvetica Neue</caption>
                        <tbody>
                            <tr>
                                <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                              <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                              <p>0123456789</p>
                                </td>
                                <td className="color-dark">12px Extra Extra small</td>
                            </tr>
                                <tr>
                                    <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">14px Small</td>
                                </tr>
                                <tr>
                                        <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">16px Medium</td>
                                    </tr>
                                    <tr>
                                            <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                    <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                    <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">18px largeSmall</td>
                                        </tr>
                                        <tr>
                                                <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                      <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">20px Extra large</td>
                                            </tr>
                                        
                        </tbody>
                    </table>
                    <br/>
                    <br/>


                    <table className="demo-size4">
                            <caption>Helvetica</caption>
                            <tbody>
                                    <tr>
                                            <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                          <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">12px Extra Extra small</td>
                                        </tr>
                                            <tr>
                                                <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                              <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                              <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">14px Small</td>
                                            </tr>
                                            <tr>
                                                    <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                  <p>0123456789</p>
                                                    </td>
                                                    <td className="color-dark">16px Medium</td>
                                                </tr>
                                                <tr>
                                                        <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                                <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                                <p>0123456789</p>
                                                        </td>
                                                        <td className="color-dark">18px largeSmall</td>
                                                    </tr>
                                                    <tr>
                                                            <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                                  <p>0123456789</p>
                                                            </td>
                                                            <td className="color-dark">20px Extra large</td>
                                                        </tr>                                         
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                        <table className="demo-size5" >
                                <caption>PingFang SC</caption>
                            <tbody>
                                <tr>
                                    <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">12px Extra Extra small</td>
                                </tr>
                                    <tr>
                                        <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">14px Small</td>
                                    </tr>
                                    <tr>
                                            <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                          <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">16px Medium</td>
                                        </tr>
                                        <tr>
                                                <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                        <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                        <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">18px largeSmall</td>
                                            </tr>
                                            <tr>
                                                    <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                          <p>0123456789</p>
                                                    </td>
                                                    <td className="color-dark">20px Extra large</td>
                                                </tr>
                                            
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                        <table className="demo-size6" >
                                <caption>Hiragino Sans GB</caption>
                            <tbody>
                                <tr>
                                    <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">12px Extra Extra small</td>
                                </tr>
                                    <tr>
                                        <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">14px Small</td>
                                    </tr>
                                    <tr>
                                            <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                          <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">16px Medium</td>
                                        </tr>
                                        <tr>
                                                <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                        <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                        <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">18px largeSmall</td>
                                            </tr>
                                            <tr>
                                                    <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                          <p>0123456789</p>
                                                    </td>
                                                    <td className="color-dark">20px Extra large</td>
                                                </tr>                                 
                            </tbody>
                        </table>
                        <br/>
                        <br/>

                        <table className="demo-size7" >
                                <caption>Arial</caption>
                            <tbody>
                                <tr>
                                    <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">12px Extra Extra small</td>
                                </tr>
                                    <tr>
                                        <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">14px Small</td>
                                    </tr>
                                    <tr>
                                            <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                          <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">16px Medium</td>
                                        </tr>
                                        <tr>
                                                <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                        <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                        <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">18px largeSmall</td>
                                            </tr>
                                            <tr>
                                                    <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                          <p>0123456789</p>
                                                    </td>
                                                    <td className="color-dark">20px Extra large</td>
                                                </tr>
                                            
                            </tbody>
                        </table>
                        <br/>
                        <br/>

                        <table className="demo-size8" >
                            <caption>sans-serif</caption>
                            <tbody>
                                <tr>
                                    <td className="text-smaller"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                  <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                  <p>0123456789</p>
                                    </td>
                                    <td className="color-dark">12px Extra Extra small</td>
                                </tr>
                                    <tr>
                                        <td className="text-regular"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                      <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                      <p>0123456789</p>
                                        </td>
                                        <td className="color-dark">14px Small</td>
                                    </tr>
                                    <tr>
                                            <td className="h3"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                          <p>0123456789</p>
                                            </td>
                                            <td className="color-dark">16px Medium</td>
                                        </tr>
                                        <tr>
                                                <td className="h2"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                        <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                        <p>0123456789</p>
                                                </td>
                                                <td className="color-dark">18px largeSmall</td>
                                            </tr>
                                            <tr>
                                                    <td className="h1"><p>途牛系统研发中心大前端团队（ElfTeam）提供的中后台系统UI组件及样式，共23+个实用组件。</p>
                                                                          <p>iShow UI - Tuniu Backend System UI Standard 2.0</p>
                                                                          <p>0123456789</p>
                                                    </td>
                                                    <td className="color-dark">20px Extra large</td>
                                                </tr>                                          
                            </tbody>
                        </table>
                  



                </div>
              </Tabs.Pane>
            </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
