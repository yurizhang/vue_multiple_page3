import React, { Component } from 'react';
import './App.css';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import AutoComplete from '../../ishow/auto-complete';
// import Button from "../components/Button"
// import Icon from "../components/Icon"
//import Dialog from "../components/Dialog"
//按需加载
import Button from '../../ishow/Button/Button';
import Radio from '../../ishow/Radio/index';
import Tabs from '../../ishow/Tab/index';
import CheckBox from '../../ishow/Checkbox/index';
import Input from '../../ishow/Input/Input';
import Select from '../../ishow/Select/index';
import DatePicker from '../../ishow/DatePicker/DatePicker';
import DateRangePicker from '../../ishow/DatePicker/DateRangePicker';
import Upload from '../../ishow/Upload/Upload';
import Dialog from '../../ishow/Dialog/Dialog';
import Switch from '../../ishow/Switch/Switch';
import Tooltip from '../../ishow/Tooltip/Tooltip';
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';

const customItem = (props) => {
  let item = props.item;
  return (
    <div><div className="ishow-customItem-key">{item.value}</div><span className="ishow-customItem-detail">{item.address}</span></div>
  )
}
class App extends Component {

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
      value4: '',
      radioCheckedValue: 1,
      radioGroupCheckedValue: 'suz',
      checkList: ['复选框 A', '选中且禁用'],
      checkAll: false,
      cities: ['上海', '北京', '广州', '深圳'],
      checkedCities: ['上海', '北京'],
      isIndeterminate: true,
      dialogImageUrl: '',
      dialogVisible: false,
      switchValue: 100,
      options: [
        {
        value: '选项1',
        label: 'ELF-张勇'
      }, {
        value: '选项2',
        label: 'ELF-陈瑜婷'
      }, {
        value: '选项3',
        label: 'ELF-盛瑜'
      }, {
        value: '选项4',
        label: 'ELF-刘兴'
      }, {
        value: '选项5',
        label: 'ELF-黄杰'
      },
      {
        value: '选项6',
        label: 'ELF-刘泽琼'
      },
      {
        value: '选项7',
        label: 'ELF-赵斐昊'
      }
    ],
      value: '',

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


  //for Radio
  changeRadio(value) {
    this.setState({ radioCheckedValue: value });
  }
  changeRadioGroup(radioGroupCheckedValue) {
    this.setState({ radioGroupCheckedValue });
  }
  //for CheckBox

  handleCheckAllChange(checked) {
    const checkedCities = checked ? ['上海', '北京', '广州', '深圳'] : [];

    this.setState({
      isIndeterminate: false,
      checkAll: checked,
      checkedCities: checkedCities,
    });
  }

  handleCheckedCitiesChange(value) {
    const checkedCount = value.length;
    const citiesLength = this.state.cities.length;

    this.setState({
      checkedCities: value,
      checkAll: checkedCount === citiesLength,
      isIndeterminate: checkedCount > 0 && checkedCount < citiesLength,
    });
  }

  //for Upload
  handlePreview(file) {
    console.log('preview');
  }

  handleRemove(file, fileList) {
    console.log('remove');
  }

  

