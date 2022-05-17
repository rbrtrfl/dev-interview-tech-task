import React from 'react';
import Product from '../../utilities/types/Product.types';

type Props = {
  product: Product
}

function ProductDetails({ product }: Props) {
  return (
    (product) && (
      <div>{product.id}</div>
    )
  );
}

export default ProductDetails;
