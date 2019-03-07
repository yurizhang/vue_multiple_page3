import React from 'react';
import ReactEcharts from 'echarts-for-react';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import { Tabs } from '../../ishow';

class App extends React.Component {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['客流量', '支付笔数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 100,
                bottom: "0px"
            },
            series: [
                {
                    name: '支付笔数',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 190, 132, 101, 120, 132, 123]
                },
                {
                    name: '客流量',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 300, 310, 123, 232, 231]
                }
            ]
        };
    };

    render() {
        return (
            <div className="App">
                <h1>折线图</h1>
                <div>
                    <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
                        <Tabs.Pane label="基础用法" name="1">
                            <ReactEcharts
                                option={this.getOption()}
                                style={{ height: '300px', width: '1000px' }}
                                className='react_for_echarts' />
                            <div className="linechart-code" style={{marginLeft: -20 }}>
                                <ViewCode name="LineChart" code="0" />
                            </div>
                        </Tabs.Pane>
                    </Tabs>
                </div>
                <div className="linechart-param">
                    <ParamTable name='LineChart' />
                </div>
            </div>
        )
    }
}

export default App