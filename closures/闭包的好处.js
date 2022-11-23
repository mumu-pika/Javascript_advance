/* 
  闭包有两个主要的好处
  1、Memory efficient 内存效率
  2、Encapsulation 封装
*/

// 1、Memory efficient
// 下面heavyDuty中会创建3次bigArray, 然后销毁3次
function heavyDuty(index) {
  // suppose it's a huge database
  const bigArray = new Array(1000).fill('@')
  console.log('created')
  return bigArray[index]
}

console.log(heavyDuty(100))
console.log(heavyDuty(200))
console.log(heavyDuty(300))

// 采用闭包之后, 只需要创建一次bigArray
function heavyDuty2() {
  // suppose it's a huge database
  const bigArray = new Array(1000).fill('@')
  console.log('created Again')
  return function (index) {
    return bigArray[index]
  }
}

const getHeavyDuty2 = heavyDuty2()

console.log(getHeavyDuty2(100))
console.log(getHeavyDuty2(200))
console.log(getHeavyDuty2(300))

// 2、Encapsulation 封装
const Task = () => {
  const reading = () => {
    return 'reading'
  }
  const sleeping = () => {
    return 'sleeping'
  }
  // 在这里可以控制外部是否能够访问内部的变量, 起到隔离保护的作用
  return {
    reading,
    sleeping
  }
}

const day1 = Task()
console.log(day1.reading())
// console.log(day1.sleeping())
