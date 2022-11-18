/* 
  闭包 --- 函数和所在声明的词法作用域下的组合
  Closure is a combination of function and the lexical
  environment from which it was declared.

  Closure allow a function to access variables from an
  enclosing scope or environment, even after it leaves
  the scope in which it was declared.
  闭包允许函数从封闭范围或环境访问变量, 即使它在离开它被声明的范围之后。
*/

function a() {
  let grandpa = 'grandpa'
  return function b () {
    let father = 'father'
    return function c () {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(a()()()) // grandpa > father > son