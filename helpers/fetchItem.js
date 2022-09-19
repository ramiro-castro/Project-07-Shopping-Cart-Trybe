 // const fetch = require('node-fetch');

const fetchItem = async (consultaID) => {
  // seu código aqui
  
  const url = `https://api.mercadolibre.com/items/${consultaID}`;
  
  const request = await fetch(url) // 
   .then((response) => response.json())
   .catch((e) => e.message); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message
  
  return request;
  // https://app.betrybe.com/course/front-end/javascript-e-testes-assincronos/javascript-assincrono-fetch-api-e-asyncawait/874d3ca3-db7c-4b82-8795-6bc9a664d458/conteudos/eda5f0a7-a18e-4092-b409-224d61130280/fetch-api/585ccb78-e9b0-4ad3-be97-b76547d62239?use_case=previous_button
};

// https://stackoverflow.com/questions/48036038/javascript-async-function-console-log-the-returned-data
// fetchItem('MLB1341706310').then((data) => {
//   console.log(data);
// });
// const actual = fetchProducts();
// actual.then((data) => {
// console.log(data);
// });

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
