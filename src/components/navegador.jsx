import './navegador.css'
import logo from '../img/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'




export const Navegador = () =>{
    const [menu, setMenu ] = useState(false)
    const toggleMenu = () =>{
        setMenu(!menu)
    }


    return(
        <>
            <div className='Contenedor'>
                <header className='navegador'>
                    <img className='logo' src={logo}></img>
                    <button onClick={toggleMenu} className='navegador-button'>
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <nav className={ `navegador-nav ${ menu ? ' isActive' : ''}`}>
                        <ul className="navegador-ul">
                            <li className="navegador-li"><Link to='/Inicio' className="navegador-a">Inicio</Link></li>
                            <li className="navegador-li"><Link to="/Horario" className="navegador-a">Horario</Link></li>
                            <li className="navegador-li"><Link to="/Docentes" className="navegador-a">Docente</Link></li>
                            <li className="navegador-li"><Link to="/Asistencia" className="navegador-a">Asistencia</Link></li>
                            <li className="navegador-li"><Link to="/Ajustes" className="navegador-a">Ajustes</Link></li>
                            <li className="navegador-li"><Link to="/Registro" className="navegador-a">Registro</Link></li>
                            <li className="navegador-li"><Link to="/" className="navegador-a">Cerrar secion</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}