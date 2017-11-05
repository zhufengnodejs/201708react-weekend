let obj = {name:'zfpx'};
for(let attr in obj){
  console.log(attr);
}
Object.defineProperty(obj, 'age', {
  value:9,
  enumerable:true,
  configurable:true,
  writable:false
});
console.log('.....................');
for(let attr in obj){
  console.log(attr);
}
console.log('.....................');
/*
delete obj.age;
for(let attr in obj){
  console.log(attr);
}
*/

obj.age = 10;
console.log(obj.age);