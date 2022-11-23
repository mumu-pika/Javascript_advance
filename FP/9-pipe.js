// pipe 管道
// compose 是从左到右;  而pipe是从右到左

fn1(fn2(fn3(50))) // 分别以compose 和 pipe来实现

compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)
// 上面两种实现以后的输出是一致的

const compose = (f, g) => data => f(g(data))
const pipe = (f, g) => data => g(f(data))
