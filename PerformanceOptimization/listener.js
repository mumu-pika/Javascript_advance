let fns = []
new Array(10000).fill(null).forEach(e => {
  function tmp() {}
  fns.push(tmp)
  // 这里是1万次事件针对这个同一个方法的绑定
  window.addEventListener('keypress', tmp)
})

fns.forEach(fn => window.removeEventListener('keypress', fn))
