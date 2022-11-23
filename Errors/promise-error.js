Promise.resolve('asyncFail')
  .then(response => {
    // throw new Error('#1 fail')
    Promise.resolve()
      .then(() => {
        throw new Error('#3 fail')
      })
      .catch(err => {
        console.log('inside promise', err)
      })
    return response
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    return err
  })
  .then(response => {
    // console.log(response.message)
    throw new Error('#2 fail')
  })
  .catch(err => {
    console.log('final error', err)
  })

/* 
    一旦抛出一个error被catch捕获了之后, 就不会被
    后面其他的catch所捕获, 除非在其之前再抛出error.
    对于每一个promise, 都应该需要一个catch来捕获异常

  */
