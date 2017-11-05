import React, {Component} from 'react';
export default class SliderItems extends Component {
  render() {
    let style = {
      left:this.state.index*-300,//left值，距容器左端的距离
      width:this.props.images.length*300,//ul的实际宽度
      transitionDuration:this.props.speed+'s' //每次动画的持续时间
    }
    return (
      <ul className="sliders" style={style}>
        {
          this.props.images.map((item,index)=>(
            <li key={index} className="slider">
              <img src={item}/>
            </li>
          ))
        }
      </ul>
    )
  }
}