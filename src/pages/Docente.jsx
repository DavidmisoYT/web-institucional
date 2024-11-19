/*
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
    const fetchStudentData = async () => {
      try {
        // Verificar el rol del usuario
        const rol = localStorage.getItem("rol");
        setIsDirector(rol === "director");

        // Obtener el ID del estudiante desde localStorage
        const studentId = localStorage.getItem("userId");
        const studentResponse = await fetch(
          `https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`
        );
        const student = await studentResponse.json();
        setStudentData(student);

        // Obtener los docentes desde la API
        const docentesResponse = await fetch(
          "https://6736528eaafa2ef22230369a.mockapi.io/docentes"
        );
        const allDocentes = await docentesResponse.json();

        // Filtrar docentes según el grado y grupo del estudiante
        const storedGrado = localStorage.getItem("grado");
        const storedGrupo = localStorage.getItem("grupo");

        const filteredDocentes = allDocentes.filter(
          (docente) =>
            docente.grupos[storedGrado] &&
            docente.grupos[storedGrado].includes(parseInt(storedGrupo))
        );

        setDocentes(filteredDocentes);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos: " + error.message);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const handleCreateDocente = () => {
    navigate("/web-institucional/CrearDocente"); // Ruta para crear docente
  };

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="docentes-page">
      <div className="nove-dose">
        <div>
          <form>
            <textarea className="Novedades" rows="31" cols="25" />
          </form>
        </div>
        <p className="Grupo-d">
          Grupo: {studentData.Grado} - {studentData.Grupo}
        </p>
      </div>

      <div className="docentes-section">
        <h2>Docentes</h2>
        <div className="docentes-list">
          {docentes.length === 0 ? (
            <p>No hay docentes disponibles para este grado y grupo.</p>
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
        {isDirector && (
          <button
            className="create-docente-button"
            onClick={handleCreateDocente}
          >
            Crear Nuevo Docente
          </button>
        )}
      </div>
    </div>
  );
};
*/

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
        // Verificar el rol del usuario
        const rol = localStorage.getItem("rol");
        setIsDirector(rol === "director");

        // Obtener los docentes desde la API
        const docentesResponse = await fetch(
          "https://6736528eaafa2ef22230369a.mockapi.io/docentes"
        );
        const allDocentes = await docentesResponse.json();

        // Si el rol es "director", mostrar todos los docentes
        if (rol === "director") {
          setDocentes(allDocentes);
        } else {
          // Obtener el ID del estudiante desde localStorage
          const studentId = localStorage.getItem("userId");
          const studentResponse = await fetch(
            `https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`
          );
          const student = await studentResponse.json();
          setStudentData(student);

          // Filtrar docentes según el grado y grupo del estudiante
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
    navigate("/web-institucional/CrearDocente"); // Ruta para crear docente
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
