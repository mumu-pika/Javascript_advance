// HOF
// 高阶函数返回的函数称为回调函数 callback
const hof = () => () => 6
console.log(hof()())

const hof2 = (fn) => fn(10)
console.log(hof2(function a (x) {return x}))

// Closure  containing some sort of state
const closure = function() {
  let count = 0
  return function increment () {
    count ++
    return count
  }
}

const incrementFn = closure()
console.log(incrementFn())

/* 
  我们可以注意的是, HOF和 Closure函数都可能会让函数不纯。
*/