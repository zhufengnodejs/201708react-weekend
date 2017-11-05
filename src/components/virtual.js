/**
 * const ul = {
  tagName: 'ul', // 节点标签名
  props: { // DOM的属性，用一个对象存储键值对
    id: 'list',
    style: 'color: red'
  },
  children: [ // 该节点的子节点
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
  ]
}
 */
const ul = h('ul', {id: 'list', style: 'color: red'}, [
  h('li', {class: 'item'}, ['Item 1']),
  h('li', {class: 'item'}, ['Item 2']),
  h('li', {class: 'item'}, ['Item 3'])
])

class VNode {
  constructor(tagName, props,children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }
  render(){
    let element = document.createElement(this.tagName);
    for(let attr in this.props){
      element.setAttribute(attr,this.props[attr]);
    }
    this.children.forEach((item)=>{
      if(typeof item == 'string'){
        element.innerHTML += item;
      }else{
        element.appendChild(item.render())
      }
    });
  }
}

const h = (tagName, props, children) => {
  let root = new VNode(tagName, props,children);
  return root;
}