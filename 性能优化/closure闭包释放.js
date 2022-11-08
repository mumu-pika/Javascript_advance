function MyObject() {}

// 闭包方法
function closure() {
  let arr = new Array(100000).fill(null).map(e => new MyObject())

  return function inner() {
    return arr // 1、一个函数，内部访问外部变量, 形成闭包
  }
}

// 函数closure由于被外部持有, 自身不会被释放, 同时闭包也不会释放: 访问外部变量
let fn = closure()

// fn = null // 使用完毕fn释放