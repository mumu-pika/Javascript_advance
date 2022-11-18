// Extend the functionality of a built in object

// ******ex1******
// Date object => to have new method .lastYear()
// which shows you last year 'yyyy' format.

// Date.prototype.lastYear = function() {
//   return this.getFullYear() - 1
// }

// const year = new Date('1900-01-01').lastYear() // 1899
// console.log(year)

Date.prototype.lastYear = () => {
  console.log(this) // Date Object
  // return this.getFullYear() - 1
  return '这里不应使用箭头函数, 因为我们需要让this为调用者的值'
}

const year = new Date('1900-01-01').lastYear() // 1899
console.log(year)

// ******ex2******
// Modify .map() to print '#' at the end of each item.

Array.prototype.map = function() {
  let arr = []
  for (let i = 0; i < this.length; ++i) {
    arr.push((this[i] + '#'))
  }
  return arr
}
console.log([1, 2, 3].map())



/* 上面的原型映射的创建方式, 后面会有`class`这个JS语法糖来实现 */

