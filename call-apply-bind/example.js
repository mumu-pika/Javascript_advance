const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2 // 这里其实就修改了health并return
  }

}
/* 
  我们能够让archer来借用wizard的heal方法
  这样我们就不用在archer中再定义一个heal()方法
  call 与 apply 的不同之处在于call直接传参, apply需要传入一个参数数组。

  相比较bind:
  bind 会返回一个新函数, 带有特定的上下文和参数, 一般来说, 如果我们需要
  稍后使用某种类型的上下文或某种类型的this关键字调用的函数会使用bind.
  bind 允许我们存储`this`, 让这个函数之后留用。
  bind 就像一个创可贴来修复这个动态范围的`this`关键字的想法。
*/
const archer = {
  name: 'Robin Hood',
  health: 50,
}

console.log(wizard.health)
console.log(wizard.heal(50, 50))
console.log(wizard.health)

console.log("********")
console.log(archer.health)
// console.log(wizard.heal.call(archer, 10, 20))
// console.log(wizard.heal.apply(archer, [10, 20]))

const healArcher = wizard.heal.bind(archer, 10, 20)
console.log(healArcher())
console.log(archer.health)