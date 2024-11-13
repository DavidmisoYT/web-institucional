// InicioSesion.jsx
import React from 'react';
import './Styles/InicioSesion.css';
import { useNavigate } from 'react-router-dom';
export const Registro = () => {
    const navigate = useNavigate()
    const submit = async (event) =>{
      event.preventDefault();
      const correo = event.target.elements.email.value
      const past = event.target.elements.password.value
  
      const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users')
      const users = await response.json()
      
      const user = users.find(user => user.email === correo && user.password === past )
       if (user){
        navigate('/Inicio')
       }
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


