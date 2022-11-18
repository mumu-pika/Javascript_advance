/*
  我们在调用函数的时候实际上是调用了函数的call()方法
*/

function a () {
  console.log("hello")
}

a.call() // a()是a.call()的简写
a.apply() // 实际上a.apply() 也能实现一样的调用函数的效果