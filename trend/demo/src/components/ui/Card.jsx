import React, { Component } from 'react';
import './App.css';
import Card from "../../ishow/Card/Card";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Button from '../../ishow/Button/index';
import Message from '../../ishow/Message/Message';
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';
import Tabs from "../../ishow/Tab/index";

// import IM from '../image/image.jpg'

class App extends Component{
    handleClickOnButton1(){
        Message({
            message: '恭喜你，你成功定制了一张简单卡片',
            type: 'success',
            showClose: true
          });
    }

    handleClickOnButton2(){
        Message({
            message: '恭喜你，你成功定制了一张带图片的卡片',
            type: 'success',
            showClose: true
          });
    }

    render(){
        return (
            <div>
                <h1>Card卡片</h1>
                <h3>将信息聚合在卡片容器中展示。</h3>
                <div style={{ marginBottom: 20 }}>
                    <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
                        <Tabs.Pane label="基础用法" name="1">
                            <h2>基础用法</h2>
                            <h4>包含标题，内容和操作。</h4>
                            <Card className="basic-usage" style={{ "lineHeight": "36px", width: 400, marginBottom: 40 }}
                                header={
                                    <div className="clearfix">
                                        <span style={{ "lineHeight": "36px" }}>卡片名称</span>
                                        <span style={{ "float": "right" }}>
                                            <Button type="primary" onClick={this.handleClickOnButton1.bind(this)}>操作按钮</Button>
                                        </span>
                                    </div>
                                }
                            >
                                <div className="text item">列表内容 1</div>
                                <div className="text item">列表内容 2</div>
                                <div className="text item">列表内容 3</div>
                                <div className="text item">列表内容 4</div>
                            </Card>
                            <ViewCode name="Card" code="0" />
                        </Tabs.Pane>
                        <Tabs.Pane label="简单卡片" name="2">
                            <h2>简单卡片</h2>
                            <h4>卡片可以只有内容区域。</h4>
                            <Card className="simple-card" style={{ "lineHeight": "36px", width: 400, marginBottom: 40 }}>
                                <div className="text item">列表内容 0</div>
                                <div className="text item">列表内容 1</div>
                                <div className="text item">列表内容 2</div>
                                <div className="text item">列表内容 3</div>
                            </Card>
                            <ViewCode name="Card" code="1" />
                        </Tabs.Pane>
                        <Tabs.Pane label="带图片卡片" name="3">
                            <h2>带图片</h2>
                            <h4>可配置定义更丰富的内容展示。</h4>
                            <Row>
                                <Col span={5} offset={0}>
                                    <Card bodyStyle={{ padding: 0 }} style={{ "lineHeight": "36px", width: 270, 'textAlign': 'center', marginBottom: 40 }}>
                                        <img src='./image/image.jpg' alt='要旅游，找途牛' className="image" />
                                        <div style={{ padding: 14 }}>
                                            <span style={{ float: 'left' }}>途牛旅游网</span>
                                            <br />
                                            <div className="bottom clearfix">
                                                <time className="time" style={{ float: 'left' }}>2018-04-08 09:21</time>
                                                <Button type="text" className="button" style={{ "float": "right" }} onClick={this.handleClickOnButton2.bind(this)}>操作按钮</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bodyStyle={{ padding: 0 }} style={{ "lineHeight": "36px", width: 270, 'textAlign': 'center' }}>
                                        <img src='./image/image.jpg' alt='要旅游，找途牛' className="image" />
                                        <div style={{ padding: 14 }}>
                                            <span style={{ float: 'left' }}>途牛旅游网</span>
                                            <br />
                                            <div className="bottom clearfix" >
                                                <time className="time" style={{ float: 'left' }}>2018-04-08 09:21</time>
                                                <Button type="text" className="button" style={{ float: 'right' }} onClick={this.handleClickOnButton2.bind(this)}>操作按钮</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <ViewCode name="Card" code="2" />
                        </Tabs.Pane>
                    </Tabs>
                    <ParamTable name='Card' />
                </div>
            </div>
            )
    }
}

export default App