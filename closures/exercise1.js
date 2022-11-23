// Exercise 1
function callMeMaybe() {
  /* 
    这里的setTimeout的这段代码进入到Web api之后, 并被放入回调队列,
    之后事件循环将它推回到堆栈, 需要注意的是, callMe这个变量已经被创建和分配,
    检测到有一个enclosing function 在使用它, so that it's going to
    create a closure.
  */
  setTimeout(() => {
    console.log(callMe)
  }, 2000)

  const callMe = 'Hi, I am now here!'
}

callMeMaybe()
