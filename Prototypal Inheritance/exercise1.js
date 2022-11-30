/* 
  we want `lizard` to inherit `dragon`
*/
/* 
  Attention!
  虽然我们可以使用__proto__ ,但实际上不应该使用它,
  因为这对于性能不利, 在原型方面, 我们希望继承不同的方式。
  我们永远不想手动分配原型链并自己创建这个链, 如果自己手动分配,
  可能会把我们JS编译器搞得一团糟
*/
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 100
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'kiki',
  fight() {
    return 50
  }
}

// 如果采用call方法的话, 调用多个dragon方法实现过于繁琐,
// 采用原型继承, 让lizard获得dragon的属性和方法
lizard.__proto__ = dragon
console.log(lizard.sing())
console.log(lizard.fight())

// check if dragon is the prototype of lizard
console.log(dragon.isPrototypeOf(lizard))

// 由于dragon是lizard的原型, 这里会打印出dragon的prop
// for (let prop in lizard) {
//   console.log(prop)
// }

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}
