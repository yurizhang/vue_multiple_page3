/*
 * @Description: Google  map 在移动端H5页面中的简单使用
 *  真实示例可参考 http://static.tuniu-sit.org/FED/ELF/travel/h5/static/mapview.html?publishCipher=awVhFdTFbtCV7738n-DgsQ&x=118.86975&y=31.733822&day=1
 * @version:   
 * @Company: tuniu
 * @Author: tuzhipeng
 * @Date: 2018-11-13 16:36:16
 * @LastEditors: tuzhipeng
 * @LastEditTime: 2018-11-21 18:41:07
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
      let contentStr =`
        <div class="context-contain" ref="popup" style="display:block">
            <img id="popupImg" src="http://m.tuniucdn.com/fb2/t1/G1/M00/1F/D6/Cii9EVdol6SIMxT8AAh0VDJGjFEAAGpWwLtklYACHRs714_w80_h80_c0_t0.jpg" class="context-img" alt=""></img>
            <div class="context-text">
                <span id="popupName">${content1}</span>
                <span class="subtext" id="popupSubtext">the subtext title for the english name of a poi</span>
            </div>
            <a id="navigation" href="https://maps.google.cn/maps?saddr=&amp;daddr=40.07985, 116.60311&amp;dirflg=D" class="context-link">导航</a>
        </div>
      `
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
            <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
                <Tabs.Pane label="H5中地图样例" name="1">
                    <div ref='map' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapH5" code='0' />
                </Tabs.Pane>
            </Tabs>
        </div>
        )
    }
}

export default App;