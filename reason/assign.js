let obj1 = {name:'zfpx'};
let obj2 = {age:'9'};
//let obj3 = Object.assign({},obj1,obj2);
let obj3 = Object.assign({...obj1,...obj2});
//
console.log(obj3);
