import React, {Component} from 'react';
import './Slider.less'
//默认导出一个Slider
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {index:0};
  }
  go = ()=>{
    setInterval(()=>{
      this.setState({index:this.state.index+1});
    },this.props.delay*1000)
  }
  componentDidMount(){
    this.go();
  }
  render() {
    let style = {
      left:this.state.index*-300,//left值，距容器左端的距离
      width:this.props.images.length*300,//ul的实际宽度
      transitionDuration:this.props.speed+'s' //每次动画的持续时间
    }
    return (
      <div className="slider-wrapper">
        <ul className="sliders" style={style}>
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