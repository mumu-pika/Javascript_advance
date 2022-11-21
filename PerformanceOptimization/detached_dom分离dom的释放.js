/* 
  Dom元素作为一个html的对象以及它作为JS的引用对象的时候,
  那么, 当页面被删除的时候, JS的引用是否还存在。
  对于已分离的情况的话, JS的引用是还在的, 那这种情况，这个引用还会占据着内存

*/

{/* <body>
    <div id="A">
      父-domA
      <div id="B">
        子-domB
      </div>
    </div>
</body> */}


  // 分别获取domA和domB这两个dom元素的引用
  let domA = document.querySelector('#A')
  let domB = document.querySelector('#B')


  // 一般来说, 引用页面元素时, 仅仅删除页面元素是不会自动释放js引用的
  setTimeout(() => {
    document.body.removeChild(domA) // 这里是页面删除了domA

    // 去做释放
    domA = null // 必须两个清除(存在父子关系)
    domB = null // 必须两个清除(存在父子关系)

  }, 1000)

