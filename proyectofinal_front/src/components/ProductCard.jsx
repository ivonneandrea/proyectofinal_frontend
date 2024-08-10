import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { MyContext } from '../context/MyContext';

const Producto = () => {
  const { products, addToCart } = useContext(MyContext);

  return (
    <div>
      <h1>Producto</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Producto;
