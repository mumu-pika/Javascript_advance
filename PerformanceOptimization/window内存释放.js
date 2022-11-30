// 内存性能优化, 这里将一个比较大的对象挂载到window身上

function MyObject() {}
// 比较大的数据
;(function () {
  let arr = new Array(100000).fill(null).map(e => new MyObject())
  // 如果这里不小心将数据挂载到windows上
  // 那么对于这个大数组arr进行了2次强引用，GC计数器发现2次强引用被赋值为null,最终调用GC
  window.arr2 = arr
})()

// 有两种方法可以将让这个对象所占用的内存释放掉
// 方法一: 将指向这个对象的引用置空,只要这个对象没有被引用, 那么就会被GC所回收
window.arr2 = null

// 方法二：操作任意的指向, 也就是将对象本身给清空了, obj.length置0, 将obj给清空了
window.arr2.length = 0
