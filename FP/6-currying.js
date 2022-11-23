// currying  函数柯里化
/* 
  函数柯里化是一种接受多个函数参数求值的技术.
*/

const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b
console.log(curriedMultiply(2)(3)) // 6

/* 
  Partial Application
  这是一个生成较少参数的函数的过程, 这意味着
  我们可以用一个functionA, 将原本的函数fn中一些参数
  应用到functionA中, 以便它记住那些参数, 然后
  使用闭包, 之后这个functionA与所有其余参数一起
  调用.

  Partial Application is on the second call
  I expect all the arguments, while Currying
  says I expect one argument at a time.

*/

const fn = (a, b, c) => a * b * c
// 这里我们不关心this, 也就是不关心是谁调用的，设置为null
const partialFn2 = fn.bind(null, 2)
console.log(partialFn2(3, 6)) // 36
