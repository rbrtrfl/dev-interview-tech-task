import React from 'react';
import Product from '../../utilities/types/Product.types';
import './ProductDetails.css';

type Props = {
  product: Product
}

function ProductDetails({ product }: Props) {
  return (
    (product) && (
      <div className="productdetails">
        <div className="productdetails-image-container">
          <img className="productdetails-image" src={product.image} alt={product.name} />
        </div>
        <div className="productdetails-divider" />
        <div className="productdetails-details">
          <div className="productdetails-text">
            <h3>{product.brand}</h3>
            <h3>{product.name}</h3>
          </div>
          {(product.tags !== '') && (
          <h4 className={`productdetails-tags-${product.tags.toLowerCase()}`}>{product.tags}</h4>)}
        </div>
      </div>
    )
  );
}

export default ProductDetails;
