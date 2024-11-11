// InicioSesion.jsx
import React from 'react';
import './InicioSesion.css';

const InicioSesion = ({ onLogin }) => {
    return (
      <>
        <div className="inicio-sesion">
            <div className="form-container">
            <form className="login-form">
              <div className='titulo'>
                <h1>Iniciar Sesión</h1>
              </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
      </>
    );
};

export default InicioSesion;

