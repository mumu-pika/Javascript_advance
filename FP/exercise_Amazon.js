// Amazon shopping

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

/* 
  ImpLement a cart feature
  1、Add items to cart.
  2、Add 3% tax to items in cart
  3、Buy item: cart -> purchases
  4、Empty cart

  Bonus：
  1、accept refunds
  2、Track user history

*/

// 尝试记录购物车
let amazonHistory = []

function getUserState() {}
function goForward() {}

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args))
function purchaseItem(...fns) {
  return fns.reduce(compose)
}
console.log(
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, { name: 'laptop', price: 300 })
)

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
  amazonHistory.push(user)
  const { cart } = user
  const taxRate = 1.3
  const updateCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updateCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}

console.log(amazonHistory)
