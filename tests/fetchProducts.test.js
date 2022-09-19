require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Testa a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', async () => {
	expect(typeof fetchProducts).toBe('function');
  });
  it('Executa a função fetchProducts com o argumento "computador" e testa se fetch foi chamada', async () => {
	await fetchProducts('computador');
	expect(fetch).toBeCalled();// https://jestjs.io/docs/expect#tohavebeencalled
  });
  it('Testa se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
	await fetchProducts('computador');
	expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
	// https://www.leighhalliday.com/mock-fetch-jest
  });
  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
	const actual = fetchProducts();
	expect(await actual).toEqual('You must provide an url');;
  });
  // fail('Teste vazio');
});
