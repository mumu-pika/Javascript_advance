/* 
  经典面试题

*/

// const array = [1, 2, 3, 4, 5, 6]
// for (var i = 0; i < array.length; ++i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 2000)
// }

/* 
  这个例子中, closureI是作为立即执行函数的arguments,
  setTimeout中使用到了这个变量, 因此也是给closure.

  In this example, here created a function that
  gave us access to `i` and `i` we kept in the closure by
  passing it as a parameter, receiving it and using it
  inside of this callback funciton.
*/
const array = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < array.length; ++i) {
  ;(function (closureI) {
    setTimeout(() => {
      console.log(array[closureI])
    }, 2000)
  })(i)
}
