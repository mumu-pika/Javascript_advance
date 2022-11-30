const Ws = require('ws')

;(ws => {
  // ws:localhost:8000
  const server = new Ws.Server({
    port: 8000
  })

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    server.on('open', handlerOpen)
    server.on('close', handlerClose)
    server.on('error', handlerError)
    server.on('connection', handlerConnection)
  }

  function handlerOpen() {
    console.log('WebSocket Server open')
  }

  function handlerClose() {
    console.log('WebSocket Server close')
  }

  function handlerError() {
    console.log('WebSocket Server error')
  }

  function handlerConnection(ws) {
    console.log('WebSocket Server connected')
    ws.on('message', handlerMessage)
  }

  // 接收前台发来的
  function handlerMessage(msg) {
    // server.clients 保存了所有连接到这个server上的客户端
    server.clients.forEach(function (c) {
      // 这里注意的是需要两次JSON转换
      c.send(JSON.stringify(JSON.parse(msg)))
    })
  }

  init()
})(Ws)
