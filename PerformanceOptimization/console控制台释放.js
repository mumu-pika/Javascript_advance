function MyObject() {}

let arr = new Array(1000000).fill(null).map(e => new MyObject())

// console 内部会持有打印过的引用, 所以需要注释一下
// 此外prod的一些配置会移除console.log内部对其产生的强引用
// console.log(arr)

arr = null
