// hidden classes
function Animal(x, y) {
  this.x = x
  this.y = y
}

const obj1 = new Animal(1, 2)
const obj2 = new Animal(3, 4)


/* 
  The code below actually is going to make 
  the complier run slower.
  You want to try and instantiate your object
  properties in the same order (obj1 and obj2 have the same properties)

*/


obj1.a = 30
obj1.b = 100
obj2.b = 30
obj2.a = 100

/* 
  如果我们想要做优化的话, 可以提前在class中的constructor函数中设置
  属性, 比如上面的属性a, b.
*/