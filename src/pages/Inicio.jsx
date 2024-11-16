

import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../img/logo-.png';  
import foto from '../img/FotoPerfil.png';  
import './Styles/inicio.css';

export const Inicio = () => {
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState(false);
    const [correo, setCorreo] = useState(false);
    const [padre, setPadre] = useState(false);
    const [madre, setMadre] = useState(false);
    const [acudiente, setAcudiente] = useState(false);

    
    const toggleInfo = () => setInfo(!info);
    const toggleCorreo = () => setCorreo(!correo);
    const togglePadre = () => setPadre(!padre);
    const toggleMadre = () => setMadre(!madre);
    const toggleAcudiente = () => setAcudiente(!acudiente);

    useEffect(() => {
        const studentId = localStorage.getItem('userId');

        if (!studentId) {
            console.log('ID de estudiante no encontrado');
            setLoading(false);
            return;
        }

        axios.get(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`)
            .then(response => {
                setStudentData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los datos del estudiante:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

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
                    <p>
                        Nombre: {studentData.name}<br />
                        Taller: {studentData.taller || "No disponible"}<br />
                        Grupo: {studentData.Grado} - {studentData.Grupo}
                    </p>
                    <div onClick={toggleInfo} className='ContenedorMasInfo'>
                        <button className='info-button'>
                            <svg className="svg-info" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z" />
                                <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </button>
                        <h1>Mas Información</h1>
                    </div>
                    <div className={`MasInfo ${info ? 'isActive' : ''}`}>
                        <ul>
                            <li className="MasInfo-li-ev" onClick={toggleCorreo}>
                                Correo:
                                <ul className={`MasinfoC ${correo ? 'isActive' : ''}`}>
                                    <li className="InfoC">Institucional: {studentData.CorreoIns}</li>
                                    <li className="InfoC">Personal: {studentData.correo}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li">Telefono: {studentData.telefono}</li>
                            <li className="MasInfo-li">Edad: {studentData.edad}</li>
                            
                            <li className="MasInfo-li-ev" onClick={togglePadre}>Padre:  {studentData.familiares?.padre?.nombre || 'No disponible'}
                                <ul className={`MasinfoP ${padre ? 'isActive' : ''}`}>
                                    <li className="infoP">Telefono: {studentData.familiares?.padre?.telefono}</li>
                                    <li className="infoP">Correo: {studentData.familiares?.padre?.correo}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li-ev" onClick={toggleMadre}>Madre: {studentData.familiares?.madre?.nombre || 'No disponible'}
                                <ul className={`MasinfoM ${madre ? 'isActive' : ''}`}>
                                    <li className="infoM">Telefono: {studentData.familiares?.madre?.telefono}</li>
                                    <li className="infoM">Correo: {studentData.familiares?.madre?.correo}</li>
                                </ul>
                            </li>
                            <li className="MasInfo-li-ev" onClick={toggleAcudiente}>Acudiente: {studentData.familiares?.acudiente?.nombre || 'No disponible'}
                                <ul className={`MasinfoA ${acudiente ? 'isActive' : ''}`}>
                                    <li className="infoA">Telefono: {studentData.familiares?.acudiente?.telefono}</li>
                                    <li className="infoA">Correo: {studentData.familiares?.acudiente?.correo}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
