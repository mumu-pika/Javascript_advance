// CommonJS, 导入的语法是同步的
// 由于是同步的, 我们可以借助于module Bunlder 如： Browserify
// 将我们的代码捆绑到一个bundler.js 文件中, 并且仍然在浏览器上使用它
const module1 = require('module1')
const module2 = require('module2')

// const fight2 = require('module1').fight

function fight2() {


}

module.exports = {
  fight: fight
}


/*
  browserify lets us `require` modules in the
  browser by bundling up all of your dependencies.
  browserify 允许通过绑定所有浏览器中的模块

*/