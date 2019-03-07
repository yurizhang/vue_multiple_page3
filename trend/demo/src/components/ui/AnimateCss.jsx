import React, { Component } from 'react';
import './App.css';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import "animate.css/animate.min.css";
//按需加载
import Button from '../../ishow/Button/Button';
import Message from '../../ishow/Message/Message';
import Tabs from '../../ishow/Tab/index';
import Input from '../../ishow/Input/Input';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: "1s",
            delay: "1s",
            iterationCount: 1,
            eventToggle: false,
            animateType: "",
            animateList: [
                {
                    name: "Bouncing Entrances",
                    content: ["bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"]
                },
                {
                    name: "Bouncing Exits",
                    content: ["bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp"]
                },
                {
                    name: "Fading Entrances",
                    content: ["fadeIn", "fadeInDown", "fadeInDownBig", 'fadeInLeft', "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig"]
                },
                {
                    name: "Fading Exits",
                    content: ["fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig"]
                },
                {
                    name: "Flippers",
                    content: ["flip", "flipInX", "flipInY", "flipOutX", "flipOutY"]
                },
                {
                    name: "Lightspeed",
                    content: ["lightSpeedIn", "lightSpeedOut"]
                },
                {
                    name: "Rotating Entrances",
                    content: ["rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight"]
                },
                {
                    name: "Rotating Exits",
                    content: ["rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight"]
                },
                {
                    name: "Sliders",
                    content: ["slideInDown", "slideInLeft", "slideInRight", "slideOutLeft", "slideOutRight", "slideOutUp"]
                },
                {
                    name: "Specials",
                    content: ["hinge", "rollIn", "rollOut"]
                }
            ]
        }
    }
    open(animateType) {
        this.setState({
            animateType: `animated ${animateType}`
        });
    }
    clear() {
        this.setState({
            animateType: ""
        });
    }
    animationend() {
        this.setState({
            eventToggle: !this.state.eventToggle,
        });
    }
    animationEndFunc() {
        Message({
            showClose: true,
            message: '动画执行结束',
            type: 'info'
        });
    }

    render() {
        const { animateType, animateList, eventToggle } = this.state;
        const TabPane = (item, index) => {
            return (
                <Tabs.Pane key={index} label={item.name} name={String(index)}>
                    {item.content.length && item.content.map(TabContent)}
                </Tabs.Pane>
            )
        }
        const TabContent = (item, index) => {
            return (
                <Button key={index} style={{ margin: 5 }} onClick={this.open.bind(this, item)}>{item}</Button>
            )
        }
        return (
            <div className="App" >
                <h1>AnimateCss 动画效果</h1>
                <div className={animateType} style={{
                    fontSize: '50px', width: '270px', height: '150px', lineHeight: '150px', margin: "0 auto",
                    animationDuration: this.state.duration, animationDelay: this.state.delay, animationIterationCount: this.state.iterationCount
                }}
                    onAnimationEnd={eventToggle ? this.animationEndFunc : undefined}> ElfTeam
                </div>
                <div>
                    <Tabs type="card" value="1" style={{ marginBottom:'40px' }}>
                        {animateList.map(TabPane)}
                    </Tabs>
                </div>
                <div>
                    <div className="aniInput">
                        <Input placeholder="请输入动画持续时间,如：6s" onChange={(duration) => this.setState({ duration })} />
                        <Input placeholder="请输入动画延迟时间,如：2s" onChange={(delay) => this.setState({ delay })} />
                        <Input placeholder="请输入动画重复次数,如：8" onChange={(iterationCount) => this.setState({ iterationCount })} />
                        <Button type="primary" style={{ margin: '5px' }} onClick={this.clear.bind(this)} >清除动画</Button>
                        <Button type="primary" style={{ margin: '5px', background: eventToggle ? "#1D8CE0" : "#58B7FF" }}  onClick={this.animationend.bind(this)} >Toggle动画回调</Button>
                    </div>
                    <ViewCode name="Animate" code="0" />
                    <ParamTable name='Animate' />
                </div>

            </div >
        );
    }
}

export default App;
