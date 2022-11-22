// Compose
// data --> fn --> data --> fn

// 有许多优秀的库有compose()函数的实现, 比如Ramda,
// 这里我们不使用任何库, 而是自己去实现

// 组合能力是处理组件之间关系的系统设计原则
// compose()中的函数参数, 可以看做组件, 组件可以
// 以各种组合进行选择和组装
const compose = (f, g) => (data) => f(g(data))

const multiplyBy2 = (num) => num * 2
const makePositive = (num) => Math.abs(num)

const multiplyBy2AndAbsolute = compose(multiplyBy2, makePositive)

console.log(multiplyBy2AndAbsolute(-20))