// inline caching
function findUser() {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Jackson',
  lastName: 'Michael'
}

findUser(userData)

/* 
  对于重复执行相同的方法, 编译器可以对此进行优化, 以便于每次它寻找用户数据的时候,
  它可以使用称为内联缓存的东西, 而不是每次去这个userData中去找key

*/
