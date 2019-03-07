import React, { Component } from 'react'
import Tree from "../../ishow/Tree/index"
import Tabs from "../../ishow/Tab/index"
import Button from '../../ishow/Button/index'
import Input from "../../ishow/Input/index"
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            dataDefault: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            dataNode: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            dataCustom: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            dataFilter: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            dataAccordion: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            options: {
                children: 'children',
                label: 'label'
            },
            optionsDefault: {
                children: 'children',
                label: 'label'
            },
            optionsNode: {
                children: 'children',
                label: 'label'
            },
            optionsCustom: {
                children: 'children',
                label: 'label'
            },
            optionsFilter: {
                children: 'children',
                label: 'label'
            },
            optionsAccordion: {
                children: 'children',
                label: 'label'
            },
            regions: [{
                'name': 'region1'
            }, {
                'name': 'region2'
            }]
        }
        this.options = {
            label: 'name',
            children: 'zones'
        }
        this.optionsDefault = {
            label: 'name',
            children: 'zones'
        }
        this.optionsNode = {
            label: 'name',
            children: 'zones'
        }
        this.optionsCustom = {
            label: 'name',
            children: 'zones'
        }
        this.count = 1,
        this.id = 100
    }

    //默认展开和默认选中
    handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
    }

    loadNode(node, resolve) {

        if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
            hasChild = true;
        } else if (node.data.name === 'region2') {
            hasChild = false;
        } else {
            hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
            var data;
            if (hasChild) {
                data = [{
                    name: 'zone' + this.count++
                }, {
                    name: 'zone' + this.count++
                }];
            } else {
                data = [];
            }

            resolve(data);
        }, 500);
    }

    //树节点的选择
    getCheckedNodes() {
        console.log(this.tree.getCheckedNodes());
    }
    getCheckedKeys() {
        console.log(this.tree.getCheckedKeys());
    }
    setCheckedNodes() {
        this.tree.setCheckedNodes([{
            id: 5,
            label: '二级 2-1'
        }, {
            id: 9,
            label: '三级 1-1-1'
        }]);
    }
    setCheckedKeys() {
        this.tree.setCheckedKeys();
    }
    resetChecked() {
        this.tree.setCheckedKeys([]);
    }
    //自定义节点内容
    append(store, data) {
        store.append({ id: this.id++, label: `testtest_${this.id}`, children: [] }, data);
    }

    remove(store, data) {
        store.remove(data);
    }

    renderContent(nodeModel, data, store) {
        return (
            <span>
                <span>
                    <span>{data.label}</span>
                </span>
                <span style={{ float: 'right', marginRight: '20px' }}>
                    <Button size="mini" onClick={() => this.append(store, data)}>Append</Button>
                    <Button size="mini" onClick={() => this.remove(store, data)}>Delete</Button>
                </span>
            </span>);
    }

    render() {
        const { regions, data, options, dataDefault, optionsDefault, dataNode, optionsNode, dataCustom, optionsCustom, dataFilter, optionsFilter, dataAccordion, optionsAccordion } = this.state
        return (
            <div>
                <h1>Tree 树形控件</h1>
                <h3>用清晰的层级结构展示信息，可展开或折叠。</h3>
                <Tabs type="card" value="1" style={{ marginBottom: 40 }}>
                    <Tabs.Pane label="基础用法" name="1">
                        <p>基础的树形结构展示。</p>
                        <Tree
                            data={this.state.data}
                            options={this.state.options}
                            highlightCurrent={true}
                            onCheckChange={(data, checked, indeterminate) => {
                                console.debug('onCheckChange: ', data, checked, indeterminate)
                            }
                            }
                            onNodeClicked={(data, reactElement, ) => {
                                console.debug('onNodeClicked: ', data, reactElement)
                            }}
                        />
                        <ViewCode name="Tree" code="0" />
                    </Tabs.Pane>

                    <Tabs.Pane label="可选择" name="2">
                        <p>适用于需要选择层级时使用。在下例中，由于在点击时才进行该层数据的获取，导致层级不可预知，如果没有下层数据，则点击后下拉按钮会消失。</p>
                        <Tree
                            data={regions}
                            options={this.options}
                            isShowCheckbox={true}
                            lazy={true}
                            load={this.loadNode.bind(this)}
                            onCheckChange={this.handleCheckChange.bind(this)}
                            onNodeClicked={(data, nodeModel, reactElement, treeNode) => {
                                console.debug('onNodeClicked: ', data, nodeModel, reactElement)
                            }}
                        />
                        <ViewCode name="Tree" code="1" />
                    </Tabs.Pane>

                    <Tabs.Pane label="默认展开和默认选中" name="3">
                        <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
                        <Tree
                            data={dataDefault}
                            options={optionsDefault}
                            isShowCheckbox={true}
                            nodeKey="id"
                            defaultExpandedKeys={[2, 3]}
                            defaultCheckedKeys={[5]}
                        />
                        <ViewCode name="Tree" code="2" />
                    </Tabs.Pane>

                    <Tabs.Pane label="树节点的选择" name="4">
                        <div>
                            <Tree
                                ref={e => this.tree = e}
                                data={dataNode}
                                options={optionsNode}
                                isShowCheckbox={true}
                                highlightCurrent={true}
                                nodeKey="id"
                                defaultExpandedKeys={[2, 3]}
                                defaultCheckedKeys={[5]}
                            />
                            <div className="buttons" style={{ marginTop: 5 }}>
                                <Button onClick={() => this.getCheckedNodes()}>通过 node 获取</Button>
                                <Button onClick={() => this.getCheckedKeys()}>通过 key 获取</Button>
                                <Button onClick={() => this.setCheckedNodes()}>通过 node 设置</Button>
                                <Button onClick={() => this.setCheckedKeys()}>通过 key 设置</Button>
                                <Button onClick={() => this.resetChecked()}>清空</Button>
                            </div>
                        </div>
                        <ViewCode name="Tree" code="3" />
                    </Tabs.Pane>

                    <Tabs.Pane label="自定义节点内容" name="5">
                        <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容。</p>
                        <Tree
                            data={dataCustom}
                            options={optionsCustom}
                            isShowCheckbox={true}
                            nodeKey="id"
                            defaultExpandAll={true}
                            expandOnClickNode={false}
                            renderContent={(...args) => this.renderContent(...args)}
                        />
                        <ViewCode name="Tree" code="4" />
                    </Tabs.Pane>

                    <Tabs.Pane label="节点过滤" name="6">
                        <p>通过关键字过滤树节点。</p>
                        <div>
                            <Input placeholder="输入关键字进行过滤" onChange={text => this.tree.filter(text)} />
                            <Tree
                                ref={e => this.tree = e}
                                className="filter-tree"
                                data={dataFilter}
                                options={optionsFilter}
                                nodeKey="id"
                                defaultExpandAll={true}
                                filterNodeMethod={(value, data) => {
                                    if (!value) return true;
                                    return data.label.indexOf(value) !== -1;
                                }}
                            />
                        </div>
                        <ViewCode name="Tree" code="5" />
                    </Tabs.Pane>

                    <Tabs.Pane label="手风琴模式" name="7">
                        <p>对于同一级的节点，每次只能展开一个。</p>
                        <Tree
                            ref={e => this.tree = e}
                            data={dataAccordion}
                            options={optionsAccordion}
                            accordion={true}
                            onNodeClicked={node => console.log(node)}
                        />
                        <ViewCode name="Tree" code="6" />
                    </Tabs.Pane>
                    <ParamTable name='Tree' />
                </Tabs>
            </div>
        )
    }
}

export default App