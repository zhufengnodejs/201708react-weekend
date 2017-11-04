//希望只关注数据，当数据改变的时候，视图也会跟着改变
class LikeButton{
  constructor(){
    //在构造函数中初始化一个状态对象，这是一个私有变量
    this.state = {isLiked:false};
    //把事件处理器中的this绑定为当前组件的实例
    this.handleClick = this.handleClick.bind(this);
    this.setState = this.setState.bind(this);
  }
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    //返回这个DIV的第一个子元素
    return div.firstElementChild;
  }
  //修改状态 新的状态对象
  setState(newState){
    //状态管理有一个规则 每次都要返回不同的对象,不变性
    //this.state=Object.assign(this.state,newState);
    //this.state = Object.assign({},this.state,newState);
    this.state = {...this.state,...newState};
    //先获取这个button的父级节点
    let parent = this.element.parentNode;
    //再备份一下老节点
    let oldEle = this.element;
    //使用新的状态对象重新渲染元素
    this.render();
    //删除老节点
    parent.removeChild(oldEle);
    //把新的节点添进去
    parent.appendChild(this.element);
  }
  //处理点击事件
  handleClick(){
     //调用setState方法把isLiked取反
     this.setState({isLiked:!this.state.isLiked});

  }
  render(){
    //获取这个button的DOM对象
    this.element = this.createDOMFromString(`
      <button class="like-btn">
         <span class="like-text">${this.state.isLiked?'取消':'点赞'}</span>
      </button>
      `);
    //给这个button的DOM对象增加点击事件
    this.element.addEventListener('click',this.handleClick);
    return this.element;
  }
}