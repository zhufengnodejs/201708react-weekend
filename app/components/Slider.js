import React, {Component} from 'react';
import './Slider.less'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
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
    if(index<0){
      index = this.props.images.length-1;
    }
    this.setState({index});//修改状态中的index值为新的index值
  }
  go = ()=>{
    this.timerID = setInterval(()=>{
      this.turn(1);
    },this.props.delay*1000)
  }
  componentDidMount(){
    this.go();
  }
  render() {
    return (
      <div
        onMouseOver={()=>clearInterval(this.timerID)}
        onMouseOut={this.go}
        className="slider-wrapper">
        <SliderItems
          images={this.props.images}
          speed={this.props.speed}
          index={this.state.index}
        />
        <SliderArrows turn={this.turn}/>
        <SliderDots
          turn = {this.turn}
          index={this.state.index}
          images={this.props.images}/>
      </div>
    )
  }
}