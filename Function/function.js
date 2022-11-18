//  Functions are first class citizens in JS
// 1、functions can be assigned to variables and properties of objects
var staff = function () {}

// 2、we can pass functions as arguments into a function
function a (fn) {
  fn()
}

a(function() {console.log('hi')})

// 3、we can return functions as a value from other functions.
function b () {
  return function c() {
    console.log('xixi')
  }
}

var d = b()
d()

/* 
  The idea of a first class citizen property in JS
  introduces JS to a whole world called functional
  programming.

*/