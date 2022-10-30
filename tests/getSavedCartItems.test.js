const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () =>{
    getSavedCartItems();
	expect(localStorage.getItem).toBeCalled();
  });
  it('verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () =>{
    getSavedCartItems();
	expect(localStorage.getItem).toBeCalled(JSON.stringify['cartItems']);
	// https://dicasdejavascript.com.br/javascript-como-converter-objeto-json-em-string/#:~:text=Suponha%20que%20voc%C3%AA%20tenha%20um,passando%20a%20string%20como%20par%C3%A2metro.
  });
});
