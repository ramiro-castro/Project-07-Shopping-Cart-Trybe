 // const fetch = require('node-fetch');
// const loanding = (flag) => {
//  const itensShop = document.querySelector('section.items');
//  console.log('flag');
//  console.log(flag);
//  if (flag) { 
//   const h2 = document.createElement('h2');
//   h2.className = 'loading';
//   h2.innerText = 'Carregando...';
//   itensShop.appendChild(h2); 
//  } 
//  if (!flag) {
//   // console.log('entrei no else');
//   const h2 = document.querySelector('h2.loading');
//   console.log('entrei no else loading');
//   h2.remove();
//  }
// };

const fetchProducts = async (consulta) => {
  // seu código aqui
  // console.log(consulta);
  // loanding(true);
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${consulta}`;
  const request = await fetch(url) // 
    .then((response) => response.json())
    .catch((e) => e.message); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message
  // loanding(false);
  return request;
// https://app.betrybe.com/course/front-end/javascript-e-testes-assincronos/javascript-assincrono-fetch-api-e-asyncawait/874d3ca3-db7c-4b82-8795-6bc9a664d458/conteudos/eda5f0a7-a18e-4092-b409-224d61130280/fetch-api/585ccb78-e9b0-4ad3-be97-b76547d62239?use_case=previous_button
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    // loanding,
  };
}
