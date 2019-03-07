/*
 * @Description: Google  map 导航示例
 * @version: 
 * @Company: tuniu
 * @Author: tuzhipeng
 * @Date: 2018-11-13 16:36:16
 * @LastEditors: tuzhipeng
 * @LastEditTime: 2018-11-21 13:35:58
 */

import React from "react";
import { Tabs } from "../../ishow";
import './App.css'
import ViewCode from './viewCode';


let map = null, map2= null,
    directionsDisplay = null,
    directionsService = null;

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
        map2 = null;
    }

    __initMap(){
        // 初始化地图 ,由于示例中地图js文件是全局引入的，所以googlemap的api是在window下
        map = new window.google.maps.Map(this.refs.map, {
            center: {lat: 32.01923, lng: 118.78972},
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

    onSelectChange(){
        this.__calculateAndDisplayRoute(directionsService, directionsDisplay);
    }

    onTabChanage(tab){
        if(tab.props.name =='2'){
            this.__initMap2();
        }
    }

    __initMap2(){
        // 后台jar包请求谷歌接口得到类似数据格式
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
                "points": "avlbE{c`tUgC_EyBgEqBgEa@TkBxAaBnA}AnAgEtACq@a@Bk@bA_B\\oCXkCHaECwHOYC}H}AkS{EcE{@aKaCeWaG{A]YEaDAlBCLwC?uH~Ccp@TyIdDwpAN_GkEgdAOeM?yDa@[jAEC_AUmBqBgBcDuCm@i@gTqRcDwCc@u@Sg@QaAC]Bw@`@qCDeAIeBKa@Ui@eAaBrA}@\\B",
                "walkLength": 0,
                "selectFlag": true
              }
            ]
          }
        map2 = new window.google.maps.Map(this.refs.map2, {
            center: {lat: 32.01923, lng: 118.78972},
            zoom: 14,
            mapTypeId:window.google.maps.MapTypeId.ROADMAP
        });

        this.__renderBackendRoute(map2,backendData.rows[0]);
    }
    /**
     * @name: 接收后端调用谷歌接口查询的路线数据在地图上渲染路线
     * @test: 
     * @msg: 
     * @param {type}  map ：地图对象，data :查询到的rows下面的路线对象
     * @return: 
     */
    __renderBackendRoute(map,data){
            /*
             *解码路径 使用谷歌的转码模块在引入文件时需要在尾部加上&libraries=geometry
             *<script type="text/javascript" src="http://ditu.google.cn/maps/api/js?v=3&sensor=false&key=你的谷歌地图API_KEY&hl=zh-CN&libraries=geometry"></script>
             */
             const decodeFn=window.google.maps.geometry.encoding.decodePath;
             // 解码路径获得路线点位集合
             let routeArr = decodeFn(data.points);
             let arrLength = routeArr.length;
             console.log(routeArr)
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
            console.log(map);
            let bounds = new window.google.maps.LatLngBounds();
            for(let i=0,len=routeArr.length;i<len;i++){
                bounds.extend(routeArr[i]);
            }
            // bounds.extend(routeArr[0]);
            // bounds.extend(routeArr[routeArr.length-1]);
            console.log(bounds)
            map.fitBounds(bounds);
    }
    render(){
        return (
        <div>
            <Tabs type="card" value="1" style={{ marginBottom: 40 }} onTabClick={ this.onTabChanage.bind(this)}>
                <Tabs.Pane label="线路查询(前端jssdk查询)" name="1">
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
                    <ViewCode name="GoogleMapRoute" code='0' />
                    <ViewCode name="GoogleMapRoute" code='1' />
                </Tabs.Pane>
                <Tabs.Pane label="路线查询(后端查询前端绘制)" name="2">
                    <div ref='map2' style={{width: '100%',height:'540px'}}></div>
                    <ViewCode name="GoogleMapRoute" code='2' />
                    <ViewCode name="GoogleMapRoute" code='3' />
                </Tabs.Pane>
                {/* <Tabs.Pane label="初始化地图3" name="3">
                    <div ref='map3' style={{width: '100%',height:'700px'}}></div>
                    <ViewCode name="LoginForm" code='0' />
                </Tabs.Pane>
                <Tabs.Pane label="初始化地图4" name="4">
                    <div ref='map4' style={{width: '100%',height:'700px'}}></div>
                    <ViewCode name="LoginForm" code='0' />
                </Tabs.Pane>
                <Tabs.Pane label="初始化地图5" name="5">
                    <ViewCode name="LoginForm" code='0' />
                </Tabs.Pane>
                <Tabs.Pane label="初始化地图6" name="6">
                    <ViewCode name="LoginForm" code='0' />
                </Tabs.Pane> */}
            </Tabs>
        </div>
        )
    }
}

export default App;