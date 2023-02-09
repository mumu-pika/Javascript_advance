/*
  bind()方法
  假设有一个函数fn，在bind()被调用时，这个函数fn的this被bind的第一个参数指定，
  其余的参数将作为新函数的参数供调用时使用
  如这样使用：
    newfn = fn.bind(thisArg, [arg1, arg2, ...])
    newfn(argN1, argN2,...)  //这里argN1是为了区分开来和前面参数arg1不同

  * bind()方法返回的是一个原函数fn的拷贝，与原函数fn不同，
    newfn拥有在bind()的参数中所指定的this和指定的初始参数

  * bind 方法与 call / apply 最大的不同就是前者返回一个绑定上下文的函数，而后两者是直接执行了函数。
  * bind还有一个特性：一个绑定函数也能使用new操作符创建对象，这种行为就像把原函数当做构造器，
    提供的this值被忽略，同时调用时的参数被提供给模拟函数

  bind实现思路：
  1、判断是否函数调用，若非函数调用抛出异常
  2、使用call/apply指定bind()的第一个参数this
  3、返回函数
    * 判断函数的调用方式，是否是被new出来的，
      * 如果是被new出来的，就返回空对象，但是实例的_proto_指向_this的prototype

  3、完成函数柯里化
  Array.prototype.slice.call()
*/

Function.prototype.mybind = function (context) {
  //判断是否为一个函数
  if (typeof this !== 'function') {
    throw new Error('Not a function')
  }

  // 保存调用bind的函数 (也就是fn.bind(...)中的fn)
  const _this = this

  // 保存参数
  // 第一个参数是指定对的this, 所以只截取第一个之后的参数
  // arr.slice(begin), 即[begin, end],这是es5的写法
  // const args = Array.prototype.slice.call(arguments, 1)
  const [, ...args] = arguments // arguments是参数列表，这是es6的解构语法，拿到除第一个参数以外的参数
  // const args = Array.from(arguments).slice(1)

  //返回函数
  const F = function () {
    // 实现函数柯里化
    // 这时的arguments是指bind返回的函数传入的参数
    // const bindArgs = Array.prototype.slice.call(arguments)
    // 合并两个参数并返回
    // return _this.apply(context,  args.concat(bindArgs)) //ES5写法
    // 如果当前调用者是new出来的，返回一个空对象，且使得创建出来的实例_proto_指向this的prototype

    // return _this.apply(this instanceof F? this : context,  args.concat(...arguments))
    return _this.apply(this instanceof F ? this : context, [
      ...args,
      ...arguments
    ])
  }
  // F.protoype = Object.create(_this.prototype)
  // 隐藏内部函数的原型，修正成调用方_this的原型
  F.prototype = _this.prototype
  return F
}
