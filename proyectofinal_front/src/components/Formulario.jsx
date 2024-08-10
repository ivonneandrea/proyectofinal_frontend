import React, { useState } from 'react';

const Formulario = () => {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // me falta la logica para crear la cuenta
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
      <label>Correo electrónico</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      <label>Contraseña:</label>
      <input type="password" name="password" value={form.password} onChange={handleChange} />
      <button type="submit">Crear Cuenta</button>
    </form>
  );
};

export default Formulario;
