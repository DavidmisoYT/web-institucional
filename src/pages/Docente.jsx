import React, { useEffect, useState } from 'react';

export const Docentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentId = localStorage.getItem('userId'); // ID del estudiante desde localStorage
        const studentResponse = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`);
        const student = await studentResponse.json();
        setStudentData(student);

        const docentesResponse = await fetch('https://6736528eaafa2ef22230369a.mockapi.io/docentes');
        const allDocentes = await docentesResponse.json();

        // Filtrar docentes por Grado y Grupo
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
        <p>Aquí se mostrará la información de los directores académicos y técnicos.</p>
      </div>

      <div className="docentes-section">
        <h2>Docentes</h2>
        <div className="docentes-list">
          {docentes.map(docente => (
            <div key={docente.id} className="docente-card">
              <img src={`https://via.placeholder.com/150?text=${docente.name}`} alt={`Foto de ${docente.name}`} />
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
        <h2>Novedades</h2>
        <p>Aquí se mostrarán las últimas noticias relacionadas con la página o el colegio.</p>
      </div>
    </div>
  );
};
