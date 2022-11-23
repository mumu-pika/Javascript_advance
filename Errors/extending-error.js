/* 
  extending errors
  我们还可以扩展继承现有的Error类来满足别的不同需求

*/


class MyError extends Error {
  constructor(message) {
    super(message)
    this.name = 'myError'
    this.pokemon = 'pika'
  }
}

// throw new myError('This is my error')
const error =  new MyError('This is my error')
console.log(error.pokemon)