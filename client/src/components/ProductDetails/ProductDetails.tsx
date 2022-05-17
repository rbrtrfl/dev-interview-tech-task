import React, { useState } from 'react';
import Product from '../../utilities/types/Product.types';
import './ProductDetails.css';
import { ReactComponent as AiFillEdit } from '../../assets/AiFillEdit.svg';

type Props = {
  product: Product
}

export default function ProductDetails({ product }: Props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="productdetails">
      <div className="productdetails-image-container">
        <img className="productdetails-image" src={product.image} alt={product.name} />
      </div>
      <div className="productdetails-divider" />
      {(editMode)
        ? (
          <div className="productdetails-details">
            <div className="productdetails-text">
              <input type="text" defaultValue={product.brand} />
              <input type="text" defaultValue={product.name} />
            </div>
            <h4 className={`productdetails-tags-${product.tags.toLowerCase()}`}>{product.tags}</h4>
          </div>
        )
        : (
          <div className="productdetails-details">
            <div className="productdetails-text">
              <h3>{product.brand}</h3>
              <h3>{product.name}</h3>
            </div>
            <h4 className={`productdetails-tags-${product.tags.toLowerCase()}`}>{product.tags}</h4>
          </div>
        )}
      <button type="button" onSubmit={() => setEditMode(!editMode)}>
        <AiFillEdit />
      </button>
    </div>
  );
}
