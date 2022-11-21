// factory functions

// 这里创建精灵类的工厂函数
/* 
  // 如果没有工厂函数, 我们可能会需要写很多类
  const elf1 = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
      return 'attack with' + elf.weapon
    }
  }

  const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
      return 'attack with' + elf.weapon
    }
  }
  */
// 工厂函数实现
// function createElf(name, weapon) {
//   return {
//     name: name,
//     weapon: weapon,
//     attack() {
//       return 'attack with ' + weapon
//     }
//   }
// }

// // 使用工厂函数来创建
// const peter = createElf('Peter', 'stones')
// console.log(peter.attack())

/* 
  但是上面的工厂函数还有一个可以改进的地方, 对于
  `name` 和 `weapon` 是存储在一个地方, 但是对于
  `attack()` 这个方法却是会在不同的地方存储, 于是
  我们需要去解决在多个对象上具有相同的功能的问题.
*/


// 解决方式 1
// 可以在一个地方专门存储`attack()`方法

// const elfFunctionStore = {
//   attack() {
//     return 'attack with ' + this.weapon
//   }
// }

// 解决方式 2 在上面的基础上可以利用JS给我们提供的Object.create()方法
// 使用Object.create() 完成了原型继承
const elfFunctionStore = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctionStore)
  console.log(newElf.__proto__) // { attack: [Function: attack] }
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
