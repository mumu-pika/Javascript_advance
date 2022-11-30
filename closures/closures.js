/* 
  闭包 --- 函数和所在声明的词法作用域下的组合  （function + lexical scope）
  Closure is a combination of function and the lexical
  environment from which it was declared.

  Closure allow a function to access variables from an
  enclosing scope or environment, even after it leaves
  the scope in which it was declared.
  闭包允许函数从封闭范围或环境访问变量, 即使它在离开它被声明的范围之后。

  Closure is a feature of Javascript.

  在代码运行之前, 我们会有一个隐藏的property scope, 这个属性会创建出
  我们的作用域链(scope chains)以及我们可以访问到的内容.因此在代码运行之前,
  JS引擎会在函数之间有这些little scope links. 而这些links的值不在调用栈中,
  而是在内存堆中, 随后这个堆只是被垃圾收集清理干净。

  lexical scope 的重点在于where we write the function matters,
  not where we call the function or where we invoke the function.

*/

// 闭包在函数的一个应用例子
function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(a()()()) // grandpa > father > son

// 闭包和箭头函数
const boo = string => name => name2 => {
  console.log(`${string}-${name}-${name2}`)
}

const booString = boo('hi')

// after several steps ...

const booStringName = booString('')
