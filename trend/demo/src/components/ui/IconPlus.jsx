import React, { Component } from 'react';
import './App.css';
//按需加载
import Icon from '../../ishow/LayoutComponent/icon/index';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false //控制dialog，true显示，false关闭
    };
  }
  // componentDidMount(){
  //   //console.log(this.props);
  //   this.props.changeBread(['首页','UI','图标']);
  // }
  render() {
    let IconList = {direction:[
        "step-backward",
        "step-forward",
        "fast-backward",
        "fast-forward",
        "shrink",
        "arrows-alt",
        "down",
        "up",
        "left",
        "right",
        "caret-up",
        'caret-down',
        "caret-right",
        "caret-left",
        "up-circle",
        "down-circle",
        "left-circle",
        "right-circle",
        "up-circle-o",
        "down-circle-o",
        "left-circle-o",
        "right-circle-o",
        "double-left",
        "double-right",
        "verticle-left",
        "verticle-right",
        "forward",
        "backward",
        "rollback",
        "enter",
        "retweet",
        "swap",
        "swap-left",
        "swap-right",
        "arrow-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "play-circle",
        "play-circle-o",
        "up-square",
        "down-square",
        "left-square",
        "right-square",
        "up-square-o",
        "down-square-o",
        "left-square-o",
        "right-square-o",
        "login",
        "logout",
        "menu-fold",
        "menu-unfold"
      ],suggestion:[
          "question",
          "question-circle-o",
          "question-circle",
          "plus",
          "plus-circle-o",
          "plus-circle",
          "pause",
          "pause-circle-o",
          "pause-circle",
          "minus",
          "minus-circle-o",
          "minus-circle",
          "plus-square",
          "plus-square-o",
          "minus-square",
          "minus-square-o",
          "info",
          "info-circle-o",
          "exclamation",
          "exclamation-circle-o",
          "exclamation-circle",
          "close",
          "close-circle",
          "close-square",
          "close-square-o",
          "check",
          "check-circle",
          "check-circle-o",
          "check-square-o",
          "clock-circle-o",
          "clock-circle"
      ],common:[
          "lock",
          "unlock",
          "area-chart",
          "pie-chart",
          "bar-chart",
          "dot-chart",
          "bars",
          "book",
          "calendar",
          "cloud",
          "cloud-download",
          "code",
          "code-o",
          "copy",
          "credit-card",
          "delete",
          "desktop",
          "download",
          "edit",
          "ellipsis",
          "file",
          "file-text",
          "file-unknown",
          "file-pdf",
          "file-excel",
          "file-jpg",
          "file-ppt",
          "file-add",
          "folder",
          "folder-open",
          "folder-add",
          "hdd",
          "frown",
          "frown-o",
          "meh",
          "meh-o",
          "smile",
          "smile-o",
          "inbox",
          "laptop",
          "appstore-o",
          "appstore",
          "line-chart",
          "link",
          "mail",
          "mobile",
          "notification",
          "paper-clip",
          "picture",
          "poweroff",
          "reload",
          "search",
          "setting",
          "share-alt",
          "shopping-cart",
          "tablet",
          "tag",
          "tag-o",
          "tags",
          "tags-o",
          "to-top",
          "upload",
          "user",
          "vedio-camera",
          "home",
          "loading",
          "loading-3-quarters",
          "cloud-upload-o",
          "cloud-download-o",
          "cloud-upload",
          "cloud-o",
          "star-o",
          "star",
          "heart-o",
          "heart",
          "environment",
          "environment-o",
          "eye",
          "eye-o",
          "camera",
          "camera-o",
          "save",
          "team",
          "solution",
          "phone",
          "filter",
          "exception",
          "export",
          "customer-service",
          "qrcode",
          "scan",
          "like",
          "like-o",
          "dislike",
          "dislike-o",
          "message",
          "pay-circle",
          "pay-circle-o",
          "calculator",
          "pushpin",
          "pushpin-o",
          "bulb",
          "select",
          "switcher",
          "rocket",
          "bell",
          "disconnect",
          "database",
          "compass",
          "barcode",
          "hourglass",
          "key",
          "flag",
          "layout",
          "printer",
          "sound",
          "usb",
          "skin",
          "tool",
          "sync",
          "wifi",
          "car",
          "schedule",
          "user-add",
          "user-delete",
          "usergroup-add",
          "usergroup-delete",
          "man",
          "woman",
          "shop",
          "gift",
          "idcard",
          "medicine-box",
          "red-envelop",
          "coffee",
          "copyright",
          "trademark",
          "safety",
          "wallet",
          "bank",
          "trophy",
          "contacts",
          "global",
          "shake",
          "api",
          "fork"
      ],brand:[
        "android",
        "android-o",
        "apple",
        "apple-o",
        "windows",
        "windows-o",
        "ie",
        "chrome",
        "github",
        "aliwangwang",
        "aliwangwang-o",
        "dingding",
        "dingding-o",
      ]};
    return (
      <div className="App">
        <h1>Icon plus 图标扩展</h1>
        <h2>使用方法</h2>
        <p>直接通过设置属性type为 iconName（down，up，left，right 等） 来使用即可。例如：</p>
        {/* 图标区 */}
        <h2>图标集合</h2>
        <ul className="icon-list">
        <h3>方向性图标</h3>
          {IconList.direction.map((v, i) =>
            <li key={i}><span><Icon type={v} />{v}</span></li>
          )}
        </ul>
        <ul className="icon-list">
        <h3>提示建议性图标</h3>
          {IconList.suggestion.map((v, i) =>
            <li key={i}><span><Icon type={v} />{v}</span></li>
          )}
        </ul>
        <ul className="icon-list">
        <h3>网站建议性图标</h3>
          {IconList.common.map((v, i) =>
            <li key={i}><span><Icon type={v} />{v}</span></li>
          )}
        </ul>
        <ul className="icon-list">
        <h3>品牌和标示</h3>
          {IconList.brand.map((v, i) =>
            <li key={i}><span><Icon type={v} />{v}</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
