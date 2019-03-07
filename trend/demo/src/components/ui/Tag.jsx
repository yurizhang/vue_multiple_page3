import React, { Component } from 'react';
import './App.css';
//按需加载
import Button from '../../ishow/Button/Button';
import Input from '../../ishow/Input/Input';
import Tag from '../../ishow/Tag/Tag';
import Tabs from "../../ishow/Tab/index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
class App extends Component {
  // componentDidMount() {
  //   //console.log(this.props);
  //   this.props.changeBread(['首页', '数据', '标签']);
  // }
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        { key: 1, name: '标签一', type: '' },
        { key: 2, name: '标签二', type: 'gray' },
        { key: 5, name: '标签三', type: 'primary' },
        { key: 3, name: '标签四', type: 'success' },
        { key: 4, name: '标签五', type: 'warning' },
        { key: 6, name: '标签六', type: 'danger' }
      ],
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  }
  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleInputConfirm();
    }
  }

  onChange(value) {
    this.setState({ inputValue: value });
  }

  handleClose(index) {
    this.state.dynamicTags.splice(index, 1);
    this.forceUpdate();
  }

  handleClose2(tag) {
    const { tags } = this.state;

    tags.splice(tags.map(el => el.key).indexOf(tag.key), 1);

    this.setState({ tag });
  }
  showInput() {
    this.setState({ inputVisible: true }, () => {
      this.refs.saveTagInput.focus();
    });
  }

  handleInputConfirm() {
    let inputValue = this.state.inputValue;

    if (inputValue) {
      this.state.dynamicTags.push(inputValue);
    }
    this.setState({
      inputVisible: false,
      inputValue: ''
    });
    // this.state.inputVisible = false;
    // this.state.inputValue = '';

    this.forceUpdate();
  }

  render() {
    //for Collapse
    return (
      <div className="App">
        <h1>Tag 标签</h1>
        <h3>标签的基本使用</h3>
        <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
          <Tabs.Pane label="基础标签" name="1">

            <div style={{ marginBottom: 20 }}>
              <Tag>标签一</Tag>&nbsp;&nbsp;
          <Tag type="gray">标签二</Tag>&nbsp;&nbsp;
          <Tag type="primary">标签三</Tag>&nbsp;&nbsp;
          <Tag type="success">标签四</Tag>&nbsp;&nbsp;
          <Tag type="warning">标签五</Tag>&nbsp;&nbsp;
          <Tag type="danger">标签六</Tag>&nbsp;&nbsp;
          <ViewCode name="Tag" code="0" />
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="可关闭的标签" name="2">
            <div style={{ marginBottom: 20 }}>
              {
                this.state.tags.map(tag => {
                  return (
                    <span key={tag.key}>
                      <Tag
                        key={tag.key}
                        closable={true}
                        type={tag.type}
                        closeTransition={false}
                        onClose={this.handleClose.bind(this, tag)}>{tag.name}</Tag>&nbsp;&nbsp;</span>
                  )
                })
              }
              <ViewCode name="Tag" code="1" />
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="可添加的标签" name="3">
            <div style={{ marginBottom: 20 }}>
              {
                this.state.dynamicTags.map((tag, index) => {
                  return (
                    <span key={index}>
                      <Tag
                        key={Math.random()}
                        closable={true}
                        closeTransition={false}
                        onClose={this.handleClose2.bind(this, index)}>{tag}</Tag>&nbsp;&nbsp;</span>
                  )
                })
              }
              {
                this.state.inputVisible ? (
                  <Input
                    className="input-new-tag"
                    value={this.state.inputValue}
                    ref="saveTagInput"
                    size="mini"
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    onBlur={this.handleInputConfirm.bind(this)}
                  />
                ) : <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)}>+ New Tag</Button>
              }
              <ViewCode name="Tag" code="2" />
            </div>

          </Tabs.Pane>
        </Tabs>
        <ParamTable name='Tag' />
      </div>
    );
  }
}

export default App;
