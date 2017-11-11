import React, {Component} from 'react';
export default class SliderItems extends Component {
  render() {
    let style = {
      left:this.props.index*-300,//left值，距容器左端的距离
      width:(this.props.images.length+1)*300,//ul的实际宽度
      transitionDuration:this.props.speed+'s' //每次动画的持续时间
    }
    return (
      <ul ref={$this=>this.props.getSliders($this)} className="sliders" style={style}>
        {
          this.props.images.map((item,index)=>(
            <li key={index} className="slider">
              <img src={item}/>
            </li>
          ))
        }
        <li key={this.props.images.length} className="slider">
          <img src={this.props.images[0]}/>
        </li>
      </ul>
    )
  }
}