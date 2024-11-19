import React, { useEffect, useState } from "react";
import "./Styles/Docente.css";
import { useNavigate } from "react-router-dom";

export const Docentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDirector, setIsDirector] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const rol = localStorage.getItem("rol");
        setIsDirector(rol === "director");

        
        const docentesResponse = await fetch(
          "https://6736528eaafa2ef22230369a.mockapi.io/docentes"
        );
        const allDocentes = await docentesResponse.json();

        
        if (rol === "director") {
          setDocentes(allDocentes);
        } else {
         
          const studentId = localStorage.getItem("userId");
          const studentResponse = await fetch(
            `https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`
          );
          const student = await studentResponse.json();
          setStudentData(student);

          
          const storedGrado = localStorage.getItem("grado");
          const storedGrupo = localStorage.getItem("grupo");

          const filteredDocentes = allDocentes.filter(
            (docente) =>
              docente.grupos[storedGrado] &&
              docente.grupos[storedGrado].includes(parseInt(storedGrupo))
          );

          setDocentes(filteredDocentes);
        }

        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateDocente = () => {
    navigate("/web-institucional/CrearDocente"); 
  };

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <div className="docentes-page">
      <div className="nove-dose">
        <div>
          <form>
            <textarea className="Novedades" rows="31" cols="25" />
          </form>
        </div>
        <p className="Grupo-d">
          Grupo: {studentData?.Grado} - {studentData?.Grupo}
        </p>
      </div>

      <div className="docentes-section">
        <h2>Docentes</h2>
        <div className="docentes-list">
          {docentes.length === 0 ? (
            <p>No hay docentes disponibles.</p>
          ) : (
            docentes.map((docente) => (
              <div key={docente.id} className="docente-card">
                <img
                  src={``}
                  alt={`Foto de ${docente.name}`}
                  className="FotoDocente"
                />
                <div className="info-dous">
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
    {isDirector && (
          <button
            className="create-docente-button"
            onClick={handleCreateDocente}
          >
            Crear Nuevo Docente
          </button>
        )}
    </>
  );
};
