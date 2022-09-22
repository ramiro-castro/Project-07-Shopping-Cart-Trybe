const saveCartItems = (cartItem) => {
  // seu código aqui
  localStorage.setItem('itensSalvosDoCarrinho', cartItem.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
