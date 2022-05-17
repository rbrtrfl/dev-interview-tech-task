import Product from "../types/Product.types";

const baseUrl = 'http://127.0.0.1:4000/api';

const productsApi = {

  getAll: () => fetch(`${baseUrl}`)
    .then((response) => {
      if (response.status === 200) {
        const result = response.json();
        return result;
      }
    })
    .catch((e) => {
      console.error(e);
    }),

  editOneById: (product: Product) => fetch(`${baseUrl}/${product.id}`, {
    method: 'PATCH',
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.status === 201) {
        const result = response.json();
        return result;
      }
    })
    .catch((e) => {
      console.error(e);
    }),

};

export default productsApi;
