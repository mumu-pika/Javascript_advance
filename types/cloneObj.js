var a = 5
var b = a

b++

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me！'
  }
}
// Pass Reference, 改变obj中属性的值会影响cLone对象中的值
// let clone0 = obj
// obj.c = "edf"
// console.log(clone0)



// Pass Value, 改变obj中属性的值不会影响cLone对象中的值
let clone1 = Object.assign({}, obj)
let clone2 = { ...obj }

// obj.c = "abc"
// console.log(clone1)
// console.log(clone2)

// deep clone 深拷贝
let superClone = JSON.parse(JSON.stringify(obj))
obj.c.deep = 'hhhh'
console.log(superClone)


// shallow clone 浅拷贝

console.log(obj)
console.log(clone1)
console.log(clone2)



