// Primitive
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof 'You can ! Do it!') // string
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof Symbol('saber')) // symbol

// Non-Primitive
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof function () {}) // function

// 下面展示了2种写法, 写法1是写法2的简写
console.log(true.toString())
console.log(Boolean(true).toString())
