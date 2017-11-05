import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
class LikeButton extends Component{
  constructor(){
    super();//调用父类构造函数,是用来继承父类的私有属性
    //这是一个私有的，本地的状态对象，名称是定死的
    this.state = {isLiked:false};
  }
  handleClick = ()=>{
   //setState有两层含义，1是把新的状态对象合并到老的状态对象上
   //2是会重新执行render方法返回新的React元素,把这个新的元素渲染到页面上
   //1.setState是异步方法
   //2.setState会合并执行
   //3.setState方法执行一个回调函数，在更改完状态后会执行这个回调函数
    this.setState({isLiked:!this.state.isLiked},()=>{
      console.log(this.state.isLiked);
    });
  }
  render(){
    console.log('render');
    return (
      <button
        onClick={this.handleClick}
      >{this.state.isLiked?'取消':'点赞'}</button>
    )
  }
}
render(<LikeButton/>,document.querySelector('#root'));
