import './navegador.css'
import logo from '../img/logo.png'
import { useState } from 'react'



export const Navegador = () =>{
    const [menu, setMenu ] = useState(false)
    const toggleMenu = () =>{
        setMenu(!menu)
    }


    return(
        <>
            <header className='navegador'>
                <img className='logo' src={logo}></img>
                <button onClick={toggleMenu}
                    className='navegador-button'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                <nav className={ `navegador-nav ${ menu ? ' isActive' : ''}`}>
                    <ul className="navegador-ul">
                    <li className="navegador-li"><a href='' className="navegador-a">Inicio</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Horario</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Docente</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Asistencia</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Ajustes</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Registro</a></li>
                        <li className="navegador-li"><a href="" className="navegador-a">Cerrar secion</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}