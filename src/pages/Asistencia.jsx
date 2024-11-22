/*
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/Asistencia.css'

export const Asistencia = () => {
  const [docente, setDocente] = useState(null);
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([]);
  const navigate = useNavigate();

  // ID del docente desde el localStorage
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Obtener datos del docente autenticado
    const fetchDocente = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/docentes/${userId}`);
        const data = await response.json();
        setDocente(data);
      } catch (error) {
        console.error("Error al obtener los datos del docente:", error);
      }
    };

    // Obtener lista de estudiantes
    const fetchEstudiantes = async () => {
      try {
        const response = await fetch("https://6736528eaafa2ef22230369a.mockapi.io/estudientes");
        const data = await response.json();
        setEstudiantes(data);
      } catch (error) {
        console.error("Error al obtener los datos de los estudiantes:", error);
      }
    };

    fetchDocente();
    fetchEstudiantes();
  }, [userId]);

  useEffect(() => {
    if (docente && estudiantes.length > 0) {
      const gradosDocente = Object.keys(docente.grupos); // Grados que ve el docente
      const gruposDocente = docente.grupos; // Grupos por grado

      const filtrados = estudiantes.filter((estudiante) => {
        const grado = estudiante.Grado.toString();
        const grupo = parseInt(estudiante.Grupo, 10);

        return gradosDocente.includes(grado) && gruposDocente[grado]?.includes(grupo);
      });

      setEstudiantesFiltrados(filtrados);
    }
  }, [docente, estudiantes]);

  return (
    <>
      <div className="perfil-docente-container">

        {docente ? (
          <>
            <h2>Bienvenido, {docente.name}</h2>
            <p>Materia: {docente.materia}</p>

            <h3>Estudiantes Asignados</h3>
            <div className="estudiantes-list">
              {estudiantesFiltrados.length > 0 ? (
                estudiantesFiltrados.map((estudiante) => (
                  <div key={estudiante.id} className="estudiante-card">

                    <img
                      src={estudiante.foto || "https://via.placeholder.com/150"}
                      alt={`Foto de ${estudiante.name || "Estudiante"}`}
                      className="estudiante-foto"
                    />
                    <h2>{estudiante.name || "No hay información disponible"}</h2>
                    <p>Correo: {estudiante.correo || "No hay información disponible"}</p>
                    <p>Grado: {estudiante.Grado || "No hay información disponible"} - {estudiante.Grupo || "No hay información disponible"}</p>
                    <h3>Familiares</h3>
                    <div>
                      <p>
                        <strong>Padre:</strong>{" "}
                        {estudiante.familiares?.padre?.nombre || "No hay información disponible"}
                      </p>
                      <p>
                        <strong>Madre:</strong>{" "}
                        {estudiante.familiares?.madre?.nombre || "No hay información disponible"}
                      </p>
                      <p>
                        <strong>Acudiente:</strong>{" "}
                        {estudiante.familiares?.acudiente?.nombre || "No hay información disponible"}
                      </p>
                    </div>
                   
                    <button onClick={() => navigate(`/asignar-falta/${estudiante.id}`)}>
                      Asignar Inasistencia
                    </button>
                  </div>
                ))
              ) : (
                <p>No hay estudiantes asignados.</p>
              )}
            </div>
          </>
        ) : (
          <p>Cargando información del docente...</p>
        )}
      </div>
    </>
  );
};
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/Asistencia.css';

export const Asistencia = () => {
  const [docente, setDocente] = useState(null);
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([]);
  const navigate = useNavigate();

  // Obtener datos desde el localStorage
  const userId = localStorage.getItem("userId");
  const userRol = localStorage.getItem("rol");

  useEffect(() => {
    // Obtener datos del docente autenticado
    const fetchDocente = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/docentes/${userId}`);
        const data = await response.json();
        setDocente(data);
      } catch (error) {
        console.error("Error al obtener los datos del docente:", error);
      }
    };

    // Obtener lista de estudiantes
    const fetchEstudiantes = async () => {
      try {
        const response = await fetch("https://6736528eaafa2ef22230369a.mockapi.io/estudientes");
        const data = await response.json();
        setEstudiantes(data);
      } catch (error) {
        console.error("Error al obtener los datos de los estudiantes:", error);
      }
    };

    fetchDocente();
    fetchEstudiantes();
  }, [userId]);

  useEffect(() => {
    if (userRol === "director") {
      // Si el rol es "director", mostrar todos los estudiantes
      setEstudiantesFiltrados(estudiantes);
    } else if (docente && estudiantes.length > 0) {
      // Si es docente, aplicar filtro
      const gradosDocente = Object.keys(docente.grupos); // Grados que ve el docente
      const gruposDocente = docente.grupos; // Grupos por grado

      const filtrados = estudiantes.filter((estudiante) => {
        const grado = estudiante.Grado.toString();
        const grupo = parseInt(estudiante.Grupo, 10);

        return gradosDocente.includes(grado) && gruposDocente[grado]?.includes(grupo);
      });

      setEstudiantesFiltrados(filtrados);
    }
  }, [userRol, docente, estudiantes]);

  return (
    <div className="perfil-docente-container">
      {docente ? (
        <>
          <h2>Bienvenido, {docente.name}</h2>
          <p>Materia: {docente.materia}</p>

          <h3>Estudiantes Asignados</h3>
          <div className="estudiantes-list">
            {estudiantesFiltrados.length > 0 ? (
              estudiantesFiltrados.map((estudiante) => (
                <div key={estudiante.id} className="estudiante-card">
                  <img
                    src={estudiante.foto || "https://via.placeholder.com/150"}
                    alt={`Foto de ${estudiante.name || "Estudiante"}`}
                    className="estudiante-foto"
                  />
                  <h2>{estudiante.name || "No hay información disponible"}</h2>
                  <p>Correo: {estudiante.correo || "No hay información disponible"}</p>
                  <p>Grado: {estudiante.Grado || "No hay información disponible"} - {estudiante.Grupo || "No hay información disponible"}</p>
                  <h3>Familiares</h3>
                  <div>
                    <p>
                      <strong>Padre:</strong>{" "}
                      {estudiante.familiares?.padre?.nombre || "No hay información disponible"}
                    </p>
                    <p>
                      <strong>Madre:</strong>{" "}
                      {estudiante.familiares?.madre?.nombre || "No hay información disponible"}
                    </p>
                    <p>
                      <strong>Acudiente:</strong>{" "}
                      {estudiante.familiares?.acudiente?.nombre || "No hay información disponible"}
                    </p>
                  </div>
                  {/* Botón para asignar inasistencia */}
                  <button onClick={() => navigate(`/asignar-falta/${estudiante.id}`)}>
                    Asignar Inasistencia
                  </button>
                </div>
              ))
            ) : (
              <p>No hay estudiantes asignados.</p>
            )}
          </div>
        </>
      ) : (
        <p>Cargando información del docente...</p>
      )}
    </div>
  );
};
