/* 
  we can see the difference of `this`
*/

var b = {
  name: 'pika',
  run() {
    console.log(this)
  }
}

var c = {
  name: 'saber',
  run() {
    return function () {
      console.log(this)
    }
  }
}
var d = {
  name: 'Jerry',
  run() {
    return () => {
      console.log(this)
    }
  }
}

console.log(b.run())
console.log(c.run()())
console.log(d.run()())
