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
  getSliders = (sliders)=>{
    this.sliders = sliders;
  }
  turn = (step)=>{
    let index = this.state.index;//先取得老的index值
    index+=step;//让老的值加上步长
    if(index>this.props.images.length){
      //当最后一张要走到2的时候，需要马上拉到索引0，然后再往2走
        this.sliders.style.transitionDuration = '0s';
        this.sliders.style.left = '0px';
        //强行让浏览器重新计算样式
        getComputedStyle(this.sliders,null).left;
        index = 1;
        this.sliders.style.transitionDuration = this.props.speed+'s';
        this.setState({index});//修改状态中的index值为新的index值
        return;
    }
    if(index<0){
        //当最后一张要走到2的时候，需要马上拉到索引0，然后再往2走
        this.sliders.style.transitionDuration = '0s';
        this.sliders.style.left = (this.props.images.length)*-300+'px';
        //强行让浏览器重新计算样式
        getComputedStyle(this.sliders,null).left;
        index = this.props.images.length-1;
        this.sliders.style.transitionDuration = this.props.speed+'s';
        this.setState({index});//修改状态中的index值为新的index值
        return;
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
          getSliders = {this.getSliders}
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