; ((doc, Socket, storage, location) => {

  const oList = doc.querySelector('#list')
  const oMsg = doc.querySelector('#message')
  const oSendBtn = doc.querySelector('#send')

  let username = ''

  // 大部分浏览器是支持websocket
  // 直接获取websocket
  // 需要设置开启websocker server的端口
  const ws = new Socket('ws:localhost:8000')

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    oSendBtn.addEventListener('click', handlerSendBtnClick, false)
    ws.addEventListener('open', handlerOpen, false)
    ws.addEventListener('close', handlerClose, false)
    ws.addEventListener('error', handlerError, false)
    ws.addEventListener('message', handlerMessage, false)
  }

  /* 
    在后端会把消息给广播出去, 这样所有的客户端都会收到消息
  */
  function handlerSendBtnClick() {
    // console.log('Send Message'
    const msg = oMsg.value
    // 如果去除前后的空字符之后, 没有输入合法内容, 直接return
    if (!msg.trim().length) {
      return
    }
    ws.send(JSON.stringify({
      user: username,
      dataTime: new Date().getTime(),
      message: msg
    }))
  }

  function handlerOpen() {
    console.log('WebSocket open')
    username = storage.getItem('username')

    // 有可能出现绕开entry.html直接来到index.html
    if (!username) {
      location.href = 'entry.html'
      return
    }
  }

  function handlerClose() {
    console.log('WebSocket close')
  }

  function handlerError() {
    console.log('WebSocket error')
  }

  function handlerMessage(e) {
    console.log('WebSocket message')
    const msgData = JSON.parse(e.data)
    console.log(msgData)
    oList.appendChild(createMsg(msgData))
  }

  function createMsg(data) {
    const { user, dataTime, message } = data
    const oItem = doc.createElement('li')
    oItem.innerHTML = `
     <p>
        <span>${user}</span>
        <i>${new Date(dataTime)}}</i>
      </p>
      <p>消息：${message}</p>
    `
    return oItem
  }


  init()

})(document, WebSocket, localStorage, location);