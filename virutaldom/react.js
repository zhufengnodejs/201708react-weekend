function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}
Element.prototype.render = function () {
  var ele = document.createElement(this.tagName);
  var props = this.props;
  for (var propName in props) {
    var propValue = props[propName];
    ele.setAttribute(propName, propValue);
  }
  var children = this.children || [];
  children.forEach(function(child){
    var childEle = child instanceof Element?child.render():document.createTextNode(child);
    ele.appendChild(childEle);
  })
  return ele;
}

var React = {
  createElement(tagName, props, children) {
    return new Element(tagName, props, children);
  }
}