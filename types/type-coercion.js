/* 
  type coercion 类型强制转换
  Javascript 具有非常强的类型强制性质, 因为它是动态的。
*/

console.log(-0 === +0) // true
console.log(Object.is(-0, +0)) // false

console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
