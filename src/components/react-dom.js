export default {
  //把虚拟的DOM元素变成真实的DOM并插入容器内部
  render(element,container){
    //创建真实的DOM元素
   let domEle = document.createElement(element.type);
   //循环属性对象的所有属性，然后把属性赋给真实DOM
   for(let attr in element.attrs){
     domEle.setAttribute(attr,element.attrs[attr]);
   }
   //把子元素也赋给domEle
   if(typeof element.children == 'string'){
     domEle.innerHTML = element.children;
   }else{
     // 把元素的子元素也变成真实DOM元素并添加到当前的DOM元素内部
     this.render(element.children,domEle);
   }
    //把真实的DOM对象添加到容器内部
   container.appendChild(domEle);
  }
}