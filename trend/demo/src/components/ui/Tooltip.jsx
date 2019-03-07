import React, { Component } from 'react';
import Tooltip from '../../ishow/Tooltip/index'
import Button from '../../ishow/Button/index'
import ViewCode from './viewCode'
import Tabs from "../../ishow/Tab/index"
import ParamTable from './paramTable'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        }
    }

    render() {
        return (
            <div>
                <h1>Tooltip文字提示</h1>
                <h3>常用于展示鼠标 hover 时的提示信息。</h3>
                <Tabs type="card" value="1" style={{ marginBottom: 40 }}>
                    <Tabs.Pane label="基础用法" name="1">
                        <p>在这里我们提供9种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
                        <div className="box" style={{ width: '400' }}>
                            <div className="top" style={{ textAlign: 'center' }}>
                                <Tooltip className="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                                    <Button>上左</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Top Center 提示文字" placement="top">
                                    <Button>上边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                                    <Button>上右</Button>
                                </Tooltip>
                            </div>
                            <div className="left">
                                <Tooltip className="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                                    <Button>左上</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Left Center 提示文字" placement="left">
                                    <Button>左边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                                    <Button>左下</Button>
                                </Tooltip>
                            </div>

                            <div className="right">
                                <Tooltip className="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                                    <Button>右上</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Right Center 提示文字" placement="right">
                                    <Button>右边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                                    <Button>右下</Button>
                                </Tooltip>
                            </div>
                            <div className="bottom">
                                <Tooltip className="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                                    <Button>下左</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                                    <Button>下边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                                    <Button>下右</Button>
                                </Tooltip>
                            </div>
                        </div>
                        <ViewCode name="Tooltip" code="0" />
                    </Tabs.Pane>

                    <Tabs.Pane label="主题" name="2">
                        <p>Tooltip 组件提供了两个不同的主题：dark和light。</p>
                        <div>
                            <Tooltip content="Top center" placement="top">
                                <Button>Dark</Button>
                            </Tooltip>
                            <Tooltip content="Bottom center" placement="bottom" effect="light" style={{ marginLeft: 10 }}>
                                <Button>Light</Button>
                            </Tooltip>
                        </div>
                        <ViewCode name="Tooltip" code="1" />
                    </Tabs.Pane>

                    <Tabs.Pane label="更多Content" name="3">
                        <p>展示多行文本或者是设置文本内容的格式</p>
                        <Tooltip
                            placement="top"
                            content={
                                <div>多行信息<br />第二行信息</div>
                            }
                        >
                            <Button>Top center</Button>
                        </Tooltip>
                        <ViewCode name="Tooltip" code="2" />
                    </Tabs.Pane>

                    <Tabs.Pane label="高级扩展" name="4">
                        <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：transition属性可以定制显隐的动画效果，默认为fade-in-linear。如果需要关闭tooltip功能，disabled属性可以满足这个需求，它接受一个Boolean，设置为true即可。</p>
                        <Tooltip disabled={this.state.disabled} content="点击关闭 tooltip 功能" placement="bottom" effect="light">
                            <Button onClick={e => this.setState({ disabled: true })}>点击关闭 tooltip 功能</Button>
                        </Tooltip>
                        <ViewCode name="Tooltip" code="3" />
                    </Tabs.Pane>
                </Tabs>
                <ParamTable name='Tooltip' />
            </div>
        )
    }
}

export default App