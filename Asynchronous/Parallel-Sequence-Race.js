// Parallel  并行运行
// Sequence  按顺序运行
// Race      竞态, 谁先执行完就做那个, 忽略其他的

const promisify =(item, delay) =>
  new Promise ((resolve) =>
    setTimeout(() =>
      resolve(item), delay))

const a = () => promisify('a', 200)
const b = () => promisify('b', 100)
const c = () => promisify('c', 300)

// parallel
async function parallel() {
  const promises = [a(), b(), c()]
  const [output1, output2, output3] = await Promise.all(promises)

  return `parallel is done: ${output1}-${output2}-${output3}`
}

console.log(parallel().then(data => console.log(data)))

// race
async function race() {
  const promises = [a(), b(), c()]
  const [output1, output2, output3] = await Promise.race(promises)
  return `race is done: ${output1}`
}

race().then((data) => console.log(data))

// sequence
async function sequence() {
  const output1 = await a()
  const output2 = await b()
  const output3 = await c()

  return `sequence is done ${output1}-${output2}-${output3}`
}

sequence().then(data => console.log(data))
