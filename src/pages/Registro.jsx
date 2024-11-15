import React, { useState } from 'react';
import './Styles/InicioSesion.css';
import { useNavigate } from 'react-router-dom';

export const Registro = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    const submit = async (event) => {
        event.preventDefault();
        const nombre = event.target.elements.name.value;
        const grado = event.target.elements.grado.value;
        const grupo = event.target.elements.grupo.value;
        const correo = event.target.elements.correo.value; // Nombre correcto aquí
        const telefono = event.target.elements.telefono.value;
        const password = event.target.elements.password.value;
      
        const nuevoUsuario = {
          name: nombre,
          correo: correo,   // Asegurarse de que coincide con la API
          telefono: telefono,
          Grupo: grupo,
          Grado: grado,
          password: password
        };
      
        try {
          const response = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/estudientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoUsuario)
          });
      
          if (response.ok) {
            setMensaje("Usuario registrado con éxito");
            navigate('/web-institucional');
          } else {
            const errorData = await response.json();
            setError(errorData.message || "Error al registrar usuario");
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
              <h1>Registrarse</h1>
            </div>

            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" placeholder="Jonathan Alexander" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="grado">Grado:</label>
              <input type="number" id="grado" name="grado" placeholder="6 - 11" min="6" max="11" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="grupo">Grupo:</label>
              <input type="number" id="grupo" name="grupo" placeholder="1 - 8" min="1" max="8" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico:</label> {/* Cambiado de email a correo */}
              <input type="email" id="correo" name="correo" placeholder="Email@gmail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="number" id="telefono" name="telefono" placeholder="Número de teléfono" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" placeholder="Contraseña" required />
            </div>
            
            {error && <p className="error-message">{error}</p>}
            {mensaje && <p className="success-message">{mensaje}</p>}

            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    );
};
