import React, { useEffect, useState } from 'react';
import './Styles/inicio.css';
import foto from '../img/FotoPerfil.png'
import logo from '../img/logo-.png';  


export const PerfilDocente = () => {
  const [docente, setDocente] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const docenteId = localStorage.getItem('userId');

    const fetchDocente = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/docentes/${docenteId}`);
        const data = await response.json();
        setDocente(data);
      } catch (err) {
        setError("Error al obtener la información del docente: " + err.message);
      }
    };

    fetchDocente();
  }, []);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!docente) {
    return <p>Cargando información del docente...</p>;
  }

  return (
    <>
       <img src={logo} alt="Escudo y nombre de la institucion" className='Logo-i' />
       <img src={foto} alt="Foto del estudiante fondo" className='Fondo-i' />
      <div className="Contenedor-i">
        <div>
          <form>
              <textarea className='Novedades' rows='31' cols='25' />
          </form>
        </div>
        <div className="Informacion-g">
        <img src={foto} alt="Foto del estudiante" className='Perfil' />


            <p>Nombre: {docente.name} <br/>Correo: {docente.correo} <br/>Materia: {docente.materia}</p>
            <h2>Grados y Grupos</h2>
            {docente.grupos && Object.keys(docente.grupos).length > 0 ? (
              Object.entries(docente.grupos).map(([grado, grupos], index) => (
                <details key={index} className="MasInfo-li">
                  <summary>Grado {convertirGrado(grado)}</summary>
                  <ul>
                    {grupos.length > 0 ? (
                      grupos.map((grupo, idx) => (
                        <li key={idx} className="MasInfo-li">
                          Grupo {grupo}
                        </li>
                      ))
                    ) : (
                      <li className="MasInfo-li">Sin grupos asignados</li>
                    )}
                  </ul>
                </details>
              ))
            ) : (
              <p>No hay información de grados y grupos.</p>
            )}
          </div>
          <div className="MasInfo">

          </div>
      </div>
    </>
  );
};

const convertirGrado = (grado) => {
  const nombresGrados = {
    "7": "Séptimo",
    "8": "Octavo",
    "9": "Noveno",
    "10": "Décimo",
    "11": "Undécimo",
    "12": "Duodécimo",
  };
  return nombresGrados[grado] || `Grado ${grado}`;
};
