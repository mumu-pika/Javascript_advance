// 声明一个bind函数
// 参数中，第一个为需要绑定的对象，后面的参数是参数列表
function myBind(context) {
  // arguments 取出1以后的参数，也就是除去第一个对象参数，取其余所有的参数
  // arguments 是伪数组
  const args1 = Array.prototype.slice.call(arguments, 1)

  // 关于this的确认
  const _this = this

  // 打日志
  console.log('谁调用了myBind', fn)
  console.log('传入了参数args1:', args1)

  // 排除错误this的情况 => 错误的调用方式
  if (typeof fn !== 'function') {
    throw new Error('Not a function')
  }

  const f = function () {
    const args2 = Array.prototype.slice.call(arguments)
    // 打日志
    console.log("传入了参数args2", args2)
    return _this.call(
      f.prototype.isPrototypeOf(this) ? this : context,
      args1.concat(args2)
    )
  }

  // 隐藏内部函数的原型，修正成调用方_this的原型
  f.prototype = _this.prototype

  return f
}

// 函数对象.myBind
// 将函数挂载到Function的原型上
Function.prototype.myBind = myBind

let fn = function () {}
let obj = { name: 'saber' }

// 返回一个函数，前期可以缓存参数
let newFn = fn.myBind(obj, 1, 2) // 测试Fn调用
// myBind(obj, 1, 2)
newFn(3, 4)
