/*import './Styles/Inicio.css'
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
}*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../img/logo-.png';  // Asegúrate de importar tus imágenes correctamente
import foto from '../img/FotoPerfil.png';  // Importa la foto
import './Styles/inicio.css'

export const Inicio = () => {
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState(false);
    const [correo, setCorreo] = useState(false);
    const [padre, setPadre] = useState(false);
    const [madre, setMadre] = useState(false);
    const [acudiente, setAcudiente] = useState(false);

    // Funciones para manejar el toggle de información
    const toggleInfo = () => setInfo(!info);
    const toggleCorreo = () => setCorreo(!correo);
    const togglePadre = () => setPadre(!padre);
    const toggleMadre = () => setMadre(!madre);
    const toggleAcudiente = () => setAcudiente(!acudiente);

    useEffect(() => {
        // Obtener el id del estudiante desde localStorage (suponiendo que ya está guardado ahí)
        const studentId = localStorage.getItem('userId'); // Asumimos que guardas el id con este nombre

        // Si no hay id, no se puede hacer la consulta
        if (!studentId) {
            console.log('ID de estudiante no encontrado');
            setLoading(false);
            return;
        }

        // Realizar la solicitud GET para obtener el estudiante con el id correspondiente
        axios.get(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`)
            .then(response => {
                setStudentData(response.data);
                setLoading(false); // Ya que se obtuvieron los datos, dejamos de cargar
            })
            .catch(error => {
                console.error('Error al obtener los datos del estudiante:', error);
                setLoading(false); // Detenemos el loading incluso si hay error
            });
    }, []);

    // Mientras se cargan los datos, mostramos un mensaje de carga
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Si no hay datos del estudiante
    if (!studentData) {
        return <div>No se encontraron datos del estudiante.</div>;
    }

    return (
        <>
            <img src={logo} alt="Escudo y nombre de la institucion" className='Logo-i' />
            <img src={foto} alt="Foto del estudiante fondo" className='Fondo-i' />
            <div className='Contenedor-i'>
                <div>
                    <form>
                        <textarea className='Novedades' rows='31' cols='25' />
                    </form>
                </div>
                <div className='Informacion-g'>
                    <img src={foto} alt="Foto del estudiante" className='Perfil' />
                    <p>Nombre: {studentData.name}<br />Taller: {studentData.taller || "No disponible"}<br /> Grupo: {studentData.Grado} - {studentData.Grupo}</p>
                    <div onClick={toggleInfo} className='ContenedorMasInfo'>
                        <button className='info-button'>
                            <svg className="svg-info" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                                <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </button>
                        <h1>Mas Información</h1>
                    </div>
                    <div className={`MasInfo ${info ? 'isActive' : ''}`}>
                        <ul>
                            <li className="MasInfo-li">
                                <button onClick={toggleCorreo}>Correo:</button>
                                <ul className={`MasinfoC ${correo ? 'isActive' : ''}`}>
                                    <li className="InfoC">Institucional: {studentData.correo}</li>
                                    <li className="InfoC">Personal: {studentData.CorMadr}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li">Telefono: {studentData.telefono}</li>
                            <li className="MasInfo-li">Edad: {studentData.edad}</li>
                            <li className="MasInfo-li">Grupo Sanguíneo: {studentData.GrupSan}</li>
                            <li className="MasInfo-li"><button onClick={togglePadre}>Padre:</button>
                                <ul className={`MasinfoP ${padre ? 'isActive' : ''}`}>
                                    <li className="infoP">Telefono: {studentData.TelPadr}</li>
                                    <li className="infoP">Correo: {studentData.CorPadr}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li"><button onClick={toggleMadre}>Madre:</button>
                                <ul className={`MasinfoM ${madre ? 'isActive' : ''}`}>
                                    <li className="infoM">Telefono: {studentData.TelMadr}</li>
                                    <li className="infoM">Correo: {studentData.CorMadr}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li"><button onClick={toggleAcudiente}>Acudiente:</button>
                                <ul className={`MasinfoA ${acudiente ? 'isActive' : ''}`}>
                                    <li className="infoA">Telefono: {studentData.TelAcu}</li>
                                    <li className="infoA">Correo: {studentData.CorAcu}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
