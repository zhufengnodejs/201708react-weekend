import React, {Component} from 'react';
export default class SliderDots extends Component {
  render() {
    return (
      <div className="dots">
        {
          this.props.images.map((item,index)=>(
            <span
              onClick={()=>this.props.turn(index-this.props.index)}
              className={this.props.index==index?"active":""}/>
          ))
        }
      </div>
    )
  }
}