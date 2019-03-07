/*
 * @Description: Google  map 开发基础示例
 * @version: 
 * @Company: tuniu
 * @Author: tuzhipeng
 * @Date: 2018-11-13 16:36:16
 * @LastEditors: tuzhipeng
 * @LastEditTime: 2018-11-20 14:58:50
 */

import React from "react";
import { Tabs } from "../../ishow";
import './App.css'
import ViewCode from './viewCode';

let map,map2;
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

    __initMap(){
        // 初始化世界地图
        map = new window.google.maps.Map(this.refs.map, {
            center: { lat: 32.07226, lng: 118.79357 },
            zoom: 13,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
    }

    __renderMarker(){
        var marker2= new window.google.maps.Marker({labelContent: "这是玄武湖", position:{lat:32.07226,lng: 118.79357},map:map});
        var iw3 = new window.google.maps.InfoWindow({
              content: "这是玄武湖"
          });
        iw3.open(map, marker2);
        // 为标记点添加点击打开弹窗事件
        window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map, marker2); });
    }

    onTabChanage(tab){
        if(tab.props.name =='2'){
            this.__initMap2();
        }
    }

    __initMap2(){
        // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
        map2 = new window.google.maps.Map(this.refs.map2, {
            center: {lat: 32.07226, lng: 118.78173},
            zoom: 10,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        //this.definePopupClass();
        // 创建两个自定义弹出窗口
        new Popup(new window.google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map2);
        new Popup(new window.google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map2);
    }

    render(){
        return (
        <div>
            <Tabs type="card" value="1" style={{ marginBottom: 40 }} onTabClick={ this.onTabChanage.bind(this)} >
                <Tabs.Pane label="打点标记" name="1">
                    <div ref='map' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMap" code='0' />
                    <ViewCode name="GoogleMap" code='1' />
                </Tabs.Pane>
                <Tabs.Pane label="自定义标签" name="2">
                    <div ref='map2' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMap" code='2' />
                    <ViewCode name="GoogleMap" code='3' />
                </Tabs.Pane>
            </Tabs>
        </div>
        )
    }
}


/**
 * @name: 自定义标签的构造类
 * @test: test for font
 * @msg: 
 * @param {type} 
 * @return: 
 */
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
  
      // Optionally stop clicks, etc., from bubbling up to the map.
      this.stopEventPropagation();
    }

    /** Called when the popup is added to the map. */
    onAdd(){
      this.getPanes().floatPane.appendChild(this.anchor);
    };
  
    /** Called when the popup is removed from the map. */
    onRemove(){
      if (this.anchor.parentElement) {
        this.anchor.parentElement.removeChild(this.anchor);
      }
    };
  
    /** Called when the popup needs to draw itself. */
    draw(){
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
  
    /** Stops clicks/drags from bubbling up to the map. */
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

export default App;