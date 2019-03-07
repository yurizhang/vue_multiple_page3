/*
 * @Description: Google  map 自定义城市名称标签示例
 * @version: 
 * @Company: tuniu
 * @Author: tuzhipeng
 * @Date: 2018-11-13 16:36:16
 * @LastEditors: tuzhipeng
 * @LastEditTime: 2018-11-21 14:11:30
 */

import React from "react";
import { Tabs } from "../../ishow";
import './App.css'
import ViewCode from './viewCode';

let map , map2 ;

// 创建自定义标签类
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

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        if(!map) this.__initMap2();
    }
    componentWillUnmount(){
        map = null;
        map2 = null;
    }

    // __initMap(){

    //     // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
    //     map = new window.google.maps.Map(this.refs.map, {
    //         center: {lat: 32.07226, lng: 118.78173},
    //         zoom: 10,
    //         mapTypeId:window.google.maps.MapTypeId.ROADMAP
    //     });
    //     //this.definePopupClass();
    //     // 创建两个自定义弹出窗口
    //     new Popup(new window.google.maps.LatLng(32.01923,118.78972),"城市1").setMap(map);
    //     new Popup(new window.google.maps.LatLng(32.05911,118.78173),"城市2").setMap(map);
    // }

    // onTabChanage(tab){
    //     if(tab.props.name =='2'){
    //         this.__initMap2();
    //     }
    // }

    // 初始化地图
    __initMap2(){
        var destination = {lat: 32.061051, lng: 118.852237};
        map2 = new window.google.maps.Map(this.refs.map2, {
            center: destination,
            zoom: 12,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        this.__renderMarkerAndInfoWindow(map2,destination);
    }
    
    // 绘制标记点及弹窗
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

        var infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });

        var marker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: '中山陵'
        });
        infowindow.open(map, marker);
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }

    render(){
        return (
        <div>
            <Tabs type="card" value="1" style={{ marginBottom: 40 }}>
                {/* <Tabs.Pane label="自定义城市文字标签" name="1">
                    <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapPopup" code='0' />
                    <ViewCode name="GoogleMapPopup" code='1' />
                </Tabs.Pane> */}
                <Tabs.Pane label="自定义窗口" name="1">
                    <div ref='map2' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapPopup" code='2' />
                    <ViewCode name="GoogleMapPopup" code='3' />
                </Tabs.Pane>
            </Tabs>
        </div>
        )
    }
}

export default App;