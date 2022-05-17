import React from 'react';
import Product from '../../utilities/types/Product.types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

type Props = {
  productList: Product[]
}

function ProductList({ productList }: Props) {
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
