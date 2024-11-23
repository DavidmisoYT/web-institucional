/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Styles/Faltas.css'


export const AsignarFalta = () => {
  const { id } = useParams(); // ID del estudiante desde la URL
  const [estudiante, setEstudiante] = useState(null);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener información del estudiante
    const fetchEstudiante = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${id}`);
        const data = await response.json();
        setEstudiante(data);
      } catch (error) {
        console.error("Error al cargar estudiante:", error);
      }
    };

    fetchEstudiante();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fecha || !hora || !motivo) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    try {
      const nuevasInasistencias = estudiante.inasistencias || [];
      nuevasInasistencias.push({ fecha, hora, motivo, materia });
  
      await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...estudiante, inasistencias: nuevasInasistencias }),
      });
  
      alert("Inasistencia asignada con éxito.");
      navigate("/web-institucional/Asistencia");
    } catch (error) {
      console.error("Error al asignar inasistencia:", error);
      alert("Hubo un problema al asignar la inasistencia.");
    }
  };

  return (
    <>
    <div className="cont">
      <h1>Asignar Inasistencia</h1>
      {estudiante ? (
        <form onSubmit={handleSubmit}>
          <p><strong>Estudiante:</strong> {estudiante.name}</p>
          <p><strong>Grupo:</strong> {estudiante.Grupo} - Grado: {estudiante.Grado}</p>

          <label>
            Fecha de la falta:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </label>

          <label>
            Hora de la falta:
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </label>

          <label>
            Motivo de la falta:
            <textarea
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required
            ></textarea>
          </label>

          <button type="submit">Guardar Inasistencia</button>
        </form>
      ) : (
        <p>Cargando datos del estudiante...</p>
      )}
    </div>
    </>
  );
};
*/

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './Styles/Faltas.css';

export const AsignarFalta = () => {
  const { id } = useParams(); // ID del estudiante desde la URL
  const { state } = useLocation(); // Recibir la materia del docente
  const materia = state?.materia; // Obtener la materia desde el estado
  const [estudiante, setEstudiante] = useState(null);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener información del estudiante
    const fetchEstudiante = async () => {
      try {
        const response = await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${id}`);
        const data = await response.json();
        setEstudiante(data);
      } catch (error) {
        console.error("Error al cargar estudiante:", error);
      }
    };

    fetchEstudiante();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fecha || !hora || !motivo) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      // Actualizar la API con la nueva inasistencia
      const nuevasInasistencias = estudiante.inasistencias || [];
      nuevasInasistencias.push({ fecha, hora, motivo, materia });

      await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/estudientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...estudiante, inasistencias: nuevasInasistencias }),
      });

      alert("Inasistencia asignada con éxito.");
      navigate("/web-institucional/Asistencia");
    } catch (error) {
      console.error("Error al asignar inasistencia:", error);
      alert("Hubo un problema al asignar la inasistencia.");
    }
  };

  return (
    <div className="cont">
      <h1>Asignar Inasistencia</h1>
      {estudiante ? (
        <form onSubmit={handleSubmit}>
          <p><strong>Estudiante:</strong> {estudiante.name}</p>
          <p><strong>Grupo:</strong> {estudiante.Grupo} - Grado: {estudiante.Grado}</p>
          <p><strong>Materia:</strong> {materia}</p>

          <label>
            Fecha de la falta:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </label>

          <label>
            Hora de la falta:
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </label>

          <label>
            Motivo de la falta:
            <textarea
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required
            ></textarea>
          </label>

          <button type="submit">Guardar Inasistencia</button>
        </form>
      ) : (
        <p>Cargando datos del estudiante...</p>
      )}
    </div>
  );
};

