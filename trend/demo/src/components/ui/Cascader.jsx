import React, { Component } from 'react';
import './App.css';
import Cascader from "../../ishow/Cascader";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Tabs from "../../ishow/Tab/index";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [{
                value: 'zhoubian',
                label: '南京周边旅游',
                children: [{
                    value: 'antianshufen',
                    label: '按天数分',
                    children: [{
                        value: 'yitian',
                        label: '一天'
                    }, {
                        value: 'liangtian',
                        label: '两天'
                    }, {
                        value: 'santian',
                        label: '三天'
                    }]
                }, {
                    value: 'taqing',
                    label: '踏青赏花',
                    children: [{
                        value: 'wuxi',
                        label: '无锡'
                    }, {
                        value: 'yangzhou',
                        label: '扬州'
                    }]
                }]
            }, {
                value: 'guonei',
                label: '国内旅游',
                children: [{
                    value: 'hainan',
                    label: '海南',
                    children: [{
                        value: 'sanya',
                        label: '三亚'
                    }, {
                        value: 'haikou',
                        label: '海口'
                    }, {
                        value: 'yalongwan',
                        label: '亚龙湾'
                    }, {
                        value: 'tianyahaijiao',
                        label: '天涯海角'
                    }]
                }, {
                    value: 'yunnan',
                    label: '云南',
                    children: [{
                        value: 'dali',
                        label: '大理'
                    }, {
                        value: 'lijiang',
                        label: '丽江'
                    }, {
                        value: 'kunming',
                        label: '昆明'
                    }, {
                        value: 'yuxi',
                        label: '玉溪'
                    }]
                }, {
                    value: 'neimeng',
                    label: '内蒙古',
                    children: [{
                        value: 'chifeng',
                        label: '赤峰'
                    }, {
                        value: 'huhe',
                        label: '呼和浩特'
                    }, {
                        value: 'baotou',
                        label: '包头'
                    }, {
                        value: 'erdos',
                        label: '鄂尔多斯'
                    }]
                }]
            }, {
                value: 'oumei',
                label: '欧美',
                children: [{
                    value: 'ruishi',
                    label: '瑞士'
                }, {
                    value: 'faguo',
                    label: '法国'
                }, {
                    value: 'meiguo',
                    label: '美国'
                }]
            }],
            optionsWithDisabled: [{
                value: 'zhoubian',
                label: '南京周边旅游',
                disabled: true,
                children: [{
                    value: 'antianshufen',
                    label: '按天数分',
                    children: [{
                        value: 'yitian',
                        label: '一天'
                    }, {
                        value: 'liangtian',
                        label: '两天'
                    }, {
                        value: 'santian',
                        label: '三天'
                    }]
                }, {
                    value: 'taqing',
                    label: '踏青赏花',
                    children: [{
                        value: 'wuxi',
                        label: '无锡'
                    }, {
                        value: 'yangzhou',
                        label: '扬州'
                    }]
                }]
            }, {
                value: 'guonei',
                label: '国内旅游',
                children: [{
                    value: 'hainan',
                    label: '海南',
                    children: [{
                        value: 'sanya',
                        label: '三亚'
                    }, {
                        value: 'haikou',
                        label: '海口'
                    }, {
                        value: 'yalongwan',
                        label: '亚龙湾'
                    }, {
                        value: 'tianyahaijiao',
                        label: '天涯海角'
                    }]
                }, {
                    value: 'yunnan',
                    label: '云南',
                    children: [{
                        value: 'dali',
                        label: '大理'
                    }, {
                        value: 'lijiang',
                        label: '丽江'
                    }, {
                        value: 'kunming',
                        label: '昆明'
                    }, {
                        value: 'yuxi',
                        label: '玉溪'
                    }]
                }, {
                    value: 'neimeng',
                    label: '内蒙古',
                    children: [{
                        value: 'chifeng',
                        label: '赤峰'
                    }, {
                        value: 'huhe',
                        label: '呼和浩特'
                    }, {
                        value: 'baotou',
                        label: '包头'
                    }, {
                        value: 'erdos',
                        label: '鄂尔多斯'
                    }]
                }]
            }, {
                value: 'oumei',
                label: '欧美',
                children: [{
                    value: 'ruishi',
                    label: '瑞士'
                }, {
                    value: 'faguo',
                    label: '法国'
                }, {
                    value: 'meiguo',
                    label: '美国'
                }]
            }],
            selectedOptions: [],
            selectedOptions2: [],
            selectedOptions3: ['oumei', 'ruishi', ],
            options2: [{
                label: '江苏',
                cities: []
            }, {
                label: '浙江',
                cities: []
            }],
            props: {
                value: 'label',
                children: 'cities'
            }
        }
    }

    handleChange(key, value) {
        this.setState({ [key]: value });
    }

    handleItemChange(val) {
        setTimeout(() => {
            if (val.indexOf('江苏') > -1 && !this.state.options2[0].cities.length) {
                // eslint-disable-next-line
                this.state.options2[0].cities = [{
                    label: '南京'
                }];
            } else if (val.indexOf('浙江') > -1 && !this.state.options2[1].cities.length) {
                // eslint-disable-next-line
                this.state.options2[1].cities = [{
                    label: '杭州'
                }];
            }

            this.forceUpdate();
        }, 300);
    }

    render(){
        return (
            <div>
                <h1>Cascader 级联选择器</h1>
                <h4>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</h4>
                <Tabs type="card" value="1">
                    <Tabs.Pane label="基础用法" name="1">
                        <h4>有两种触发子菜单的方式</h4>
                        <div>
                            <div className="block">
                                <span className="demonstration" style={{display:'block'}}>默认 click 触发子菜单</span>
                                <Cascader
                                    options={this.state.options}
                                    value={this.state.selectedOptions}
                                    onChange={this.handleChange.bind(this, 'selectedOptions')} />
                            </div>
                            <div className="block">
                                <span className="demonstration" style={{ display: 'block' }}>hover 触发子菜单</span>
                                <Cascader
                                    options={this.state.options}
                                    expandTrigger="hover"
                                    value={this.state.selectedOptions2}
                                    onChange={this.handleChange.bind(this, 'selectedOptions2')} />
                            </div>
                        </div>
                        <ViewCode name="Cascader" code="0" />
                    </Tabs.Pane>
                    <Tabs.Pane label="禁用选项" name="2">
                        <h4>通过在数据源中设置 disabled 字段来声明该选项是禁用的</h4>
                        <Cascader
                            options={this.state.optionsWithDisabled}
                        />
                        <ViewCode name="Cascader" code="1" />
                    </Tabs.Pane>
                    <Tabs.Pane label="仅显示最后一级" name="3">
                        <h4>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</h4>
                        <Cascader
                            options={this.state.options}
                            showAllLevels={false}
                        />
                        <ViewCode name="Cascader" code="2" />
                    </Tabs.Pane>
                    <Tabs.Pane label="默认值" name="4">
                        <Cascader
                            options={this.state.options}
                            value={this.state.selectedOptions3}
                        />
                        <ViewCode name="Cascader" code="3"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="选择即改变" name="5">
                        <h4>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</h4>
                        <Cascader
                            options={this.state.options}
                            changeOnSelect={true}
                        />
                        <ViewCode name="Cascader" code="4"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="动态加载次级选项" name="6">
                        <h4>当选中某一级时，动态加载该级下的选项。</h4>
                        <Cascader
                            props={this.state.props}
                            options={this.state.options2}
                            activeItemChange={this.handleItemChange.bind(this)}
                        />
                        <ViewCode name="Cascader" code="5"/>
                    </Tabs.Pane>
                    <Tabs.Pane label="可搜索" name="7">
                        <h4>可以快捷地搜索选项并选择。</h4>
                        <div className="block">
                            <span className="demonstration" style={{ display: 'block' }}>只可选择最后一级菜单的选项</span>
                            <Cascader
                                placeholder="试试搜索：丽江"
                                options={this.state.options}
                                filterable={true}
                            />
                        </div>
                        <div className="block">
                            <span className="demonstration" style={{ display: 'block' }}>可选择任意一级菜单的选项</span>
                            <Cascader
                                placeholder="试试搜索：云南"
                                options={this.state.options}
                                filterable={true}
                                changeOnSelect={true}
                            />
                        </div>
                        <ViewCode name="Cascader" code="6"/>
                    </Tabs.Pane>
                </Tabs>
                <ParamTable name="Cascader" />
            </div>
        )
    }
}

export default App