import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Styles/Inasistencias.css'; // Estilos opcionales

export const Inasistencias = () => {
  const { id } = useParams(); // ID del estudiante desde la URL
  const [estudiante, setEstudiante] = useState(null);
  const navigate = useNavigate();
  const studentId = localStorage.getItem('userId');


  useEffect(() => {
    // Obtener información del estudiante desde la API
    const fetchEstudiante = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${studentId}`);
        const data = await response.json();
        setEstudiante(data);
      } catch (error) {
        console.error("Error al cargar datos del estudiante:", error);
        alert("Hubo un problema al cargar los datos del estudiante.");
      }
    };

    fetchEstudiante();
  }, [id]);

  return (
    <div className="cont-inasistencias">
      <h1>Inasistencias del Estudiante</h1>
      {estudiante ? (
        <>
          <p>Nombre: {estudiante.name}</p>
          <p>Grado: {estudiante.Grado} - {estudiante.Grupo}</p>
          
          <h2>Lista de Inasistencias</h2>
          {estudiante.inasistencias && estudiante.inasistencias.length > 0 ? (
            <table className="inasistencias-tabla">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Motivo</th>
                  <th>Materia</th>
                </tr>
              </thead>
              <tbody>
                {estudiante.inasistencias.map((falta, index) => (
                  <tr key={index}>
                    <td>{falta.fecha}</td>
                    <td>{falta.hora}</td>
                    <td>{falta.motivo}</td>
                    <td>{falta.materia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Este estudiante no tiene inasistencias registradas.</p>
          )}

          <button onClick={() => navigate(-1)} className="btn-volver">
            Volver
          </button>
        </>
      ) : (
        <p>Cargando información del estudiante...</p>
      )}
    </div>
  );
};
