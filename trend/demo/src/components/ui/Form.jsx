import React, { Component } from 'react';
import './App.css';
import Form from "../../ishow/Form/index";
import Input from "../../ishow/Input/index";
import Col from '../../ishow/LayoutComponent/col/index';
import Select from '../../ishow/Select/index';
import DatePicker from '../../ishow/DatePicker/DatePicker';
import TimePicker from '../../ishow/DatePicker/TimePicker';
import Checkbox from '../../ishow/Checkbox/index';
import Button from '../../ishow/Button/index';
import Switch from '../../ishow/Switch/index';
import Radio from '../../ishow/Radio/index';
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                pass: '',
                checkPass: '',
                age: ''
            },
            form_dynamic: {
                domains: [{
                  key: 1,
                  value: ''
                }],
                email: ''
              },
            form_verification: {
                name: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
            labelPosition: 'right',
            form_alignment: {
                name: '',
                region: '',
                type: ''
            },
            form_line: {
                user: '',
                region: ''
              },
            form_typical: {
                name: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
            rules: {
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else {
                                if (this.state.form.checkPass !== '') {
                                    this.refs.form.validateField('checkPass');
                                }
                                callback();
                            }
                        }
                    }
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.state.form.pass) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }
                ],
                age: [
                    { required: true, message: '请填写年龄', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            var age = parseInt(value, 10);

                            setTimeout(() => {
                                if (!Number.isInteger(age)) {
                                    callback(new Error('请输入数字值'));
                                } else {
                                    if (age < 18) {
                                        callback(new Error('必须年满18岁'));
                                    } else {
                                        callback();
                                    }
                                }
                            }, 1000);
                        }, trigger: 'change'
                    }
                ]
            },
            rules_dynamic: {
                email: [
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]
              },
            rules_verification: {
                name: [
                  { required: true, message: '请输入活动名称', trigger: 'blur' }
                ],
                region: [
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                  { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                  { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                  { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                  { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                  { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
              }
        };
    }
    //典型表单
    onSubmitTypical(e) {
        e.preventDefault();
      }
      
    onChangeTypical(key, value) {
      // eslint-disable-next-line
        this.state.form[key] = value;
        this.forceUpdate();
      }
    //行内表单
    onSubmit(e) {
        e.preventDefault();
      
        console.log('submit!');
      }
      
    onChangeLine(key, value) {
        this.setState({
          form: Object.assign(this.state.form, { [key]: value })
        });
      }
    //对齐方式
    onPositionChange(value) {
        this.setState({ labelPosition: value });
      }
      
      onChangeAlignment(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
      }
      
    //表单验证
    handleSubmitVerification(e) {
        e.preventDefault();
      
        this.refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
    handleResetVerification(e) {
        e.preventDefault();
      
        this.refs.form.resetFields();
      }
      
    onChangeVerification(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
      }
    
    //自定义校验规则
    handleSubmit(e) {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();

        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    //动态增减表单项
    handleSubmitDynamic(e) {
        e.preventDefault();
      
        this.refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
      removeDomain(item, e) {
        var index = this.state.form_dynamic.domains.indexOf(item);
      
        if (index !== -1) {
          this.state.form_dynamic.domains.splice(index, 1);
          this.forceUpdate();
        }
      
        e.preventDefault();
      }
      
      addDomain(e) {
        e.preventDefault();
      
        this.state.form_dynamic.domains.push({
          key: this.state.form_dynamic.domains.length,
          value: ''
        });
      
        this.forceUpdate();
      }
      
      onEmailChange(value) {
        this.setState({
          form: Object.assign({}, this.state.form, { email: value})
        });
      }
      
      onDomainChange(index, value) {
        // eslint-disable-next-line
        this.state.form_dynamic.domains[index].value = value;
        this.forceUpdate();
      }
      


    render() {
        return (
           /* className="search-tabs"给css的tab-bottom添加样式*/
          <div className="search-tabs">
                <h1>Form 表单</h1>
                <h4>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</h4>
                <div style={{ marginbottom: 40 }} className="form_content">
                    <Tabs>
                        <Tabs.Pane label="典型表单" name='0'>
                            <h2>典型表单</h2>
                            <h4>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</h4>
                            <Form style={{ "lineHeight": "36px", width: 600}} model={this.state.form} labelWidth="80" onSubmit={this.onSubmitTypical.bind(this)}>
                            <Form.Item label="活动名称">
                              <Input value={this.state.form.name} onChange={this.onChangeTypical.bind(this, 'name')}></Input>
                            </Form.Item>
                            <Form.Item label="活动区域">
                              <Select value={this.state.form.region} placeholder="请选择活动区域">
                                <Select.Option label="区域一" value="shanghai"></Select.Option>
                                <Select.Option label="区域二" value="beijing"></Select.Option>
                              </Select>
                            </Form.Item>
                            <Form.Item label="活动时间">
                              <Col span="11">
                                <Form.Item prop="date1" labelWidth="0px">
                                  <DatePicker
                                    value={this.state.form.date1}
                                    placeholder="选择日期"
                                    onChange={this.onChangeTypical.bind(this, 'date1')}
                                  />
                                </Form.Item>
                              </Col>
                              <Col className="line" span="2">-</Col>
                              <Col span="11">
                                <Form.Item prop="date2" labelWidth="0px">
                                  <TimePicker
                                    value={this.state.form.date2}
                                    selectableRange="18:30:00 - 20:30:00"
                                    placeholder="选择时间"
                                    onChange={this.onChangeTypical.bind(this, 'date2')}
                                  />
                                </Form.Item>
                              </Col>
                            </Form.Item>
                            <Form.Item label="即时配送">
                              <Switch
                                onText=""
                                offText=""
                                value={this.state.form.delivery}
                                onChange={this.onChangeTypical.bind(this, 'delivery')}
                              />
                            </Form.Item>
                            <Form.Item label="活动性质">
                              <Checkbox.Group value={this.state.form.type} onChange={this.onChangeTypical.bind(this, 'type')}>
                                <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
                                <Checkbox label="地推活动" name="type"></Checkbox>
                                <Checkbox label="线下主题活动" name="type"></Checkbox>
                                <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
                              </Checkbox.Group>
                            </Form.Item>
                            <Form.Item label="特殊资源">
                              <Radio.Group value={this.state.form.resource}>
                                <Radio value="线上品牌商赞助"></Radio>
                                <Radio value="线下场地免费"></Radio>
                              </Radio.Group>
                            </Form.Item>
                            <Form.Item label="活动形式">
                              <Input type="textarea" value={this.state.form.desc} onChange={this.onChangeTypical.bind(this, 'desc')}></Input>
                            </Form.Item>
                            <Form.Item>
                              <Button type="primary" nativeType="submit">立即创建</Button>
                              <Button>取消</Button>
                            </Form.Item>
                          </Form>
                            <ViewCode name="Form" code="0" />
                        </Tabs.Pane>
                        <Tabs.Pane label="行内表单" name='1'>
                            <h2>行内表单</h2>
                            <h4>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</h4>
                            <Form style={{ "lineHeight": "36px", width: 600}} inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
                            <Form.Item>
                              <Input value={this.state.form.user} placeholder="审批人" onChange={this.onChangeLine.bind(this, 'user')}></Input>
                            </Form.Item>
                            <Form.Item>
                              <Select value={this.state.form.region} placeholder="活动区域">
                                <Select.Option label="区域一" value="shanghai"></Select.Option>
                                <Select.Option label="区域二" value="beijing"></Select.Option>
                              </Select>
                            </Form.Item>
                            <Form.Item>
                              <Button nativeType="submit" type="primary">查询</Button>
                            </Form.Item>
                          </Form>
                            <ViewCode name="Form" code="1" />
                        </Tabs.Pane>
                        <Tabs.Pane label="对齐方式" name='2'>
                            <h2>对齐方式</h2>
                            <h4>根据具体目标和制约因素，选择最佳的标签对齐方式。</h4>
                            <div style={{ "lineHeight": "36px", width: 600}}>
                            <Radio.Group size="small" value={this.state.labelPosition} onChange={this.onPositionChange.bind(this)}>
                              <Radio.Button value="left">左对齐</Radio.Button>
                              <Radio.Button value="right">右对齐</Radio.Button>
                              <Radio.Button value="top">顶部对齐</Radio.Button>
                            </Radio.Group>
                            <div style={{ margin: 20 }}></div>
                            <Form labelPosition={this.state.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
                              <Form.Item label="名称">
                                <Input value={this.state.form.name} onChange={this.onChangeAlignment.bind(this, 'name')}></Input>
                              </Form.Item>
                              <Form.Item label="活动区域">
                                <Input value={this.state.form.region} onChange={this.onChangeAlignment.bind(this, 'region')}></Input>
                              </Form.Item>
                              <Form.Item label="活动展开形式">
                                <Input value={this.state.form.type} onChange={this.onChangeAlignment.bind(this, 'type')}></Input>
                              </Form.Item>
                            </Form>
                          </div>
                            <ViewCode name="Form" code="2" />
                        </Tabs.Pane>
                        <Tabs.Pane label="表单验证" name='3'>
                            <h2>表单验证</h2>
                            <h4>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</h4>
                            <Form style={{ "lineHeight": "36px", width: 600}} ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" className="demo-ruleForm">
                            <Form.Item label="活动名称" prop="name">
                              <Input value={this.state.form.name} onChange={this.onChangeVerification.bind(this, 'name')}></Input>
                            </Form.Item>
                            <Form.Item label="活动区域" prop="region">
                              <Select value={this.state.form.region} placeholder="请选择活动区域" onChange={this.onChangeVerification.bind(this, 'region')}>
                                <Select.Option label="区域一" value="shanghai"></Select.Option>
                                <Select.Option label="区域二" value="beijing"></Select.Option>
                              </Select>
                            </Form.Item>
                            <Form.Item label="活动时间" required={true}>
                              <Col span="11">
                                <Form.Item prop="date1" labelWidth="0px">
                                  <DatePicker
                                    value={this.state.form.date1}
                                    placeholder="选择日期"
                                    onChange={this.onChangeVerification.bind(this, 'date1')}
                                  />
                                </Form.Item>
                              </Col>
                              <Col className="line" span="2">-</Col>
                              <Col span="11">
                                <Form.Item prop="date2" labelWidth="0px">
                                  <TimePicker
                                    value={this.state.form.date2}
                                    selectableRange="18:30:00 - 20:30:00"
                                    placeholder="选择时间"
                                    onChange={this.onChangeVerification.bind(this, 'date2')}
                                  />
                                </Form.Item>
                              </Col>
                            </Form.Item>
                            <Form.Item label="即时配送" prop="delivery">
                              <Switch value={this.state.form.delivery} onChange={this.onChangeVerification.bind(this, 'delivery')}></Switch>
                            </Form.Item>
                            <Form.Item label="活动性质" prop="type">
                              <Checkbox.Group value={this.state.form.type} onChange={this.onChangeVerification.bind(this, 'type')}>
                                <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
                                <Checkbox label="地推活动" name="type"></Checkbox>
                                <Checkbox label="线下主题活动" name="type"></Checkbox>
                                <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
                              </Checkbox.Group>
                            </Form.Item>
                            <Form.Item label="特殊资源" prop="resource">
                              <Radio.Group value={this.state.form.resource} onChange={this.onChangeVerification.bind(this, 'resource')}>
                                <Radio value="线上品牌商赞助"></Radio>
                                <Radio value="线下场地免费"></Radio>
                              </Radio.Group>
                            </Form.Item>
                            <Form.Item label="活动形式" prop="desc">
                              <Input type="textarea" value={this.state.form.desc} onChange={this.onChangeVerification.bind(this, 'desc')}></Input>
                            </Form.Item>
                            <Form.Item>
                              <Button type="primary" onClick={this.handleSubmitVerification.bind(this)}>立即创建</Button>
                              <Button onClick={this.handleResetVerification.bind(this)}>重置</Button>
                            </Form.Item>
                          </Form>
                            <ViewCode name="Form" code="3" />
                        </Tabs.Pane>
                        <Tabs.Pane label="自定义校验规则" name='4'>
                            <h2>自定义校验规则</h2>
                            <Form style={{ "lineHeight": "36px", width: 600}} ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                                <Form.Item label="密码" prop="pass">
                                    <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
                                </Form.Item>
                                <Form.Item label="确认密码" prop="checkPass">
                                    <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
                                </Form.Item>
                                <Form.Item label="年龄" prop="age">
                                    <Input value={this.state.form.age} onChange={this.onChange.bind(this, 'age')}></Input>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                                </Form.Item>
                            </Form>
                            <ViewCode name="Form" code="4" />
                        </Tabs.Pane>
                        <Tabs.Pane label="动态增减表单项" name='5'>
                            <h2>动态增减表单项</h2>
                            <Form style={{ "lineHeight": "36px", width: 600}} ref="form" model={this.state.form_dynamic} rules={this.state.rules} labelWidth="100" className="demo-dynamic">
                            <Form.Item prop="email" label="邮箱">
                              <Input value={this.state.form.email} onChange={this.onEmailChange.bind(this)}></Input>
                            </Form.Item>
                            {
                              this.state.form_dynamic.domains.map((domain, index) => {
                                return (
                                  <Form.Item
                                    key={index}
                                    label={`域名${index}`}
                                    prop={`domains:${index}`}
                                    rules={{
                                      type: 'object', required: true,
                                      fields: {
                                        value: { required: true, message: '域名不能为空', trigger: 'blur' }
                                      }
                                    }}
                                  >
                                    
                                    <Input style={{width:'84%', marginRight:5}}value={domain.value} onChange={this.onDomainChange.bind(this, index)}></Input>
                                    
                                    
                                    <Button style={{width:'15%'}}onClick={this.removeDomain.bind(this, domain)}>删除</Button>
                                    
                                  </Form.Item>
                                )
                              })
                            }
                            <Form.Item>
                              <Button type="primary" onClick={this.handleSubmitDynamic.bind(this)}>提交</Button>
                              <Button onClick={this.addDomain.bind(this)}>新增域名</Button>
                            </Form.Item>
                          </Form>
                            <ViewCode name="Form" code="5" />
                        </Tabs.Pane>
                    </Tabs>
                    <ParamTable name='Form' />
                    <ParamTable name='FormItem' />
                </div>
            </div>
        )
    }
}
export default App