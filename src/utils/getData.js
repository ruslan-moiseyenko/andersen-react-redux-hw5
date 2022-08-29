export const getData = (id = '') => {
  const url = 'https://api.escuelajs.co/api/v1/products/';
  return fetch(url + id);
};
