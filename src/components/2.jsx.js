//引入react模块里默认的导出对象
import React from './react';
import ReactDOM from './react-dom';
// <h1 id="title">hello</h1>
let element = React.createElement('h1',{id:'title'},React.createElement('h2',{id:'welcome'},'world'));
//把elementJS对象变成真实的DOM对象然后插入到页面中
/*{
  type:'h1',
  attrs:{id:'title'},
  children:'hello'
}*/
ReactDOM.render(element,document.querySelector('#root'));

