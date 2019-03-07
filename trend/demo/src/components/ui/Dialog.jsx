import React, { Component } from 'react';
import './App.css';
//按需加载
import Dialog from '../../ishow/Dialog/Dialog';
import Button from '../../ishow/Button/Button';
import Input from '../../ishow/Input/Input';
import Table from '../../ishow/Table/TableStore';
import Form from '../../ishow/Form/Form';
import FormItem from '../../ishow/Form/FormItem';
import Select from '../../ishow/Select/index';
import ViewCode from './viewCode';
import ParamTable from './paramTable';
Form.Item = FormItem;
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false, //控制dialog，true显示，false关闭
      dialogVisible2: false,
      dialogVisible3: false,
      form: {
        name: '',
        region: ''
      }
    };
    this.table = {
      columns: [
        {
          label: "日期",
          prop: "date",
          width: 150
        },
        {
          label: "姓名",
          prop: "name",
          width: 160
        },
        {
          label: "地址",
          prop: "address"
        }
      ],
      data: [{
        date: '2018-03-22',
        name: '途牛大前端---张勇',
        address: '途牛大厦徐庄软件园699-32'
      }, {
        date: '2018-03-21',
        name: '途牛大前端---张勇',
        address: '途牛大厦徐庄软件园699-32'
      }, {
        date: '2018-03-20',
        name: '途牛大前端---张勇',
        address: '途牛大厦徐庄软件园699-32'
      }, {
        date: '2018-03-19',
        name: '途牛大前端---张勇',
        address: '途牛大厦徐庄软件园699-32'
      }]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Dialog 对话框</h1>
        <h3>常用的对话框</h3>
        <h3 style={{ margin: 20 }}>在保留当前页面状态的情况下，告知用户并承载相关操作。</h3>
        {/* dialog区 */}
        <div htmlFor="dialog" className="dialog">
          <Button type="primary" onClick={() => this.setState({ dialogVisible: true })}>点击打开 Dialog</Button>
          <Dialog
            title="提示"
            size="small"
            modal={true}
            visible={this.state.dialogVisible}
            onOpen={() => console.log("open")}
            onCancel={() => { this.setState({ dialogVisible: false });  }}
            lockScroll={true}
          >
            <Dialog.Body>
              <span>这是一段信息</span>
            </Dialog.Body>

            <Dialog.Footer className="dialog-footer">
              <Button type="primary" onClick={() => this.setState({ dialogVisible: false })}>确定</Button>
              <Button onClick={() => this.setState({ dialogVisible: false })}>取消</Button>
              
            </Dialog.Footer>
          </Dialog>
          <ViewCode name="Dialog" code="0" />
        </div>
        <div>
          <Button type="primary" onClick={() => this.setState({ dialogVisible2: true })}>打开嵌套表格的 Dialog</Button>
          <Dialog
            title="收货地址"
            visible={this.state.dialogVisible2}
            onCancel={() => this.setState({ dialogVisible2: false })}
          >
            <Dialog.Body>
              {this.state.dialogVisible2 && (
                <Table
                  style={{ width: '100%' }}
                  stripe={true}
                  columns={this.table.columns}
                  data={this.table.data} />
              )}
            </Dialog.Body>
          </Dialog>
          <Button style={{marginLeft:20}} type="primary" onClick={() => this.setState({ dialogVisible3: true })}>打开嵌套表单的 Dialog</Button>
          <Dialog
            title="收货地址"
            visible={this.state.dialogVisible3}
            onCancel={() => this.setState({ dialogVisible3: false })}
          >
            <Dialog.Body>
              <Form model={this.state.form}>
                <Form.Item label="活动名称" labelWidth="120">
                  <Input value={this.state.form.name} style={{width:"193px"}}></Input>
                </Form.Item>
                <Form.Item label="活动区域" labelWidth="120">
                  <Select value={this.state.form.region} placeholder="请选择活动区域">
                    <Select.Option label="区域一" value="shanghai"></Select.Option>
                    <Select.Option label="区域二" value="beijing"></Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Dialog.Body>

            <Dialog.Footer className="dialog-footer">
              <Button onClick={() => this.setState({ dialogVisible3: false })}>取 消</Button>
              <Button type="primary" onClick={() => this.setState({ dialogVisible3: false })}>确 定</Button>
            </Dialog.Footer>
          </Dialog>
          <ViewCode name="Dialog" code="1" />
        </div>
        <ParamTable name='Dialog' />
      </div>
    );
  }
}

export default App;
