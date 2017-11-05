import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Title extends Component{
  constructor(){
    super();
    //此方法绑定一次就可以了，用的时候不需要再绑定,也有可能忘
    //this.handleClick = this.handleClick.bind(this);
  }
  //event事件对象是由react提供的,它的用法和原生基本是一样的
  //如果此处写的是普通函数据的话，this指向的是undefined
  /**
   * 1.在调用的时候bind 缺点是每次都要产出一个新的函数,也容易忘绑定
   * 2.在构造函数中统一绑定
   * 3.使用箭头函数初始化，直接让函数里的this指向组件的实例
   * @param event
   */
  /**
   * 给事件监听传参数的办法
   * 1.bind
   * 2.箭头函数
   */
  handleClick = (word,event)=>{
    console.log(this);
    console.log(event.target.innerHTML+word);
  }
  render(){
    /*return <h1 onClick={this.handleClick.bind(this,'world')}>hello</h1>;*/
    return <h1  onClick={(event)=>this.handleClick('world',event)}>hello</h1>;
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