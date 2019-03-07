export const CodeList = {
  Tree:{
    Code:[
      `
      import Tree from "../../ishow/Tree/index"

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      render() {
        return (
          <Tree
            data={this.state.data}
            options={this.state.options}
            highlightCurrent={true}
            onCheckChange={(data, checked, indeterminate)=>{
              console.debug('onCheckChange: ', data, checked, indeterminate)}
            }
            onNodeClicked={(data, reactElement,)=>{
              console.debug('onNodeClicked: ', data, reactElement)
            }}
          />
        )
      }
      `,
      `
      import Tree from "../../ishow/Tree/index"

      constructor(props) {
        super(props)
        this.state = {
          regions: [{
            'name': 'region1'
          }, {
            'name': 'region2'
          }]
        }
      
        this.options = {
          label: 'name',
          children: 'zones'
        }
        this.count = 1
      
      }
      
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      }
      
      loadNode(node, resolve) {
      
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);
      
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }
      
        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }
      
          resolve(data);
        }, 500);
      }
      
      render() {
        const { regions } = this.state
      
        return (
          <Tree
            data={regions}
            options={this.options}
            isShowCheckbox={true}
            lazy={true}
            load={this.loadNode.bind(this)}
            onCheckChange={this.handleCheckChange.bind(this)}
            onNodeClicked={(data, nodeModel, reactElement, treeNode)=>{
              console.debug('onNodeClicked: ', data, nodeModel, reactElement)
            }}
          />
        )
      }
      `,
      `
      import Tree from "../../ishow/Tree/index"

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <Tree
            data={data}
            options={options}
            isShowCheckbox={true}
            nodeKey="id"
            defaultExpandedKeys={[2, 3]}
            defaultCheckedKeys={[5]}
          />
        )
      }      
      `,
      `
      import Tree from "../../ishow/Tree/index"
      import Button from '../../ishow/Button/index'

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      getCheckedNodes() {
        console.log(this.tree.getCheckedNodes());
      }
      getCheckedKeys() {
        console.log(this.tree.getCheckedKeys());
      }
      setCheckedNodes() {
        this.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      }
      setCheckedKeys() {
        this.tree.setCheckedKeys([3]);
      }
      resetChecked() {
        this.tree.setCheckedKeys([]);
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <div>
            <Tree
              ref={e=>this.tree = e}
              data={data}
              options={options}
              isShowCheckbox={true}
              highlightCurrent={true}
              nodeKey="id"
              defaultExpandedKeys={[2, 3]}
              defaultCheckedKeys={[5]}
            />
            <div className="buttons">
              <Button onClick={()=>this.getCheckedNodes()}>通过 node 获取</Button>
              <Button onClick={()=>this.getCheckedKeys()}>通过 key 获取</Button>
              <Button onClick={()=>this.setCheckedNodes()}>通过 node 设置</Button>
              <Button onClick={()=>this.setCheckedKeys()}>通过 key 设置</Button>
              <Button onClick={()=>this.resetChecked()}>清空</Button>
            </div>
          </div>
        )
      }
      `,
      `
      import Tree from "../../ishow/Tree/index"

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
        this.id = 100;
      }
      
      append(store, data) {
        store.append({ id: this.id++, label: \`testtest_\$\{this.id\}\`, children: [] }, data);
      }
      
      remove(store, data) {
        store.remove(data);
      }
      
      renderContent(nodeModel, data, store) {
        return (
          <span>
            <span>
              <span>{data.label}</span>
            </span>
            <span style={{float: 'right', marginRight: '20px'}}>
              <Button size="mini" onClick={ () => this.append(store, data) }>Append</Button>
              <Button size="mini" onClick={ () => this.remove(store, data) }>Delete</Button>
            </span>
          </span>);
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <Tree
            data={data}
            options={options}
            isShowCheckbox={true}
            nodeKey="id"
            defaultExpandAll={true}
            expandOnClickNode={false}
            renderContent={(...args)=>this.renderContent(...args)}
          />
        )
      }
      `,
      `
      import Tree from "../../ishow/Tree/index"
      import Input from "../../ishow/Input/index"

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <div>
            <Input placeholder="输入关键字进行过滤" onChange={text=> this.tree.filter(text)} />
            <Tree
              ref={e=> this.tree = e}
              className="filter-tree"
              data={data}
              options={options}
              nodeKey="id"
              defaultExpandAll={true}
              filterNodeMethod={(value, data)=>{
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
              }}
            />
          </div>
      
        )
      }
      `,
      `
      import Tree from "../../ishow/Tree/index"

      constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <Tree
            ref={e=> this.tree = e}
            data={data}
            options={options}
            accordion={true}
            onNodeClicked={node=>console.log(node)}
          />
        )
      }      
      `
    ]
  },
  Tooltip:{
     Code:[
       `
       import Tooltip from '../../ishow/Tooltip/index'
       import Button from '../../ishow/Button/index'
       
           render(){
               return (
                    <div className="box" style={{ width: '400' }}>
                            <div className="top" style={{ textAlign: 'center' }}>
                                <Tooltip className="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                                    <Button>上左</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Top Center 提示文字" placement="top">
                                    <Button>上边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                                    <Button>上右</Button>
                                </Tooltip>
                            </div>
                            <div className="left">
                                <Tooltip className="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                                    <Button>左上</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Left Center 提示文字" placement="left">
                                    <Button>左边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                                    <Button>左下</Button>
                                </Tooltip>
                            </div>

                            <div className="right">
                                <Tooltip className="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                                    <Button>右上</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Right Center 提示文字" placement="right">
                                    <Button>右边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                                    <Button>右下</Button>
                                </Tooltip>
                            </div>
                            <div className="bottom">
                                <Tooltip className="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                                    <Button>下左</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                                    <Button>下边</Button>
                                </Tooltip>
                                <Tooltip className="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                                    <Button>下右</Button>
                                </Tooltip>
                            </div>
                        </div>
               )
           }
       `,
       `
       import Tooltip from '../../ishow/Tooltip/index'
       import Button from '../../ishow/Button/index'

       render() {
        return (
          <div>
            <Tooltip content="Top center" placement="top">
              <Button>Dark</Button>
            </Tooltip>
            <Tooltip content="Bottom center" placement="bottom" effect="light" style={{ marginLeft: 10 }}>
              <Button>Light</Button>
            </Tooltip>
          </div>
        )
      }
       `,
       `
       import Tooltip from '../../ishow/Tooltip/index'
       import Button from '../../ishow/Button/index'

       render() {
        return (
          <Tooltip
            placement="top"
            content={
              <div>多行信息<br/>第二行信息</div>
            }
          >
            <Button>Top center</Button>
          </Tooltip>
        )
      }
       `,
       `
       constructor(props){
        super(props);
      
        this.state = {
          disabled: false
        }
      }
      
      render() {
        return (
          <Tooltip disabled={ this.state.disabled } content="点击关闭 tooltip 功能" placement="bottom" effect="light">
            <Button onClick={ e => this.setState({ disabled: true}) }>点击关闭 tooltip 功能</Button>
          </Tooltip>
        )
      }
       `
     ]
  },
  RichTextEditor:{
    Code:[
        `
        使用富文本组件的时候，需要安装如下依赖:yarn add wangeditor
        import E from 'wangeditor';
        import Card from "../../ishow/Card/index";
        import Row from '../../ishow/LayoutComponent/row/index';
        import Col from '../../ishow/LayoutComponent/col/index';
        import Breadcrumb from '../../ishow/Breadcrumb/index';
        
        class App extends Component {
            constructor(props, context) {
                super(props, context);
                this.state = {
                    editorContent: '',
                    editorContentJson:''
                }
            }
        
            componentDidMount() {
                const elem = this.refs.editorElem
                const editor = new E(elem)
                const text1=document.getElementById('text1')
                const text2=document.getElementById('text2')
                const onUploadFile = (url, name, folder, type, style) => {
                    return url + '?name=' + name + '&folder=' + folder + '&type=' + type + '&style=' + style;
                };
        
                editor.customConfig.uploadImgServer = 'http://10.10.33.144/filebroker/upload'
        
                editor.customConfig.customUploadImg = function (files, insert) {
                    // files 是 input 中选中的文件列表
                    // insert 是获取图片 url 后，插入到编辑器的方法
                    let file;
                    if (files && files.length) {
                        file = files[0];
                    } else {
                        return
                    }
        
                const uploadImgServer = "http://10.10.33.144/filebroker/upload";
                const xhr = new XMLHttpRequest();
                const test = onUploadFile(uploadImgServer, 'image.jpg','local', 0, 1);
                //上传服务请查看http://wiki.tuniu.org/pages/viewpage.action?pageId=50078411#id-%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F2.0%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E-2.1%E4%B8%8A%E4%BC%A0%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E5%8F%8A%E7%A4%BA%E4%BE%8B
                xhr.open('POST', test);
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                        const response = JSON.parse(xhr.responseText);
                        const imgUrl = response.data[0].local;
                        insert(imgUrl)
                });
                xhr.addEventListener('error', () => {
                        const error = JSON.parse(xhr.responseText);
                        alert('上传失败');
                    });
                }
        
                // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
                editor.customConfig.onchange =(html, getJSON)  => {
                    var json = editor.txt.getJSON()
                    this.setState({
                        editorContent: html,
                        editorContentJson: json
                    })
                    document.getElementById('text1').value=html
                    document.getElementById('text2').value=JSON.stringify(json)//转换为JSON字符串
                }
                editor.create()//将生成编辑器
            }
        
            render() {
                const { editorContent } = this.state;
                return (
                    <div className="App">
                        <h2>富文本编辑器</h2>
                        <Breadcrumb first="UI" second="富文本" />
                        <div ref="editorElem" style={{ textAlign: 'left' }}>
                            <div className='div1'>
                            </div>
                        </div>
                        <Row>
                            <Col className="gutter-row" md={12} >
                                <Card style={{ borderStyle: 'none', boxShadow: '0px 0px 0px #888888' }}
                                    header={
                                        <div>
                                            <span style={{ lineHeight: '20px', fontSize: '16px', fontWeight: '600' }}>同步转换HTML</span>
                                        </div>
                                    }
                                    >
                                    <textarea id="text1" style={{width:'100%', height:'100px',borderStyle:'none'}}></textarea>
                                </Card>
                            </Col>
                            <Col className="gutter-row" md={12}>
                                <Card style={{ borderStyle: 'none', boxShadow: '0px 0px 0px #888888' }}
                                    header={
                                        <div>
                                            <span style={{ lineHeight: '20px', fontSize: '16px', fontWeight: '600' }}>同步转换JSON</span>
                                        </div>
                                    }>
                                    <textarea id="text2" style={{width:'100%', height:'100px',borderStyle:'none'}}></textarea>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                );
            }
              
    export default App;

    `
  ]
  },
  Form: {
    Code: [
      `
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

  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        name: '',
        region: '',
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
  }
  
  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }
  
  render() {
    return (
      <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
        <Form.Item label="活动名称">
          <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
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
                onChange={this.onChange.bind(this, 'date1')}
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
                onChange={this.onChange.bind(this, 'date2')}
              />
            </Form.Item>
          </Col>
        </Form.Item>
        <Form.Item label="即时配送">
          <Switch
            onText=""
            offText=""
            value={this.state.form.delivery}
            onChange={this.onChange.bind(this, 'delivery')}
          />
        </Form.Item>
        <Form.Item label="活动性质">
          <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
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
          <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" nativeType="submit">立即创建</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    )
  }
  
  `,
      `
  import Form from "../../ishow/Form/index";
  import Select from '../../ishow/Select/index';
  import Button from '../../ishow/Button/index';

  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        user: '',
        region: ''
      }
    };
  }
  
  onSubmit(e) {
    e.preventDefault();
  
    console.log('submit!');
  }
  
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }
  
  render() {
    return (
      <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)} className="demo-form-inline">
        <Form.Item>
          <Input value={this.state.form.user} placeholder="审批人" onChange={this.onChange.bind(this, 'user')}></Input>
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
    )
  }
  
  `,
      `
  import Form from "../../ishow/Form/index";
  import Input from "../../ishow/Input/index";
  import Radio from '../../ishow/Radio/index';

  constructor(props) {
    super(props);
  
    this.state = {
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        type: ''
      }
    };
  }
  
  onPositionChange(value) {
    this.setState({ labelPosition: value });
  }
  
  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }
  
  render() {
    return (
      <div>
        <Radio.Group size="small" value={this.state.labelPosition} onChange={this.onPositionChange.bind(this)}>
          <Radio.Button value="left">左对齐</Radio.Button>
          <Radio.Button value="right">右对齐</Radio.Button>
          <Radio.Button value="top">顶部对齐</Radio.Button>
        </Radio.Group>
        <div style={{ margin: 20 }}></div>
        <Form labelPosition={this.state.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
          <Form.Item label="名称">
            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
          </Form.Item>
          <Form.Item label="活动区域">
            <Input value={this.state.form.region} onChange={this.onChange.bind(this, 'region')}></Input>
          </Form.Item>
          <Form.Item label="活动展开形式">
            <Input value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}></Input>
          </Form.Item>
        </Form>
      </div>
    )
  }
  
  `,
      `
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

  constructor(props) {
    super(props);
  
    this.state = {
      form: {
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
  
  render() {
    return (
      <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" className="demo-ruleForm">
        <Form.Item label="活动名称" prop="name">
          <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
        </Form.Item>
        <Form.Item label="活动区域" prop="region">
          <Select value={this.state.form.region} placeholder="请选择活动区域" onChange={this.onChange.bind(this, 'region')}>
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
                onChange={this.onChange.bind(this, 'date1')}
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
                onChange={this.onChange.bind(this, 'date2')}
              />
            </Form.Item>
          </Col>
        </Form.Item>
        <Form.Item label="即时配送" prop="delivery">
          <Switch value={this.state.form.delivery} onChange={this.onChange.bind(this, 'delivery')}></Switch>
        </Form.Item>
        <Form.Item label="活动性质" prop="type">
          <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
            <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
            <Checkbox label="地推活动" name="type"></Checkbox>
            <Checkbox label="线下主题活动" name="type"></Checkbox>
            <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="特殊资源" prop="resource">
          <Radio.Group value={this.state.form.resource} onChange={this.onChange.bind(this, 'resource')}>
            <Radio value="线上品牌商赞助"></Radio>
            <Radio value="线下场地免费"></Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="活动形式" prop="desc">
          <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>立即创建</Button>
          <Button onClick={this.handleReset.bind(this)}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
  
  `,
      `
  import Form from "../../ishow/Form/index";
  import Input from "../../ishow/Input/index";
  import Button from '../../ishow/Button/index';

  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.state.form.checkPass !== '') {
                this.refs.form.validateField('checkPass');
              }
              callback();
            }
          } }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.state.form.pass) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          } }
        ],
        age: [
          { required: true, message: '请填写年龄', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            var age = parseInt(value, 10);
  
            setTimeout(() => {
              if (!Number.isInteger(age)) {
                callback(new Error('请输入数字值'));
              } else{
                if (age < 18) {
                  callback(new Error('必须年满18岁'));
                } else {
                  callback();
                }
              }
            }, 1000);
          }, trigger: 'change' }
        ]
      }
    };
  }
  
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
  
  render() {
    return (
      <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
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
    )
  }
  `,
      `
  import Form from "../../ishow/Form/index";
  import Input from "../../ishow/Input/index";
  import Button from '../../ishow/Button/index';

  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        domains: [{
          key: 1,
          value: ''
        }],
        email: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]
      }
    };
  }
  
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
  
  removeDomain(item, e) {
    var index = this.state.form.domains.indexOf(item);
  
    if (index !== -1) {
      this.state.form.domains.splice(index, 1);
      this.forceUpdate();
    }
  
    e.preventDefault();
  }
  
  addDomain(e) {
    e.preventDefault();
  
    this.state.form.domains.push({
      key: this.state.form.domains.length,
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
    this.state.form.domains[index].value = value;
    this.forceUpdate();
  }
  
  render() {
    return (
      <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-dynamic">
        <Form.Item prop="email" label="邮箱">
          <Input value={this.state.form.email} onChange={this.onEmailChange.bind(this)}></Input>
        </Form.Item>
        {
          this.state.form.domains.map((domain, index) => {
            return (
              <Form.Item
                key={index}
                label={\`域名${`index`}\`}
                prop={\`domains:${'index'}\`}
                rules={{
                  type: 'object', required: true,
                  fields: {
                    value: { required: true, message: '域名不能为空', trigger: 'blur' }
                  }
                }}
              >
                <Input value={domain.value} onChange={this.onDomainChange.bind(this, index)}></Input>
                <Button onClick={this.removeDomain.bind(this, domain)}>删除</Button>
              </Form.Item>
            )
          })
        }
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
          <Button onClick={this.addDomain.bind(this)}>新增域名</Button>
        </Form.Item>
      </Form>
    )
  }
  
  `
    ]
  },
  Transfer: {
    Code: [
      `
      import Transfer from "../../ishow/Transfer/index";

      constructor(props) {
        super(props);
        this.state = {
          value: [1, 4]
        }
        this._handleChange = this.handleChange.bind(this);
      }
      
      get data() {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: \`备选项 ${ `i`}\`,
            disabled: i % 4 === 0
          });
        }
        return data;
      }
      
      handleChange(value) {
        this.setState({ value })
      }
      
      render() {
        const { value } = this.state;
        return <Transfer value={value} data={this.data} onChange={this._handleChange}></Transfer>
      }
      `,
      `
      import Transfer from "../../ishow/Transfer/index";

      constructor(props) {
        super(props);
        this.state = {
          value: []
        }
      
        this._handleChange = this.handleChange.bind(this);
        this._filterMethod = this.filterMethod.bind(this);
      }
      
      get data() {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      }
      
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
      
      handleChange(value) {
        this.setState({ value })
      }
      
      render() {
        const { value } = this.state;
        return (
          <Transfer
            filterable
            filterMethod={this._filterMethod}
            filterPlaceholder="请输入城市拼音"
            value={value}
            onChange={this._handleChange}
            data={this.data}>
          </Transfer>
        )
      }      
      `,
      `
      import Transfer from "../../ishow/Transfer/index";

      constructor(props) {
        super(props);
        this.state = {
          value: []
        }
      
        this._handleChange = this.handleChange.bind(this);
        this._filterMethod = this.filterMethod.bind(this);
      }
      
      get data() {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      }
      
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
      
      handleChange(value) {
        this.setState({ value })
      }
      
      render() {
        const { value } = this.state;
        return (
          <Transfer
            filterable
            filterMethod={this._filterMethod}
            filterPlaceholder="请输入城市拼音"
            value={value}
            onChange={this._handleChange}
            data={this.data}>
          </Transfer>
        )
      }      
      `,
      `
      import Transfer from "../../ishow/Transfer/index";

      constructor(props) {
        super(props);
        this.state = {
          value: []
        }
      
        this._handleChange = this.handleChange.bind(this);
      }
      
      get data() {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc:  \`备选项 ${ `i`}\`,
            disabled: i % 4 === 0
          });
        }
        return data;
      }
      
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
        this.setState({ value })
      }
      
      render() {
        const { value } = this.state;
        return (
          <Transfer
            value={value}
            propsAlias={{
              key: 'value',
              label: 'desc'
            }}
            data={this.data}
            onChange={this._handleChange}
            >
          </Transfer>
        )
      }
      `
    ]

  },
  Carousel: {
    Code: [
      `
    import Carousel from "../../ishow/Carousel/Index";

    render(){
      return(
        <div>
        <span className="demonstration">默认 Hover 指示器触发</span>
        <Carousel height="200px">
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
        <span className="demonstration">Click 指示器触发</span>
        <Carousel trigger="click" height="200px">
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
        </div>
            )
          }
    `,
      `
    import Carousel from "../../ishow/Carousel/Index";

    render(){
      return(
        <div>
        <Carousel interval="5000" arrow="always" height="200px">
                  {
                    [1, 2, 3, 4].map((item, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <h3>{item}</h3>
                        </Carousel.Item>
                      )
                    })
                  }
        </Carousel>
        </div>
            )
          }
    `,
      `
    import Carousel from "../../ishow/Carousel/Index";

    render(){
      return(
        <div>
        <Carousel interval="4000" type="card" height="200px">
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      </div>
            )
          }
    `,
      `
    import Carousel from "../../ishow/Carousel/Index";

    render(){
      return(
        <div>
        <Carousel interval="4000" type="flatcard" height="200px">
                  {
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <h3>{item}</h3>
                        </Carousel.Item>
                      )
                    })
                  }
        </Carousel>
        </div>
            )
          }
    `
    ]

  },
  Collapse: {
    Code: [
      `
      import Collapse from '../../ishow/Collapse/index';

      render() {
        const activeName = "1";
        return (
          <Collapse value={activeName}>
            <Collapse.Item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </Collapse.Item>
            <Collapse.Item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </Collapse.Item>
            <Collapse.Item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </Collapse.Item>
            <Collapse.Item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </Collapse.Item>
          </Collapse>
        )
      }
      `,
      `
      import Collapse from '../../ishow/Collapse/index';
      import Button from '../../ishow/Button/Button';

      constructor(props) {
        super(props)
      
        this.state = {
          activeName: '1'
        }
      }
      
      render() {
        return (
          <div>
            <Button
              type="primary"
              style={{marginBottom: '15px'}}
              onClick={() => this.setState({ activeName: '3' })}
            >
              打开第三个
            </Button>
            <Collapse value={this.state.activeName} accordion>
              <Collapse.Item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </Collapse.Item>
              <Collapse.Item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </Collapse.Item>
              <Collapse.Item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </Collapse.Item>
              <Collapse.Item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </Collapse.Item>
            </Collapse>
          </div>
        )
      }
      `,
      `
      import Collapse from '../../ishow/Collapse/index';

      render() {
        return (
          <Collapse accordion>
            <Collapse.Item title={<span>一致性 Consistency<i className="header-icon el-icon-information"></i></span>}>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </Collapse.Item>
            <Collapse.Item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </Collapse.Item>
            <Collapse.Item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </Collapse.Item>
            <Collapse.Item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </Collapse.Item>
          </Collapse>
        )
      }      
      `
    ]
  },

  Rate: {
    Code: [
      `
      import Rate from "../../ishow/Rate/Rate";

      render(){
        return(
          <div className="block">
            <span className="demonstration">默认不区分颜色</span>
            <span className="wrapper">
            <Rate onChange = {(val) => alert(val)}/>
            </span>
          </div>
          <div className ="block">
            <span className="demonstration">区分颜色</span>
            <span className="wrapper">
            <Rate colors = {['#99A9BF', '#F7BA2A', '#FF9900']}/>    
            </span>
          </div>    
              )
            }
      `,
      `
      import Rate from "../../ishow/Rate/Rate";
      render(){
        return(
          <div className = "halfBlock">
                <div>
                <Rate allowHalf={true} onChange={(val) => console.log(val)} />
                </div>
          </div>
        )
      }
     ` ,

      `import Rate from "../../ishow/Rate/Rate";
      render(){
        return(
          <div className = "readOnly">
          <div>
          <Rate disabled={true} value={3.9} showText={true} />
          </div>
          </div>
        )
      }
     `
     ,
     `
     import Rate from "../../ishow/Rate/Rate";
      render(){
        return(
          <div className = "readOnly">
          <div>
          <Rate disabled={true} value={3.9} showText={true} />
          </div>
          </div>
        )
      }
     `
    ]
  },

  Card: {
    Code: [
      `
      import Card from "../../ishow/Card/Card";
      import {Button} from "../../ishow";

      handleClickOnButton1(){
        Message({
            message: '恭喜你，你成功定制了一张简单卡片',
            type: 'success',
            showClose: true
          });
      }
      
      render() {
        return (
          <Card className="simple-card" style={{ "lineHeight": "36px", width: 400, marginBottom: 40}}
              header={
                  <div className="clearfix">
                      <span style={{ "lineHeight": "36px" }}>卡片名称</span>
                      <span style={{ "float": "right" }}>
                          <Button type="primary" onClick={this.handleClickOnButton1.bind(this)}>操作按钮</Button>
                      </span>
                  </div>
              }
          >
              <div className="text item">列表内容 1</div>
              <div className="text item">列表内容 2</div>
              <div className="text item">列表内容 3</div>
              <div className="text item">列表内容 4</div>
          </Card>
      )
    }
    `,
      `
      import Card from '../../ishow/Card/Card";

       render() {
        return (
          <Card className="simple-card" style={{ "lineHeight": "36px", width: 400, marginBottom: 40 }}>
              <div className="text item">列表内容 0</div>
              <div className="text item">列表内容 1</div>
              <div className="text item">列表内容 2</div>
              <div className="text item">列表内容 3</div>
          </Card>
        )
      }
      `,
      `
      import Card from "../../ishow/Card/Card";
      import {Button} from "../../ishow";
      import Row from '../../ishow/LayoutComponent/row/index';
      import Col from '../../ishow/LayoutComponent/col/index';

      handleClickOnButton2(){
        Message({
            message: '恭喜你，你成功定制了一张带图片的卡片',
            type: 'success',
            showClose: true
          });
      }
      
      render() {
        return (
          <Row>
          <Col span={5} offset={0}>
              <Card bodyStyle={{ padding: 0 }} style={{ "lineHeight": "36px", width: 270, 'text-align': 'center', marginBottom: 40 }}>
                  <img src='../src/components/ui/image/image.jpg' alt='要旅游，找途牛' className="image" />
                  <div style={{ padding: 14 }}>
                      <span style={{ float: 'left' }}>途牛旅游网</span>
                      <br />
                      <div className="bottom clearfix">
                          <time className="time" style={{ float: 'left' }}>2018-04-08 09:21</time>
                          <Button type="text" className="button" style={{ "float": "right" }} onClick={this.handleClickOnButton2.bind(this)}>操作按钮</Button>
                      </div>
                  </div>
              </Card>
          </Col>
          <Col span={5}>
              <Card bodyStyle={{ padding: 0 }} style={{ "lineHeight": "36px", width: 270, 'text-align': 'center' }}>
                  <img src='../src/components/ui/image/image.jpg' alt='要旅游，找途牛' className="image" />
                  <div style={{ padding: 14 }}>
                      <span style={{ float: 'left' }}>途牛旅游网</span>
                      <br />
                      <div className="bottom clearfix" >
                          <time className="time" style={{ float: 'left' }}>2018-04-08 09:21</time>
                          <Button type="text" className="button" style={{ float: 'right' }} onClick={this.handleClickOnButton2.bind(this)}>操作按钮</Button>
                      </div>
                  </div>
              </Card>
          </Col>
      </Row>           
              )
          }
      `
    ]
  },
  Slider: {
    Code: [
      `
      import Slider from "../../ishow/Slider/index";
      
      constructor(props) {
        super(props);
      
        this.state = {
          value1: 0,
          value2: 50,
          value3: 36,
          value4: 48,
          value5: 42
        }
      }
      
      formatTooltip(val) {
        return val / 100;
      }
      
      render() {
        return (
          <div>
            <div className="block">
              <span className="demonstration">默认</span>
              <Slider value={this.state.value1} />
            </div>
            <div className="block">
              <span className="demonstration">自定义初始值</span>
              <Slider value={this.state.value2} />
            </div>
            <div className="block">
              <span className="demonstration">隐藏 Tooltip</span>
              <Slider value={this.state.value3} showTooltip={false} />
            </div>
            <div className="block">
              <span className="demonstration">格式化 Tooltip</span>
              <Slider value={this.state.value4} formatTooltip={this.formatTooltip.bind(this)} />
            </div>
            <div className="block">
              <span className="demonstration">禁用</span>
              <Slider value={this.state.value3} disabled={true} />
            </div>
          </div>
        )
      }
    `,
      `
      import Slider from "../../ishow/Slider/index";

      constructor(props) {
        super(props);
      
        this.state = {
          value4: 0,
          value5: 0
        }
      }
      
      render() {
        return (
          <div>
            <div className="block">
              <span className="demonstration">不显示间断点</span>
              <Slider value={this.state.value4} step="10" />
            </div>
            <div className="block">
              <span className="demonstration">显示间断点</span>
              <Slider value={this.state.value5} step="10" showStops={true} />
            </div>
          </div>
        )
      }      
    `,
      `
      import Slider from "../../ishow/Slider/index";

      constructor(props) {
        super(props);
      
        this.state = {
          value: 0
        }
      }
      
      render() {
        return (
          <div className="block">
            <Slider value={this.state.value} showInput={true} />
          </div>
        )
      }
    `,
      `
      import Slider from "../../ishow/Slider/index";

      constructor(props) {
        super(props);
      
        this.state = {
          value: [4, 8]
        }
      }
      
      render() {
        return (
          <div className="block">
            <Slider value={this.state.value} max={10} range={true} showStops={true} />
          </div>
        )
      }
    `,
      `
      import Slider from "../../ishow/Slider/index";

      constructor(props) {
        super(props);
      
        this.state = {
          value: 0
        }
      }
      
      render() {
        return (
          <div className="block">
            <Slider value={this.state.value} vertical={true} height="200px" />
          </div>
        )
      }
    `
    ]
  },
  Layout: {
    Code: [
      `
        import Layout from '../../ishow/LayoutComponent/layout/index';
        const { Header, Content, Footer} = Layout;

        render() {
          return ( 
            <Layout style={{marginBottom:50}}>
                <Header style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
                <Content style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
                <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
              </Layout>
              )
         }`,
      `
        import Layout from '../../ishow/LayoutComponent/layout/index';
        const { Header, Content, Footer, Sider} = Layout;

        render() {
          return (  
          <Layout style={{marginBottom:50}}>
            <Header style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
            <Layout>
              <Sider style={{ background: '#1D8CE0', padding:50 ,textAlign:'center',color:'#fff'}}>Sider</Sider>
              <Content style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
            </Layout>
            <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
          </Layout>
          )
        }`,
      `
        import Layout from '../../ishow/LayoutComponent/layout/index';
        const { Header, Content, Footer, Sider} = Layout;

        render() {
          return ( 
          <Layout style={{marginBottom:50}}>
            <Sider  style={{ background: '#1D8CE0', padding:50 ,textAlign:'center',color:'#fff'}}>Sider</Sider>
            <Layout>
              <Header  style={{ background: '#20A0FF', padding: 0 ,textAlign:'center',color:'#fff'}}>Header</Header>
              <Content  style={{ background: '#58B7FF', padding:50 ,textAlign:'center',color:'#fff'}}>Content</Content>
              <Footer style={{ background: '#20A0FF',textAlign:'center',color:'#fff'}}>Footer</Footer>
            </Layout>
          </Layout>
          )
        }`
    ]
  },
  Grid: {
    Code: [
      `
        import Row from '../../ishow/LayoutComponent/row/index';
        import Col from '../../ishow/LayoutComponent/col/index';

        render(){
          return(
            <div>
              <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
              </Row>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
              </Row>
              <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
              </Row>
            </div>,
          )
        }`
    ]
  },
  Button: {
    Code: [
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div>
                    <Button>普通按钮</Button>
                    <Button type="primary">主要按钮</Button>
                    <Button type="text">文字按钮</Button>
                  </div>
                )
              }`,
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div>
                    <Button plain={true} disabled={true}>普通按钮</Button>
                    <Button type="primary" disabled={true}>主要按钮</Button>
                    <Button type="text" disabled={true}>文字按钮</Button>
                  </div>
                )
              }`,
      `
            import {Button} from "../../ishow";

            render() {
                return <Button type="primary" loading={true}>加载中</Button>
              }`,
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div >
                        <Button type="success">成功按钮</Button>
                        <Button type="warning">警告按钮</Button>
                        <Button type="danger">危险按钮</Button>
                        <Button type="info">信息按钮</Button>
                        <Button plain={true} type="success">成功按钮</Button>
                        <Button plain={true} type="warning">警告按钮</Button>
                        <Button plain={true} type="danger">危险按钮</Button>
                        <Button plain={true} type="info">信息按钮</Button>
                  </div>
                )
              }`,
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div>
                    <Button type="primary" icon="edit"></Button>
                    <Button type="primary" icon="share"></Button>
                    <Button type="primary" icon="delete"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary">上传<i className="ishow-icon-upload ishow-icon-right"></i></Button>
                  </div>
                )
              }
              `,
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div>
                    <Button.Group>
                        <Button type="primary" icon="arrow-left">上一页</Button>
                        <Button type="primary">下一页<i className="ishow-icon-arrow-right ishow-icon-right"></i></Button>
                    </Button.Group>
                    <Button.Group>
                        <Button type="primary" icon="edit"></Button>
                        <Button type="primary" icon="share"></Button>
                        <Button type="primary" icon="delete"></Button>
                    </Button.Group>
                  </div>
                )
              }
              `,
      `
            import {Button} from "../../ishow";

            render() {
                return (
                  <div>
                    <Button type="primary" size="large">大型按钮</Button>
                    <Button type="primary">正常按钮</Button>
                    <Button type="primary" size="small">小型按钮</Button>
                    <Button type="primary" size="mini">超小按钮</Button>
                  </div>
                )
              }
              `
    ]
  },
  Icon: {
    Code: [
      `
            import Button from '../../ishow/Button/Button';

            render() {
                return (
                  <div>
                    <i className="ishow-icon-edit"></i>
                    <i className="ishow-icon-share"></i>
                    <i className="ishow-icon-delete"></i>
                    <Button type="primary" icon="search">搜索</Button>
                  </div>
                )
              }
              `
    ]
  },
  Radio: {
    Code: [
      `
            import Radio from '../../ishow/Radio/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  value: 1
                }
              }
              
              onChange(value) {
                this.setState({ value });
              }
              
              render() {
                return (
                  <div>
                    <Radio value="1" checked={this.state.value === 1} onChange={this.onChange.bind(this)}>ELF-zhangyong</Radio>
                    <Radio value="2" checked={this.state.value === 2} onChange={this.onChange.bind(this)}>ELF-chenyuting</Radio>
                  </div>
                )
              }
              `,
      `
            import Radio from '../../ishow/Radio/index';

            render() {
                return (
                  <div>
                    <Radio value="1" disabled={true}>ELF-zhangyong</Radio>
                    <Radio value="2" disabled={true}>ELF-chenyuting</Radio>
                  </div>
                )
              }
              `,
      `
            import Radio from '../../ishow/Radio/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  value: 3
                }
              }
              
              onChange(value) {
                this.setState({ value });
              }
              
              render() {
                return (
                  <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>
                      <Radio value="zy">张勇</Radio>
                      <Radio value="tyy">唐媛媛</Radio>
                      <Radio value="cyt">陈瑜婷</Radio>
                      <Radio value="zph">赵斐昊</Radio>
                      <Radio value="sy">盛瑜</Radio>
                      <Radio value="hj">黄杰</Radio>
                      <Radio value="lx">刘兴</Radio>
                      <Radio value="lzq">刘泽琼</Radio>
                  </Radio.Group>
                )
              }
              `
    ]
  },

  Checkbox: {
    Code: [
      `
            import Checkbox from '../../ishow/Checkbox/index';

            render() {
                return <Checkbox checked>备选项</Checkbox>
              }
              `,
      `
            import CheckBox from '../../ishow/Checkbox/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  checkList: ['复选框 A', '选中且禁用']
                }
              }
              render() {
                return (
                  <Checkbox.Group value={this.state.checkList}>
                    <Checkbox label="复选框 A"></Checkbox>
                    <Checkbox label="复选框 B"></Checkbox>
                    <Checkbox label="复选框 C"></Checkbox>
                    <Checkbox label="禁用" disabled></Checkbox>
                    <Checkbox label="选中且禁用" disabled></Checkbox>
                  </Checkbox.Group>
                )
              }
              `,
      `
            import CheckBox from '../../ishow/Checkbox/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  checkAll: false,
                  cities: ['江苏', '北京', '广州', '深圳'],
                  checkedCities: ['江苏', '北京'],
                  isIndeterminate: true,
                }
              }
              
              handleCheckAllChange(checked) {
                const checkedCities = checked ? ['江苏', '北京', '广州', '深圳'] : [];
              
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
              
              render() {
                return (
                  <div>
                    <Checkbox
                      checked={this.state.checkAll}
                      indeterminate={this.state.isIndeterminate}
                      onChange={this.handleCheckAllChange.bind(this)}>全选</Checkbox>
                    <div style={{margin: '15px 0'}}></div>
                    <Checkbox.Group
                      value={this.state.checkedCities}
                      onChange={this.handleCheckedCitiesChange.bind(this)}>
                      {
                        this.state.cities.map((city, index) =>
                          <Checkbox key={index} label={city}></Checkbox>
                        )
                      }
                    </Checkbox.Group>
                  </div>
                )
              }
              `,
      `
            import CheckBox from '../../ishow/Checkbox/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  checkAll: false,
                  cities: ['江苏', '北京', '广州', '深圳'],
                  checkedCities: ['江苏', '北京'],
                  isIndeterminate: true,
                }
              }
              
              handleCheckAllChange(checked) {
                const checkedCities = checked ? ['江苏', '北京', '广州', '深圳'] : [];
              
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
              
              render() {
                return (
                  <div>
                    <Checkbox
                      checked={this.state.checkAll}
                      indeterminate={this.state.isIndeterminate}
                      onChange={this.handleCheckAllChange.bind(this)}>全选</Checkbox>
                    <div style={{margin: '15px 0'}}></div>
                    <Checkbox.Group
                      min="1"
                      max="2"
                      value={this.state.checkedCities}
                      onChange={this.handleCheckedCitiesChange.bind(this)}>
                      {
                        this.state.cities.map((city, index) =>
                          <Checkbox key={index} label={city}></Checkbox>
                        )
                      }
                    </Checkbox.Group>
                  </div>
                )
              }
              `
    ]
  },
  Input: {
    Code: [
      `
            import Input from '../../ishow/Input/Input';

            render() {
                return <Input placeholder="请输入内容" />
              }
              `,
      `
            import Input from '../../ishow/Input/Input';

            render() {
                return <Input disabled placeholder="请输入内容" />
              }
              `,
      `
            import Input from '../../ishow/Input/Input';

            handleIconClick(ev) {

            }
            
            render() {
              return (
                <Input
                  icon="time"
                  placeholder="请选择日期"
                  onIconClick={this.handleIconClick.bind(this)}
                />
              )
            }
            `,
      `
            import Input from '../../ishow/Input/Input';

            render() {
                return (
                  <div>
                    <Input
                      type="textarea"
                      autosize={true}
                      placeholder="请输入内容"
                    />
                    <div style={{ margin: '20px 0' }}></div>
                    <Input
                      type="textarea"
                      autosize={{ minRows: 2, maxRows: 4}}
                      placeholder="请输入内容"
                    />
                  </div>
                )
              }
              `,
      `
            import Input from '../../ishow/Input/Input';
            import Select from '../../ishow/Select/index';

            render() {
                return (
                  <div>
                    <Input placeholder="请输入内容" prepend="Http://" />
                    <Input placeholder="请输入内容" append=".com" />
                    <Input placeholder="请输入内容" prepend={
                      <Select value="">
                        {
                          ['餐厅名', '订单号', '用户电话'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
                        }
                      </Select>
                    } append={<Button type="primary" icon="search">搜索</Button>} />
                  </div>
                )
              }
              `,
      `
            import React, { Component } from 'react';
            import './App.css';
            import AutoComplete from '../../ishow/auto-complete';


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
                  value1: '',
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

            render() {
              return (
                  <div >
                    <h3 className="text">带输入建议</h3>
                    <AutoComplete
                        className="my-autocomplete my-autocomplete-poi"
                        placeholder="请输入内容"
                        value={this.state.value1}
                        fetchSuggestions={this.querySearch.bind(this)}
                        customItem={customItem}
                        onSelect={this.handleSelect.bind(this)}
                        style={{width:"100%"}}
                    ></AutoComplete>
                  </div>
              )
            }
              `,
      `
            import Input from '../../ishow/Input/Input';
            
            render() {
                return (
                  <div className="inline-input">
                    <Input placeholder="请输入内容" size="large" />
                    <Input placeholder="请输入内容" />
                    <Input placeholder="请输入内容" size="small" />
                    <Input placeholder="请输入内容" size="mini" />
                  </div>
                )
              }
              `,
    ]
  },
  Select: {
    Code: [
      `
            import Select from '../../ishow/Select/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  options: [{
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
                  }],
                  value: ''
                };
              }
              
              render() {
                return (
                  <Select value={this.state.value}>
                    {
                      this.state.options.map(el => {
                        return <Select.Option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Select>
                )
              }
              `
    ]
  },
  Switch: {
    Code: [
      `
            import Switch from '../../ishow/Switch/Switch';

            render() {
                return (
                  <div>
                    <Switch
                      value={true}
                      onText=""
                      offText="">
                    </Switch>
                    <Switch
                      value={true}
                      onColor="#13ce66"
                      offColor="#ff4949">
                    </Switch>
                  </div>
                )
              }
              `,
      `
            import Switch from '../../ishow/Switch/Switch';
            import Tooltip from '../../ishow/Tooltip/Tooltip';

            constructor(props) {
                super(props);
              
                this.state = {
                  value: 100,
                }
              }
              
              render() {
                return (
                  <Tooltip
                    placement="top"
                    content={
                      <div>Switch value: {this.state.value}</div>
                    }
                  >
                    <Switch
                      value={this.state.value}
                      onColor="#13ce66"
                      offColor="#ff4949"
                      onValue={100}
                      offValue={0}
                      onChange={(value)=>{this.setState({value: value})}}
                     >
                    </Switch>
                  </Tooltip>
                )
              }
              `
    ]
  },
  DatePicker: {
    Code: [
      `
            import DatePicker from '../../ishow/DatePicker/DatePicker';

            constructor(props) {
              super(props)
              this.state = {}
            }
            
            render() {
              const {value1, value2} = this.state
            
              return (
                <div>
                  <div>
                    <DatePicker
                      value={value1}
                      placeholder="选择日期"
                      onChange={date=>{
                        console.debug('DatePicker1 changed: ', date)
                        this.setState({value1: date})
                      }}
                      disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                      />
                  </div>
                  <div>
                    <span className="demonstration">带快捷选项</span>
                    <DatePicker
                      ref={e=>this.datepicker2 = e}
                      value={value2}
                      align="right"
                      placeholder="选择日期"
                      onChange={date=>{
                        console.debug('DatePicker2 changed: ', date)
                        this.setState({value2: date})
            
                      }}
                      shortcuts={[{
                        text: '今天',
                        onClick: (picker)=> {
                          this.setState({value2: new Date()})
                          this.datepicker2.togglePickerVisible()
                        }
                      }, {
                        text: '昨天',
                        onClick: (picker)=> {
                          const date = new Date();
                          date.setTime(date.getTime() - 3600 * 1000 * 24);
                          this.setState({value2: date})
                          this.datepicker2.togglePickerVisible()
                        }
                      }, {
                        text: '一周前',
                        onClick: (picker)=> {
                          const date = new Date();
                          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                          this.setState({value2: date})
                          this.datepicker2.togglePickerVisible()
                        }
                      }]}
                      />
                  </div>
                </div>
              )
            }
            
            `,
      `
            import DateRangePicker from '../../ishow/DatePicker/DateRangePicker';

            constructor(props) {
                super(props)
                this.state = {value1: null, value2: null}
              }
              
              render() {
                const {value1, value2} = this.state
              
                return (
                  <div>
                    <div>
                      <DateRangePicker
                        value={value1}
                        placeholder="选择日期范围"
                        onChange={date=>{
                          console.debug('DateRangePicker1 changed: ', date)
                          this.setState({value1: date})
                        }}
                        />
                    </div>
                    <div>
                      <DateRangePicker
                        value={value2}
                        placeholder="选择日期范围"
                        align="right"
                        ref={e=>this.daterangepicker2 = e}
                        onChange={date=>{
                          console.debug('DateRangePicker2 changed: ', date)
                          this.setState({value2: date})
                        }}
                        shortcuts={[{
                          text: '最近一周',
                          onClick: ()=> {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              
                            this.setState({value2: [start, end]})
                            this.daterangepicker2.togglePickerVisible()
                          }
                        }, {
                          text: '最近一个月',
                          onClick: ()=> {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              
                            this.setState({value2: [start, end]})
                            this.daterangepicker2.togglePickerVisible()
                          }
                        }, {
                          text: '最近三个月',
                          onClick: ()=> {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            this.setState({value2: [start, end]})
                            this.daterangepicker2.togglePickerVisible()
                          }
                        }]}
                        />
                    </div>
                  </div>
                )
              }
              
              `
    ]
  },
  Upload: {
    Code: [
      `
            import Upload from '../../ishow/Upload/Upload';
            import Button from '../../ishow/Button/Button';

            render() {
                const fileList = [
                  {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
                ];
                return (
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
                )
              }
              
              handlePreview(file) {
                console.log('preview');
              }
              
              handleRemove(file, fileList) {
                console.log('remove');
              }
              `,
      `
            import Upload from '../../ishow/Upload/Upload';
            import Dialog from '../../ishow/Dialog/Dialog';

            constructor(props) {
                super(props);
              
                this.state = {
                  dialogImageUrl: '',
                  dialogVisible: false,
                };
              }
              
              render() {
                const { dialogImageUrl, dialogVisible } = this.state;
                return (
                  <div>
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      onPreview={file => this.handlePictureCardPreview(file)}
                      onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    >
                      <i className="ishow-icon-plus"></i>
                    </Upload>
                    <Dialog
                      visible={dialogVisible}
                      size="tiny"
                      onCancel={() => this.setState({ dialogVisible: false })}
                    >
                      <img width="100%" src={dialogImageUrl} alt="" />
                    </Dialog>
                  </div>
                )
              }
              
              handleRemove(file, fileList) {
                console.log(file, fileList);
              }
              
              handlePictureCardPreview(file) {
                this.setState({
                  dialogImageUrl: file.url,
                  dialogVisible: true,
                })
              }
              
              `,
      `
            import Upload from '../../ishow/Upload/Upload';
            import Button from '../../ishow/Button/Button';

            render() {
                const fileList2 = [
                  {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
                ]
                return (
                  <Upload
                    className="upload-demo"
                    action="//jsonplaceholder.typicode.com/posts/"
                    onPreview={file => this.handlePreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    fileList={fileList2}
                    listType="picture"
                    tip={<div className="ishow-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                  >
                    <Button size="small" type="primary">点击上传</Button>
                  </Upload>
                )
              }
              
              handleRemove(file, fileList) {
                console.log(file, fileList);
              }
              
              handlePreview(file) {
                console.log(file);
              }
              
              `
    ]
  },
  Table: {
    Code: [
      `
            import Table from '../../ishow/Table/TableStore';

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      label: "日期",
                      prop: "date",
                      width: 180, 
                      resizable: false
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 180,
                      resizable: false
                    },
                    {
                      label: "地址",
                      prop: "address",
                      resizable: false
                    }
                  ],
                  data: [{
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
                  },{
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
                  }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    maxHeight={200}
                    data={this.state.data}
                    stripe={true}
                    border={true}
                  />
                )
              }
              `,
      ` 
            import Table from '../../ishow/Table/TableStore';
            
            constructor(props){
              super(props);
              this.state = {
                columns2: [
                {
                  label: "日期",
                  prop: "date",
                  width: 150,
                  fixed: 'left',
                  resizable: false
                },
                {
                  label: "姓名",
                  prop: "name",
                  width: 160,
                  resizable: false
                },
                {
                  label: "省份",
                  prop: "province",
                  width: 160,
                  resizable: false
                },
                {
                  label: "地址",
                  prop: "address",
                  width: 400,
                  resizable: false
                },
                {
                  label: "邮编",
                  prop: "zip",
                  width: 120,
                  resizable: false
                },
                {
                  label: "操作",
                  prop: "zip",
                  fixed: 'right',
                  width: 100,
                  resizable: false,
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
              }
            }
            render() {
              return (
                <Table
                style={{width: '60%'}}
                columns={this.state.columns2}
                data={this.state.data2}
                border={true}
                height={200}
              />
              )
            }`,
      `
            import Table from '../../ishow/Table/TableStore';

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      label: "日期",
                      prop: "date",
                      width: 150,
                      resizable: false
                    },
                    {
                      label: "配送信息",
                      subColumns: [
                        {
                          label: "姓名",
                          prop: "name",
                          width: 160,
                          resizable: false
                        },
                        {
                          label: "地址",
                          resizable: false,
                          subColumns: [
                            {
                              label: "省份",
                              prop: "province",
                              width: 160,
                              resizable: false
                            },
                            {
                              label: "城市",
                              prop: "address",
                              width: 400,
                              resizable: false
                            },
                            {
                              label: "邮编",
                              prop: "zip",
                              width: 120,
                              resizable: false
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  data: [{
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                  }]
                }
              }
              
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                  />
                )
              }
              `,
      `
            import Table from '../../ishow/Table/TableStore';
            import Button from "../../ishow/Button/index";
            import Icon from "../../ishow/Icon/Icon";
            import Tag from "../../ishow/Tag/Tag";

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      type: 'index',
                      resizable: false
                    },
                    {
                      label: "日期",
                      prop: "date",
                      width: 150,
                      resizable: false,
                      render: function(data){
                        return (
                        <span>
                          <Icon name="time"/>
                          <span style={{marginLeft: '10px'}}>{data.date}</span>
                        </span>)
                      }
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 160,
                      resizable: false,
                      render: function(data){
                        return <Tag>{data.name}</Tag>
                      }
                    },
                    {
                      label: "操作",
                      prop: "address",
                      resizable: false,
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
                  data: [{
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    height={250}
                    highlightCurrentRow={true}
                    onCurrentChange={item=>{console.log(item)}}
                  />
                )
              }
              `,
      `
            import Table from '../../ishow/Table/TableStore';
            import Form from '../../ishow/Form/index';

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
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
                            <Form.Item label="店铺地址"><span>上海迪士尼乐园</span></Form.Item>
                            <Form.Item label="商品描述"><span>3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限</span></Form.Item>
                          </Form>
                        )
                      }
                    },
                    {
                      label: "商品 ID",
                      prop: "id",
                      width: 150,
                      resizable: false
                    },
                    {
                      label: "商品名称",
                      prop: "name",
                      width: 160,
                      resizable: false
                    },
                    {
                      label: "描述",
                      prop: "desc",
                      resizable: false
                    }
                  ],
                  data: [{
                    id: '12987122',
                    name: '双人报价套餐-上海迪士尼乐园自驾2日游',
                    category: '宿玩具总动员酒店',
                    desc: '3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
                    address: '上海迪士尼乐园',
                    shop: '途牛大前端 -- 张勇夫妻店',
                    shopId: '10333'
                  }, {
                    id: '12987123',
                    name: '双人报价套餐-上海迪士尼乐园自驾2日游',
                    category: '宿玩具总动员酒店',
                    desc: '3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
                    address: '上海迪士尼乐园',
                    shop: '途牛大前端 -- 张勇夫妻店',
                    shopId: '10333'
                  }, {
                    id: '12987125',
                    name: '双人报价套餐-上海迪士尼乐园自驾2日游',
                    category: '宿玩具总动员酒店',
                    desc: '3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
                    address: '上海迪士尼乐园',
                    shop: '途牛大前端 -- 张勇夫妻店',
                    shopId: '10333'
                  }, {
                    id: '12987126',
                    name: '双人报价套餐-上海迪士尼乐园自驾2日游',
                    category: '宿玩具总动员酒店',
                    desc: '3月5号至7号预定指定团期迪士尼门票享七五折特惠名额有限',
                    address: '上海迪士尼乐园',
                    shop: '途牛大前端 -- 张勇夫妻店',
                    shopId: '10333'
                  }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={false}
                    onCurrentChange={item=>{console.log(item)}}
                  />
                )
              }
              `,
      `
            import Table from '../../ishow/Table/TableStore';

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      type: 'selection',
                      resizable: false
                    },
                    {
                      label: "日期",
                      prop: "date",
                      width: 150,
                      resizable: false
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 160,
                      resizable: false
                    },
                    {
                      label: "地址",
                      prop: "address",
                      resizable: false
                    }
                  ],
                  data: [{
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }, {
                    date: '2018-03-02',
                    name: '途牛大前端 -- 张勇',
                    province: '江苏',
                    city: '南京',
                    address: '南京市玄武区玄武大道699-32号途牛大厦',
                    zip: 200333
                   }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    height={250}
                    onSelectChange={(selection) => { console.log(selection) }}
                    onSelectAll={(selection) => { console.log(selection) }}
                  />
                )
              }
              `,
      `
            import Table from '../../ishow/Table/TableStore';

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      label: "日期",
                      prop: "date",
                      width: 180,
                      sortable: true,
                      resizable: false
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 180,
                      sortable: true,
                      resizable: false
                    },
                    {
                      label: "地址",
                      prop: "address",
                      resizable: false
                    }
                  ],
                  data: [{
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
                  }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                  />
                )
              }
              `,
      `
            import Table from '../../ishow/Table/TableStore';
            import Tag from "../../ishow/Tag/Tag";

            constructor(props) {
                super(props);
              
                this.state = {
                  columns: [
                    {
                      label: "日期",
                      prop: "date",
                      width: 180,
                      resizable: false
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 180,
                      resizable: false
                    },
                    {
                      label: "地址",
                      prop: "address",
                      resizable: false
                    },
                    {
                      label: '标签',
                      prop: 'tag',
                      width: 100,
                      resizable: false,
                      filters: [{text: '家', value: '家'}, {text: '公司', value: '公司'}],
                      filterMethod(value, row) {
                                return row.tag === value;
                              },
                      render: (data, column)=>{
                        if(data['tag'] == '家'){
                          return <Tag type="primary">{data['tag']}</Tag>
                        }else if(data['tag'] == '公司'){
                          return <Tag type="success">{data['tag']}</Tag>
                        }
                      }
                    }
                  ],
                  data: [{
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
                  }]
                }
              }
              
              render() {
                return (
                  <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                  />
                )
              }
              `
    ]
  },
  Tag: {
    Code: [
      `
            import Tag from '../../ishow/Tag/Tag';

            render() {
                return (
                  <div>
                    <Tag>标签一</Tag>
                    <Tag type="gray">标签二</Tag>
                    <Tag type="primary">标签三</Tag>
                    <Tag type="success">标签四</Tag>
                    <Tag type="warning">标签五</Tag>
                    <Tag type="danger">标签六</Tag>
                  </div>
                )
              }`,
      `
            import Tag from '../../ishow/Tag/Tag';

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
                  ]
                }
              }
              
              handleClose(tag) {
                const { tags } = this.state;
              
                tags.splice(tags.map(el => el.key).indexOf(tag.key), 1);
              
                this.setState({ tag });
              }
              
              render() {
                return (
                  <div>
                    {
                      this.state.tags.map(tag => {
                        return (
                          <Tag
                            key={tag.key}
                            closable={true}
                            type={tag.type}
                            closeTransition={false}
                            onClose={this.handleClose.bind(this, tag)}>{tag.name}</Tag>
                        )
                      })
                    }
                  </div>
                )
              }
              `,
      `
            import Tag from '../../ishow/Tag/Tag';
            import Button from '../../ishow/Button/Button';
            import Input from '../../ishow/Input/Input';

            constructor(props) {
                super(props);
              
                this.state = {
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
              
                this.state.inputVisible = false;
                this.state.inputValue = '';
              
                this.forceUpdate();
              }
              
              render() {
                return (
                  <div>
                    {
                      this.state.dynamicTags.map((tag, index) => {
                        return (
                          <Tag
                            key={Math.random()}
                            closable={true}
                            closeTransition={false}
                            onClose={this.handleClose.bind(this, index)}>{tag}</Tag>
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
                  </div>
                )
              }
              `
    ]
  },
  Progress: {
    Code: [
      `
            import Progress from '../../ishow/Progress/Progress';

            render() {
                return (
                  <div>
                    <Progress percentage={0} />
                    <Progress percentage={70} />
                    <Progress percentage={100} status="success" />
                    <Progress percentage={50} status="exception" />
                  </div>
                )
              }
              `,
      `
            import Progress from '../../ishow/Progress/Progress';

            render() {
                return (
                  <div>
                    <Progress strokeWidth={18} percentage={0} textInside />
                    <Progress strokeWidth={18} percentage={70} textInside />
                    <Progress strokeWidth={18} percentage={100} status="success" textInside />
                    <Progress strokeWidth={18} percentage={50} status="exception" textInside />
                  </div>
                )
              }
              `,
      `
            import Progress from '../../ishow/Progress/Progress';

            render() {
                return (
                  <div>
                    <Progress type="circle" percentage={0} />
                    <Progress type="circle" percentage={25} />
                    <Progress type="circle" percentage={100} status="success" />
                    <Progress type="circle" percentage={50} status="exception" />
                  </div>
                )
              }`
    ]
  },
  Pagination: {
    Code: [
      `
            import Pagination from '../../ishow/Pagination/Pagination';

            render() {
                return (
                  <div>
                      <Pagination layout="prev, pager, next" total={50}/>
                      <Pagination layout="prev, pager, next" total={1000}/>
                  </div>
                )
              }`,
      `render() {
                return <Pagination layout="prev, pager, next" total={50} small={true}/>
              }`,
      `
              render() {
                return (
                    <div>
                      <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5}/>
                    </div>
                )
              }`

    ]
  },
  Loading: {
    Code: [
      `
            import Loading from '../../ishow/Loading/Loading';
            import Table from '../../ishow/Table/TableStore';

            constructor(props) {
                super(props);
              
                this.table = {
                  columns: [
                    {
                      label: "日期",
                      prop: "date",
                      width: 180
                    },
                    {
                      label: "姓名",
                      prop: "name",
                      width: 180
                    },
                    {
                      label: "地址",
                      prop: "address"
                    }
                  ],
                  data: [{
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
                  }]
                }
              }
              
              render() {
                return (
                  <div className="ishow-loading-demo">
                    <Loading text="订单资源确认中">
                      <Table
                        style={{width: '100%'}}
                        columns={this.table.columns}
                        data={this.table.data}
                      />
                    </Loading>
                  </div>
                )
              }
              `
    ]
  },
  Message: {
    Code: [
      `
            import Message from '../../ishow/Message/Message';
            import Button from "../../ishow/Button/Button";

            open5() {
                Message({
                  showClose: true,
                  message: '恭喜你，这是一条成功消息',
                  type: 'success'
                });
              }
              
              open6() {
                Message({
                  showClose: true,
                  message: '警告哦，这是一条警告消息',
                  type: 'warning'
                });
              }
              
              open7() {
                Message({
                  showClose: true,
                  message: '这是一条消息提示',
                  type: 'info'
                });
              }
              
              open8() {
                Message({
                  showClose: true,
                  message: '错了哦，这是一条错误消息',
                  type: 'error'
                });
              }
              
              render() {
                return (
                  <div>
                    <Button plain={true} onClick={this.open5.bind(this)}>成功</Button>
                    <Button plain={true} onClick={this.open6.bind(this)}>警告</Button>
                    <Button plain={true} onClick={this.open7.bind(this)}>消息</Button>
                    <Button plain={true} onClick={this.open8.bind(this)}>错误</Button>
                  </div>
                )
              }
              `
    ]
  },
  MessageBox: {
    Code: [
      `
            import MessageBox from '../../ishow/MessageBox/index';
            import Button from "../../ishow/Button/Button";
            import Message from '../../ishow/Message/Message';

            render() {
                return <Button type="text" onClick={this.onClick.bind(this)}>点我查看消息提示</Button>
              }
              
              onClick() {
                MessageBox.alert('这是一段内容', '标题名称');
              }`,
      `
            import MessageBox from '../../ishow/MessageBox/index';
            import Button from "../../ishow/Button/Button";
            import Message from '../../ishow/Message/Message';

            render() {
                return <Button type="text" onClick={this.onClick.bind(this)}>点我确认消息</Button>
              }
              
              onClick() {
                MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  type: 'warning'
                }).then(() => {
                  Message({
                    type: 'success',
                    message: '删除成功!'
                  });
                }).catch(() => {
                  Message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
              }
              `,
      `
            import MessageBox from '../../ishow/MessageBox/index';
            import Button from "../../ishow/Button/Button";
            import Message from '../../ishow/Message/Message';

            render() {
                return <Button type="text" onClick={this.onClick.bind(this)}>点我提交内容</Button>
              }
              
              onClick() {
                MessageBox.prompt('请输入邮箱', '提示', {
                  inputPattern: /[\\/w!#$%&'*+/=?^_\`{|}~-]+(?:.[w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[w](?:[w-]*[w])?.)+[w](?:[w-]*[w])?\\/,
                  inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                  Message({
                    type: 'success',
                    message: '你的邮箱是: ' + value
                  });
                }).catch(() => {
                  Message({
                    type: 'info',
                    message: '取消输入'
                  });
                });
              }
              `,
      `
            import MessageBox from '../../ishow/MessageBox/index';
            import Button from "../../ishow/Button/Button";
            import Message from '../../ishow/Message/Message';

            render() {
                return <Button type="text" onClick={this.onClick.bind(this)}>点击打开 Message Box</Button>
              }
              
              onClick() {
                MessageBox.msgbox({
                  title: '消息',
                  message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
                  showCancelButton: true
                }).then(action => {
                  Message({
                    type: 'info',
                    message: 'action: ' + action
                  });
                })
              }`

    ]
  },
  Notification: {
    Code: [
      `
            import Notification from '../../ishow/Notification/NotificationCenter';
            import Button from "../../ishow/Button/Button";

            render() {
                return (
                  <div>
                    <Button onClick={this.open3.bind(this)}>成功</Button>
                    <Button onClick={this.open4.bind(this)}>警告</Button>
                    <Button onClick={this.open5.bind(this)}>消息</Button>
                    <Button onClick={this.open6.bind(this)}>错误消息并且不会自动关闭</Button>
                  </div>
                )
              }
              
              open3() {
                Notification({
                  title: '成功',
                  message: '这是一条成功的提示消息',
                  type: 'success'
                });
              }
              
              open4() {
                Notification({
                  title: '警告',
                  message: '这是一条警告的提示消息',
                  type: 'warning'
                });
              }
              
              open5() {
                Notification.info({
                  title: '消息',
                  message: '这是一条消息的提示消息'
                });
              }
              
              open6() {
                Notification.error({
                  title: '错误',
                  message: '这是一条错误的提示消息，并且不会自动关闭',
                  duration: 0
                });
              }
              `
    ]
  },
  Menu: {
    Code: [
      `
            import Menu from '../../ishow/Menu/index.js';

            render() {
                return (
                  <div>
                    <Menu theme="dark" defaultActive="1" className="ishow-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                      <Menu.Item index="1">处理中心</Menu.Item>
                      <Menu.SubMenu index="2" title="我的工作台">
                        <Menu.Item index="2-1">选项1</Menu.Item>
                        <Menu.Item index="2-2">选项2</Menu.Item>
                        <Menu.Item index="2-3">选项3</Menu.Item>
                      </Menu.SubMenu>
                      <Menu.Item index="3">订单管理</Menu.Item>
                    </Menu>
                    <div className="line"></div>
                    <Menu defaultActive="1" className="ishow-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                      <Menu.Item index="1">处理中心</Menu.Item>
                      <Menu.SubMenu index="2" title="我的工作台">
                        <Menu.Item index="2-1">选项1</Menu.Item>
                        <Menu.Item index="2-2">选项2</Menu.Item>
                        <Menu.Item index="2-3">选项3</Menu.Item>
                      </Menu.SubMenu>
                      <Menu.Item index="3">订单管理</Menu.Item>
                    </Menu>
                  </div>
                )
              }
              
              onSelect() {
              
              }
              `
    ]
  },

  Tab: {
    Code: [
      `
            import Tabs from "../../ishow/Tab/index";

            render() {
                return (
                  <Tabs activeName="2" onTabClick={ (tab) => console.log(tab.props.name) }>
                      <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
                      <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
                      <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
                      <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
                  </Tabs>
                )
              }
              `,
      `
            import Tabs from "../../ishow/Tab/index";

            render() {
                return (
                  <Tabs type="card" value="1">
                      <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
                      <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
                      <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
                      <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
                  </Tabs>
                )
              }`,
      `
            import Tabs from "../../ishow/Tab/index";

            render() {
                return (
                  <Tabs type="card" closable activeName="1" onTabRemove={ (tab) => console.log(tab.props.name) }>
                      <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
                      <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
                      <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
                      <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
                  </Tabs>
                )
              }`,
      `
            import Tabs from "../../ishow/Tab/index";

            render() {
                return (
                  <Tabs type="border-card" activeName="1">
                      <Tabs.Pane label="首页" name="1">首页</Tabs.Pane>
                      <Tabs.Pane label="代客注册" name="2">代客注册</Tabs.Pane>
                      <Tabs.Pane label="主推管理" name="3">主推管理</Tabs.Pane>
                      <Tabs.Pane label="任务内容管理" name="4">任务内容管理</Tabs.Pane>
                  </Tabs>
                )
              }
              `,
      `
            import Tabs from "../../ishow/Tab/index";
            import Button from "../../ishow/Button/index";

            constructor() {
                super();
                this.state = {
                  tabs: [{
                    title: 'Tab 1',
                    name: 'Tab 1',
                    content: 'Tab 1 content',
                  }, {
                    title: 'Tab 2',
                    name: 'Tab 2',
                    content: 'Tab 2 content',
                  }],
                  tabIndex: 2,
                }
              }
              
              addTab() {
                const { tabs, tabIndex } = this.state;
                const index = tabIndex + 1;
              
                tabs.push({
                  title: 'new Tab',
                  name: 'Tab ' + index,
                  content: 'new Tab content',
                });
                this.setState({
                  tabs,
                  tabIndex: index,
                });
              }
              
              removeTab(tab) {
                const { tabs, tabIndex } = this.state;
              
                tabs.splice(tab.key.replace(/^.$/, ''), 1);
                this.setState({
                  tabs,
                });
              }
              
              render() {
                return (
                  <div>
                    <div style={{marginBottom: '20px'}}>
                      <Button size="small" onClick={() => this.addTab()}>add tab</Button>
                    </div>
                    <Tabs type="card" value="Tab 2" onTabRemove={(tab) => this.removeTab(tab)}>
                      {
                        this.state.tabs.map((item, index) => {
                          return <Tabs.Pane key={index} closable label={item.title} name={item.name}>{item.content}</Tabs.Pane>
                        })
                      }
                    </Tabs>
                  </div>
                )
              }
              `
    ]
  },

  Breadcrumb: {
    Code: [
      `
            import Breadcrumb from '../../ishow/Breadcrumb/index.js';

            render() {
                return (
                  <Breadcrumb separator="/">
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>活动管理</Breadcrumb.Item>
                    <Breadcrumb.Item>活动列表</Breadcrumb.Item>
                    <Breadcrumb.Item>活动详情</Breadcrumb.Item>
                  </Breadcrumb>
                )
              }`,
        `
            import Breadcrumb from '../../ishow/Breadcrumb/index.js';

            render() {
                return (
                  <div className="allInOneBreadCrumbs" style={{ position: "relative", marginBottom: 20 }}>
                    <Breadcrumb separator="/" style={{ display: 'inline-block' }}>
                      <Breadcrumb.Item>投诉管理系统</Breadcrumb.Item>
                      <Breadcrumb.Item>投诉单{this.props.complaintSheetID}</Breadcrumb.Item>
                    </Breadcrumb>
                    <span style={{ position: "absolute", cursor: 'pointer', right: 0 }}>
                    <IconPlus type="reload" title="刷新" onClick={() => window.location.reload()} /> 
                    <IconPlus type="copy" title="复制url" onClick={() => this.copyUrl()} /></span>
                  </div>
                )
              }`
              
    ]
  },
  Dropdown: {
    Code: [
      `
            import Button from '../../ishow/Button/Button';
            import Dropdown from '../../ishow/Dropdown/index.js';

            render() {
                return (
                  <div>
                    <Dropdown menu={(
                      <Dropdown.Menu>
                        <Dropdown.Item>张勇</Dropdown.Item>
                        <Dropdown.Item>陈瑜婷</Dropdown.Item>
                        <Dropdown.Item>盛瑜</Dropdown.Item>
                        <Dropdown.Item>刘兴</Dropdown.Item>
                        <Dropdown.Item>赵斐昊</Dropdown.Item>
                        <Dropdown.Item>黄杰</Dropdown.Item>
                        <Dropdown.Item>刘泽琼</Dropdown.Item>
                        <Dropdown.Item>唐媛媛</Dropdown.Item>
                      </Dropdown.Menu>
                    )}>
                      <Button type="primary">
                       途牛ELF-Team成员<i className="ishow-icon-caret-bottom ishow-icon--right"></i>
                      </Button>
                    </Dropdown>
                  </div>
                )
              }
              `
    ]
  },
  Steps: {
    Code: [
      `
            import Steps from '../../ishow/Steps/index.js';

            render() {
                return (
                  <Steps space={100} active={1} finishStatus="success">
                    <Steps.Step title="已完成"></Steps.Step>
                    <Steps.Step title="进行中"></Steps.Step>
                    <Steps.Step title="步骤 3"></Steps.Step>
                  </Steps>
                )
              }
              `,
      `
            import Steps from '../../ishow/Steps/index.js';

            render() {
                return (
                  <Steps space={200} active={1}>
                    <Steps.Step title="步骤 1" description="这是一段很长很长很长的描述性文字"></Steps.Step>
                    <Steps.Step title="步骤 2" description="这是一段很长很长很长的描述性文字"></Steps.Step>
                    <Steps.Step title="步骤 3" description="这是一段很长很长很长的描述性文字"></Steps.Step>
                  </Steps>
                )
              }`,
      `
            import Steps from '../../ishow/Steps/index.js';

            render() {
                return (
                  <Steps space={100} active={1}>
                    <Steps.Step title="步骤 1" icon="edit"></Steps.Step>
                    <Steps.Step title="步骤 2" icon="upload"></Steps.Step>
                    <Steps.Step title="步骤 3" icon="picture"></Steps.Step>
                  </Steps>
                )
              }`,
      `
            import Button from '../../ishow/Button/Button';
            import Steps from '../../ishow/Steps/index.js';

            constructor(props) {
                super(props);
              
                this.state = {
                  active: 0
                };
              }
              
              next() {
                let active = this.state.active + 1;
                if (active > 3) {
                  active = 0;
                }
                this.setState({ active });
              }
              
              render() {
                return (
                  <div>
                    <Steps space={200} active={this.state.active} finishStatus="success">
                      <Steps.Step title="步骤 1"></Steps.Step>
                      <Steps.Step title="步骤 2"></Steps.Step>
                      <Steps.Step title="步骤 3"></Steps.Step>
                    </Steps>
                    <Button onClick={() => this.next()}>下一步</Button>
                  </div>
                )
              }
              `
    ]
  },
  Dialog: {
    Code: [
      `
            import Dialog from '../../ishow/Dialog/Dialog';
            import Button from '../../ishow/Button/Button';

            constructor(props) {
                super(props);
              
                this.state = {
                  dialogVisible: false
                };
              }
              
              render() {
                return (
                  <div>
                    <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>点击打开 Dialog</Button>
                    <Dialog
                      title="提示"
                      size="tiny"
                      visible={ this.state.dialogVisible }
                      onCancel={ () => this.setState({ dialogVisible: false }) }
                      lockScroll={ false }
                    >
                      <Dialog.Body>
                        <span>这是一段信息</span>
                      </Dialog.Body>
                      <Dialog.Footer className="dialog-footer">
                        <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
                        <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button> 
                      </Dialog.Footer>
                    </Dialog>
                  </div>
                )
              }
              `,
      `
            import Dialog from '../../ishow/Dialog/Dialog';
            import Button from '../../ishow/Button/Button';
            import Table from '../../ishow/Table/TableStore';
            import Form from '../../ishow/Form/Form';
            import Select from '../../ishow/Select/index';

            constructor(props) {
                super(props);
              
                this.state = {
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
                      width: 100
                    },
                    {
                      label: "地址",
                      prop: "address"
                    }
                  ],
                  data: [{
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
                  }]
                };
              }
              
              render() {
                return (
                  <div>
                    <Button type="text" onClick={ () => this.setState({ dialogVisible2: true }) } type="text">打开嵌套表格的 Dialog</Button>
                    <Dialog
                      title="收货地址"
                      visible={ this.state.dialogVisible2 }
                      onCancel={ () => this.setState({ dialogVisible2: false }) }
                    >
                      <Dialog.Body>
                        {this.state.dialogVisible2 && (
                          <Table
                           style={{width: '100%'}}
                           stripe={true}
                           columns={this.table.columns}
                           data={this.table.data} />
                        )}
                      </Dialog.Body>
                    </Dialog>
                    <Button type="text" onClick={ () => this.setState({ dialogVisible3: true }) } type="text">打开嵌套表单的 Dialog</Button>
                    <Dialog
                      title="收货地址"
                      visible={ this.state.dialogVisible3 }
                      onCancel={ () => this.setState({ dialogVisible3: false }) }
                    >
                      <Dialog.Body>
                        <Form model={this.state.form}>
                          <Form.Item label="活动名称" labelWidth="120">
                            <Input value={this.state.form.name}></Input>
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
                        <Button onClick={ () => this.setState({ dialogVisible3: false }) }>取 消</Button>
                        <Button type="primary" onClick={ () => this.setState({ dialogVisible3: false }) }>确 定</Button>
                      </Dialog.Footer>
                    </Dialog>
                  </div>
                )
              }
              `
    ]
  },
  BarChart: {
    Code: [
      `
        import React from 'react'
        import ReactEcharts from 'echarts-for-react'

        class App extends React.Component {
            getOption = () => {
                return {
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 100, 150, 80, 70, 110, 130, 80, 70, 110, 130, 120],
                        type: 'bar',
                        color: "#2da0ff"
                    }]
                };
            };

            render() {
                return (
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: '300px', width: '65%' }}
                        className='react_for_echarts' />
                )
            }
        }

        export default App
        `
    ]
  },
  PieChart: {
    Code: [
      `   
          import React from 'react'
          import ReactEcharts from 'echarts-for-react'

          class App extends React.Component {
              getOption = () => {
                  return {
                      title: {
                          show: true
                      },
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          right: 0,
                          top: 100,
                          data: ['跟团游', '自由行', '邮轮', '机票', '酒店', "火车票"]
                      },
                      series: [
                          {
                              name: '访问来源',
                              hoverAnimation: false,
                              type: 'pie',
                              radius: ['50%', '70%'],
                              avoidLabelOverlap: false,
                              label: {
                                  normal: {
                                      show: false,
                                      position: 'center'
                                  },
                                  emphasis: {
                                      show: true,
                                      textStyle: {
                                          fontSize: '30',
                                          fontWeight: 'bold'
                                      }
                                  }
                              },
                              labelLine: {
                                  normal: {
                                      show: false
                                  }
                              },
                              data: [
                                  { value: 335, name: '跟团游' },
                                  { value: 310, name: '自由行' },
                                  { value: 234, name: '邮轮' },
                                  { value: 135, name: '机票' },
                                  { value: 1548, name: '酒店' },
                                  { value: 1324, name: '火车票' }
                              ]
                          }
                      ]
                  };
              };

              render() {
                  return (
                      <ReactEcharts
                        option={this.getOption()}
                        style={{ height: '300px', width: '500px' }}
                        className='react_for_echarts' />
                  )
              }
          }

          export default App`,
      `
          import React from 'react'
          import ReactEcharts from 'echarts-for-react'
          import { Tabs } from '../../ishow'

          class App extends React.Component {
              getOption = () => {
                  return {
                      tooltip: {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          right: 0,
                          top: 100,
                          data: ['跟团游', '自由行', '邮轮', '机票', '酒店', "火车票"]
                      },
                      series: [
                          {
                              name: '订单来源',
                              hoverAnimation: false,
                              type: 'pie',
                              radius: '55%',
                              center: ['40%', '50%'],
                              data: [
                                  { value: 335, name: '跟团游' },
                                  { value: 310, name: '自由行' },
                                  { value: 234, name: '邮轮' },
                                  { value: 135, name: '机票' },
                                  { value: 1548, name: '酒店' },
                                  { value: 1324, name: '火车票' }
                              ],
                              itemStyle: {
                                  emphasis: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          }
                      ]
                  };
              };

              render() {
                  return (
                      <div className="App">
                          <div>
                              <ReactEcharts
                                  option={this.getOption()}
                                  style={{ height: '300px', width: '500px' }}
                                  className='react_for_echarts' />
                          </div>
                      </div>
                  )
              }
          }

          export default App
          `
    ]
  },
  LineChart: {
    Code: [
      `
        import React from 'react'
        import ReactEcharts from 'echarts-for-react'

        class App extends React.Component {
            getOption = () => {
                return {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['客流量', '支付笔数']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    dataZoom: {
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                        start: 0,
                        end: 100,
                        bottom: "0px"
                    },
                    series: [
                        {
                            name: '支付笔数',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 190, 132, 101, 120, 132, 123]
                        },
                        {
                            name: '客流量',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 300, 310, 123, 232, 231]
                        }
                    ]
                };
            };

            render() {
                return (
                    <ReactEcharts
                      option={this.getOption()}
                      style={{ height: '300px', width: '1000px' }}
                      className='react_for_echarts' />
                )
            }
        }

        export default App
        `
    ]
  },
  Animate: {
    Code: [
      `
      import "animate.css/animate.min.css";

      <div class="animated bounceInLeft" style="animation-duration: 1s;"> 由左弹入效果</div>
      <div class="animated flipOutY" style="animation-delay: 1s;"> 纵向翻出效果</div>
      <div class="animated slideInRight" style="animation-duration: 1s;animation-iteration-count:3"> 自右滑入效果</div>

      animationend() {
        this.setState({
            eventToggle: !this.state.eventToggle,
        });
      }

      <Button type="primary" type="info" onClick={this.animationend.bind(this)} >Toggle动画回调</Button>

      `
    ]
  },
  LoginForm: {
    Code: [
      `
      import React from "react";
      import { Form, Input, Button, Tabs} from "../../ishow";

      class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          form: {
            pass: "",
            name:"",
          },
          rules: {
            pass: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            name: [
              { required: true, message: "请填写用户名", trigger: "blur" }
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
            console.log("error submit!!");
            return false;
          }
        });
      }

      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }

      render() {
        return (
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
        )
      }
    }

    //下面样式可自行调整，须单独引入样式文件
    <style>
      .login-form {
          width: 500 px;
          height: auto;
          border - radius: 10 px;
          border: 1 px solid# ccc;
          padding: 50 px 100 px 50 px 0;
          background: #fff;
        }

      .login - btn {
        width: 100 % ;
      }
    </style>
      `,
      `
      import React from "react";
      import { Form, Input, Button, Tabs } from "../../ishow";

      class Register extends React.Component {
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
              console.log("error submit!!");
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
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                      注册
                    </Button>
                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                  </Form.Item>
                </Form>
          )
      }
      }
      //下面样式可自行调整，须单独引入样式文件
      <style>
        .login-form {
          width: 500 px;
          height: auto;
          border-radius: 10 px;
          border: 1 px solid# ccc;
          padding: 50px 100px 50px 0;
          background: #fff;
        }
      </style>
      `
    ]
  },
  NotFound: {
    Code: [
      `
      import React from "react";

      class NotFound extends React.Component {
          render(){
              return (
                  <div className="lost-404">
                      <h1 className="lost-404-title">404</h1>
                      <p className="lost-404-content">YOUR PAGE SEEMS LOST :(</p>
                  </div>
              )
          }
      }

      //样式单独写再引入
      <style>
      .lost-404-title {
        color: #2d8cf0;
        font-size: 100px;
        text-align: center;
        margin-bottom: 0
      }

      .lost-404-content {
        color: #999;
        text-align: center;
        top: 80px;
      }
      </style>
      `
    ]
  },
  FuzzySearch: {
    Code: [
      `
      import React from 'react';
      import './App.css';
      import AutoComplete from '../../ishow/auto-complete';

      const customItem=(props)=>{
          let item = props.item;
          //console.log(props)
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
                  value1: ''
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
      
          render() {
              return (
                      <div>
                          <AutoComplete
                          className="my-autocomplete"
                          placeholder="请输入内容"
                          value={this.state.value1}
                          fetchSuggestions={this.querySearch.bind(this)}
                          customItem={customItem}
                          onSelect={this.handleSelect.bind(this)}
                          ></AutoComplete>
                      </div>
              )
          }
      }
      `,
      `
      import React from 'react';
      import './App.css';
      import AutoComplete from '../../ishow/auto-complete';

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
                  value1: ''
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
      
          render() {
              return (
                      <div>
                          <AutoComplete
                          className="my-autocomplete"
                          placeholder="请输入内容"
                          value={this.state.value1}
                          onFocus={e=>console.log(e, 'onFocus')}
                          onBlur={e=>console.log(e, 'onblur')}
                          fetchSuggestions={this.querySearch.bind(this)}
                          onSelect={this.handleSelect.bind(this)}
                          ></AutoComplete>
                      </div>
              )
          }
      }
      `,
      `
      import React from 'react';
      import './App.css';
      import AutoComplete from '../../ishow/auto-complete';

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
                  value2: ''
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
      
          render() {
              return (
                      <div>
                          <AutoComplete
                          className="my-autocomplete"
                          placeholder="请输入内容"
                          value={this.state.value2}
                          fetchSuggestions={this.querySearch.bind(this)}
                          onSelect={this.handleSelect.bind(this)}
                          triggerOnFocus={false}
                          ></AutoComplete>
                      </div>
              )
          }
      }
      `,
      `
      import React from 'react';
      import AutoComplete from '../../ishow/auto-complete';
      
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
                  placeholder="订单号/手机号/会员ID"
                      className="my-autocomplete"
                  triggerOnFocus={true}
                  onSelect={this.formatInput.bind(this)}
                  fetchSuggestions={this.appendPrefix.bind(this)} />
                  </div>
              )
          }
      `,
      `
      import React from 'react';
      import Cascader from "../../ishow/Cascader";
      import './App.css';

      class App extends React.Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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

          handleChange(key, value) {
              this.setState({ [key]: value });
          }
          handleCascaderChange = () => {
              setTimeout(() => {
                let s = '';
                let tmp = document.querySelector(".myCascader").querySelector(".ishow-cascader__label").querySelectorAll("label");
                tmp.forEach((item) => s += item.innerText)
                document.querySelector("#cascaderTips").innerHTML = s
              }, 300);

          render(){
              return (
                  <Cascader
                      className="myCascader"
                      options={this.state.options}
                      filterable={true}
                      changeOnSelect={true}
                      onChange={()=>this.handleCascaderChange()}
                  />
                  <p id="cascaderTips"></p>
              )
          }
      }

      `
    ]
  },
  DynamicTable: {
    Code: [
      `
      import React, { Component } from 'react';
      import Table from '../../ishow/Table/TableStore';
      import Button from "../../ishow/Button/index";
      import Checkbox from '../../ishow/Checkbox/index';
      import Switch from '../../ishow/Switch/Switch'
      import './App.css'

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
              <div>
                  <div style={{ marginBottom: 20 }}>
                      <span style={{ fontSize:16,marginRight: 10 }}>缩放</span>
                      <Switch value={this.state.switchValue} onText="on" offText="off" onChange={this.handleSwitchChange.bind(this)}></Switch>
                  </div>
                  <Checkbox
                      checked={this.state.checkAll}
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
              </div>
          )
      }
  }

      export default App
      `
    ]
  },
  Cascader: {
    Code: [
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
                  selectedOptions2: []
  }
          }

          handleChange(key, value) {
              this.setState({ [key]: value });
          }

          render(){
              return (
                      <div>
                          <div className="block">
                              <span className="demonstration" style={{display:'block'}}>默认 click 触发子菜单</span>
                              <Cascader
                                  options={this.state.options}
                                  value={this.state.selectedOptions}
                                  onChange={this.handleChange.bind(this, 'selectedOptions')} />
                          </div>
                          <div className="block">
                              <span className="demonstration" style={{ display: 'block' }}>hover 触发子菜单</span>
                              <Cascader
                                  options={this.state.options}
                                  expandTrigger="hover"
                                  value={this.state.selectedOptions2}
                                  onChange={this.handleChange.bind(this, 'selectedOptions2')} />
                          </div>
                      </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  optionsWithDisabled: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
                      disabled: true,
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
                  selectedOptions2: []
              }
          }

          handleChange(key, value) {
              this.setState({ [key]: value });
          }

          render(){
              return (
                  <div>
                      <Cascader
                          options={this.state.optionsWithDisabled}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
                  selectedOptions2: []
              }
          }

          handleChange(key, value) {
              this.setState({ [key]: value });
          }

          render(){
              return (
                  <div>
                      <Cascader
                          options={this.state.options}
                          showAllLevels={false}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
                  selectedOptions2: [],
                  selectedOptions3: ['oumei', 'ruishi', ]
              }
          }

          handleChange(key, value) {
              this.setState({ [key]: value });
          }

          render(){
              return (
                  <div>
                      <Cascader
                          options={this.state.options}
                          value={this.state.selectedOptions3}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
                  }]
              }
          }

          render(){
              return (
                  <div>
                      <Cascader
                          options={this.state.options}
                          changeOnSelect={true}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options2: [{
                      label: '江苏',
                      cities: []
                  }, {
                      label: '浙江',
                      cities: []
                  }],
                  props: {
                      value: 'label',
                      children: 'cities'
                  }
              }
          }

          handleItemChange(val) {
          console.log('active item:', val);

          setTimeout(() => {
              if (val.indexOf('江苏') > -1 && !this.state.options2[0].cities.length) {
              this.state.options2[0].cities = [{
                  label: '南京'
              }];
              } else if (val.indexOf('浙江') > -1 && !this.state.options2[1].cities.length) {
              this.state.options2[1].cities = [{
                  label: '杭州'
              }];
              }

              this.forceUpdate();
          }, 300);
          }

          render(){
              return (
                  <div>
                      <Cascader
                          props={this.state.props}
                          options={this.state.options2}
                          activeItemChange={this.handleItemChange.bind(this)}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Cascader from "../../ishow/Cascader";

      class App extends Component {
          constructor(props) {
              super(props);

              this.state = {
                  options: [{
                      value: 'zhoubian',
                      label: '南京周边旅游',
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
                          value: 'taqing',
                          label: '踏青赏花',
                          children: [{
                              value: 'wuxi',
                              label: '无锡'
                          }, {
                              value: 'yangzhou',
                              label: '扬州'
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
              }
          }

          render(){
              return (
                  <div>
                      <Cascader
                          placeholder="试试搜索：丽江"
                          options={this.state.options}
                          filterable={true}
                      />
                      <Cascader
                          placeholder="试试搜索：云南"
                          options={this.state.options}
                          filterable={true}
                          changeOnSelect={true}
                      />
                  </div>
              )
          }
      }

      export default App
      `,
    ]
  },
  Badge: {
    Code: [
      `
      import React, { Component } from 'react';
      import Badge from '../../ishow/Badge/index';
      import Button from "../../ishow/Button/index";
      import Dropdown from '../../ishow/Dropdown/index.js';

      class App extends React.Component {
          render(){
              return(
                  <div>
                      <Badge value={ 12 } style={{marginRight:40}}>
                      <Button size="small">评论</Button>
                      </Badge>

                      <Badge value={ 3 } style={{marginRight:40}}>
                          <Button size="small">回复</Button>
                      </Badge>

                      <Dropdown trigger="click" menu={(
                          <Dropdown.Menu>
                          <Dropdown.Item className="clearfix">
                              <span>评论</span><Badge className="mark" value={ 12 } />
                          </Dropdown.Item>
                          <Dropdown.Item className="clearfix">
                              <span>回复</span><Badge className="mark" value={ 3 } />
                          </Dropdown.Item>
                          </Dropdown.Menu>
                          )}
                      >
                          <span className="ishow-dropdown-link">点我查看<i className="ishow-icon-caret-bottom ishow-icon--right"></i></span>
                      </Dropdown>
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Badge from '../../ishow/Badge/index';
      import Button from "../../ishow/Button/index";

      class App extends React.Component {
          render(){
              return(
                  <div>
                      <Badge value={ 200 } max={ 99 } style={{marginRight:40}}>
                          <Button size="small">评论</Button>
                      </Badge>
                      <Badge value={ 100 } max={ 10 }>
                          <Button size="small">回复</Button>
                      </Badge>
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Badge from '../../ishow/Badge/index';
      import Button from "../../ishow/Button/index";

      class App extends React.Component {
          render(){
              return(
                  <div>
                      <Badge value={ 'new' } style={{marginRight:40}}>
                          <Button size="small">评论</Button>
                      </Badge>
                      <Badge value={ 'hot' }>
                          <Button size="small">回复</Button>
                      </Badge>
                  </div>
              )
          }
      }

      export default App
      `,
      `
      import React, { Component } from 'react';
      import Badge from '../../ishow/Badge/index';
      import Button from "../../ishow/Button/index";

      class App extends React.Component {
          render(){
              return(
                  <div>
                      <Badge isDot style={{marginRight:40}}>
                          数据查询
                      </Badge>
                      <Badge isDot>
                          <Button className="share-button" icon="share" type="primary"></Button>
                      </Badge>
                  </div>
              )
          }
      }

      export default App
      `,
    ]
  },
  QueryCriteriaModule:{
    Code:[
      `
      import React, { Component } from 'react';
      //按需加载
      import Button from "../../ishow/Button/index";
      import Row from '../../ishow/LayoutComponent/row';
      import Col from '../../ishow/LayoutComponent/col';
      import Input from '../../ishow/Input';
      import {DatePicker} from '../../ishow/DatePicker';
      import Select from '../../ishow/Select';

      class QueryCriteriaModule extends Component {
        constructor(props){
          super(props);
          this.state = {
            expendCollapse:true,
            paginationVisible:false,
            page: 100,
            pageSize: 10,
            currentPage: 1,
            initDateStart:'',
            initDateEnd:'',
            assignDateStart:'',
            assignDateEnd:'',
            finishDateStart:'',
            finishDateEnd:'',
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
            <div>
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
            </div>
          );
        }
      }

      export default QueryCriteriaModule;

      //下面为组件中涉及的样式，可复制到文件中引用
      .QueryCriteriaModule {
          margin-top: 20px;
      }

      .QueryCriteriaModule_ShowPart {
          position: relative;
          overflow: hidden;
      }

      .QueryCriteriaModule .QueryCriteriaModule_Row {
          margin-bottom: 20px;
      }

      .QueryCriteriaModule .QueryCriteriaModule_Row>.QueryCriteriaModule_Col {
          text-align: center;
      }

      .QueryCriteriaModule_Col>label {
          display: inline-block;
          width: 16%;
          text-align: left;
          vertical-align: middle;
      }

      .QueryCriteriaModule_Col>.QueryCriteriaModule_Input {
          width: 70%;
          margin-left: 2%;
      }

      .QueryCriteriaModule_Expend {
          border-bottom: 1px dashed #ddd;
          margin: 35px auto;
          position: relative;
          width: 96%;
      }

      .QueryCriteriaModule_Expend>.QueryCriteriaModule_Expend_Button {
          position: absolute;
          text-align: center;
          right: 0;
          top: -16px;
          width: 80px;
          display: inline-block;
          margin: 0 auto;
      }

      .QueryCriteriaModule_CollapsePart {
          display: none;
      }

      .QueryCriteriaModule_Button {
          text-align: center;
          margin: 30px 0;
      }

      .QueryCriteriaModule_DatePicker {
          display: inline-block;
          width: 70%;
          margin-left: 10px;
      }

      .QueryCriteriaModule_DatePicker .ishow-date-editor.ishow-input {
          width: auto !important;
      }

      .QueryCriteriaModule_DatePicker .ishow-date-editor {
          width: 45%;
      }

      .QueryCriteriaModule_rangeSpliter {
          display: inline-block;
          width: 10%;
      }
      `,
    ]
  },
  CopyUrlAndRefresh:{
    Code:[
      `
      import React from 'react';
      import './App.css';
      import MessageBox from '../../ishow/MessageBox/index';
      import IconPlus from '../../ishow/LayoutComponent/icon/index';

      export default class App extends React.Component {
          
        //复制网址到剪切板 ===start
          fallbackCopyTextToClipboard = (text)=> {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
          
            try {
              var successful = document.execCommand('copy');
              var msg = successful ? 'successful' : 'unsuccessful';
              console.log('Fallback: Copying text command was ' + msg);
            } catch (err) {
              console.error('Fallback: Oops, unable to copy', err);
            }
          
            document.body.removeChild(textArea);
          }
          //参数text为要复制到剪切板的内容，此处为当前页的URL地址
          copyTextToClipboard = (text)=> {
            if (!navigator.clipboard) {
              this.fallbackCopyTextToClipboard(text);
              return;
            }
            navigator.clipboard.writeText(text).then(()=> {
              MessageBox.msgbox({
                message:'URL成功复制到剪切板',
                type:"success"
              })
            }, (err)=> {
              console.error('Async: Could not copy text: ', err);
            });
          }
        //复制网址到剪切板 === end

          render(){
              return (
                <div>
                  <span style={{cursor:'pointer'}}>
                    <IconPlus type="reload" title="刷新" onClick={()=>window.location.reload()}/> <IconPlus type="copy" title="复制url" onClick={()=>this.copyTextToClipboard(window.location.href)}/>
                  </span>  
                </div>
              )
          }
      }
      `
    ]
  },
  GoogleMap:{
    Code:[
      `
      /**
       * 使用谷歌地图前需要在引入地图的jssdk
       * <script type="text/javascript" src="http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=你的谷歌地图API_KEY&hl=zh-CN"></script>
      */
      // react 中使用
      import React from "react";
      import './App.css'
      
      let map ;
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
  
              };
          }

          componentDidMount(){
              if(!map) this.__initMap();
          }

          componentWillUnmount(){
            map = null;
          }

          // 初始化地图
          __initMap(){
              // 初始化地图  地图中心点坐标与比例尺大小必填
              map = new window.google.maps.Map(this.refs.map, {
                center: { lat: 32.07226, lng: 118.79357 },    //以南京的坐标为演示
                zoom: 13,
                mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });
              this.__renderMarker();
          }

          // 基础打点并创建一个点击打开弹窗
          __renderMarker(){
            var marker2= new window.google.maps.Marker({labelContent: "这是玄武湖", position:{lat:32.07226,lng: 118.79357},map:map});
            var iw3 = new window.google.maps.InfoWindow({
                  content: "这是玄武湖"
              });
            iw3.open(map, marker2);
            // 为标记点添加点击打开弹窗事件
            window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
          }

          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }

      export default App;

      `,
      `
      // 普通页面中使用
      var map;
      // 初始化地图  地图中心点坐标与比例尺大小必填
      function initMap() {
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 32.07226, lng: 118.79357 },    //以南京的坐标为演示
          zoom: 13,
          mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        renderMarker();
      }

      // 基础打点并创建一个点击打开弹窗
      function renderMarker(){
        var marker2= new window.google.maps.Marker({labelContent: "这是玄武湖", position:{lat:32.07226,lng: 118.79357},map:map});
        var iw3 = new window.google.maps.InfoWindow({
              content: "这是玄武湖"
          });
        iw3.open(map, marker2);
        // 为标记点添加点击打开弹窗事件
        window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
      }

      initMap();
      `,
      `
      // react中使用
      import React from "react";
      import './App.css'
      
      let map ;
      
      // 自定义窗口标签类 
      class Popup extends window.google.maps.OverlayView{
          constructor(position,content1){
            super();
            this.position = position;
            let content=document.createElement('div');
            content.innerHTML="<b>"+content1+"</b>";
        
            content.classList.add('popup-bubble-content');
        
            var pixelOffset = document.createElement('div');
            pixelOffset.classList.add('popup-bubble-anchor');
            pixelOffset.appendChild(content);
        
            this.anchor = document.createElement('div');
            this.anchor.classList.add('popup-tip-anchor');
            this.anchor.appendChild(pixelOffset);
            this.stopEventPropagation();
          }
      
          // 挂在到地图时调用
          onAdd(){
            this.getPanes().floatPane.appendChild(this.anchor);
          };
        
          // 从地图移除时调用
          onRemove(){
            if (this.anchor.parentElement) {
              this.anchor.parentElement.removeChild(this.anchor);
            }
          };
        
          // 绘制方法
          draw(){
            var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            // 视图外时自动隐藏
            var display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';
        
            if (display === 'block') {
              this.anchor.style.left = divPosition.x + 'px';
              this.anchor.style.top = divPosition.y + 'px';
            }
            if (this.anchor.style.display !== display) {
              this.anchor.style.display = display;
            }
          };
          
          // 阻止事件传播
          stopEventPropagation(){
            var anchor = this.anchor;
            anchor.style.cursor = 'auto';
        
            ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
             'pointerdown']
                .forEach(function(event) {
                  anchor.addEventListener(event, function(e) {
                    e.stopPropagation();
                  });
                });
          };
      
      }
      
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
                  
              };
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }

          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
      
              // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
              map = new window.google.maps.Map(this.refs.map, {
                  center: {lat: 32.07226, lng: 118.78173},
                  zoom: 10,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });

              // 创建两个自定义弹出窗口，传入坐标与展示文字
              new Popup(new window.google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map);
              new Popup(new window.google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map);
          }
      
          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
      // 普通页面中使用
      <style>
      .popup-tip-anchor {
        height: 0;
        position: absolute;
        /* The max width of the info window. */
        width: 200px;
      }
      
      .popup-bubble-anchor {
        position: absolute;
        width: 100%;
        bottom: /* TIP_HEIGHT= */ 8px;
        left: 0;
      }
      
      .popup-bubble-anchor::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        /* Center the tip horizontally. */
        transform: translate(-50%, 0);
        /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
        width: 0;
        height: 0;
        /* The tip is 8px high, and 12px wide. */
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: /* TIP_HEIGHT= */ 8px solid white;
      }
      
      .popup-bubble-content {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -100%);
        /* Style the info window. */
        background-color: white;
        padding: 5px;
        border-radius: 5px;
        font-family: sans-serif;
        overflow-y: auto;
        max-height: 60px;
        box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
      }
      </style>

      var map;
      // 初始化地图
      function initMap() {
        definePopupClass();
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.07226, lng: 118.78173},
          zoom: 10,
        });
      
        new Popup(new google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map);
        new Popup(new google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map);
        
      }
      
      // 定义窗口类
      function definePopupClass() {
        /**
         * @param {!google.maps.LatLng} position
         * @param {!Element} content1
         * @constructor
         * @extends {google.maps.OverlayView}
         */
        Popup = function(position, content1) {
          this.position = position;
          let content=document.createElement('div');
          content.innerHTML="<b>"+content1+"</b>";
      
          content.classList.add('popup-bubble-content');
      
          var pixelOffset = document.createElement('div');
          pixelOffset.classList.add('popup-bubble-anchor');
          pixelOffset.appendChild(content);
      
          this.anchor = document.createElement('div');
          this.anchor.classList.add('popup-tip-anchor');
          this.anchor.appendChild(pixelOffset);
      
          this.stopEventPropagation();
        };

        Popup.prototype = Object.create(google.maps.OverlayView.prototype);
      
        // 挂载时调用
        Popup.prototype.onAdd = function() {
          this.getPanes().floatPane.appendChild(this.anchor);
        };
      
        // 从地图移除时调用
        Popup.prototype.onRemove = function() {
          if (this.anchor.parentElement) {
            this.anchor.parentElement.removeChild(this.anchor);
          }
        };
      
        // 绘制方法
        Popup.prototype.draw = function() {
          var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
          // Hide the popup when it is far out of view.
          var display =
              Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
              'block' :
              'none';
      
          if (display === 'block') {
            this.anchor.style.left = divPosition.x + 'px';
            this.anchor.style.top = divPosition.y + 'px';
          }
          if (this.anchor.style.display !== display) {
            this.anchor.style.display = display;
          }
        };
        
        // 阻止事件传递
        Popup.prototype.stopEventPropagation = function() {
          var anchor = this.anchor;
          anchor.style.cursor = 'auto';
      
          ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
           'pointerdown']
              .forEach(function(event) {
                anchor.addEventListener(event, function(e) {
                  e.stopPropagation();
                });
              });
        };
      }
      
      initMap();
      `
    ]
  },
  GoogleMapDrawing:{
    Code:[
      `
      // react 中使用
      import React from "react";
      
      let map;
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
              };
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }
          
          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
              // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
              map = new window.google.maps.Map(this.refs.map, {
                  center: { lat: 32.07226, lng: 118.79357 },
                  zoom: 13,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });
              this.__renderMarker();
              this.__renderPolyline();
          }
          
          // 绘制标记点
          __renderMarker(){
              var marker= new window.google.maps.Marker({labelContent: "夫子庙出发", position:{lat:32.01923,lng: 118.78972},map:map});
              var marker2= new window.google.maps.Marker({labelContent: "老门东结束", position:{lat:32.07226,lng: 118.79357},map:map});
               
              var iw2 = new window.google.maps.InfoWindow({
                    content: "夫子庙出发"
                });
              var iw3 = new window.google.maps.InfoWindow({
                    content: "玄武湖喝茶"
                });
              iw2.open(map, marker);
              iw3.open(map, marker2);
              // 为标记点添加点击打开弹窗事件
              window.google.maps.event.addListener(marker, "click", (e)=> { iw2.open(map, marker); });
              window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
          }
          
          // 绘制折线
          __renderPolyline(){
              var locations = new Array(
              "32.01923,118.78972", "32.046154,118.84542",
              "32.0838,118.822","32.07226,118.79357",
              "32.044544,118.79761", "32.05911,118.78173",
              "32.012722,118.7876"
              );
      
              // 线条设置
              var polyOptions = {
                  strokeColor: '#ff9900',    // 颜色
                  strokeOpacity: 1.0,    // 透明度
                  strokeWeight: 8    // 宽度
              }
              var poly = new window.google.maps.Polyline(polyOptions);
      
              /* 循环标出所有坐标 */
              for (var i = 0; i < locations.length; i++) {
                  var loc = locations[i].split(',');
                  var path = poly.getPath();    //获取线条的坐标
                  path.push(new window.google.maps.LatLng(loc[0], loc[1]));    //为线条添加标记坐标                  
              }
              poly.setMap(map);    // 装载
          }
      
          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
      // 普通页面中使用
      var map;

      // 地图绘制
      function initialize(){
          changeSize();
          var mapProp = {
              center:new google.maps.LatLng(32.07226,118.79357),              
              zoom:13,
              mapTypeId:google.maps.MapTypeId.ROADMAP
          };
          map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

          var marker= new google.maps.Marker({labelContent: "夫子庙出发", position:{lat:32.01923,lng: 118.78972},map:map});
          var marker2= new google.maps.Marker({labelContent: "老门东结束", position:{lat:32.07226,lng: 118.79357},map:map});
         
          var iw2 = new google.maps.InfoWindow({
              content: "夫子庙出发"
          });
          var iw3 = new google.maps.InfoWindow({
              content: "玄武湖喝茶"
          });
          iw2.open(map, marker);
          iw3.open(map, marker2);
          google.maps.event.addListener(marker, "click", function (e) { iw2.open(map, this); });

          //http://maps.google.cn/maps/api/geocode/json?address=南京   得到坐标
          var locations = new Array(
            "32.01923,118.78972", "32.046154,118.84542",
              "32.0838,118.822","32.07226,118.79357",
            "32.044544,118.79761", "32.05911,118.78173",
            "32.012722,118.7876");
  
            // 线条设置
            var polyOptions = {
                strokeColor: '#ff9900',    // 颜色
                strokeOpacity: 1.0,    // 透明度
                strokeWeight: 8    // 宽度
            }
            poly = new google.maps.Polyline(polyOptions);

            /* 循环标出所有坐标 */
            for (var i = 0; i < locations.length; i++) {
                var loc = locations[i].split(',');
                var path = poly.getPath();    //获取线条的坐标
                path.push(new google.maps.LatLng(loc[0], loc[1]));    //为线条添加标记坐标                  
            }
            poly.setMap(map);    // 装载
            
      }
      //加载地图
      google.maps.event.addDomListener(window, 'load', initialize);
      function changeSize() { 
        var showMap = document.getElementById("googleMap"); 
        showMap.style.width = (document.documentElement.clientWidth-20) + "px"; 
        showMap.style.height = (document.documentElement.clientHeight-20) + "px"; 
      }
      window.onresize = changeSize;
      `,
      `
      /**
       * 使用谷歌地图前需要在引入地图的jssdk
       * <script type="text/javascript" src="http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=你的谷歌地图API_KEY&hl=zh-CN"></script>
      */
      // react 中使用
      import React from "react";
      import './App.css'
      
      let map ;
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
  
              };
          }

          componentDidMount(){
              if(!map) this.__initMap();
          }

          componentWillUnmount(){
            map = null;
          }

          __initMap(){
              // 初始化地图  地图中心点坐标与比例尺大小必填
              map = new window.google.maps.Map(this.refs.map, {
                center: { lat: 32.07226, lng: 118.79357 },    //以南京的坐标为演示
                zoom: 13,
                mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });
              this.__drawMarkerAndLine();
          }

          // 绘制坐标点并连线
          __drawMarkerAndLine(){
            var marker= new window.google.maps.Marker({labelContent: "夫子庙出发", position:{lat:32.01923,lng: 118.78972},map:map});
            var marker2= new window.google.maps.Marker({labelContent: "老门东结束", position:{lat:32.07226,lng: 118.79357},map:map});
             
            var iw2 = new window.google.maps.InfoWindow({
                  content: "夫子庙出发"
              });
            var iw3 = new window.google.maps.InfoWindow({
                  content: "玄武湖喝茶"
              });
            iw2.open(map, marker);
            iw3.open(map, marker2);
            // 为标记点添加点击打开弹窗事件
            window.google.maps.event.addListener(marker, "click", (e)=> { iw2.open(map, marker); });
            window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
    
            // 线条设置
            var patharr = [];
            patharr.push(marker.getPosition());
            patharr.push(marker2.getPosition());
            var polyOptions = {
            path:patharr,
            strokeColor: '#ff9900',    // 颜色
            strokeOpacity: 1.0,    // 透明度
            strokeWeight: 8    // 宽度
            }
            var poly = new window.google.maps.Polyline(polyOptions);
            poly.setMap(map);    // 装载
        }

          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }

      export default App;
      `,
      `
      // 普通页面中使用
      // 初始化地图  地图中心点坐标与比例尺大小必填
      var map;
      function initMap() {
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 32.07226, lng: 118.79357 },    //以南京的坐标为演示
          zoom: 13,
          mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        renderMarker();
      }

      // 绘制坐标点并连线
        function drawMarkerAndLine(){
            var marker= new window.google.maps.Marker({labelContent: "夫子庙出发", position:{lat:32.01923,lng: 118.78972},map:map});
            var marker2= new window.google.maps.Marker({labelContent: "老门东结束", position:{lat:32.07226,lng: 118.79357},map:map});
             
            var iw2 = new window.google.maps.InfoWindow({
                  content: "夫子庙出发"
              });
            var iw3 = new window.google.maps.InfoWindow({
                  content: "玄武湖喝茶"
              });
            iw2.open(map, marker);
            iw3.open(map, marker2);
            // 为标记点添加点击打开弹窗事件
            window.google.maps.event.addListener(marker, "click", (e)=> { iw2.open(map, marker); });
            window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
    
            // 线条设置
            var patharr = [];
            patharr.push(marker.getPosition());
            patharr.push(marker2.getPosition());
            var polyOptions = {
            path:patharr,
            strokeColor: '#ff9900',    // 颜色
            strokeOpacity: 1.0,    // 透明度
            strokeWeight: 8    // 宽度
            }
            var poly = new window.google.maps.Polyline(polyOptions);
            poly.setMap(map);    // 装载
        }
      initMap();
      
      `
    ]
  },
  GoogleMapRoute:{
    Code:[
      `
      // react 中使用 调用jssdk查询线路服务
      import React from "react";
      import './App.css'
      
      let map,directionsDisplay,directionsService ;
      
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {};
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }
          
          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
              // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
              map = new window.google.maps.Map(this.refs.map, {
                  center: {lat: 32.01923, lng: 118.78972}, //初始设置南京为地图中心
                  zoom: 14,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });
              
              // 初始化查询服务
              directionsDisplay = new window.google.maps.DirectionsRenderer;
              directionsService = new window.google.maps.DirectionsService;
              directionsDisplay.setMap(map);
              
              // 第一次进入查询路线
              this.__calculateAndDisplayRoute(directionsService, directionsDisplay);
          }
         
          // 计算路线并将结果绘制在地图上
          __calculateAndDisplayRoute(directionsService, directionsDisplay) {
              var selectedMode = this.refs.mode.value;
              // 此处 origin和destination为查询的起点与终点
              directionsService.route({
                origin: {lat: 32.01923, lng: 118.78972},  // 夫子庙.
                destination: {lat: 32.046154, lng: 118.84542},  // 美龄宫
                travelMode: window.google.maps.TravelMode[selectedMode]
              }, function(response, status) {
                //console.log(response,status)
                if (status == 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
            }
          
          // 切换交通方式
          onSelectChange(){
              this.__calculateAndDisplayRoute(directionsService, directionsDisplay);
          }
      
          render(){
              return (
              <div>
                <div id="floating-panel">
                    <b>夫子庙到美龄宫: </b>
                    <select id="mode" ref='mode' onChange={this.onSelectChange.bind(this)}>
                        <option value="DRIVING">开车</option>
                        <option value="WALKING">走路</option>
                        <option value="BICYCLING">骑车</option>
                        <option value="TRANSIT">地铁公交</option>
                    </select>
                </div>
                <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
      // 普通页面中使用

      // 初始化地图
      function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 32.01923, lng: 118.78972}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }y

      // 查询路线并将结果绘制到地图上
      function calculateAndDisplayRoute(directionsService, directionsDisplay,ajaxresponse) {
        var selectedMode = document.getElementById('mode').value;
        directionsService.route({
          origin: {lat: 32.01923, lng: 118.78972},  // 夫子庙.
          destination: {lat: 32.046154, lng: 118.84542},  // 美龄宫
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          console.log(response)
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

      initMap()
      `,
      `
      // react 中使用  后台调用谷歌接口查询路线，前端的到数据后完成渲染(谷歌查询到的路线结果有转码，所以需解码后使用)
      /*
      *解码路径 使用谷歌的转码模块在引入文件时需要在尾部加上&libraries=geometry
      *<script type="text/javascript" src="http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=你的谷歌地图API_KEY&hl=zh-CN&libraries=geometry"></script>
      */
      import React from "react";
      import './App.css'
      
      let map ;
      
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {};
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }
          
          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
              // 后台请求谷歌接口得到类似数据格式 其中points为我们绘制使用的主要数据
              let backendData = {
                "success": true,
                "msg": "string",
                "errorCode": 0,
                "count": 0,
                "rows": [
                  {
                    "distance": "8.0 公里",
                    "duration": "49分钟",
                    "modeName": "transit",
                    "summary": [
                      {
                        "type": "transit",
                        "name": "公交16路"
                      },
                      {
                        "type": "transit",
                        "name": "地铁一号线"
                      },
                      {
                        "type": "transit",
                        "name": "地铁四号线"
                      },
                      {
                        "type": "walking",
                        "name": "步行"
                      }
                    ],
                    "points": "avlbE{c\`tUgC_EyBgEqBgEa@TkBxAaBnA}AnAgEtACq@a@Bk@bA_B\\oCXkCHaECwHOYC}H}AkS{EcE{@aKaCeWaG{A]YEaDAlBCLwC?uH~Ccp@TyIdDwpAN_GkEgdAOeM?yDa@[jAEC_AUmBqBgBcDuCm@i@gTqRcDwCc@u@Sg@QaAC]Bw@\`@qCDeAIeBKa@Ui@eAaBrA}@\\\\B",
                    "walkLength": 0,
                    "selectFlag": true
                  }
                ]
              }
            map = new window.google.maps.Map(this.refs.map, {
                center: {lat: 32.01923, lng: 118.78972},
                zoom: 14,
                mapTypeId:window.google.maps.MapTypeId.ROADMAP
            });
    
            this.__renderBackendRoute(map,backendData.rows[0]);
          }
         
      
          /**
           * @name: 接收后端调用谷歌接口查询的路线数据在地图上渲染路线
           * @test: 
           * @msg: 
           * @param {type}  map ：地图对象，data :查询到的rows下面的路线对象
           * @return: 
           */
          __renderBackendRoute(map,data){
                  const decodeFn=window.google.maps.geometry.encoding.decodePath;
                  // 解码路径获得路线点位集合
                  let routeArr = decodeFn(data.points);
                  let arrLength = routeArr.length;
                  let startLatLng = routeArr[0];
                  let endLatLng = routeArr[arrLength-1];
                  // 绘制路径及起始点
                  let flightPath = new window.google.maps.Polyline({
                      path: routeArr,
                      geodesic: true,
                      strokeColor: '#00B3FD',
                      strokeOpacity: .8,
                      strokeWeight: 8
                  });
                  flightPath.setMap(map);
                  new window.google.maps.Marker({
                      position: startLatLng,
                      animation: window.google.maps.Animation.DROP,
                      map: map,
                      label:"起点"
                  });
                  new window.google.maps.Marker({
                      position: endLatLng,
                      animation: window.google.maps.Animation.DROP,
                      map: map,
                      label:"终点"
                  })
                  // 调整视图获得最佳视野
                  let bounds = new window.google.maps.LatLngBounds();
                  for(let i=0,len=routeArr.length;i<len;i++){
                      bounds.extend(routeArr[i]);
                  }
                  map.fitBounds(bounds);
          }
      
          render(){
              return (
              <div>
                <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
        // 普通页面中使用
       var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.01923, lng: 118.78972},  //初始中心点和比例尺按实际情况而定
          zoom: 14,
          mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        // 后台请求谷歌接口得到类似数据格式
              let backendData = {
                "success": true,
                "msg": "string",
                "errorCode": 0,
                "count": 0,
                "rows": [
                  {
                    "distance": "8.0 公里",
                    "duration": "49分钟",
                    "modeName": "transit",
                    "summary": [
                      {
                        "type": "transit",
                        "name": "公交16路"
                      },
                      {
                        "type": "transit",
                        "name": "地铁一号线"
                      },
                      {
                        "type": "transit",
                        "name": "地铁四号线"
                      },
                      {
                        "type": "walking",
                        "name": "步行"
                      }
                    ],
                    "points": "avlbE{c\`tUgC_EyBgEqBgEa@TkBxAaBnA}AnAgEtACq@a@Bk@bA_B\\oCXkCHaECwHOYC}H}AkS{EcE{@aKaCeWaG{A]YEaDAlBCLwC?uH~Ccp@TyIdDwpAN_GkEgdAOeM?yDa@[jAEC_AUmBqBgBcDuCm@i@gTqRcDwCc@u@Sg@QaAC]Bw@\`@qCDeAIeBKa@Ui@eAaBrA}@\\\\B",
                    "walkLength": 0,
                    "selectFlag": true
                  }
                ]
              }

          renderMapRoute(map,backendData.rows[0]);
          /**
           * @name: 接收后端调用谷歌接口查询的路线数据在地图上渲染路线
           * @test: 
           * @msg: 
           * @param {type}  map ：地图对象，data :查询到的rows下面的路线对象
           * @return: 
           */
        function renderMapRoute(map,data){
          /*
          *解码路径 使用谷歌的转码模块在引入文件时需要在尾部加上&libraries=geometry
          *<script type="text/javascript" src="http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=你的谷歌地图API_KEY&hl=zh-CN&libraries=geometry"></script>
          */
          const decodeFn=google.maps.geometry.encoding.decodePath;  // google map解码工具
          let routeArr = decodeFn(data.points);
          let arrLength = routeArr.length;
          let startLatLng = routeArr[0];   // 起点
          let endLatLng = routeArr[arrLength-1];  // 终点
          // 设置最佳视角
          var bounds = new google.maps.LatLngBounds();
          for(let i=0,len=routeArr.length;i<len;i++){
            bounds.extend(routeArr[i]);
          }
          map.fitBounds(bounds);
          // 绘制路线
          var flightPath = new google.maps.Polyline({
            path: routeArr,
            geodesic: true,
            strokeColor: '#00B3FD',
            strokeOpacity: .8,
            strokeWeight: 8
          });
          flightPath.setMap(map);
          // 绘制起始点
          var startMarker = new google.maps.Marker({
            position: startLatLng,
            animation: google.maps.Animation.DROP,
            map: map,
            label:"起点",
          });
          var endMarker = new google.maps.Marker({
            position: endLatLng,
            animation: google.maps.Animation.DROP,
            map: map,
            label:"终点"
          })
        }
      `
    ]
  },
  GoogleMapPopup:{
    Code:[
      `
      // react中使用
      import React from "react";
      import './App.css'
      
      let map ;
      
      // 自定义窗口类
      class Popup extends window.google.maps.OverlayView{
          constructor(position,content1){
            super();
            this.position = position;
            let content=document.createElement('div');
            content.innerHTML="<b>"+content1+"</b>";
        
            content.classList.add('popup-bubble-content');
        
            var pixelOffset = document.createElement('div');
            pixelOffset.classList.add('popup-bubble-anchor');
            pixelOffset.appendChild(content);
        
            this.anchor = document.createElement('div');
            this.anchor.classList.add('popup-tip-anchor');
            this.anchor.appendChild(pixelOffset);
            this.stopEventPropagation();
          }
      
          // 挂在到地图时调用
          onAdd(){
            this.getPanes().floatPane.appendChild(this.anchor);
          };
        
          // 从地图移除时调用
          onRemove(){
            if (this.anchor.parentElement) {
              this.anchor.parentElement.removeChild(this.anchor);
            }
          };
        
          // 绘制方法
          draw(){
            var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            // 视图外时自动隐藏
            var display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';
        
            if (display === 'block') {
              this.anchor.style.left = divPosition.x + 'px';
              this.anchor.style.top = divPosition.y + 'px';
            }
            if (this.anchor.style.display !== display) {
              this.anchor.style.display = display;
            }
          };
          
          // 阻止事件传递
          stopEventPropagation(){
            var anchor = this.anchor;
            anchor.style.cursor = 'auto';
        
            ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
             'pointerdown']
                .forEach(function(event) {
                  anchor.addEventListener(event, function(e) {
                    e.stopPropagation();
                  });
                });
          };
      
      }
      
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
                  
              };
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }

          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
      
              // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
              map = new window.google.maps.Map(this.refs.map, {
                  center: {lat: 32.07226, lng: 118.78173},
                  zoom: 10,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });

              // 创建两个自定义弹出窗口，传入坐标与展示文字
              new Popup(new window.google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map);
              new Popup(new window.google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map);
          }
      
          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
      // 普通页面中使用
      <style>
      .popup-tip-anchor {
        height: 0;
        position: absolute;
        /* The max width of the info window. */
        width: 200px;
      }
      
      .popup-bubble-anchor {
        position: absolute;
        width: 100%;
        bottom: /* TIP_HEIGHT= */ 8px;
        left: 0;
      }
      
      .popup-bubble-anchor::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        /* Center the tip horizontally. */
        transform: translate(-50%, 0);
        /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
        width: 0;
        height: 0;
        /* The tip is 8px high, and 12px wide. */
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: /* TIP_HEIGHT= */ 8px solid white;
      }
      
      .popup-bubble-content {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -100%);
        /* Style the info window. */
        background-color: white;
        padding: 5px;
        border-radius: 5px;
        font-family: sans-serif;
        overflow-y: auto;
        max-height: 60px;
        box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
      }
      </style>

      // 初始化地图
      var map;
      function initMap() {
        definePopupClass();
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.07226, lng: 118.78173},
          zoom: 10,
        });
      
        // popup = new Popup(new google.maps.LatLng(32.01923,118.78972),"我要显示的");
        // popup.setMap(map);
      
      
        new Popup(new google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map);
        new Popup(new google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map);
        
      }
      
      // 定义窗口类
      function definePopupClass() {
        /**
         * @param {!google.maps.LatLng} position
         * @param {!Element} content1
         * @constructor
         * @extends {google.maps.OverlayView}
         */
        Popup = function(position, content1) {
          this.position = position;
          let content=document.createElement('div');
          content.innerHTML="<b>"+content1+"</b>";
      
          content.classList.add('popup-bubble-content');
      
          var pixelOffset = document.createElement('div');
          pixelOffset.classList.add('popup-bubble-anchor');
          pixelOffset.appendChild(content);
      
          this.anchor = document.createElement('div');
          this.anchor.classList.add('popup-tip-anchor');
          this.anchor.appendChild(pixelOffset);
      
          this.stopEventPropagation();
        };

        Popup.prototype = Object.create(google.maps.OverlayView.prototype);
      
        // 挂载时调用
        Popup.prototype.onAdd = function() {
          this.getPanes().floatPane.appendChild(this.anchor);
        };
      
        // 从地图移除时调用
        Popup.prototype.onRemove = function() {
          if (this.anchor.parentElement) {
            this.anchor.parentElement.removeChild(this.anchor);
          }
        };
      
        // 绘制方法
        Popup.prototype.draw = function() {
          var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
          // Hide the popup when it is far out of view.
          var display =
              Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
              'block' :
              'none';
      
          if (display === 'block') {
            this.anchor.style.left = divPosition.x + 'px';
            this.anchor.style.top = divPosition.y + 'px';
          }
          if (this.anchor.style.display !== display) {
            this.anchor.style.display = display;
          }
        };
      
        Popup.prototype.stopEventPropagation = function() {
          var anchor = this.anchor;
          anchor.style.cursor = 'auto';
      
          ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
           'pointerdown']
              .forEach(function(event) {
                anchor.addEventListener(event, function(e) {
                  e.stopPropagation();
                });
              });
        };
      }
      
      initMap();
      `,
      `
      // react中使用
      import React from "react";
      import './App.css'
      
      let map ;
      
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {
                  
              };
          }
      
          componentDidMount(){
              if(!map) this.__initMap();
          }

          componentWillUnmount(){
            map = null;
          }
          
          // 初始化地图
          __initMap(){
              var destination = {lat: 32.061051, lng: 118.852237}; //设置的是中山陵坐标
              map = new window.google.maps.Map(this.refs.map, {
                  center: destination,
                  zoom: 12,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP
              });
              this.__renderMarkerAndInfoWindow(map,destination);
          }
          // 绘制标记点和自定义窗口
          __renderMarkerAndInfoWindow(map,position){
            var contentString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">中山陵园风景区</h1>'+
                  '<div id="bodyContent">'+
                  '<p><b>中山陵园风景区</b>, 中山陵位于南京市玄武区紫金山南麓钟山风景区内，' +
                  '是中国近代伟大的民主革命先行者孙中山先生的陵寝，及其附属纪念建筑群， '+
                  '面积8万余平方米。中山陵自1926年春动工，至1929年夏建成，1961年成为首批全国重点文物保护单位， '+
                  '2006年列为首批国家重点风景名胜区和国家5A级旅游景区，2016年入选“首批中国20世纪建筑遗产”名录'+
                  '中山陵前临平川，背拥青嶂，东毗灵谷寺，西邻明孝陵，整个建筑群依山势而建，由南往北沿中轴线逐渐升高，'+
                  '主要建筑有博爱坊、墓道、陵门、石阶、碑亭、祭堂和墓室等，排列在一条中轴线上，体现了中国传统建筑的风格，'+
                  '从空中往下看，像一座平卧在绿绒毯上的“自由钟”。融汇中国古代与西方建筑之精华，庄严简朴，别创新格。</p>'+
                  '<p>景区详情: 中山陵, <a href="http://www.tuniu.com/g8996/guide-0-0/">'+
                  'http://www.tuniu.com/g8996/guide-0-0/</a> '+
                  '</p>'+
                  '</div>'+
                  '</div>';
      
            var marker = new window.google.maps.Marker({
              position: position,
              map: map,
              title: '中山陵'
            });
            var infowindow = new window.google.maps.InfoWindow({
              content: contentString
            });
          
            infowindow.open(map, marker);
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
          }
      
          render(){
              return (
              <div>
                  <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }
      
      export default App;
      `,
      `
      // 普通页面中使用
      var map;
      function initMap() {
        var destination = {lat: 32.061051, lng: 118.852237}; //设置的是中山陵坐标
        map = new window.google.maps.Map(document.getElementById('map'), {
            center: destination,
            zoom: 12,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });

        var contentString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">中山陵园风景区</h1>'+
                  '<div id="bodyContent">'+
                  '<p><b>中山陵园风景区</b>, 中山陵位于南京市玄武区紫金山南麓钟山风景区内，' +
                  '是中国近代伟大的民主革命先行者孙中山先生的陵寝，及其附属纪念建筑群， '+
                  '面积8万余平方米。中山陵自1926年春动工，至1929年夏建成，1961年成为首批全国重点文物保护单位， '+
                  '2006年列为首批国家重点风景名胜区和国家5A级旅游景区，2016年入选“首批中国20世纪建筑遗产”名录'+
                  '中山陵前临平川，背拥青嶂，东毗灵谷寺，西邻明孝陵，整个建筑群依山势而建，由南往北沿中轴线逐渐升高，'+
                  '主要建筑有博爱坊、墓道、陵门、石阶、碑亭、祭堂和墓室等，排列在一条中轴线上，体现了中国传统建筑的风格，'+
                  '从空中往下看，像一座平卧在绿绒毯上的“自由钟”。融汇中国古代与西方建筑之精华，庄严简朴，别创新格。</p>'+
                  '<p>景区详情: 中山陵, <a href="http://www.tuniu.com/g8996/guide-0-0/">'+
                  'http://www.tuniu.com/g8996/guide-0-0/</a> '+
                  '</p>'+
                  '</div>'+
                  '</div>';

        var marker = new google.maps.Marker({
          position: destination,
          map: map,
          title: '中山陵'
        });
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        infowindow.open(map, marker);
        // 添加点击弹窗事件
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
      initMap();
      `
    ]
  },
  GoogleMapH5:{
    Code:[
      `
      /*
      * @Description: Google  map 在移动端H5页面中的简单使用
      *  真实示例可参考 http://static.tuniu-sit.org/FED/ELF/travel/h5/static/mapview.html?publishCipher=awVhFdTFbtCV7738n-DgsQ&x=118.86975&y=31.733822&day=1
      * @version:   
      * @Company: tuniu
      * @Author: tuzhipeng
      * @Date: 2018-11-13 16:36:16
      * @LastEditors: tuzhipeng
      * @LastEditTime: 2018-11-21 17:37:06
      */

      import React from "react";
      import { Tabs } from "../../ishow";
      import './App.css'
      import ViewCode from './viewCode';

      let map;

      /**
       * @name: 自定义标签的构造类  使用自定义标签代替infowindow的作用
       * @test: test for font
       * @msg: 
       * @param {type} 
       * @return: 
       */
      class Popup extends window.google.maps.OverlayView{
          constructor(position,content1){  // 如参坐标和数据对象
            super();
            this.position = position;
            // 使用自定义模板
            let contentStr =\`
              <div class="context-contain" ref="popup" style="display:block">
                  <img id="popupImg" src="http://m.tuniucdn.com/fb2/t1/G1/M00/1F/D6/Cii9EVdol6SIMxT8AAh0VDJGjFEAAGpWwLtklYACHRs714_w80_h80_c0_t0.jpg" class="context-img" alt=""></img>
                  <div class="context-text">
                      <span id="popupName">\$\{content1\}</span>
                      <span class="subtext" id="popupSubtext">the subtext title for the english name of a poi</span>
                  </div>
                  <a id="navigation" href="https://maps.google.cn/maps?saddr=&amp;daddr=40.07985, 116.60311&amp;dirflg=D" class="context-link">导航</a>
              </div>
            \`
            // 将模板字符串转换为dom
            let objE = document.createElement("div");
      　　   objE.innerHTML = contentStr;
            let popdom =objE.childNodes[1];
            this.anchor = popdom;
        
            this.stopEventPropagation();
          }

          // 挂载时执行
          onAdd(){
            this.getPanes().floatPane.appendChild(this.anchor);
          };
        
          // 移除时执行
          onRemove(){
            if (this.anchor.parentElement) {
              this.anchor.parentElement.removeChild(this.anchor);
            }
          };
        
          // 自定义标签绘制
          draw(){
            let divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            // Hide the popup when it is far out of view.
            let display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';
        
                if (display === 'block') {
                  
                    this.anchor.style.left = Number(divPosition.x -140) + 'px';  //140和100是自定义标签的偏移量  显示所有是偏移量为20
                    this.anchor.style.top = Number(divPosition.y-100) + 'px';          
                }
                if (this.anchor.style.display !== display) {
                  this.anchor.style.display = display;
                }
          };
        
          // 阻止事件冒泡
          stopEventPropagation(){
            let anchor = this.anchor;
            anchor.style.cursor = 'auto';
        
            ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
            'pointerdown']
                .forEach(function(event) {
                  anchor.addEventListener(event, function(e) {
                    e.stopPropagation();
                  });
                });
          };

      }
      class App extends React.Component{
          constructor(props){
              super(props);
              this.state = {

              };
          }

          componentDidMount(){
              if(!map) this.__initMap();
              this.__renderMarker();
          }

          componentWillUnmount(){
              map = null;
          }

          // 初始化地图
          __initMap(){
              // 初始化世界地图
              map = new window.google.maps.Map(this.refs.map, {
                  center: { lat: 32.07226, lng: 118.79357 },
                  zoom: 13,
                  mapTypeId:window.google.maps.MapTypeId.ROADMAP,
                  mapTypeControl: false,
                  gestureHandling:'greedy',  //H5中地图开启greedy模式 启动单指拖动，双指缩放功能
              });
              
          }
          // 地图渲染
          __renderMarker(){
              let popupList=[];
              let markerList=[];
              // 使用自定义标记点样式图片  并通过scaledSize调整图片大小
              let icon = {
                  url:'./image/markericon.png',
                  scaledSize:{
                    width:32,
                    height:52
                  }
                };
              let marker= new window.google.maps.Marker({
                  title: '中山陵风景区',
                  label: {text: '1', color:"#2360E0"},
                  position: {lat: 32.061051, lng: 118.852237},
                  map: map,
                  icon:icon
                });
              markerList.push(marker);
              let marker2= new window.google.maps.Marker({
                  title: '玄武湖公园',
                  label: {text: '2', color:"#2360E0"},
                  position: {lat:32.07226,lng: 118.79357},
                  map: map,
                  icon:icon
                });
              markerList.push(marker2);
              // 为标记点添加点击事件
              markerList.forEach(function(marker,index){   
                  let markerpopup;
                  if(index === 0){
                    markerpopup =new Popup(marker.getPosition(),marker.title);
                    markerpopup.setMap(map);
                    popupList.push(markerpopup);
                  }
                  marker.addListener('click', function() {
                        if(popupList.length>0){
                          popupList.forEach(function(popup){
                              popup.setMap(null);
                          })
                        }
                      if(!markerpopup){
                          markerpopup =new Popup(marker.getPosition(),marker.title);
                          markerpopup.setMap(map);
                          popupList.push(markerpopup);
                      }else{
                          markerpopup.setMap(map);
                      }
                      // 点击时自动居中
                      map.setCenter(marker.getPosition());
                  });                             
              });          
              // 线条设置
              var patharr = [];
              patharr.push(marker.getPosition());
              patharr.push(marker2.getPosition());
              var polyOptions = {
              path:patharr,
              geodesic: true,
              strokeColor:"#0080FF", // 颜色
              strokeOpacity: 0.8, // 透明度               
              strokeWeight: 6 // 宽度
              }
              var poly = new window.google.maps.Polyline(polyOptions);
              poly.setMap(map);    // 装载

          }


          render(){
              return (
              <div>
                  <div ref='map' style={{width: '100%',height:'540px'}}></div>
              </div>
              )
          }
      }

      export default App;
      `
    ]
  }
}