import React, {Component} from 'react';
import './Slider.less'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
//默认导出一个Slider
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {index:0};
  }
  turn = (step)=>{
    let index = this.state.index;//先取得老的index值
    index+=step;//让老的值加上步长
    if(index>=this.props.images.length){
        index = 0;
    }
    this.setState({index});//修改状态中的index值为新的index值
  }
  go = ()=>{
    setInterval(()=>{
      this.turn(1);
    },this.props.delay*1000)
  }
  componentDidMount(){
    this.go();
  }
  render() {
    return (
      <div className="slider-wrapper">
        <SliderItems
          images={this.props.images}
          speed={this.props.speed}
          index={this.state.index}
        />
        <SliderArrows/>
      </div>
    )
  }
}