const saveCartItems = (item) => {
  // seu código aqui
  // alert(item.innerHTML);
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
// if (typeof window !== 'undefined') {
//     localStorage.setItem('myCat', 'Tom');
// }
// const checkout = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null

// console.log(checkout);