const getSavedCartItems = () => {
  // seu código aqui
  const dadosSalvos = localStorage.getItem('itensSalvosDoCarrinho');
  
  return dadosSalvos;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
