require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Testa a função fetchItem', () => {
 // implemente seus testes aqui
	it('Testa se fetchItem é uma função', async () => {
	  expect(typeof fetchItem).toBe('function');
	});
	it('Executa a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
	  await fetchItem('MLB1615760527');
	  expect(fetch).toBeCalled();// https://jestjs.io/docs/expect#tohavebeencalled
	});
	it('Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
	  await fetchItem('MLB1615760527');
	  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
	  // https://www.leighhalliday.com/mock-fetch-jest
	});
	it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
		const actual = await fetchItem('MLB1615760527');
		expect(actual).toEqual(item);
		// https://jestjs.io/docs/expect#tomatchobjectobject
		// https://chi.swish.ink/posts/whats-the-difference-between-toequal-and-tomatchobject-in-jest
	});
	it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
	  const actual = fetchItem();
	  expect(await actual).toEqual('You must provide an url');
	});
	// fail('Teste vazio');
});
// first commit
