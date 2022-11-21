// Construct Functions
/* 
  使用`new`关键字调用的任何函数都称为构造函数,
  比如 Function()、Object()、Number()
  `new` 关键字会自动为我们返回一个elf对象, 并创建这个elf的构造函数
  此外, `new`还将`this`改变为等号左边新创建出来的对象
  每一个在JS中的function都会自动获取原型属性

  这种代码分格，这种思想, 以及`new`关键字在很大程度上是面向对象的编程
  接下来我们就要去完成添加`class`的目标了
*/

function elf(name, weapon) {
  console.log(this) // elf {}
  this.name = name
  this.weapon = weapon
  let a = 6 // 我们可以向对象添加属性的唯一方法是使用`this`关键字
  console.log(this) // elf { name: 'Peter', weapon: 'stones' }
}

// 这样不同的新创建的对象都指向同一个内存空间
elf.prototype.attack = function() {
  return 'attack with ' + this.weapon
}


// 下面两种写法都可以, 注意`this`
// elf.prototype.build = function() {
//   const self = this
//   function building () {
//     return self.name + ' has built a house'
//   }
//   return building()
// }

elf.prototype.build = function () {
  function building() {
    return this.name + 'has built a house'
  }
  return building.bind(this)
}

const peter = new elf('Peter', 'stones')
console.log(peter.name)
console.log(peter.attack())
console.log(peter.build())
console.log(peter instanceof elf)
console.log(elf.prototype.isPrototypeOf(peter))

// // 我们可以直接用Function()来创建上面的elf函数
// const Elf1 = new Function('name', 'weapon',
//   `this.name = name
//   this.weapon = weapon`)

// const sarah = new Elf1('Sarah', 'fireworks')
// console.log(sarah.weapon)