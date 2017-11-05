"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      //默认不可枚举 指的是for循环属性的时候能打印出来
      descriptor.enumerable = descriptor.enumerable || false;
      //默认可配置 指的是要可以通过delete删除 此属性
      descriptor.configurable = true;
      //可修改
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    //给类的原型增加属性
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    //给类或者说构造函数本身增加属性
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();


var Parent = function () {
  function Parent(name) {
    this.name = name;
  }

  _createClass(Parent, [{
    key: "getName",
    value: function getName() {}
  }]);

  return Parent;
}();