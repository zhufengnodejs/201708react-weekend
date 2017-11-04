class LikeButton{
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;
    //返回这个DIV的第一个子元素
    return div.firstElementChild;
  }
  render(){
    this.element = this.createDOMFromString(`
      <button class="like-btn">
         <span class="like-text">点赞</span>
      </button>
      `);
    //给这个button的DOM对象增加点击事件
    this.element.addEventListener('click',()=>{
      alert(1);
    });
    return this.element;
  }
}