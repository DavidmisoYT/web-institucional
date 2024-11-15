import React, { useState } from 'react';
import './Styles/InicioSesion.css';
import { useNavigate } from 'react-router-dom';

export const InicioSesion = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const correo = event.target.elements.correo.value;
    const password = event.target.elements.password.value;

    try {
      const response = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/estudientes');
      const users = await response.json();

      const user = users.find(
        user => user.correo === correo && user.password === password
      );

      if (user) {
        navigate('/Inicio');
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (error) {
      setError("Error en la solicitud: " + error.message);
    }
  };

  return (
    <div className="inicio-sesion">
      <div className="form-container">
        <form className="login-form" onSubmit={submit}>
          <div className="titulo">
            <h1>Iniciar Sesión</h1>
          </div>
          
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" placeholder="Email@gmail.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Contraseña" required />
          </div>
          
          {error && <p className="error-message">{error}</p>}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
