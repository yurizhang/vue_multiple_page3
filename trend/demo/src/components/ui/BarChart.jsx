import React from 'react';
import ReactEcharts from 'echarts-for-react';
import ViewCode from './viewCode';
import {Tabs} from "../../ishow";
import ParamTable from './paramTable';

class App extends React.Component {
    getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 100, 150, 80, 70, 110, 130, 80, 70, 110, 130, 120],
                type: 'bar',
                color: "#2da0ff"
            }]
        };
    };

    render() {
        return (
            <div className="App">
                <h1>柱状图</h1>
                <div>
                    <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
                        <Tabs.Pane label="基础用法" name="1">
                            <ReactEcharts
                                option={this.getOption()}
                                style={{ height: '300px', width: '1000px' }}
                                className='react_for_echarts' />
                            <div className="barchart-code" style={{ marginLeft: -20 }}>
                                <ViewCode name="BarChart" code="0" />
                            </div>
                        </Tabs.Pane>
                    </Tabs>
                    
                </div> 
                <div className="barchart-param">
                    <ParamTable name='BarChart'/>
                </div>
            </div>
        )
    }
}


export default App