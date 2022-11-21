/* 
  'this' is the object that the function is a property of
  There are several benefits:
  1、gives methods access to their object
  2、exeute the same code for multiple objects

*/

// 'use strict'

// 1、gives methods access to their object
const obj = {
  name: 'pika',
  run() {
    return this.name + " is running! "
  },
  go() {
    return this.run() + "Go!Go!Go!"
  }
}
console.log(obj.go())

// 2、exeute the same code for multiple objects

function game() {
  console.log(this.name + " is playing games")
}
const player1 = {
  name: 'pika',
  game
}
const player2 = {
  name: 'saber',
  game
}
console.log(player2.game())


// ******************************************************************//

/*
  In Javascript, out lexical scope(静态作用域)
  (available data + variable where the function was defined)
  determines our available variables. Not where the function
  is called (dynamic scope) (动态作用域)
*/

// const boss = {
//   name: 'king',
//   fight() {
//     console.log('the boss A :', this)
//     var anotherFunction = function () {
//       // here, we can see this output the global object
//       // this is a problem!!!
//       console.log('the boss B:', this)
//     }
//     anotherFunction()
//   }
// }

// console.log(boss.fight())

// To solve the problem above
/*
  为了解决动态作用域中this的指向问题, 我们可以使用箭头函数
  箭头函数与普通的函数有不同的词法lexical的this行为, 如果我们
  将上面的anotherFunction的那个function替换为箭头函数, 那么
  这个箭头函数会在词法上绑定函数里面的this, 也就是this会指向
  它所在的静态作用域的那个对象, 而不会是其调用者。

*/
// 1) 使用箭头函数
// const boss = {
//   name: 'king',
//   fight() {
//     console.log('the boss A :', this)
//     var anotherFunction = () => {
//       // 使用箭头函数之后, 解决了this的指向问题
//       console.log('the boss B:', this)
//     }
//     anotherFunction()
//   }
// }
// console.log(boss.fight())

// 2) 使用bind()改变this指向
// const boss = {
//   name: 'king',
//   fight() {
//     console.log('the boss A :', this)
//     var anotherFunction = function() {
//       // 使用箭头函数之后, 解决了this的指向问题
//       console.log('the boss B:', this)
//     }
//     // 这里bind中的this不像上面那样在函数中, 所以这里的this
//     // 指向的就是当前静态作用域的对象boss
//     return anotherFunction.bind(this)
//   }
// }
// console.log(boss.fight())
// console.log("***************************")
// console.log(boss.fight()())

// 3) 定义一个self来保存对象的this
const boss = {
  name: 'king',
  fight() {
    console.log('the boss A :', this)
    var self = this
    var anotherFunction = function() {
      // 使用箭头函数之后, 解决了this的指向问题
      console.log('the boss B:', self)
    }
    // 这里bind中的this不像上面那样在函数中, 所以这里的this
    // 指向的就是当前静态作用域的对象boss
    anotherFunction()
  }
}
console.log(boss.fight())



