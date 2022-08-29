export const getData = (id = '') => {
  const url = 'https:/fakestoreapi.com/products/';
  return fetch(url + id);
};
