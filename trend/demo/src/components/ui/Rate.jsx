import React, {Component} from 'react';
import './App.css';
import Rate from "../../ishow/Rate/Rate";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Tabs from '../../ishow/Tab/index';

class App extends Component{
    render(){
        return(
        <div className = "intro-block">
            <div>
            <h2 className = "grade">Rate 评分</h2>
            <p>评分组件</p>
            </div>
            <Tabs type="card" value="1" style={{ marginBottom: '40px'}}>
                <Tabs.Pane label="基本用法" name="1">
                            <h3 >基本用法</h3>
                            <div>
                                    <div className="block">
                                        <span className="demonstration">默认不区分颜色</span>
                                        <span className="wrapper">
                                        <Rate onChange = {(val) => alert(val)}/>
                                        </span>
                                    </div>
                                    <div className ="block">
                                        <span className="demonstration">区分颜色</span>
                                        <span className="wrapper">
                                        <Rate colors = {['#99A9BF', '#F7BA2A', '#FF9900']}/>    
                                        </span>
                                    </div>    
                            </div>    
                        <ViewCode name="Rate"  code="0"/>
                        <ParamTable name='Rate'/>
                </Tabs.Pane>

                <Tabs.Pane label="允许半选" name="2">   
                        <div>
                            <h3>允许半选</h3>
                            <p>可支持鼠标选择半星</p>
                        </div>
                        <div className = "halfBlock">
                            <div>
                            <Rate allowHalf={true} onChange={(val) => console.log(val)} />
                            </div>
                        </div>
                        <ViewCode name="Rate"  code="1"/>
                        <ParamTable name='Rate'/>
                </Tabs.Pane> 

 


                <Tabs.Pane label="只读" name="3">     
                        <div>
                            <h3>只读</h3>
                            <p>只读的评分用来展示分数，允许出现半星</p>
                        </div>
                            <div className = "readOnly">
                                <div>
                                <Rate disabled={true} value={3.9} showText={true} />
                                </div>
                            </div>
                        <ViewCode name="Rate"  code="2"/>
                        <ParamTable name='Rate'/>
                </Tabs.Pane> 
                
                <Tabs.Pane label ="辅助文字"  name = "4">
                    <div>
                        <h3>辅助文字</h3>
                        <p>用辅助文字直接地表达对应分数</p>
                    </div>
                    <div className = "workWord">
                        <div>
                             <Rate showText={true} />
                        </div>
                    </div>
                    <ViewCode name="Rate"  code="3"/>
                    <ParamTable name='Rate'/>
                </Tabs.Pane> 

            </Tabs>        
        </div>
        
        )
    }
}

export default App