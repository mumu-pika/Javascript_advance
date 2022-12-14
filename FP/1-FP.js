/* 
  Functional Programming
  函数式编程语言在分布式计算方面表现非常好,
  会有多台机器同时处理相同的数据。

  在JS中, 像Redux还有React这样的库已经普及了函数式编程。

  函数式编程让关注点分离, 当然, OOP也是如此,
  将代码单独分成一个个块, 使得代码井井有条,
  使得我们的代码的每一部分都关注它擅长的地方。
  在OOP中, 使用class来划分；不同的是, FP也分离数据以及方法。

  数据与行为分离, FP中创建的对象是不可变的, 我们需要避免
  共享状态这样的事, 需要坚持纯函数的原则。

  一个好的函数要素
    * do one thing very well. (One Task)
    * return Statement
    * Pure
    * No shared state
    * Immutable State 不变的状态 (返回的是状态的副本)
    * Composable 可组合的
    * Predictable  可预测的

  FP的几大支柱；
  * pure functions 纯函数

*/
