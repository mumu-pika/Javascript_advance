// class Elf {
//   constructor(name, weapon) {
//     this.name = name
//     this.weapon = weapon
//   }
//   attack() {
//     return 'attack with ' + this.weapon
//   }
// }

// const fiona = new Elf('Fiona', 'ninja stars')
// const ogre = {...fiona} // 这样丢失了连接到fiona的原型链

// 为了解决上面丢失原型链的问题
// 我们可以使用extends这个方法
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
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort in the world made'
  }
}


const dolby = new Elf('Dolby', 'fireworks', 'house')
console.log(dolby)

const shark = new Ogre('Shark', 'club', 'black')
console.log(shark)
console.log(shark.makeFort())

console.log(Ogre.prototype.isPrototypeOf(shark))
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))
console.log(shark instanceof Character )