function fail() {
  try {
    console.log('this works, no problem')
  }
  catch (error) {
    // 如果try块中有错误的内容, 会进入catch块
    console.log('we have made an oopsie')
    console.log(error)
  }
  finally {
    console.log('here end')
    return 'you win'
  }

  console.log("it won't run")
}

fail()