  querySearchAsync(queryString, cb) {
    const { scenery } = this.state;
    const results = queryString ? scenery.filter(this.createFilter(queryString)) : scenery;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      cb(results);
    }, 3000 * Math.random());
  }

  createFilter(queryString) {
    return (restaurant) => {
      return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }

  handleSelect(item) {

  }

  render() {
    //for DatePicker
    const { value1, value2, value3 } = this.state
    //for Upload
    const fileList = [
      { name: '旅游线路1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }, { name: '旅游线路2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }
    ];
    const fileList2 = [
      { name: '旅游线路1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }, { name: '旅游线路2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' }
    ]
    const { dialogImageUrl, dialogVisible } = this.state;
    return (
      <div className="App">
        <h1>FormElement 表单元素</h1>
        <h3>常用的表单元素如下：</h3>
        <div>
          <Tabs type="card" value="1" style={{ marginBottom: 40 }}>
            <Tabs.Pane label="Radio" name="1">
              <div>
                <h2>单选框</h2>
                <p>要使用 Radio 组件，需要设置value绑定变量，可以通过checked来指定Radio的选中状态。</p>
                <Radio value="1" checked={this.state.radioCheckedValue === 1} onChange={this.changeRadio.bind(this)}>ELF-zhangyong1</Radio>
                <Radio value="2" checked={this.state.radioCheckedValue === 2} onChange={this.changeRadio.bind(this)}>ELF-chenyuting</Radio>
                <ViewCode name="Radio" code="0" />
              </div>
              <div>
                <h2>禁用状态</h2>
                <p>设置disabled属性，它接受一个Boolean，true为禁用。</p>
                <Radio value="1" disabled={true}>ELF-zhangyong</Radio>
                <Radio value="2" disabled={true}>ELF-chenyuting</Radio>
                <ViewCode name="Radio" code="1" />
              </div>
              <div>
                <h2>单选框组</h2>
                <p>适用于在多个互斥的选项中选择的场景</p>
                <Radio.Group value={this.state.radioGroupCheckedValue} onChange={this.changeRadioGroup.bind(this)}>
                  <Radio value="zy">张勇</Radio>
                  <Radio value="tyy">唐媛媛</Radio>
                  <Radio value="cyt">陈瑜婷</Radio>
                  <Radio value="zph">赵斐昊</Radio>
                  <Radio value="sy">盛瑜</Radio>
                  <Radio value="hj">黄杰</Radio>
                  <Radio value="lx">刘兴</Radio>
                  <Radio value="lzq">刘泽琼</Radio>
                </Radio.Group>
                <ViewCode name="Radio" code="2" />
              </div>
              <ParamTable name='Radio' />
              <ParamTable name='RadioGroup' />
              {/* <ParamTable name='RadioButton'/> */}
            </Tabs.Pane>
            <Tabs.Pane label="Checkbox" name="2">
              <div>
                <h2>多选框</h2>
                <p>简单的Checkbox，使用checked切换选中状态。</p>
                <CheckBox checked>备选项</CheckBox>
                <ViewCode name="Checkbox" code="0" />
              </div>
              <div>
                <h2>多选框组</h2>
                <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中的项。<br />禁用状态加disabled属性</p>
                <CheckBox.Group value={this.state.checkList}>
                  <CheckBox label="复选框 A"></CheckBox>
                  <CheckBox label="复选框 B"></CheckBox>
                  <CheckBox label="复选框 C"></CheckBox>
                  <CheckBox label="禁用" disabled></CheckBox>
                  <CheckBox label="选中且禁用" disabled></CheckBox>
                </CheckBox.Group>
                <ViewCode name="Checkbox" code="1" />
              </div>
              <div>
                <h2>全选按钮</h2>
                <p>indeterminate属性实现全选的效果</p>
                <CheckBox
                  checked={this.state.checkAll}
                  indeterminate={this.state.isIndeterminate}
                  onChange={this.handleCheckAllChange.bind(this)}>全选</CheckBox>
                <div style={{ margin: '15px 0' }}></div>
                <CheckBox.Group
                  value={this.state.checkedCities}
                  onChange={this.handleCheckedCitiesChange.bind(this)}>
                  {
                    this.state.cities.map((city, index) =>
                      <CheckBox key={index} label={city}></CheckBox>
                    )
                  }
                </CheckBox.Group>
                <ViewCode name="Checkbox" code="2" />

              </div>
              <div>
                <h2>可选数量限制</h2>
                <p>min：最少可选数量 max：最大可选数量</p>
                <CheckBox.Group
                  min="1"
                  max="2"
                  value={this.state.checkedCities}
                  onChange={this.handleCheckedCitiesChange.bind(this)}>
                  {
                    this.state.cities.map((city, index) =>
                      <CheckBox key={index} label={city}></CheckBox>
                    )
                  }
                </CheckBox.Group>
                <ViewCode name="Checkbox" code="3" />
              </div>
              <ParamTable name='Checkbox' />
              <ParamTable name='CheckboxGroup' />
            </Tabs.Pane>
            <Tabs.Pane label="Input" name="3" >
              <div className="demo-form">
              <h2>输入框</h2>
              <h3>基础用法</h3>
              <Input  placeholder="请输入内容" min={2} max={10} step={2} resize='vertical' />
              <ViewCode name="Input" code="0" />
              <h3>disabled属性：禁用</h3>
              <Input placeholder="请输入内容" disabled />
              <ViewCode name="Input" code="1" />
              <h3>带有icon的输入框</h3>
              <Input placeholder="请输入时间" icon="time" />
              <ViewCode name="Input" code="2" />
              <h3>自适应大小的输入框</h3>
              <p>autosize属性：设置为boolean，true为自适应大小</p>
              <Input
                type="textarea"
                autosize={true}
                placeholder="请输入内容"
                name="textarea"
                
              />

              <p>autosize属性：设置为object，minRows为最小行数，maxRows为最大行数</p>
              <Input
                type="textarea"
                autosize={{ minRows: 2, maxRows: 4 }}
                placeholder="请输入内容"

              />
              <ViewCode name="Input" code="3" />

              <div className=" formElement_select_input">
                <h3>复合输入框</h3>
                <p>可前置（prepend）或后置元素（append），一般为标签或按钮</p>
                <Row>
                  <Col>
                    <div><Input placeholder="请输入内容" prepend="Http://" /></div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                <Input placeholder="请输入内容" append=".com" />
                </Col>
                </Row>
                <Row className="ishow-input-for-select">
                  <Col>
                <Input placeholder="请输入内容" prepend={
                  <Select className="formElement_select" value="" style={{ width: '105px' }}>
                    {
                      ['餐厅名', '订单号', '用户电话'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
                    }
                  </Select>
                } append={<Button type="primary" icon="search">搜索</Button>} />
                </Col>
                </Row>
                <ViewCode name="Input" code="4" />
              </div>
              </div>
              <div style={{width:"33%"}}>
              <h3 className="text">带输入建议</h3>
              <AutoComplete
                className="my-autocomplete my-autocomplete-poi"
                placeholder="请输入内容"
                value={this.state.value4}
                fetchSuggestions={this.querySearch.bind(this)}
                customItem={customItem}
                onSelect={this.handleSelect.bind(this)}
                style={{width:"100%"}}
              ></AutoComplete>
              </div>
              <ViewCode name="Input" code="5" />
              <ParamTable name='Input' />
            </Tabs.Pane>
            <Tabs.Pane label="Select" name="4">
              {/* <div>.ishow-tabs__content 将tab样式里的overflow:hidden 去掉，就可以让浮动菜单全部出来了</div> */}
              <div style={{ minHeight: 150 }} className="form_select">
                <Select value={this.state.value1}>
                  {
                    this.state.options.map(el => {
                      return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                  }
                </Select>
                <ViewCode name="Select" code="0" />
              </div>
              <ParamTable name='Select' />
              <ParamTable name='Option' />
              <ParamTable name='OptionGroup' />
            </Tabs.Pane>
            <Tabs.Pane label="DateTimePicker" name="5">
              <h1>日期时间选择器</h1>
              <div style={{ marginBottom: 20 }}>
                <h3>基本时间日期选择器</h3>
                <p>isShowTime属性：boolean，展示时间选择，默认false</p>
                <DatePicker
                  value={value1}
                  placeholder="选择日期"
                  isShowTime={true}
                  onChange={date => {
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({ value1: date })
                  }}

                  disabledDate={time => time.getTime() < Date.now() - 8.64e7}
                />

              </div>
              <div style={{ marginBottom: 20 }}>
                <h3>带有快捷键的日期选择器</h3>
                <DatePicker
                  ref={e => this.datepicker2 = e}
                  value={value2}
                  align="right"
                  isShowTime={true}
                  placeholder="选择日期"
                  onChange={date => {
                    console.debug('DatePicker2 changed: ', date)
                    this.setState({ value2: date })
                  }}
                  
                  shortcuts={[{
                    text: '今天',
                    onClick: (picker) => {
                      this.setState({ value2: new Date() })
                      this.datepicker2.togglePickerVisible()
                    }
                  }, {
                    text: '昨天',
                    onClick: (picker) => {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      this.setState({ value2: date })
                      this.datepicker2.togglePickerVisible()
                    }
                  }, {
                    text: '一周前',
                    onClick: (picker) => {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      this.setState({ value2: date })
                      this.datepicker2.togglePickerVisible()
                    }
                  }]}
                />
                <ViewCode name="DatePicker" code="0" />
              </div>
              <div style={{ marginBottom: 20 }}>
                <h3>可选择范围的日期选择器</h3>
                <DateRangePicker
                  value={value3}
                  placeholder="选择日期范围"
                  onChange={date => {
                    console.debug('DateRangePicker1 changed: ', date)
                    this.setState({ value3: date })
                  }}
                />
                <ViewCode name="DatePicker" code="1" />
              </div>
              <h2>Date Picker，Time Picker，DateTimePicker 公共参数：</h2>
              <ParamTable name='DateTimePickerCommon' />
              <ParamTable name='DatePicker' />
              <ParamTable name='DateRangePanel' />
            </Tabs.Pane>
            <Tabs.Pane label="Upload" name="6">
              <div style={{ marginBottom: 10 }}>
                <h1>上传</h1>
                <h3>点击上传</h3>
                <Upload
                  className="upload-demo"
                  action="//jsonplaceholder.typicode.com/posts/"
                  onPreview={file => this.handlePreview(file)}
                  onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                  fileList={fileList}
                  tip={<div className="ishow-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                >
                  <Button size="small" type="primary">点击上传</Button>
                </Upload>
                <ViewCode name="Upload" code="0" />
              </div>
              <div>
                <h3>图片列表上传</h3>
                <p>使用 listType 属性来设置文件列表的样式。</p>
                <div>
                  <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    onPreview={file => this.handlePictureCardPreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}>
                    <i className="ishow-icon-plus"></i>
                  </Upload>

                  <Dialog
                    visible={dialogVisible}
                    size="tiny"
                    onCancel={() => this.setState({ dialogVisible: false })}>
                    <img width="100%" src={dialogImageUrl} alt="" />
                  </Dialog>
                  <ViewCode name="Upload" code="1" />
                </div>
                <div style={{ marginTop: 20 }}>
                  <Upload
                    className="upload-demo"
                    action="//jsonplaceholder.typicode.com/posts/"
                    onPreview={file => this.handlePreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    fileList={fileList2}
                    listType="picture"
                    tip={<div className="ishow-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}>
                    <Button size="small" type="primary">点击上传</Button>
                  </Upload>
                  <ViewCode name="Upload" code="2" />
                </div>
              </div>
              <ParamTable name='Upload' />
            </Tabs.Pane>
            <Tabs.Pane label="Switch" name="7">
              <h1>开关</h1>
              <h3>基本开关</h3>
              <div>
                <Switch
                  value={false}
                  onText=""
                  offText="">
                </Switch>
                &nbsp;&nbsp;
                <Switch
                  value={false}
                  onColor="#13ce66"
                  offColor="#ff4949">
                </Switch>
                <ViewCode name="Switch" code="0" />
              </div>
              <div>
                <h3>可扩展value类型的开关</h3>
                <Tooltip
                  style={{ width: 60 }}
                  placement="top"
                  content={
                    <div>Switch value: {this.state.switchValue}</div>
                  }>
                  <Switch
                    value={this.state.switchValue}
                    onColor="#13ce66"
                    offColor="#ff4949"
                    onValue={100}
                    offValue={0}
                    onChange={(value) => { this.setState({ switchValue: value }) }}>
                  </Switch>
                </Tooltip>
                <ViewCode name="Switch" code="1" />
              </div>
              <ParamTable name='Switch' />
            </Tabs.Pane>
          </Tabs>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
