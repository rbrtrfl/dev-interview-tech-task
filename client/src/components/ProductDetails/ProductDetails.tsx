import React, { useState } from 'react';
import Product from '../../utilities/types/Product.types';
import './ProductDetails.css';
import { ReactComponent as AiFillEdit } from '../../assets/AiFillEdit.svg';
import productsApi from '../../utilities/api/products.api';

type Props = {
  product: Product
}

export default function ProductDetails({ product }: Props) {
  const [editMode, setEditMode] = useState(false);

  function bean() {
    if (product.tags === 'Arabic') return 'Robusta';
    return 'Arabic';
  }

  function editProductDetails(event : any) {
    event.preventDefault();
    const updatedProduct = product;
    updatedProduct.brand = event.target[0].value;
    updatedProduct.name = event.target[1].value;
    updatedProduct.tags = event.target[2].value;
    productsApi.editOneById(updatedProduct)
      .then(() => setEditMode(false));
  }

  return (
    <div className="productdetails">
      <div className="productdetails-image-container">
        <img className="productdetails-image" src={product.image} alt={product.name} />
      </div>
      <div className="productdetails-divider" />
      {(editMode)
        ? (
          <form onSubmit={editProductDetails}>
            <div className="productdetails-details">
              <div className="productdetails-text">
                <input name="brand" type="text" defaultValue={product.brand} />
                <input type="text" defaultValue={product.name} />
              </div>
              <select defaultValue={product.tags}>
                <option value={product.tags}>{product.tags}</option>
                <option value={bean()}>{bean()}</option>
              </select>
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(!editMode)}>Cancel</button>
          </form>
        )
        : (
          <div>
            <div className="productdetails-details">
              <div className="productdetails-text">
                <h3>{product.brand}</h3>
                <h3>{product.name}</h3>
              </div>
              <h4 className={`productdetails-tags-${product.tags.toLowerCase()}`}>{product.tags}</h4>
            </div>
            <button type="button" onClick={() => setEditMode(!editMode)}>
              <AiFillEdit />
            </button>
          </div>
        )}
    </div>
  );
}
