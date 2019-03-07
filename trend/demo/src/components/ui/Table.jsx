import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from "../../ishow/Button/index";
import Icon from "../../ishow/Icon/Icon";
import Tabs from "../../ishow/Tab/index";
import Tag from "../../ishow/Tag/Tag";
import Table from '../../ishow/Table/TableStore';
import Form from '../../ishow/Form/index';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
// import Switch from '../../ishow/Switch/Switch';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //for Table
      columns1: [
        {
          label: "日期",
          prop: "date",
          width: 180,
          resizable:false
        },
        {
          label: "姓名",
          prop: "name",
          width: 180,
          resizable:false
        },
        {
          label: "地址",
          prop: "address",
          resizable:false
        }
      ],
      data1: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-04',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-01',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }],
      columns2: [
        {
          label: "日期",
          prop: "date",
          width: 150,
          fixed: 'left',
          resizable:false
        },
        {
          label: "姓名",
          prop: "name",
          width: 160,
          resizable:false
        },
        {
          label: "省份",
          prop: "province",
          width: 160,
          resizable:false
        },
        {
          label: "地址",
          prop: "address",
          //width: 400,
          resizable:false
        },
        {
          label: "邮编",
          prop: "zip",
          //width: 120,
          resizable:false
        },
        {
          label: "操作",
          prop: "handle",
          fixed: 'right',
          width: 100,
          resizable:false,
          render: ()=>{
            return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
          }
        }
      ],
      data2: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      },{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      },{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      },{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      },{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }],
      columns3: [
        {
          label: "日期",
          prop: "date",
          width: 150,
          resizable:false
        },
        {
          label: "配送信息",
          subColumns: [
            {
              label: "姓名",
              prop: "name",
              width: 160,
              resizable:false
            },
            {
              label: "地址",
              subColumns: [
                {
                  label: "省份",
                  prop: "province",
                  width: 160,
                  resizable:false
                },
                {
                  label: "城市",
                  prop: "address",
                  width: 400,
                  resizable:false
                },
                {
                  label: "邮编",
                  prop: "zip",
                  width: 120,
                  resizable:false
                }
              ]
            }
          ]
        }
      ],
      data3: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
      }],
      columns4: [
        {
          type: 'index',
          resizable:false
        },
        {
          label: "日期",
          prop: "date",
          width: 150,
          resizable:false,
          render: function(data){
            return (
              <span>
                <Icon name="time" />
                <span style={{ marginLeft: '10px' }}>{data.date}</span>
              </span>)
          }
        },
        {
          label: "姓名",
          prop: "name",
          width: 160,
          resizable:false,
          render: function(data){
            return <Tag>{data.name}</Tag>
          }
        },
        {
          label: "操作",
          prop: "address",
          resizable:false,
          render: function(){
            return (
              <span>
                <Button plain={true} type="info" size="small">编辑</Button>
                <Button type="danger" size="small">删除</Button>
              </span>
            )
          }
        }
      ],
      data4: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }],
       columns5: [
        {
          type: 'expand',
          resizable:false,
          expandPannel: function(data){
            return (
              <Form labelPosition="left" inline={true} className="demo-table-expand">
                <Form.Item label="商品名称"><span>双人报价套餐-上海迪士尼乐园自驾2日游</span></Form.Item>
                <Form.Item label="所属店铺"><span>途牛大前端 -- 张勇夫妻店</span></Form.Item>
                <Form.Item label="商品 ID"><span>12987122</span></Form.Item>
                <Form.Item label="店铺 ID"><span>10333</span></Form.Item>
                <Form.Item label="商品分类"><span>宿玩具总动员酒店</span></Form.Item>
                <Form.Item label="店铺地址"><span>  上海迪士尼乐园</span></Form.Item>
                <Form.Item label="商品描述"><span> 3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限</span></Form.Item>
              </Form>
            )
          }
        },
        {
          label: "商品 ID",
          prop: "id",
          width: 150,
          resizable:false
        },
        {
          label: "商品名称",
          prop: "name",
          width: 250,
          resizable:false
        },
        {
          label: "描述",
          prop: "desc",
          resizable:false
        }
      ],
      data5: [{
        id: '12987122',
        name: '双人报价套餐-上海迪士尼乐园自驾2日游',
        category: '宿玩具总动员酒店',
        desc: ' 3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
        address: '  上海迪士尼乐园',
        shop: '途牛大前端 -- 张勇夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '双人报价套餐-上海迪士尼乐园自驾2日游',
        category: '宿玩具总动员酒店',
        desc: ' 3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
        address: '  上海迪士尼乐园',
        shop: '途牛大前端 -- 张勇夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '双人报价套餐-上海迪士尼乐园自驾2日游',
        category: '宿玩具总动员酒店',
        desc: ' 3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
        address: '  上海迪士尼乐园',
        shop: '途牛大前端 -- 张勇夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '双人报价套餐-上海迪士尼乐园自驾2日游',
        category: '宿玩具总动员酒店',
        desc: ' 3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
        address: '  上海迪士尼乐园',
        shop: '途牛大前端 -- 张勇夫妻店',
        shopId: '10333'
      }],
      columns6: [
        {
          type: 'selection',
          resizable:false
        },
        {
          label: "日期",
          prop: "date",
          width: 150,
          resizable:false
        },
        {
          label: "姓名",
          prop: "name",
          width: 160,
          resizable:false
        },
        {
          label: "地址",
          prop: "address",
          resizable:false
        }
      ],
      data6: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }, {
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        province: '江苏',
        city: '普陀区',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        zip: 200333
       }],
      columns7: [
        {
          label: "日期",
          prop: "date",
          width: 180,
          sortable: true,
          resizable:false
        },
        {
          label: "姓名",
          prop: "name",
          width: 180,
          sortable: true,
          resizable:false
        },
        {
          label: "地址",
          prop: "address",
          resizable:false
        }
      ],
      data7: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-04',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-01',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦'
      }],
      columns8: [
        {
          label: "日期",
          prop: "date",
          width: 180,
          resizable:false
        },
        {
          label: "姓名",
          prop: "name",
          width: 180,
          resizable:false
        },
        {
          label: "地址",
          prop: "address",
          resizable:false
        },
        {
          label: '标签',
          prop: 'tag',
          width: 100,
          resizable:false,
          filters: [{text: '家', value: '家'}, {text: '公司', value: '公司'}],
          filterMethod(value, row) {
            return row.tag === value;
          },
          render: (data, column) => {
            if (data['tag'] === '家') {
              return <Tag type="primary">{data['tag']}</Tag>
            } else if (data['tag'] === '公司') {
              return <Tag type="success">{data['tag']}</Tag>
            }
          }
        }
      ],
      data8: [{
        date: '2018-03-02',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        tag: '家'
      }, {
        date: '2018-03-04',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        tag: '公司'
      }, {
        date: '2018-03-01',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        tag: '公司'
      }, {
        date: '2018-03-03',
        name: '途牛大前端 -- 张勇',
        address: '南京市玄武区玄武大道699-32号途牛大厦',
        tag: '家'
      }],
      klass:'',
      switchValue:false
    };
  };
  
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','数据','表格']);
  // }

  handleSwitchChange(value){
    this.setState({switchValue:value})
    if(value){
      this.setState({klass:'table-smallSize'})
    }else{
      this.setState({klass:''})
    }
  }


  render() {
    //for Collapse
    return (
      <div className="App table_tabs">
        <h1>Table 表格</h1>
        <h3>常用的表格</h3>
        <div style={{ marginBottom: 20 }}>
          {/* <span style={{ fontSize:16,marginRight:10 }}>缩放</span>
          <Switch value={this.state.switchValue} onText="on" offText="off" onChange={this.handleSwitchChange.bind(this)}></Switch> */}
          <span style={{color:'rgb(245, 108, 108)'}}>注意：BOSS3框架规定表格数据默认50条/页</span>
        </div>
        <div >
          <Tabs type="card" value="1" style={{marginBottom:40}} >
            <Tabs.Pane label="基础表格" name="1">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns1}
                data={this.state.data1}
                stripe={true}
                border={true}
                className={this.state.klass}
              />
              {/* 带斑马纹表格 带边框表格 带状态表格*/}
              <ViewCode name="Table" code="0" />
            </Tabs.Pane>
            <Tabs.Pane label="固定表格" name="2">
            {/* 固定列 固定列和表头 固定头*/}
              <Table
                style={{width: '100%'}}
                columns={this.state.columns2}
                data={this.state.data2}
                border={true}
                height={200}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="1" />
            </Tabs.Pane>
            <Tabs.Pane label="多级表头" name="3">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns3}
                data={this.state.data3}
                border={true}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="2" />
            </Tabs.Pane>
            <Tabs.Pane label="自定义列模板" name="4">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns4}
                data={this.state.data4}
                border={true}
                height={250}
                highlightCurrentRow={true}
                onCurrentChange={item=>{console.log(item)}}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="3" />
            </Tabs.Pane>
            <Tabs.Pane label="展开行" name="5">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns5}
                data={this.state.data5}
                border={false}
                onCurrentChange={item=>{console.log(item)}}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="4" />
            </Tabs.Pane>
            <Tabs.Pane label="多选" name="6">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns6}
                data={this.state.data6}
                border={true}
                height={250}
                onSelectChange={(selection) => { console.log(selection) }}
                onSelectAll={(selection) => { console.log(selection) }}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="5" />
            </Tabs.Pane>
            <Tabs.Pane label="排序" name="7">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns7}
                data={this.state.data7}
                border={true}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="6" />
            </Tabs.Pane>
            <Tabs.Pane label="筛选" name="8">
              <Table
                style={{width: '100%'}}
                columns={this.state.columns8}
                data={this.state.data8}
                border={true}
                className={this.state.klass}
              />
              <ViewCode name="Table" code="7" />
            </Tabs.Pane>
          </Tabs>
        </div>
        <div>

        </div>

        <ParamTable name='Table'/>
        <ParamTable name='TableColumn'/>
      </div>
    );
  }
}

export default App;
