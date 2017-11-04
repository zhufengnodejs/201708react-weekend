export default {
  //元素类型 元素的属性对象 元素的子元素(null,对象,多个对象)
  createElement(type,attrs,children){
    return {
      type,
      attrs,
      children
    }
  }
}