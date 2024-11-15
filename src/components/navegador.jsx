import './navegador.css';
import logo from '../img/logo.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navegador = () => {
  const [menu, setMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const navigate = useNavigate();

  // Verifica la autenticación al cargar el componente
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsAuthenticated(true); // Si existe el token, el usuario está autenticado
    } else {
      setIsAuthenticated(false); // Si no existe el token, el usuario no está autenticado
    }
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Elimina el token de localStorage
    setIsAuthenticated(false); // Actualiza el estado de autenticación
    navigate('/web-institucional'); // Redirige a la página de inicio de sesión
  };

  return (
    <>
      <div className='Contenedor'>
        <header className='navegador'>
          <img className='logo' src={logo} alt="Logo" />
          <button onClick={toggleMenu} className='navegador-button'>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <nav className={`navegador-nav ${menu ? 'isActive' : ''}`}>
            <ul className="navegador-ul">
              <li className="navegador-li"><Link to='/web-institucional/Inicio' className="navegador-a">Inicio</Link></li>
              <li className="navegador-li"><Link to="/web-institucional/Horario" className="navegador-a">Horario</Link></li>
              <li className="navegador-li"><Link to="/web-institucional/Docentes" className="navegador-a">Docente</Link></li>
              <li className="navegador-li"><Link to="/web-institucional/Asistencia" className="navegador-a">Asistencia</Link></li>
              <li className="navegador-li"><Link to="/web-institucional/Registro" className="navegador-a">Registro</Link></li>
              <li className="navegador-li">
                {isAuthenticated ? (
                    <p onClick={handleLogout} className="navegador-a">Cerrar sesión</p>
                  // Muestra el botón de cerrar sesión si el usuario está autenticado
                ) : (
                  <Link to="/web-institucional" className="navegador-a">Iniciar sesión</Link> // Muestra el enlace para iniciar sesión si el usuario no está autenticado
                )}
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
