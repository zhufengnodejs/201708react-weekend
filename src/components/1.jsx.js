import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//组件
class Header extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return (
      <h1>hello</h1>
    )
  }
}
ReactDOM.render(<Header/>,document.querySelector('#root'));