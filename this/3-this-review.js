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
    console.log('hi' + this.name)
  }
}

// explicit binding 显式的绑定
const person2 = {
  
}
