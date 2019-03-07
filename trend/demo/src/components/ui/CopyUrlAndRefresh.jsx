import React from 'react';
import './App.css';
import MessageBox from '../../ishow/MessageBox/index';
import IconPlus from '../../ishow/LayoutComponent/icon/index';
import ViewCode from './viewCode';

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

            <ViewCode name="CopyUrlAndRefresh"  code="0"/>
          </div>
        )
    }
}