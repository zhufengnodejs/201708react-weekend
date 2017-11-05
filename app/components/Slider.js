import React, {Component} from 'react';
//默认导出一个Slider
export default class Slider extends Component {
  render() {
    return (
      <div className="slider-wrapper">
        <ul>
          {
            this.props.images.map((item,index)=>(
              <li key={index}>
                <img src={item}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}