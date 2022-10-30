// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const { loanding } = require('./helpers/loading');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * 
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
// const fetch = require('node-fetch');
// import { fetchItem } from './helpers/fetchItem';
// import { fetchProducts } from './helpers/fetchProducts';

const listaNoCarrinho = document.querySelector('ol.cart__items'); 

// tag do tipo <ol> // usei querySelecctor pois facilita trabalhar com forEach
// const recoveryDataCart = JSON.parse(getSavedCartItems('cartItems')); // https://www.horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const loanding = (flag) => {
  const itensShop = document.querySelector('section.items');
  if (flag) { 
    const h2 = document.createElement('h2');
    h2.className = 'loading';
    h2.innerText = 'Carregando...';
    itensShop.appendChild(h2); 
  } 
  if (!flag) {
    // console.log('entrei no else');
    const h2 = document.querySelector('h2.loading');
    console.log('entrei no else loading');
    h2.remove();
  }
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
  const object = await fetchProducts('commputador');
  const arrayComputers = object.results;
  const addItemSection = document.getElementsByClassName('items');
  // alert(addItemSection);
  // loanding(false);
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

// cart price inicia
let sumPrice = 0;
const priceInCart = document.querySelector('section.cart');
const p = document.createElement('p');
p.className = 'total-price';
p.innerText = `Preço Total = $${sumPrice}`;// o $ (cifrao) é necessário para que idexOf encontre o preço em buscaPreco()
priceInCart.appendChild(p);
const updatePrice = document.querySelector('p.total-price');

const totalPrice = (price, sum) => {
  if (sum) {
   sumPrice += price;
  } else {
   console.log(sumPrice);
   sumPrice -= price;
  } 
  updatePrice.innerHTML = `Preço Total = $${sumPrice}`;
  localStorage.setItem('priceItems', JSON.stringify(updatePrice.innerHTML));
};

const buscaPreco = (itemCarrinho, localStorage) => {
  console.log(itemCarrinho);
  if (itemCarrinho === null) { return 0; }
  if (!localStorage) { 
    string = itemCarrinho.innerHTML; 
  } else {
    string = itemCarrinho;
  }
  // console.log('stringBuscaPreco');
  // console.log(string);
  posicaoPrice = string.indexOf('$') + 1;
  let priceElement = [];
  for (let index = posicaoPrice; index < string.length; index += 1) {
    priceElement.push(string[index]);
  }
  priceElement = priceElement.join('');
  return parseFloat(priceElement);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  // li.addEventListener('click', cartRemoveItem(li));
  console.log('entrei em createCart');
  console.log(li);
  return li;
};

function callCreateCartItemElement() {
 const botoesAddCart = document.querySelectorAll('.item__add');
 // alert(botoesAddCart);
 // vou pegar todos os botoes add ao carrinho e mapea-los com forEach
  botoesAddCart.forEach((botao) => {
   botao.addEventListener('click', async () => {
    const idDoProduto = botao.parentElement.firstChild.innerText;
    // alert(id);
    console.log(idDoProduto);
    const dadosDoProduto = await fetchItem(idDoProduto);
    console.log(typeof (dadosDoProduto.price));
    totalPrice(dadosDoProduto.price, true);
    // alert(fetchItemProduto);
    // createCartItemElement(dadosDoProduto);
    listaNoCarrinho.appendChild(createCartItemElement(dadosDoProduto));// gera itemCart no html
    // alert(listaNoCarrinho);
    console.log(listaNoCarrinho.innerHTML);
    saveCartItems(listaNoCarrinho.innerHTML);
    });
  });
}

const carregaCarrinhoDaMemoria = () => {
   // https://www.horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/
  const recoveryDataCart = getSavedCartItems('cartItems');
  const recoveryPriceCart = localStorage.getItem('priceItems');
  console.log('testa carregamento do carrinho');
  console.log(JSON.parse(recoveryDataCart));
  console.log(JSON.parse(recoveryPriceCart));
  listaNoCarrinho.innerHTML = JSON.parse(recoveryDataCart);
  updatePrice.innerHTML = JSON.parse(recoveryPriceCart);
  
  sumPrice = buscaPreco(JSON.parse(recoveryPriceCart), true);
  console.log('SumPrice Recovery');
  console.log(sumPrice);
};

const cartRemoveItem = async () => {
  // https://codepen.io/devcapu-the-looper/pen/NWPOjmp?editors=1010
  listaNoCarrinho.addEventListener('click', function (e) {
    // e.target é o elemento (li) clicado
    if (e.target && e.target.classList.contains('cart__item')) {
      const priceSub = buscaPreco(e.target, false);
      totalPrice(priceSub, false);
      // console.log(typeof priceSub);

      this.removeChild(e.target); // Apaga o filho
      saveCartItems(listaNoCarrinho.innerHTML);
    }
  }, false);
};
const botaoRemover = document.querySelector('.empty-cart'); 
const cartRemoveTudo = async () => {
// https://codepen.io/devcapu-the-looper/pen/NWPOjmp?editors=1010
  botaoRemover.addEventListener('click', function (e) {
// e.target é o elemento (li) clicado
   if (e.target && e.target.classList.contains('empty-cart')) {
// alert(e.target.textContent); // Mostra o texto da li clicada
     listaNoCarrinho.innerHTML = '';
     saveCartItems(listaNoCarrinho.innerHTML);
     sumPrice = 0;
     updatePrice.innerHTML = `Preço Total = $${sumPrice}`;
     localStorage.setItem('priceItems', JSON.stringify(updatePrice.innerHTML));
     // document.location.reload(true);
   }
  }, false);
};

window.onload = async () => { 
  loanding(true);
  await callCreateProductItemElement();
  loanding(false);
  callCreateCartItemElement();
  await cartRemoveItem();
  carregaCarrinhoDaMemoria();
  await cartRemoveTudo();
};
