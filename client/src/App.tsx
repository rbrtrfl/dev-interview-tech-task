import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import productsApi from './utilities/api/products.api';
import ProductDetails from './components/ProductDetails/ProductDetails';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const productId = Number(useLocation().pathname.replace(/^\//g, ''));

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
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={(
            <ProductList
              productList={productList}
            />
)}
        />
        <Route
          path="/:productid"
          element={(
            <ProductDetails
              product={productList[productId - 1]}
            />
)}
        />
      </Routes>
    </div>
  );
}

export default App;
