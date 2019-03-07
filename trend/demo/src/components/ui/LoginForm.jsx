import React from "react";
import { Form, Input, Button, Tabs } from "../../ishow";
import './App.css'
import ViewCode from './viewCode';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        pass: "",
        name:"",
        email:"",
        checkPass:""
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
        name: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate(valid => {
      if (valid) {
        alert("submit!");
      } else {
        // console.log("error submit!!");
        return false;
      }
    });
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  onEmailChange(value) {
    this.setState({
      form: Object.assign({}, this.state.form, { email: value })
    });
  }

  handleReset(e) {
    e.preventDefault();

    this.refs.form.resetFields();
  }

  render() {
    return (
      <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
        <Tabs.Pane label="登录表单" name="1">
          <Form
            ref="form"
            model={this.state.form}
            rules={this.state.rules}
            labelWidth="100"
            className="demo-ruleForm login-form"
          >
            <Form.Item label="用户名" prop="name">
              <Input
                value={this.state.form.name}
                onChange={this.onChange.bind(this, "name")}
              />
            </Form.Item>
            <Form.Item label="密码" prop="pass">
              <Input
                type="password"
                value={this.state.form.pass}
                onChange={this.onChange.bind(this, "pass")}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit.bind(this)} className="login-btn">
                登录
              </Button>
            </Form.Item>
          </Form>
          <ViewCode name="LoginForm" code='0' />
        </Tabs.Pane>
        <Tabs.Pane label="注册表单" name="2">
          <Form
            ref="form"
            model={this.state.form}
            rules={this.state.rules}
            labelWidth="100"
            className="demo-ruleForm login-form"
          >
            <Form.Item prop="email" label="邮箱">
              <Input value={this.state.form.email} onChange={this.onEmailChange.bind(this)}></Input>
            </Form.Item>
            <Form.Item label="用户名" prop="name">
              <Input
                value={this.state.form.name}
                onChange={this.onChange.bind(this, "name")}
              />
            </Form.Item>
            <Form.Item label="密码" prop="pass">
              <Input
                type="password"
                value={this.state.form.pass}
                onChange={this.onChange.bind(this, "pass")}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item label="确认密码" prop="checkPass">
              <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
              <Button onClick={this.handleReset.bind(this)}>重置</Button>
            </Form.Item>
          </Form>
          <ViewCode name="LoginForm" code='1' />
        </Tabs.Pane>
      </Tabs>
    )
 }
}

export default App