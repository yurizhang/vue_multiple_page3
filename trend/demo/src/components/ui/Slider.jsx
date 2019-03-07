import React, { Component } from 'react';
import Slider from "../../ishow/Slider/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Tabs from "../../ishow/Tab/index";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: 0,
            value2: 20,
            value3: 40,
            value4: 60,
            value5: 80,
        }
    }
    formatTooltip(val) {
        return val / 100
    }
    render() {
        return (
            <div>
                <div style={{ marginBottom: 20 }}>
                    <h1>Slider滑块</h1>
                    <h3>通过拖动滑块在一个固定区间内进行选择</h3>
                </div>
                <Tabs type="card" value="1" style={{ marginBottom: 40 }}>
                    <Tabs.Pane label="基础用法" name="1">
                        <div style={{ marginBottom: 20 }}>
                            <h2>基础用法</h2>
                            <h4>在拖动滑块时，显示当前值</h4>
                            <div className="demo-box">
                                <div className="block">
                                    <span className="demonstration">默认</span>
                                    <Slider value={this.state.value1} />
                                </div>
                                <div className="block">
                                    <span className="demonstration">自定义初始值</span>
                                    <Slider value={this.state.value2} />
                                </div>
                                <div className="block">
                                    <span className="demonstration">隐藏 Tooltip</span>
                                    <Slider value={this.state.value3} showTooltip={false} />
                                </div>
                                <div className="block">
                                    <span className="demonstration">格式化 Tooltip</span>
                                    <Slider value={this.state.value4} formatTooltip={this.formatTooltip.bind(this)} />
                                </div>
                                <div className="block">
                                    <span className="demonstration">禁用</span>
                                    <Slider value={this.state.value5} disabled={true} />
                                </div>
                            </div>
                            <ViewCode name="Slider" code="0" />
                        </div>
                    </Tabs.Pane>

                    <Tabs.Pane label="离散值" name="2">
                        <div style={{ marginBottom: 20 }}>
                            <h2>离散值</h2>
                            <h4>选项可以是离散的</h4>
                            <div className="demo-box">
                                <div className="block">
                                    <span className="demonstration">不显示间断点</span>
                                    <Slider value={this.state.value2} showStops={false} />
                                </div>
                                <div className="block">
                                    <span className="demonstration">显示间断点</span>
                                    <Slider value={this.state.value3} showStops={true} />
                                </div>
                            </div>
                            <ViewCode name="Slider" code="1" />
                        </div>
                    </Tabs.Pane>

                    <Tabs.Pane label="带有输入框" name="3">
                        <div style={{ marginBottom: 20 }}>
                            <h2>带有输入框</h2>
                            <h4>通过输入框设置精确数值</h4>
                            <div className="demo-box">
                                <div className="block">
                                    <Slider value={this.state.value2} showInput={true} />
                                </div>
                            </div>
                            <ViewCode name="Slider" code="2" />
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="范围选择" name="4">
                        <div style={{ marginBottom: 20 }}>
                            <h2>范围选择</h2>
                            <h4>支持选择某一数值范围</h4>
                            <div className="demo-box">
                                <div className="block">
                                    <Slider range={true} showInput={true} />
                                </div>
                            </div>
                            <ViewCode name="Slider" code="3" />
                        </div>
                    </Tabs.Pane>

                    <Tabs.Pane label="竖向模式" name="5">
                        <div style={{ marginBottom: 20 }}>
                            <h2>竖向模式</h2>
                            <div className="demo-box">
                                <div className="block">
                                    <Slider value={this.state.value4} vertical={true} height="200px" />
                                </div>
                            </div>
                            <ViewCode name="Slider" code="4" />
                        </div>
                    </Tabs.Pane>
                </Tabs>
                <ParamTable name='Slider' />
            </div>
        )
    }
}

export default App