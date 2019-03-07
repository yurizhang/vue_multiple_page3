import React from 'react';
import './App.css';
import AutoComplete from '../../ishow/auto-complete';
import Cascader from "../../ishow/Cascader";
import ViewCode from './viewCode';
import Tabs from "../../ishow/Tab";

const customItem=(props)=>{
    let item = props.item;
    return (
        <div><div className="ishow-customItem-key">{item.value}</div><span className="ishow-customItem-detail">{item.address}</span></div>
    )
}
class FuzzySearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scenery: [
            { "value": "玄武湖公园", "address": "中国/江苏/南京/玄武区/玄武巷1号" },
            { "value": "中山陵", "address": "中国/江苏/南京/玄武区/石象路7号" },
            { "value": "中央公园", "address": "中国/江苏/南京/六合区/古棠大道" },
            { "value": "南京大屠杀纪念馆", "address": "中国/江苏/南京/建邺区/水西门大街418号" },
            { "value": "老门东", "address": "中国/江苏/南京/秦淮区/剪子巷54号" },
            { "value": "紫峰大厦", "address": "中国/江苏/南京/鼓楼区/中山北路1号" },
            { "value": "鸡鸣寺", "address": "中国/江苏/南京/玄武区/鸡鸣寺路1号" }
            ],
            value1: '',
            value2: '',
            options: [{
                value: 'zhoubian',
                label: '江苏周边旅游',
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
                    value: 'chengshi',
                    label: '按城市分',
                    children: [{
                        value: 'nanjing',
                        label: '南京'
                    }, {
                        value: 'wuxi',
                        label: '无锡'
                    }, {
                        value: 'xuzhou',
                        label: '徐州'
                    }, {
                        value: 'changzhou',
                        label: '常州'
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
        }
    }

    querySearch(queryString, cb) {
        const { scenery } = this.state;
        const results = queryString ? scenery.filter(this.createFilter(queryString)) : scenery;
        // 调用 callback 返回建议列表的数据
        cb(results);
    }

    createFilter(queryString) {
        return (scenery) => {
            return (scenery.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    }

    handleSelect(item) {
       
    }

    handleInputChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleChange(key, value) {
        this.setState({ [key]: value });
    }
    /*
    由于有时输入框受长度限制显示不全，所以在下方提供完整选项给用户看。
    为啥要用setTimeout？ 因为不用的话不好使，有延迟
    tmp为NodeList对象，故用forEach进行遍历。
    */ 
    handleCascaderChange = ()=>{
        setTimeout(() => {
            let s = '';
            let tmp = document.querySelector(".myCascader").querySelector(".ishow-cascader__label").querySelectorAll("label");
            tmp.forEach((item)=>s += item.innerText)
            // this.setState({cascaderValueTips:s}) 这么写会导致没选一次都重刷一次，上次选的值就被清空了，但是感觉可以解决，暂时未想到，用下面的方法将就一下
            document.querySelector("#cascaderTips").innerHTML=s
        }, 300);
    }
 
    render() {
        return (
                <div>
                <Tabs activeName="1" className="search-tabs">
                    <Tabs.Pane label="CRM 自动提示" name="1">
                        {/* <h3 className="text">CRM 自动提示</h3> */}
                        <CrmAutoComplete/>
                        <ViewCode name="FuzzySearch" code="3" />
                    </Tabs.Pane>
                    <Tabs.Pane label="POI 选择" name="2">
                        <h3 className="text">级联选择</h3>
                        <Cascader
                            className="myCascader"
                            options={this.state.options}
                            filterable={true}
                            changeOnSelect={true}
                            onChange={()=>this.handleCascaderChange()}
                        />
                        <p id="cascaderTips"></p>
                        <ViewCode name="FuzzySearch" code="4" />
                        <h3 className="text">基本用法</h3>
                        <AutoComplete
                        className="my-autocomplete my-autocomplete-poi"
                        placeholder="请输入内容"
                        value={this.state.value1}
                        fetchSuggestions={this.querySearch.bind(this)}
                        customItem={customItem}
                        onSelect={this.handleSelect.bind(this)}
                        ></AutoComplete>
                        <ViewCode name="FuzzySearch" code="0" />
                    </Tabs.Pane>
                    <Tabs.Pane label="激活即列出输入建议" name="3">
                        <AutoComplete
                        className="my-autocomplete"
                        placeholder="请输入内容"
                        value={this.state.value1}
                        onFocus={e=>console.log(e, 'onFocus')}
                        onBlur={e=>console.log(e, 'onblur')}
                        fetchSuggestions={this.querySearch.bind(this)}
                        onSelect={this.handleSelect.bind(this)}
                        ></AutoComplete>
                        <ViewCode name="FuzzySearch" code="1" />
                    </Tabs.Pane>
                    <Tabs.Pane label="输入后匹配输入建议" name="4">
                        <AutoComplete
                        className="my-autocomplete"
                        placeholder="请输入内容"
                        value={this.state.value2}
                        fetchSuggestions={this.querySearch.bind(this)}
                        onSelect={this.handleSelect.bind(this)}
                        triggerOnFocus={false}
                        ></AutoComplete>
                        <ViewCode name="FuzzySearch" code="2" />
                    </Tabs.Pane>
                </Tabs>
                </div>
        ) 
    }
}

class CrmAutoComplete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prefix: [
                '订单号',
                '手机号',
                '会员ID',
            ],
            value: ''
        }
    }
    appendPrefix(queryString, cb) {
        if (queryString.indexOf('@') !== -1) {
            return cb([])
        }
        let triggerList = []
        for (let i = 0; i < this.state.prefix.length; i++) {
            triggerList.push({ value: this.state.prefix[i]+ " " + queryString })
        }
        cb(triggerList)
    }

    formatInput(item){
        //输入框中去掉提示条件中的字符
        this.setState({
            value:item.value.slice(item.value.indexOf(" ")+1)
        })
    }

    render(){
        return(
            <div>
                <AutoComplete
                value={this.state.value}
                placeholder='订单号/手机号/会员ID'
                className="my-autocomplete"
                triggerOnFocus={true}
                onSelect={this.formatInput.bind(this)}
                fetchSuggestions={this.appendPrefix.bind(this)} />
            </div>
        )
    }
}

export default FuzzySearch