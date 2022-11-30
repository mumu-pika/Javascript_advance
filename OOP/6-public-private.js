// Public & private
/* 
  许多面向对象的编程语言都有类, 私有和公共领域的概念。
  但是JS中没有这方面的概念。
  目前几种曲线解决方法
  1、不成文规定, 一般对于一个private的私有属性或方法, 会前面添加一个下划线,
  如:  _name  表示这个是私有的。 但是这种不会阻止调用,只是起到标识。

  2、闭包, 创建闭包, 借助js本身特性实现访问控制,
  实现了无法直接读取内部的私有属性
  但是需要额外为每个属性定义setter和getter.

  3、借助ES6的symbol和weakmap

  4、class提案 (目前还在进展中)
  See: https://github.com/tc39/proposal-class-fields
*/
class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}
// extend and set the prototype
class Elf extends Character {
  constructor(name, weapon, type) {
    // 如果想设置任何类型的属性, 必须要调用super
    super(name, weapon) // Must call super constructor in derived class before accessing 'this'
    this.type = type
  }

  // 实现多态 Polymorphism
  // 多态是指在能够在不同的对象, 每个对象能够调用相同的方法, 以
  // 不同的方式做回应
  attack(cry) {
    return 'attack with ' + cry
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort in the world made'
  }
  attack() {
    return 'attack with ' + 'ahhhhhh'
  }
}

const dolby = new Elf('Dolby', 'fireworks', 'house')
console.log(dolby)

const shark = new Ogre('Shark', 'club', 'black')

// 呈现出多态
console.log(dolby.attack('weeeee'))
console.log(shark.attack())
