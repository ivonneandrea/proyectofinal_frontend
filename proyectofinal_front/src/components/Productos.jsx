import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';

const Productos = () => {
  const { products, addProduct, removeProduct } = useContext(MyContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: '', price: '', image: '' });
  };

  return (
    <div>
      <h1>Productos</h1>
      <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Precio" />
      <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder="Imagen URL" />
      <button onClick={handleAddProduct}>Agregar Producto</button>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
