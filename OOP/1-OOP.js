/* 
  Object Oriented Programming
  面向对象编程就是对现实世界的对象和关系进行建模
  OOP的四大支柱：
  * encapsulation  封装
  * abstraction    抽象
  * inheritance    继承
  * polymorphism   多态

  Goal (by using OOP)
  * Clear + Understandable
  * Easy to Extend
  * Easy to Maintain
  * Memory Efficient
  * Dry

*/

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
