import React from 'react'
import ReactEcharts from 'echarts-for-react'
import ViewCode from './viewCode'
import ParamTable from './paramTable';
import {Tabs} from '../../ishow'

class PieChart2 extends React.Component {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 0,
                top: 100,
                data: ['跟团游', '自由行', '邮轮', '机票', '酒店', "火车票"]
            },
            series: [
                {
                    name: '订单来源',
                    hoverAnimation: false,
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: [
                        { value: 335, name: '跟团游' },
                        { value: 310, name: '自由行' },
                        { value: 234, name: '邮轮' },
                        { value: 135, name: '机票' },
                        { value: 1548, name: '酒店' },
                        { value: 1324, name: '火车票' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    };

    render() {
        return (
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: '300px', width: '500px' }}
                    className='react_for_echarts' />
        )
    }
}

class App extends React.Component {
    getOption = () => {
        return {
            title: {
                show: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: 0,
                top: 100,
                data: ['跟团游', '自由行', '邮轮', '机票', '酒店', "火车票"]
            },
            series: [
                {
                    name: '访问来源',
                    hoverAnimation: false,
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '跟团游' },
                        { value: 310, name: '自由行' },
                        { value: 234, name: '邮轮' },
                        { value: 135, name: '机票' },
                        { value: 1548, name: '酒店' },
                        { value: 1324, name: '火车票' }
                    ]
                }
            ]
        };
    };

    render() {
        return (
            <div className="App">
                <h1>饼图</h1>
                <div>
                    <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
                        <Tabs.Pane label="环形饼图" name="1">
                            <ReactEcharts
                                option={this.getOption()}
                                style={{ height: '300px', width: '500px' }}
                                className='react_for_echarts' />
                            <div className="piechart-code" style={{ marginLeft: -20 }}>
                                <ViewCode name="PieChart" code="0" />
                            </div>
                        </Tabs.Pane>
                        <Tabs.Pane label="实心饼图" name="2">
                            <PieChart2 />
                            <ViewCode name="PieChart" code="1" />
                        </Tabs.Pane>
                    </Tabs>
                </div>
                <div className="piechart-param">
                    <ParamTable name='PieChart' />
                </div>
            </div>
        )
    }
}

export default App