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

function addItems(item) {
  user.cart.push(item)
}


