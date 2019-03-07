import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from "../../ishow/Button/index";
import Row from '../../ishow/LayoutComponent/row';
import Col from '../../ishow/LayoutComponent/col';
import Input from '../../ishow/Input';
import {DatePicker} from '../../ishow/DatePicker';
import Select from '../../ishow/Select';
import ViewCode from './viewCode';
class QueryCriteriaModule extends Component {
  constructor(props){
    super(props);
    this.state = {
      expendCollapse:true,
      paginationVisible:false,
      page: 100,
      pageSize: 10,
      currentPage: 1,
      initDateStart:null,
      initDateEnd: null,
      assignDateStart:null,
      assignDateEnd:null,
      finishDateStart:null,
      finishDateEnd:null,
      addData:[],
      addColumns:[
        {
          label:'投诉事宜记录',
          subColumns:[
            {
              label:"日期",
              prop:'date'
            },
            {
              label:'内容',
              prop:'content'
            },
            {
              label:'详情',
              prop:'detail'
            }
          ]
        }
      ],
      options: [{
        value: '选项1',
        label: '问题1'
      }, {
        value: '选项2',
        label: '问题2'
      }, {
        value: '选项3',
        label: '问题3'
      }, {
        value: '选项4',
        label: '问题4'
      }, {
        value: '选项5',
        label: '问题5'
      }],
      selectValue: ''
    };
  }

  toggleExpend(){
    this.setState({expendCollapse:!this.state.expendCollapse})
  }

  render() {
    let expendCollapse = this.state.expendCollapse;
    let arrowDirection = expendCollapse ? 'arrow-down' : 'arrow-up';
    let isCollapsePartHidden = expendCollapse ? 'QueryCriteriaModule_CollapsePart':'';
    let ButtonText = expendCollapse ? '展开' : '收起';
    let initDateStart = this.state.initDateStart;
    let initDateEnd = this.state.initDateEnd;
    let assignDateStart = this.state.assignDateStart;
    let assignDateEnd = this.state.assignDateEnd;
    let finishDateStart = this.state.finishDateStart;
    let finishDateEnd = this.state.finishDateEnd;
    //for Collapse
    return (
      <div className="QueryCriteriaModule_icon">
        <div className="QueryCriteriaModule">
          <div>
            <Row className='QueryCriteriaModule_Row' >
              <Col className='QueryCriteriaModule_Col' span={8} ><label>投诉单ID</label><Input className='QueryCriteriaModule_Input'/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>订单ID</label><Input className='QueryCriteriaModule_Input'/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>线路号</label><Input className='QueryCriteriaModule_Input'/></Col>
            </Row>
            <Row  className='QueryCriteriaModule_Row' >
              <Col className='QueryCriteriaModule_Col' span={8} ><label>投诉人电话</label><Input className='QueryCriteriaModule_Input'/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>发起人</label><Input className='QueryCriteriaModule_Input' append={<Button type="primary" icon="search">由我发起</Button>}/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>处理人</label><Input className='QueryCriteriaModule_Input'/></Col>
            </Row>
            <Row  className='QueryCriteriaModule_Row' >
              <Col className='QueryCriteriaModule_Col' span={8} ><label>处理岗</label>
              <Select className='QueryCriteriaModule_Input' value={this.state.selectValue}> 
                  {
                    this.state.options.map(el => {
                      return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                  }
                </Select>
              </Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>投诉单状态</label>
              <Select className='QueryCriteriaModule_Input' value={this.state.selectValue}>
                  {
                    this.state.options.map(el => {
                      return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                  }
                </Select>
              </Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>供应商名称</label><Input className='QueryCriteriaModule_Input'/></Col>
            </Row>
          </div>
          <div className='QueryCriteriaModule_Expend'><Button onClick={this.toggleExpend.bind(this)} className='QueryCriteriaModule_Expend_Button' plain={true} icon={arrowDirection}>{ButtonText}</Button></div>
          <div className={isCollapsePartHidden}>
            <Row className='QueryCriteriaModule_Row'>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>客服经理</label><Input className='QueryCriteriaModule_Input'/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>产品经理</label><Input className='QueryCriteriaModule_Input'/></Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>是否为赔款单</label>
              <Select className='QueryCriteriaModule_Input' value={this.state.selectValue}> 
                  {
                    this.state.options.map(el => {
                      return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                  }
                </Select>
              </Col>
            </Row>
            <Row  className='QueryCriteriaModule_Row' >
              <Col className='QueryCriteriaModule_Col' span={8} ><label>发起时间</label>
                  {/* <Input className='QueryCriteriaModule_Input'/> */}
                  <div className='QueryCriteriaModule_DatePicker'>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={initDateStart}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({initDateStart: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  /><span className='QueryCriteriaModule_rangeSpliter'>至</span>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={initDateEnd}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({initDateEnd: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  />
                 </div>
              </Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>分配时间</label>
              <div className='QueryCriteriaModule_DatePicker'>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={assignDateStart}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({assignDateStart: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  /><span className='QueryCriteriaModule_rangeSpliter'>至</span>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={assignDateEnd}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({assignDateEnd: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  />
                 </div>
              </Col>
              <Col className='QueryCriteriaModule_Col' span={8} ><label>完成时间</label>
              <div className='QueryCriteriaModule_DatePicker'>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={finishDateStart}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({finishDateStart: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  /><span className='QueryCriteriaModule_rangeSpliter'>至</span>
                  <DatePicker
                  // style={{width:'41%',display:'inline'}}
                  value={finishDateEnd}
                  isShowTime={true}
                  placeholder="选择日期"
                  format='yyyy-MM-dd HH:mm:ss'
                  onChange={date=>{
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({finishDateEnd: date})
                  }}
                  disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                  />
                 </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='QueryCriteriaModule_Button'>
            <Button type="primary" size="large">查询</Button>
            <Button plain={true} type="primary" size="large">重置</Button>
        </div>
        <ViewCode name="QueryCriteriaModule" code="0" />
      </div>
    );
  }
}

export default QueryCriteriaModule;
