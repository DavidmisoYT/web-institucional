
import './navegador.css';
import logo from '../img/logo.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navegador = () => {
  const [menu, setMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const role = localStorage.getItem('rol'); 

    if (authToken) {
      setIsAuthenticated(true);
      setUserRole(role); 
    } else {
      setIsAuthenticated(false);
      setUserRole(null); 
    }
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('rol'); 
    localStorage.removeItem('userId');
    localStorage.removeItem('grado');
    localStorage.removeItem('grupo');
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/web-institucional');
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
              {userRole === 'estudiante' && ( 
                <li className="navegador-li">
                  <Link to='/web-institucional/Inicio' className="navegador-a">Perfil</Link>
                </li>
              )}
              {(userRole === 'docente' || userRole === 'director') && (
                <li className="navegador-li">
                  <Link to='/web-institucional/Perfil-docente' className="navegador-a">Perfil</Link>
                </li>
              )}
              <li className="navegador-li"><Link to="/web-institucional/Horario" className="navegador-a">Horario</Link></li>
              <li className="navegador-li"><Link to="/web-institucional/Docentes" className="navegador-a">Docente</Link></li>
          
              {userRole === 'estudiante' && ( 
                <li className="navegador-li">
                  <Link to='/web-institucional/inasistencias/:id' className="navegador-a">Asistencia</Link>
                </li>
              )}
              {(userRole === 'docente' || userRole === 'director') && (
                
                     <li className="navegador-li"><Link to="/web-institucional/Asistencia" className="navegador-a">Estudiantes</Link></li>
                
              )}
              <li className="navegador-li"><Link to="/web-institucional/Registro" className="navegador-a">Registro</Link></li>
              <li className="navegador-li">
                {isAuthenticated ? (
                  <p onClick={handleLogout} className="navegador-a">Cerrar sesión</p>
                ) : (
                  <Link to="/web-institucional" className="navegador-a">Iniciar sesión</Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
