// new binding this
function Person(name, age) {
  this.name = name
  this.age = age
}

const person1 = new Person('Saber', 100)

// implicit binding 隐式的绑定
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    // 这里的this会隐式的指向person
    console.log('hi ' + this.name)
  }
}
console.log(person.hi())

// explicit binding 显式的绑定
// const person2 = {
//   name: 'saber',
//   age: 16,
//   hi: function () {
//     console.log('hi ' + this.setTimeout)
//   }.bind(window)
// }

// console.log(person2.hi())

// arrow function
 const person3 = {
  name: 'pika',
  age: 10,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
 }

 console.log(person3.hi())