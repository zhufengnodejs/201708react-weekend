import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Title extends Component{
  render(){
    return <h1>hello</h1>;
  }
}
//组件之间可以嵌套和组合的
class Header extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return (
      <div>
        <Title/>
      </div>
    )
  }
}
class Main extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return (
      <div>
        Main
      </div>
    )
  }
}
class Footer extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return (
      <div>
        Footer
      </div>
    )
  }
}
class Index extends Component{
  //用来表示在界面上这个组件应该长成什么样子
  render(){
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>,document.querySelector('#root'));