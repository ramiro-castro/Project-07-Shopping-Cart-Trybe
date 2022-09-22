// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * 
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

// import { fetchProducts } from './helpers/fetchProducts';
const poeNoCarrinho = document.getElementsByClassName('cart__items')[0]; // tag do tipo <ol>

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const callCreateProductItemElement = async () => {
  const object = await fetchProducts('computador');
  const arrayComputers = object.results;
  const addItemSection = document.getElementsByClassName('items');
  // alert(addItemSection);
  arrayComputers.forEach((computer) => {
   const { id, title, thumbnail } = computer;
   const createItem = createProductItemElement({ id, title, thumbnail });
   addItemSection[0].appendChild(createItem);// https://stackoverflow.com/questions/31861190/getelementsbyclass-and-appendchild
  }); 

//   console.log(object);
//   return object;
};
// const actual = productItemElement();
// actual.then((data) => {
// console.log(data);
// });
/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
function cartItemClickListener(li) {
//   const liDoProduto = li.parentElement.firstChild.innerText;
//   alert(liDoProduto);
alert(li);
}

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  // li.addEventListener('click', cartItemClickListener(li));
  return li;
};

function callCreateCartItemElement() {
 const botoesAddCart = document.querySelectorAll('.item__add');
// vou pegar todos os botoes add ao carrinho e mapea-los com forEach
  botoesAddCart.forEach((botao) => {
   botao.addEventListener('click', async () => {
    const idDoProduto = botao.parentElement.firstChild.innerText;
    // alert(id);
    const dadosDoProduto = await fetchItem(idDoProduto);
    // alert(fetchItemProduto);
    poeNoCarrinho.appendChild(createCartItemElement(dadosDoProduto));
   });
  });
}

window.onload = async () => { 
  await callCreateProductItemElement();
  callCreateCartItemElement();
};
