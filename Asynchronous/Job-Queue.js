// Callback Queue - Task Queue  回调队列/宏任务
setTimeout(() => {
  console.log('Time stop！')
}, 2000)


// Job Queue - MicroTask Queue  工作队列/微任务
// Promise不是Web API的一部分, 而是JS本身的部分
// 微任务比宏任务有更高的优先级
