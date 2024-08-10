import React, { useContext, useState } from 'react';
//import { MyContext } from '../context/MyContext';

//ARREGLAR PORQUE HAY PROBLEMAS CON LA IMPORTACION DE CONTEXT


const Productos = () => {

  return (
    <div>
      <h1>Productos</h1>
      <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Precio" />
      <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder="Imagen" />
      <button onClick>Agregar Producto</button>

      <div className="product-list">
          <div>
            <h2></h2>
            <button onClick>Eliminar</button>
          </div>
      </div>
    </div>
  );
};

export default Productos;
