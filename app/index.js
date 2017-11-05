import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "./components/Slider";
let IMAGES = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg')
]
ReactDOM.render(<Slider/>,document.querySelector('#root'));