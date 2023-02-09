// Pure Functions 纯函数
/*
  Pure Functions features:
  * no side effect
  * given the same input --> have the same output


  side effects 副作用
  side effects are what does the function modify
  anything outside of itself

  One problem of side effects：
  当我们使用共享状态的时候, 比方说一个可以与任何东西交互的变量,
  函数调用的顺序很重要, 先调用的话, 会先改变状态, 而这可能会导致错误。
  一种解决办法是：在函数内部创建状态, 然后返回

  判断一个函数是否有side effect:
    check if the function touch any outside the function.

  Pure Function可以使函数非常容易测试, 非常容易组合, 而且避免了很多错误,
    have no mutations, no shared state, we have these
    predictable functions that minimize the bugs in our code.

  But a program cannot exist without side effects.
  比方说, 如果没有和浏览器交互的side effect, 我们就无法执行这段代码。
  浏览器必须像外界发出fetch调用、http调用。因此函数式编程的目标不是
  让一切都成为纯函数, 而是尽量减少副作用。
  因此一般会在一个特定的地方去处理side effects.目标是以某种方式组织
  代码, 以便隔离这些副作用。
*/

const array = [1, 2, 3]
function a(arr) {
  // const newArr = [].concat(arr) // 创建一个数组副本
  const newArr = [...arr] // 创建一个数组副本
  newArr.pop()
  return newArr
}

function b(arr) {
  return arr.map(item => item * 2)
}

console.log(a(array))
console.log(b(array))
console.log(array)

// 问题：下面这个函数是纯函数嘛？
function isPureFunction() {
  console.log('hi')
}
// 不是。console.log会将一些内容记录到浏览器的输出中, 实际上影响了外部世界。

// 下面一个是纯函数的例子
function pure1(num1, num2) {
  return num1 + num2
}
