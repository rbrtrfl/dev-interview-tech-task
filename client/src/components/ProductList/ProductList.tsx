import React, { useState, useEffect } from 'react';
import Product from '../../utilities/types/Product.types';
import ProductCard from '../ProductCard/ProductCard';
import productsApi from '../../utilities/api/products.api';
import './ProductList.css';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProductList() {
      const result = await productsApi.getAll();
      if (result !== undefined) {
        setProductList(result.data);
      }
    }
    getProductList();
  }, []);

  return (
    <div className="productlist">
      <div className="productlist-card-container">
        {(productList.length > 0) && (productList.map((product : Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )))}
      </div>
    </div>

  );
}

export default ProductList;
