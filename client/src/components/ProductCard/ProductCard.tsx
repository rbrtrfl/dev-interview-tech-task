import React from 'react';

import Product from '../../utilities/types/Product.types';
import './ProductCard.css';

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="productcard">
      <div className="productcard-image-container">
        <img className="productcard-image" src={product.image} alt={product.name} />
      </div>
      <div className="productcard-divider" />
      <div className="productcard-details">
        <div className="productcard-text">
          <h3>{product.brand}</h3>
          <h3>{product.name}</h3>
        </div>
        <h4 className={`productcard-tags-${product.tags.toLowerCase()}`}>{product.tags}</h4>
      </div>
    </div>
  );
}
