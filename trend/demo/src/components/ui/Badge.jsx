import React from 'react';
import Badge from '../../ishow/Badge/index';
import Button from "../../ishow/Button/index";
import Dropdown from '../../ishow/Dropdown/index.js';
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends React.Component {
    render(){
        return(
            <div className="search-tabs">
                <h1>Badge 标记</h1>
                <h4>出现在按钮、图标旁的数字或状态标记。</h4>
                <Tabs>
                    <Tabs.Pane label="基础用法" name="1">
                        <h4>展示新消息数量。</h4>
                        <Badge value={ 12 } style={{marginRight:40}}>
                        <Button size="small">评论</Button>
                        </Badge>

                        <Badge value={ 3 } style={{marginRight:40}}>
                            <Button size="small">回复</Button>
                        </Badge>

                        <Dropdown trigger="click" menu={(
                            <Dropdown.Menu>
                            <Dropdown.Item className="clearfix">
                                <span>评论</span><Badge className="mark" value={ 12 } />
                            </Dropdown.Item>
                            <Dropdown.Item className="clearfix">
                                <span>回复</span><Badge className="mark" value={ 3 } />
                            </Dropdown.Item>
                            </Dropdown.Menu>
                            )}
                        >
                            <span className="ishow-dropdown-link">点我查看<i className="ishow-icon-caret-bottom ishow-icon--right"></i></span>
                        </Dropdown>
                        <ViewCode name="Badge" code="0"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="最大值" name="2">
                        <h4>可自定义最大值。</h4>
                        <Badge value={ 200 } max={ 99 } style={{marginRight:40}}>
                            <Button size="small">评论</Button>
                        </Badge>
                        <Badge value={ 100 } max={ 10 }>
                            <Button size="small">回复</Button>
                        </Badge>
                        <ViewCode name="Badge" code="1"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="自定义内容" name="3">
                        <h4>可以显示数字以外的文本内容。</h4>
                        <Badge value={ 'new' } style={{marginRight:40}}>
                            <Button size="small">评论</Button>
                        </Badge>
                        <Badge value={ 'hot' }>
                            <Button size="small">回复</Button>
                        </Badge>
                        <ViewCode name="Badge" code="2"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="小红点" name="4">
                        <h4>以红点的形式标注需要关注的内容。</h4>
                        <Badge isDot style={{marginRight:40}}>
                            数据查询
                        </Badge>
                        <Badge isDot>
                            <Button className="share-button" icon="share" type="primary"></Button>
                        </Badge>
                        <ViewCode name="Badge" code="3"/>
                    </Tabs.Pane>
                </Tabs>
                <ParamTable name="Badge"/>
            </div>
        )
    }
}

export default App