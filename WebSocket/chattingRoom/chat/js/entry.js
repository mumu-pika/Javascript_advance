; ((doc, storage) => {
  const oUsername = doc.querySelector('#username')
  const oEnterBtn = doc.querySelector('#enter')

  // 一个模块肯定是需要有一个init()初始化函数
  const init = () => {
    bindEvent()
  }

  // 绑定事件声明函数
  function bindEvent() {
    // addEventListener(type, listener, useCapture) 
    // 第三个参数默认为false, 也就是事件捕获
    oEnterBtn.addEventListener('click', handlerEnterBtnClick, false)

  }

  function handlerEnterBtnClick() {
    // trim() 去除字符串首尾空格字符
    const username = oUsername.value.trim()

    // 设定用户名长度阈值
    if (username.length < 6 || username.length > 12) {
      alert('用户名应为6位至12位之间')
      return
    }

    // 将合法的用户名存入localStorage
    storage.setItem('username', username)
    /* 
      Location 对象存储在 Window 对象的 Location 属性中，
      表示那个窗口中当前显示的文档的 Web 地址。
      它的 href 属性存放的是文档的完整 URL，
      其他属性则分别描述了 URL 的各个部分。
    */
    // 跳转至index主页
    location.href = 'index.html'
  }


  init()

})(document, localStorage, location);