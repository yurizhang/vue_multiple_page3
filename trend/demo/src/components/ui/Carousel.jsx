import React, { Component } from 'react';
import './App.css';
import Carousel from "../../ishow/Carousel/Index";
import ViewCode from './viewCode';
import ParamTable from './paramTable';
import Tabs from "../../ishow/Tab/index";
import Row from '../../ishow/LayoutComponent/row/index';
import Col from '../../ishow/LayoutComponent/col/index';

class App extends Component{
    render() {
      return (
        <div>
          <h1>Carousel 走马灯</h1>
          <h3>在有限空间内，循环播放同一类型的图片、文字等内容</h3>
          <div style={{ marginbottom: 40 }}>
            <Tabs type="card" value="1" style={{ marginBottom: 40 }} >
              <Tabs.Pane label="基础用法" name="1">
                <h2>基础用法</h2>
                <h4>适用广泛的基础用法</h4>
                <Row>
                <Col span={6} offset={0}>
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
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={6}>
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
                    </Col>
                    </Row>
                <ViewCode name="Carousel" code="0" />
              </Tabs.Pane>
              <Tabs.Pane label="切换箭头" name="2">
                <h2>切换箭头</h2>
                <h4>可以设置切换箭头的显示时机</h4>
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
                <ViewCode name="Carousel" code="1" />
              </Tabs.Pane>
              <Tabs.Pane label="卡片化" name="3">
                <h2>卡片化</h2>
                <h4>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</h4>
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
                <ViewCode name="Carousel" code="2" />
              </Tabs.Pane>
              <Tabs.Pane label="扁平卡片化" name="4">
                <h2>扁平卡片化</h2>
                <h4>统一卡片大小</h4>
                <Carousel interval="4000" type="flatcard" height="200px">
                {
                  [1,2,3,4,5,6].map((item, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <h3>{item}</h3>
                      </Carousel.Item>
                    )
                  })
                }
              </Carousel>
                <ViewCode name="Carousel" code="3" />
              </Tabs.Pane>
            </Tabs>
          </div>
          <ParamTable name='Carousel' />
          <ParamTable name='CarouselItem' />
        </div>
        )
      }      
}

export default App
