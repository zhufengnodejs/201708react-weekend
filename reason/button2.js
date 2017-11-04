class LikeButton{
  constructor(){
    this.state = {liked:false};
    //把handleClick方法里的this绑死为当前类的实例
    this.handleClick = this.handleClick.bind(this);
  }
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    return div.firstElementChild;
  }
  setState(newState){
    //把新状态上的属性合并到老的状态对象上
    this.state = {...this.state,...newState};
    let oldEle = this.element;
    let parent = oldEle.parentNode;
    this.render();//调用render方法获取新的element元素
    parent.removeChild(oldEle);
    parent.appendChild(this.element);
  }
  handleClick(){
    this.setState({liked:!this.state.liked});
  }
  render(){
    //从字符串创建DOM对象
    this.element = this.createDOMFromString(`
       <button>
           ${this.state.liked?'取消':'点赞'}
       </button>
    `);
    //当点击按钮的时候执行handleClick方法
    this.element.addEventListener('click',this.handleClick)
    return this.element;
  }
}