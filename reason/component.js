class Component {
  constructor(props){
    this.props = props;
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
  //挂载
  mount(container){
    //把当前的元素挂载到父容器内部
    container.appendChild(this.render());
  }
}