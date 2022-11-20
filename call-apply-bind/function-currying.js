// function currying
function multiply(a, b) {
  return a * b
}

// 进行函数的绑定
const multiplyByTwo = multiply.bind(this, 2)
const multiplyByTen = multiply.bind(this, 10)

console.log(multiplyByTwo(4))
console.log(multiplyByTen(6))