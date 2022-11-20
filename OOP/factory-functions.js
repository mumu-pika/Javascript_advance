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
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return 'attack with' + weapon
    }
  }
}