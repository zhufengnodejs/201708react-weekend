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
ReactDOM.render(<Slider/>,document.querySelector('#root'));