// ES6 Class
/* 
  在C++与Java等一些语言中, class是真实存在的,
  而在JS中, class依然是对象, Everything in JS is an object.

  因此, 如果有人问：JS有类嘛？
  答：是的, 它们是语法糖, 但`class`关键字依然只是原型继承、
  有人称：伪类式继承, 不是真正的类式继承。
*/
class Elf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  /* 
    这里可以思考一个问题：
    为什么不把attack()放到上面的constructor()中？
    因为这样会占用内存空间, 如果放到上面, 就是从
    每个对象中创建attack()方法了。而放在这里的话,
    所有这些实例共享这一个位置上的attack()方法, 因为这里
    考虑到了内存效率方面的问题。
  */

  attack() {
    return 'attack with ' + this.weapon
  }
}

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
