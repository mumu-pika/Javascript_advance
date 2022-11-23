// async-await 可以使用try-catch块

async function test() {
  try {
    await Promise.resolve('good!')
    // await Promise.reject('oopsie #1')
    await Promise.reject('oopsie #2')
  } catch (err) {
    console.log(err)
  }
  console.log('heel')
}

test()
