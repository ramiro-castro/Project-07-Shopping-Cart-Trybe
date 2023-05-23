const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('verifica se ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () =>{
    saveCartItems('cartItem');
	expect(localStorage.setItem).toBeCalled();
  });
  it('verifica se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems('cartItem');
	expect(localStorage.setItem).toBeCalled(JSON.stringify['cartItems'],'cartItem');
	// https://dicasdejavascript.com.br/javascript-como-converter-objeto-json-em-string/#:~:text=Suponha%20que%20voc%C3%AA%20tenha%20um,passando%20a%20string%20como%20par%C3%A2metro.	
  });
});
