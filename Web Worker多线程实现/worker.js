// //创建一个Worker对象并向它传递将在新线程中执行的脚本的URL
// var worker = new Worker("worker.js")
// //接收worker传过来的数据函数、
// worker.onmessage = function(event){
//     console.log(event.data)
// }

// //向worker发送数据
// worker.postMessage('hello pika')


function fibonacci(n){
    return n<=2 ? 1 :fibonacci(n-1) + fibonacci(n-2)
}

var onmessage = function(event){
    var number = event.data
    console.log('分线程接收到主线程发送的数据：' + number)
    //计算
    var result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据' + result)
}