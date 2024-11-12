// InicioSesion.jsx
import React from 'react';
import './styles/InicioSesion.css';

export const Registro = () => {
    const submit = (event) =>{
        event.preventDefault();
        console.log(event.target.elements.name.value)
        console.log(event.target.elements.password.value)
        console.log(event.target.elements.email.value)
        console.log(event.target.elements.grado.value)


    }

    return (
      <>
        
          
            <div className="inicio-sesion">
                <div className="form-container">
                <form className="login-form" onSubmit={submit}>
                <div className='titulo'>
                    <h1>Registrarse</h1>
                </div>
                <div className="form-group">
                        <label htmlFor="text">Nombre:</label>
                        <input type='text' id="text" name="name" placeholder='jhonthan alexander' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Grado:</label>
                        <input type="number" id="number" name="grado" placeholder='6 - 11' min="6" max="11" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" placeholder='Email@gmail.com' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder='Contraseña' required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                </div>
            </div>
        
      </>
    );
};


