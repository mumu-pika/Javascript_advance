/* 
  为了不然initialize()多次被调用, 产生多个view,
  也为了避免有人滥用initialize()
  考虑使用闭包将下面的函数变化为一个只能被调用一次的函数
*/

// let view
// function initialize() {
//   let called = 0
//   return function () {
//     if (called > 0) return
//     else {
//       view = 'it\'s a view'
//       called ++
//       console.log('view has been set')
//     }
//   }
// }

// const startOnce = initialize()
// startOnce()
// startOnce()

// const startOnce2 = initialize()
// startOnce2()
// startOnce2()
// console.log(view)

/* 
  上面部分解决了只调用一次, 但是我们可以看见的是initialize()本身还是可以多次调用
  于是我们可以考虑利用将只需执行一次的函数作为参数传入闭包
 */
// 封装执行一次的函数

let view
let initialize = message => {
  view = "it's a view"
  console.log('view has been set, ' + message)
}

// 将initialize作为只能执行一次的函数传入
function once(fn) {
  if (typeof fn !== 'function') throw new Error('Please pass a function')
  return function (...args) {
    if (fn) {
      fn.apply(this, args)
      fn = null // 这里将对于fn的引用置为null, 但fn这个函数本身的引用还是在的。
    }
  }
}

let onlyOnce = once(initialize)
onlyOnce('hi')
console.log(initialize)
