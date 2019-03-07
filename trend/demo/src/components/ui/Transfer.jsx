import React, { Component } from 'react';
import './App.css';
import Transfer from "../../ishow/Transfer/index";
import Tabs from "../../ishow/Tab/index";
import Button from "../../ishow/Button/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: [1,2]
    }
    this._filterMethod = this.filterMethod.bind(this);
    
    this._renderFunc = this.renderFunc.bind(this);
  }
  //基础用法
  get data() {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${ i }`,
      disabled: i % 4 === 0
    });
  }
  return data;
}

handleChange(value) {
  this.setState({ value })
}

  //可搜索
  get data1() {
    const data = [];
    const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
    const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
    cities.forEach((city, index) => {
      data.push({
        label: city,
        key: index+1,
        pinyin: pinyin[index]
      });
    });
    return data;
  }

  filterMethod(query, item) {
    return item.pinyin.indexOf(query) > -1;
  }

  handleChange1(value) {
    this.setState({ value }
    )
  }

  //可自定义
  get data2() {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${ i }`,
        disabled: i % 4 === 0
      });
    }
    return data;
  }

  handleChange2(value) {
    this.setState({ value }
    )
  }

  renderFunc(option) {
    return <span>{ option.key } - { option.label }</span>;
  }

  get style() {
    return {
      marginLeft: '20px',
      padding: '6px 5px'
    }
  }

  //数据项属性别名
  get data3() {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        value: i,
        desc: `备选项 ${ i }`,
        disabled: i % 4 === 0
      });
    }
    return data;
  }

  handleChange3(value, direction, movedKeys) {
    this.setState({ value })
  }

  render() {
    const { value } = this.state;
    return (
      /* className="search-tabs"给css的tab-bottom添加样式*/
      <div className="search-tabs">
      <h1>Transfer 穿梭框</h1>
      <div style={{ marginbottom: 40 }}>
        <Tabs>
        
          <Tabs.Pane label="基础用法" name='1'>
            <h2>基础用法</h2>
            <Transfer value={value} data={this.data} onChange={this.handleChange.bind(this)}></Transfer>
            <ViewCode name="Transfer" code="0" />
          </Tabs.Pane>

          <Tabs.Pane label="可搜索" name='2'>
            <h2>可搜索</h2>
            <h4>在数据很多的情况下，可以对数据进行搜索和过滤。</h4>
            <Transfer
              filterable
              filterMethod={this._filterMethod}
              filterPlaceholder="请输入城市拼音"
              value={value}
              onChange={this.handleChange1.bind(this)}
              data={this.data1}>
            </Transfer>
            <ViewCode name="Transfer" code="1" />
          </Tabs.Pane>

          <Tabs.Pane label="可自定义" name='3'>
            <h2>可自定义</h2>
            <h4>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</h4>
            <Transfer
              value={value}
              filterable
              leftDefaultChecked={[2, 3]}
              rightDefaultChecked={[1]}
              renderContent={this._renderFunc}
              titles={['Source', 'Target']}
              buttonTexts={['到左边', '到右边']}
              footerFormat={{
                noChecked: `\${total}`,
                hasChecked: `${`checked`}/${`total`}`
              }}
              onChange={this.handleChange2.bind(this)}
              data={this.data2}
              leftFooter={
                <Button style={this.style} size="small">操作</Button>
              }
              rightFooter={
                <Button style={this.style} size="small">操作</Button>
              }
            >
            </Transfer>
            <ViewCode name="Transfer" code="2" />
          </Tabs.Pane>

          <Tabs.Pane label="数据项属性别名" name='4'>
            <h2>数据项属性别名</h2>
            <h4>默认情况下，Transfer 仅能识别数据项中的 key、label 和 disabled 字段。如果你的数据的字段名不同，可以使用 propsAlias 属性为它们设置别名。</h4>
            <Transfer
              value={value}
              propsAlias={{
                key: 'value',
                label: 'desc'
              }}
              data={this.data3}
              onChange={this.handleChange3.bind(this)}
            >
            </Transfer>
            <ViewCode name="Transfer" code="3" />
            </Tabs.Pane>
        </Tabs>
        <ParamTable name='Transfer' />
      </div>
    </div>
    )
  } 
}

export default App