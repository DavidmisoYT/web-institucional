/*import React, { useState } from 'react';
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
              <label htmlFor="correo">Correo Electrónico:</label>  Cambiado de email a correo }
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
*/

import React, { useState } from 'react';
import './Styles/Registro.css';
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
        const correo = event.target.elements.correo.value;
        const telefono = event.target.elements.telefono.value;
        const password = event.target.elements.password.value;
        const edad = event.target.elements.edad.value;
        const taller = event.target.elements.taller.value;
        // Nuevos campos para los familiares
        const padreNombre = event.target.elements.padreNombre.value || null;
        const madreNombre = event.target.elements.madreNombre.value || null;
        const acudienteNombre = event.target.elements.acudienteNombre.value || null;
        const padreTelefono = event.target.elements.padreTelefono.value || null;
        const madreTelefono = event.target.elements.madreTelefono.value || null;
        const acudienteTelefono = event.target.elements.acudienteTelefono.value || null;
        const padreCorreo = event.target.elements.padreCorreo.value || null;
        const madreCorreo = event.target.elements.madreCorreo.value || null;
        const acudienteCorreo = event.target.elements.acudienteCorreo.value || null;

        const nuevoUsuario = {
          name: nombre,
          correo: correo,
          telefono: telefono,
          Grupo: grupo,
          Grado: grado,
          edad: edad, // Agregado el campo de edad
          taller: taller, // Agregado el campo de taller
          password: password,
          familiares: {
              padre: {
                  nombre: padreNombre,
                  telefono: padreTelefono,
                  correo: padreCorreo
              },
              madre: {
                  nombre: madreNombre,
                  telefono: madreTelefono,
                  correo: madreCorreo
              },
              acudiente: {
                  nombre: acudienteNombre,
                  telefono: acudienteTelefono,
                  correo: acudienteCorreo
              }
          }
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
        <div className="registro">
            <div className="formcontainer">
                <form className="register-form" onSubmit={submit}>
                  <div className="titulor">
                      <h1>Registrarse</h1>
                  </div>
                  <div className=''>
                    <div className="register-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" placeholder="Jonathan Alexander" required />
                    </div>
                    
                    <div className="register-group">
                        <label htmlFor="grado">Grado:</label>
                        <input type="number" id="grado" name="grado" placeholder="6 - 11" min="6" max="11" required />
                    </div>
                    
                    <div className="register-group">
                        <label htmlFor="grupo">Grupo:</label>
                        <input type="number" id="grupo" name="grupo" placeholder="1 - 8" min="1" max="8" required />
                    </div>
                    
                    <div className="register-group">
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input type="email" id="correo" name="correo" placeholder="Email@gmail.com" required />
                    </div>

                    <div className="register-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="number" id="telefono" name="telefono" placeholder="Número de teléfono" required />
                    </div>
                    <div className="register-group">
                        <label htmlFor="edad">Edad:</label>
                        <input type="number" id="edad" name="edad" placeholder="Edad del estudiante" required />
                    </div>

                    <div className="register-group">
                        <label htmlFor="taller">Taller:</label>
                        <input type="text" id="taller" name="taller" placeholder="Taller del estudiante" required />
                    </div>

                    <div className="register-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder="Contraseña" required />
                    </div>
                  </div>

                  {/* Campos para los familiares */}
                  <div className='contener'>
                    <div className="register-group">
                        <label htmlFor="padreNombre">Padre:</label>
                        <input type="text" id="padreNombre" name="padreNombre" placeholder="Nombre del Padre" />
                    </div>
                    <div className="register-group">
                        
                        <input type="text" id="padreTelefono" name="padreTelefono" placeholder="Teléfono del Padre" />
                    </div>
                    <div className="register-group">
                        
                        <input type="email" id="padreCorreo" name="padreCorreo" placeholder="Correo del Padre" />
                    </div>

                    <div className="register-group">
                        <label htmlFor="madreNombre">Madre:</label>
                        <input type="text" id="madreNombre" name="madreNombre" placeholder="Nombre de la Madre" />
                    </div>
                    <div className="register-group">
                       
                        <input type="text" id="madreTelefono" name="madreTelefono" placeholder="Teléfono de la Madre" />
                    </div>
                    <div className="register-group">
                       
                        <input type="email" id="madreCorreo" name="madreCorreo" placeholder="Correo de la Madre" />
                    </div>

                    <div className="register-group">
                        <label htmlFor="acudienteNombre">Acudiente:</label>
                        <input type="text" id="acudienteNombre" name="acudienteNombre" placeholder="Nombre del Acudiente" />
                    </div>
                    <div className="register-group">
             
                        <input type="text" id="acudienteTelefono" name="acudienteTelefono" placeholder="Teléfono del Acudiente" />
                    </div>
                    <div className="register-group">
                    
                        <input type="email" id="acudienteCorreo" name="acudienteCorreo" placeholder="Correo del Acudiente" />
                    </div>
                  </div>

                  {error && <p className="error-message">{error}</p>}
                  {mensaje && <p className="success-message">{mensaje}</p>}

                  <button type="submit" className='button-r'>Registrar</button>
                </form>
            </div>
        </div>
    );
};
