import React from 'react';
import request from '../../utils/request'
import { Carousel, WingBlank } from 'antd-mobile';

import './style.scss'

// 这是一个轮播图模块
class Carousal extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  // 挂在前将数据请求回来
  async UNSAFE_componentWillMount() {
    var req = await request.get('good/getlunbo')
    this.setState({data:req.data.data})
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default Carousal