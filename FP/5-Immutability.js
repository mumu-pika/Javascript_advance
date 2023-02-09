// Immutability
/*
  不变性意味着不改变数据, 不改变状态。
  而是创建状态的副本, 返回操作后的新的状态

  如果数据非常庞大对于存储的开销成本是巨大,
  因此实际上, 一般只会复制对状态所做的更改,
  而在内存中其他没有改变的部分还在那里, 这个称为
  structural sharing (结构共享)。
*/

const obj = { name: 'apple' }
function clone(obj) {
  return { ...obj } // this is pure
}

const cloneObj = clone(obj)
obj.name = 'banana'
console.log(obj)
console.log(cloneObj)
