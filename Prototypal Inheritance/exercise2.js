/* 
  既然__proto__会有性能的问题, 那么什么方法是安全可靠的呢？
  解决：
    使用Object.create(Father)
*/

let girl = {
  sex: 'female'
}

/* Object.create会给使用的对象创建原型链 */
let saber = Object.create(girl)
saber.age = 16
console.log(saber.sex)
console.log(girl.isPrototypeOf(saber))
