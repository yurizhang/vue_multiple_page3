import React, { Component } from 'react';
import E from 'wangeditor';
import './App.css';
import ViewCode from './viewCode';
import Card from "../../ishow/Card/index";
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';
import Breadcrumb from '../../ishow/Breadcrumb/index';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editorContent: '',
            editorContentJson: ''
        }
    }

    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        const text1 = document.getElementById('text1')
        const text2 = document.getElementById('text2')
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
            const test = onUploadFile(uploadImgServer, 'image.jpg', 'local', 0, 1);
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
        editor.customConfig.onchange = (html, getJSON) => {
            var json = editor.txt.getJSON()
            this.setState({
                editorContent: html,
                editorContentJson: json
            })
            document.getElementById('text1').value = html
            document.getElementById('text2').value = JSON.stringify(json)//转换为JSON字符串
            console.log(JSON.stringify(json))
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
                            <textarea id="text1" style={{ width: '100%', height: '100px', borderStyle: 'none' }}></textarea>
                        </Card>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <Card style={{ borderStyle: 'none', boxShadow: '0px 0px 0px #888888' }}
                            header={
                                <div>
                                    <span style={{ lineHeight: '20px', fontSize: '16px', fontWeight: '600' }}>同步转换JSON</span>
                                </div>
                            }>
                            <textarea id="text2" style={{ width: '100%', height: '100px', borderStyle: 'none' }}></textarea>
                        </Card>
                    </Col>
                </Row>
                <ViewCode name="RichTextEditor" code="0" />
            </div>
        );
    }
}

export default App;
