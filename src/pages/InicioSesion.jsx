/*import React, { useState } from 'react';
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
        
        localStorage.setItem('authToken', 'userToken'); 
        localStorage.setItem('userId', user.id); 
        localStorage.setItem('grado', user.Grado);
        localStorage.setItem('grupo', user.Grupo);
        navigate('/web-institucional/Inicio');
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
*/

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
      // Obtener datos de estudiantes
      const estudianteResponse = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/estudientes');
      const estudiantes = await estudianteResponse.json();

      // Obtener datos de docentes
      const docenteResponse = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/docentes');
      const docentes = await docenteResponse.json();

      // Buscar en estudiantes
      const estudiante = estudiantes.find(
        user => user.correo === correo && user.password === password
      );

      // Buscar en docentes
      const docente = docentes.find(
        user => user.correo === correo && user.password === password
      );

      if (estudiante) {
        // Inicio de sesión como estudiante
        localStorage.setItem('authToken', 'userToken');
        localStorage.setItem('userId', estudiante.id);
          localStorage.setItem('grado', estudiante.Grado);
          localStorage.setItem('grupo', estudiante.Grupo);
        localStorage.setItem('rol', 'estudiante');
        navigate('/web-institucional/Inicio');
      } else if (docente) {
        // Inicio de sesión como docente o director
        localStorage.setItem('authToken', 'userToken');
        localStorage.setItem('userId', docente.id);
        localStorage.setItem('rol', docente.rol.toLowerCase()); // rol puede ser "docente" o "director"
        navigate('/web-institucional/Perfil-docente');

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
