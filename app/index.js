import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "./components/Slider";
//先声明一个图片的数组
let IMAGES = [
  //在源代码加载图片需要require
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg')
]
//把Slider组件渲染到容器的内部
/**
 * auto 开启自动轮播
 * speed 每次切换图片动画持续的时间
 * delay 每次轮播的时间间隔
 * arrow 是否显示箭头导航
 * dots 是否显示点状导航
 * pause 是否当鼠标移动到轮播图上暂停轮播 移开之后继续轮播
 */
ReactDOM.render(<Slider
  auto={true}
  speed={1}
  delay={2}
  arrow={true}
  dots={true}
  pause={true}
  images = {IMAGES}/>,document.querySelector('#root'));