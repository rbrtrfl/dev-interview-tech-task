import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to={`/${product.id}`}
            key={product.id}
          >
            <ProductCard
              product={product}
            />
          </Link>
        )))}
      </div>
    </div>

  );
}

export default ProductList;
