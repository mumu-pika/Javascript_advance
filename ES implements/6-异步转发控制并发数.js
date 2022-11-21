/* 
  限制同时最大接口并发数量
*/
import Axios from 'axios'

const axios = axios.create({
  baseURL: "https//192.168.1.1",
  timeout: 2000,
  // headers: headers
})

function limitRequests(urls = [], limit = 3) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0 // 接口的并发数量

    // 同时启动limit个任务（这里limit已经在传参的时候预设置值为3）
    while (limit > 0) {
      start() // 启动一个任务
      limit -= 1
    }

    // 启动接口请求任务
    function start() {
      const url = urls.shift() // 从数组移除去除第一个任务
      if (url) {
        axios.post(url,params)
        .then(res => {
          // todo
          // console.log(res)
        })
        .catch(err => {
          // todo
          // console.error(err);
        })
        .finally(() => {
          if (count == len - 1) {
            // 任务全部完成
            resolve()
          }
          else {
            // 还有任务需要去执行
            count++
            start()
          }
        })
      }
    }
  })
}


// test
limitRequests(['http://xxa', 'http://xxb', 'http://xxc'])