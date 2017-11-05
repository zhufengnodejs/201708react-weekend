import React, {Component} from 'react';
export default class SliderArrows extends Component {
  render() {
    return (
      <div className="arrows">
        <a className="arrow arrow-left"><i className="iconfont icon-fanhui"></i></a>
        <a className="arrow arrow-right"><i className="iconfont icon-gengduo"></i></a>
      </div>
    )
  }
}