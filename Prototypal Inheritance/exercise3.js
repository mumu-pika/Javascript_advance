/* 
  Only functions have the prototype property!!!
  只有函数有原型这个属性

  typeof Object === 'function' // true
*/
console.log(Object.prototype) // [Object: null prototype] {}

const obj = {}
console.log(obj.prototype) // undefined

const arr = []
console.log(arr.prototype) // undefined

const str = 'hello'
console.log(str.prototype) // undefined