/*import React, { useEffect, useState } from 'react';

export const Docentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentId = localStorage.getItem('userId');
        const studentResponse = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`);
        const student = await studentResponse.json();
        setStudentData(student);

        const docentesResponse = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/docentes');
        const allDocentes = await docentesResponse.json();

        const filteredDocentes = allDocentes.filter(
          docente =>
            docente.Grado.includes(parseInt(student.Grado)) &&
            docente.Grupo.includes(parseInt(student.Grupo))
        );

        setDocentes(filteredDocentes);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos: ' + error.message);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="docentes-page">
      <div className="director-section">
        <h2>Directores</h2>
      </div>

      <div className="docentes-section">
        <h2>Docentes</h2>
        <div className="docentes-list">
          {docentes.map(docente => (
            <div key={docente.id} className="docente-card">
              <img src={``} alt={`Foto de ${docente.name}`} />
              <h3>{docente.name}</h3>
              <p><strong>Materia:</strong> {docente.materia}</p>
              <p><strong>Rol:</strong> {docente.rol}</p>
              <p><strong>Teléfono:</strong> {docente.telefono}</p>
              <p><strong>Correo:</strong> {docente.correo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="novedades-section">
        
      </div>
    </div>
  );
};
*/
import React, { useEffect, useState } from 'react';
import './Styles/Docente.css'

export const Docentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Obtener el ID del estudiante desde localStorage
        const studentId = localStorage.getItem('userId');
        const studentResponse = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`);
        const student = await studentResponse.json();
        setStudentData(student);

        // Obtener los docentes desde la API
        const docentesResponse = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/docentes');
        const allDocentes = await docentesResponse.json();

        // Obtener el grado y grupo desde localStorage
        const storedGrado = localStorage.getItem('grado');
        const storedGrupo = localStorage.getItem('grupo');

        // Filtrar docentes según el grado y grupo del estudiante
        const filteredDocentes = allDocentes.filter(docente => {
          // Revisamos si el docente tiene el grupo en el grado correcto
          return (
            docente.grupos[storedGrado] && 
            docente.grupos[storedGrado].includes(parseInt(storedGrupo))
          );
        });

        setDocentes(filteredDocentes);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos: ' + error.message);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <div className="docentes-page">
      <div className='nove-dose'>
        <div>
          <form>
            <textarea className='Novedades' rows='31' cols='25' />
          </form>
        </div>
        <p className='Grupo-d'> Grupo: {studentData.Grado} - {studentData.Grupo}</p>

      </div>
      <div className="docentes-section">
        <h2>Docentes</h2>
        <div className="docentes-list">
          {docentes.length === 0 ? (
            <p>No hay docentes disponibles para este grado y grupo.</p>
          ) : (
            docentes.map(docente => (
              <div key={docente.id} className="docente-card">
                <img src={``} alt={`Foto de ${docente.name}`} className='FotoDocente' />
                <div className='info-dous'>
                <h1>{docente.name}</h1>

                <p>Materia: {docente.materia}</p>
                <p>Teléfono: {docente.telefono}</p>
                <p>Correo: {docente.correo}</p>
                </div>

              </div>
            ))
          )}
        </div>
      </div>

    
    </div>
    </>
  );
};
