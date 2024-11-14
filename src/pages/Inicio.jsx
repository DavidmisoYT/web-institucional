import './Styles/Inicio.css'
import foto from '../img/FotoPerfil.png'
import logo from '../img/logo-.png'
import { useState } from 'react'
const nom= 'David Aguirre'
const taller='Soluciones informaticas'
const grupo = '10-3'

export const Inicio = () =>{
    const [info, setInfo ] = useState(false)
    const toggleInfo = () =>{
        setInfo(!info)
    }
    const [padre, setPadre ] = useState(false)
    const togglePadre = () =>{
        setPadre(!padre)
    }
    const [madre, setMadre ] = useState(false)
    const toggleMadre = () =>{
        setMadre(!madre)
    }
    const [acudiente, setAcudiente ] = useState(false)
    const toggleAcudiente = () =>{
        setAcudiente(!acudiente)
    }
    const [correo, setCorreo ] = useState(false)
    const toggleCorreo = () =>{
        setCorreo(!correo)
    }
    return(
        <>
            
                <img src={logo} alt="Escudo y nombre de la institucion" className='Logo-i'/>
                <img src={foto} alt="Foto del estudiante fondo" className='Fondo-i' /> 
                <div className='Contenedor-i'>
                    <div className=''>
                        <form>
                        <textarea className='Novedades' rows='31' cols='25'/>
                        </form>
                    </div>
                    <div className='Informacion-g'>
                            <img src={foto} alt="Foto del estudiante" className='Perfil'/>
                            <p>Nombre: {nom}<br/>Taller: {taller}<br/> Grupo: {grupo}</p>
                            <div onClick={toggleInfo} className='ContenedorMasInfo'>
                            <button className='info-button'>
                                <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
                                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                </svg>
                            </button>
                                <h1>Mas Informacion</h1>
                            </div>
                            <div className={`MasInfo ${info ? ' isActive' : ''} `}>
                                <ul>
                                    <li className="MasInfo-li" >
                                        <button onClick={toggleCorreo}   >Correo:</button> 
                                        <ul className={`MasinfoC ${correo ? ' isActive' : ''}`}  >
                                            <li className="InfoC">Institucional: </li>
                                            <li className="InfoC">Personal: </li>
                                        </ul>
                                    </li>
                                    <li className="MasInfo-li">Telefono: </li>
                                    <li className="MasInfo-li">Edad: </li>
                                    <li className="MasInfo-li">Grupo Sangineo: </li>
                                    <li className="MasInfo-li" ><button onClick={togglePadre}>Padre: </button>
                                        <ul className={`MasinfoP ${padre ? ' isActive' : ''}`}>
                                            <li className="infoP">Telefono: </li>
                                            <li className="infoP">Correo: </li>
                                        </ul>
                                    </li>
                                    <li className="MasInfo-li" ><button onClick={toggleMadre}>Madre: </button>
                                        <ul className={`MasinfoM ${madre ? ' isActive' : ''}`}>
                                            <li className="infoM">Telefono:</li>
                                            <li className="infoM">Correo: </li>
                                        </ul>
                                    </li>
                                    <li className="MasInfo-li" ><button onClick={toggleAcudiente}>Acudiente: </button>
                                        <ul className={`MasinfoA ${acudiente ? ' isActive' : ''}`}>
                                            <li className="infoA">Telefono: </li>
                                            <li className="infoA">Correo: </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                    </div>
                </div>
            
        </>
    ) 
}