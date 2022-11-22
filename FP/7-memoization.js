// Memoization -- Caching
/*
  Caching缓存只是一种加快程序速度并将某些数据保存在易于访问的地方.
  Memoization是一种特定形式的Caching, 我们动态规划（dynamic programming）中使用比较多。
*/

function memoizedAdd100 () {
  // 缓存空间
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n]
    }
    else {
      cache[n] = n + 100
      return cache[n]
    }
  }
}

const fn = memoizedAdd100()
console.log('No.1: ', fn(2))
console.log('No.2: ', fn(6))