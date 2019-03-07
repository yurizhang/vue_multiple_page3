import React, { Component } from 'react';
import Table from '../../ishow/Table/TableStore';
import Button from "../../ishow/Button/index";
import Checkbox from '../../ishow/Checkbox/index';
import Switch from '../../ishow/Switch/Switch'
import './App.css';
import ViewCode from './viewCode';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 200,
                    mustShow:true,
                    fixed:'left'
                },
                {
                    label: "姓名",
                    prop: "name",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label: "省份",
                    prop: "province",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label:"城市",
                    prop:"city",
                    minWidth: '200',
                    mustShow:false
                },
                {
                    label: "地址",
                    prop: "address",
                    minWidth:'400',
                    mustShow: false
                },
                {
                    label: "公司",
                    prop: "firm",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label: "电话",
                    prop: "tel",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label: "邮箱",
                    prop: "email",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label: "邮编",
                    prop: "zip",
                    minWidth: '200',
                    mustShow: false
                },
                {
                    label: "备注",
                    prop: "note",
                    
                    mustShow: false
                },
                {
                    label: "其他",
                    prop: "other",
                    
                    mustShow: false
                },
                {
                    label: "操作",
                    prop: "handle",
                    width: 200,
                    render: () => {
                        return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
                    },
                    fixed:'right',
                    mustShow: true
                }
            ],
            data: [{
                date: '2018-03-02',
                name: '途牛大前端 -- 张勇',
                province: '江苏',
                city: '苏州市',
                address: '南京市玄武区玄武大道699-32号途牛大厦',
                firm:'途牛',
                tel:'13155556666',
                email:'zhangyong5@tuniu.com',
                zip: 200333,
                note:'无',
                other:'暂无'
            }, {
                date: '2018-03-02',
                name: '途牛大前端 -- 张勇',
                province: '江苏',
                city: '无锡市',
                address: '南京市玄武区玄武大道699-32号途牛大厦',
                firm:'途牛',
                tel:'13155556666',
                email: 'zhangyong5@tuniu.com',
                zip: 200333,
                note:'无',
                other:'暂无'
            }, {
                date: '2018-03-02',
                name: '途牛大前端 -- 张勇',
                province: '江苏',
                city: '常州市',
                address: '南京市玄武区玄武大道699-32号途牛大厦',
                firm:'途牛',
                tel:'13155556666',
                email: 'zhangyong5@tuniu.com',
                zip: 200333,
                note:'无',
                other:'暂无'
            }, {
                date: '2018-03-02',
                name: '途牛大前端 -- 张勇',
                province: '江苏',
                city: '南京市',
                address: '南京市玄武区玄武大道699-32号途牛大厦',
                firm:'途牛',
                tel:'13155556666',
                email:'zhangyong5@tuniu.com',
                zip: 200333,
                note:'无',
                other:'暂无'
            }, {
                date: '2018-03-02',
                name: '途牛大前端 -- 张勇',
                province: '江苏',
                city: '扬州市',
                address: '南京市玄武区玄武大道699-32号途牛大厦',
                firm:'途牛',
                tel:'13155556666',
                email:'zhangyong5@tuniu.com',
                zip: 200333,
                note:'无',
                other:'暂无'
            }],
            checkedList:["日期","姓名","省份","地址","邮编","操作"],//初始化默认被选中的列
            checkAll: false,
            isIndeterminate: true,
            klass: '',
            switchValue: false
        }
    }

    handleCheckboxChange(value){
        const checkedCount = value.length;
        const columnsLength = this.state.columns.length;

        this.setState({
            checkedList:value,//设置当前选中的项
            // 下面用来设置控制当前是否为全选状态
            checkAll: checkedCount === columnsLength,
            isIndeterminate: checkedCount > 0 && checkedCount < columnsLength,
        })
    }

    handleCheckAllChange(checked) {
        const checkedList = checked ? this.state.columns.map((item)=>item.label) : [];

        this.setState({
            isIndeterminate: false,
            checkAll: checked,
            checkedList: checkedList,
        });
    }

    handleSwitchChange(value) {
        this.setState({ switchValue: value })
        if (value) {
            this.setState({ klass: 'table-smallSize' })
        } else {
            this.setState({ klass: '' })
        }
    }

    render(){
        return(
            <div className="checkbox_margin">
                {/* <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize:16,marginRight: 10 }}>缩放</span>
                    <Switch value={this.state.switchValue} onText="on" offText="off" onChange={this.handleSwitchChange.bind(this)}></Switch>
                </div> */}
                <Checkbox
                    checked=
                    {this.state.checkAll}
                    indeterminate={this.state.isIndeterminate}
                    onChange={this.handleCheckAllChange.bind(this)}
                    style={{display:"inlineBlock"}}>全选</Checkbox>
                <Checkbox.Group value={this.state.checkedList} style={{ marginBottom: 20, display: "inline-block",marginLeft:10 }} onChange={this.handleCheckboxChange.bind(this)}>
                    {this.state.columns.map((item,index)=>{
                        return <Checkbox checked={this.state.checkedList.indexOf(item.label) !== -1} label={item.label} key={Math.random()}></Checkbox>
                    })}
                </Checkbox.Group>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns.filter(
                        (item)=>{return this.state.checkedList.indexOf(item.label) !== -1}
                    )}
                    data={this.state.data}
                    border={true}
                    className={this.state.klass}
                />
                <ViewCode name="DynamicTable" code="0"/>
            </div>
        )
    }
}

export default App