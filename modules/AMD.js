// AMD 专门为浏览器设计的, 这意味着它异步加载脚本或模块

define(['module1', 'module2'], 
  function (module1Import, module2Import) {
    var module1 = module1Import
    var module2 = module2Import

    function dance() { }
    return {
      dance: dance
    }
  }
)