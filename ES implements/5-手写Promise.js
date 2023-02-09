class Promise {
  //构造方法
  constructor(executor) {
    //为一个Promise实例化对象添加初始属性值
    this.PromiseState = 'pending'
    this.PromiseResult = null

    //声明属性
    /*
          为了保证保存的callback不会后来的覆盖之前的，为此
          我们需要用一个数组来保存多个数据
      */
    this.callback = []

    //保存实例对象的this的值
    const self = this //这里的self常见写法是self、_this、that

    //resolve函数
    function resolve(data) {
      //判断状态，以保证状态只能做一次修改,避免状态多次被改动
      if (self.PromiseState !== 'pending') return

      //1、修改对象的状态（promiseState）
      self.PromiseState = 'fulfilled' //resolved

      //2、设置对象结果值（promiseResult）
      self.PromiseResult = data

      //调用成功的回调函数
      /*
              不能采用有self.prototype.then()这个方法
              因为所有实例共享原型，如果用这个方法，那么意味着b实例用a实例的成功方法，这样不可取
              所以我们采用保存回调函数的方法
           */
      self.callback.forEach(item => {
        setTimeout(() => {
          item.onResolved(data)
        })
      })
    }
    //reject函数
    function reject(data) {
      //判断状态，以保证状态只能做一次修改
      if (self.PromiseState !== 'pending') return

      //1、修改对象的状态（promiseState）
      self.PromiseState = 'rejected' //rejected

      //2、设置对象结果值（promiseResult）
      self.PromiseResult = data

      //调用失败的回调函数
      self.callback.forEach(item => {
        setTimeout(() => {
          item.onRejected(data)
        })
      })
    }

    //对于throw 'error'的处理
    try {
      //同步调用执行器函数
      executor(resolve, reject)
    } catch (e) {
      //修改peromise对象状态为失败
      reject(e)
    }
  }

  //then方法封装
  then(onResolved, onRejected) {
    const self = this
    return new Promise((resolve, reject) => {
      //判断回调函数参数（实现异常穿透）
      if (typeof onRejected !== 'function') {
        //这里是应对没有写onRejected回调函数的情况
        //默认抛出一个异常
        onRejected = reason => {
          throw reason
        }
      }
      //(实现值传递)
      if (typeof onResolved !== 'function') {
        onResolved = value => {
          onResolved = value => value
          // value => { return value }
        }
      }

      //封装函数
      function callback(type) {
        try {
          //获取回调函数执行结果
          let result = type(self.PromiseResult)
          //判断
          if (result instanceof Promise) {
            //如果是Promise 类型的对象
            result.then(
              v => {
                resolve(v)
              },
              r => {
                reject(r)
              }
            )
          } else {
            //结果的对象状态为成功
            resolve(result)
          }
        } catch (e) {
          reject(e)
        }
      }

      //调用回调函数
      if (this.PromiseState == 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      if (this.PromiseState == 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
      }

      //判断pending做法
      if (this.PromiseState == 'pending') {
        //保存回调函数，最好的方法是保存在当前的实例对象的身上
        this.callback.push({
          // onResolved,
          // onRejected
          onResolved: function () {
            callback(onResolved)
          },

          onRejected: function () {
            callback(onRejected)
          }
        })
      }
    })
  }

  //catch方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  //resolve方法
  static resolve(value) {
    //返回promise对象
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(
          v => {
            resolve(v)
          },
          r => {
            reject(r)
          }
        )
      } else {
        resolve(value)
      }
    })
  }

  //reject方法
  static reject(reason) {
    //返回promise对象
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  //all方法
  static all(promises) {
    //返回promise对象
    return new Promise((resolve, reject) => {
      //声明变量
      let count = 0
      let arr = []
      //遍历
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          v => {
            //得知对象状态是成功
            //只有每一个promise对象都成功，才是成功的，
            count++
            //将当前promise对象成功地结果存入到数组中
            arr[i] = v
            //判断
            if (count === promises.length) {
              //修改状态
              resolve(arr)
            }
          },
          r => {
            reject(r)
          }
        )
      }
    })
  }

  //race方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          v => {
            //修改返回对象的状态为成功
            resolve(v)
          },
          r => {
            //修改返回对象的状态为失败
            reject(r)
          }
        )
      }
    })
  }
}
