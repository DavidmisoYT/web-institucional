// InicioSesion.jsx
import React from 'react';
import './InicioSesion.css';

const Registro = ({ onLogin }) => {
    return (
      <>
        <div className="inicio-sesion">
            <div className="form-container">
            <form className="login-form">
              <div className='titulo'>
                <h1>Registrarse</h1>
              </div>
              <div className="form-group">
                    <label htmlFor="text">Nombre:</label>
                    <input type='text' id="text" name="text" required />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Grado:</label>
                    <input type="number" id="number" name="number" min="6" max="11" required />
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

export default Registro;

