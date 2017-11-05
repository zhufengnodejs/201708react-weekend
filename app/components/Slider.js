import React, {Component} from 'react';
import './Slider.less'
//默认导出一个Slider
export default class Slider extends Component {
  render() {
    return (
      <div className="slider-wrapper">
        <ul className="sliders">
          {
            this.props.images.map((item,index)=>(
              <li key={index} className="slider">
                <img src={item}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}