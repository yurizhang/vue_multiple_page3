/*
 * @Description: Google  map 覆盖物绘制示例
 * @version: 
 * @Company: tuniu
 * @Author: tuzhipeng
 * @Date: 2018-11-13 16:36:16
 * @LastEditors: tuzhipeng
 * @LastEditTime: 2018-11-21 11:35:26
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
        this.__renderPolyline();
    }

    componentWillUnmount(){
        map = null;
        map2 = null;
    }

    __initMap(){
        // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
        map = new window.google.maps.Map(this.refs.map, {
            center: { lat: 32.07226, lng: 118.79357 },
            zoom: 13,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        this.__drawMarkerAndLine();
    }
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
    
    __initMap2(){
        // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
        map2 = new window.google.maps.Map(this.refs.map2, {
            center: { lat: 32.07226, lng: 118.79357 },
            zoom: 13,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });
        this.__renderMarker();
        this.__renderPolyline();
    }

    __renderMarker(){
        var marker= new window.google.maps.Marker({labelContent: "夫子庙出发", position:{lat:32.01923,lng: 118.78972},map:map2});
        var marker2= new window.google.maps.Marker({labelContent: "老门东结束", position:{lat:32.07226,lng: 118.79357},map:map2});
         
        var iw2 = new window.google.maps.InfoWindow({
              content: "夫子庙出发"
          });
        var iw3 = new window.google.maps.InfoWindow({
              content: "玄武湖喝茶"
          });
        iw2.open(map2, marker);
        iw3.open(map2, marker2);
        // 为标记点添加点击打开弹窗事件
        window.google.maps.event.addListener(marker, "click", (e)=> { iw2.open(map2, marker); });
        window.google.maps.event.addListener(marker2, "click", (e)=> { iw3.open(map2, marker2); });
    }

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
        poly.setMap(map2);    // 装载
    }

    onTabChanage(tab){
        if(tab.props.name =='2'){
            this.__initMap2();
        }
    }

    render(){
        return (
        <div>
            <Tabs type="card" value="1" style={{ marginBottom: 40 }} onTabClick={ this.onTabChanage.bind(this)} >
                <Tabs.Pane label="直线绘制" name="1">
                    <div id='map' ref='map' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapDrawing" code='2' />
                    <ViewCode name="GoogleMapDrawing" code='3' />
                </Tabs.Pane>
                <Tabs.Pane label="折线绘制" name="2">
                    <div id='map2' ref='map2' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapDrawing" code='0' />
                    <ViewCode name="GoogleMapDrawing" code='1' />
                </Tabs.Pane>
            </Tabs>
        </div>
        )
    }
}

export default App;