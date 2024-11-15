import React, { useEffect, useState } from "react";

export const Horario = ({ studentData }) => {
  const [docentes, setDocentes] = useState([]);
  const [filteredDocentes, setFilteredDocentes] = useState([]);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await fetch("https://6736528eaafa2ef22230369a.mockapi.io/docentes");
        const data = await response.json();
        setDocentes(data);
      } catch (error) {
        console.error("Error fetching docentes:", error);
      }
    };

    fetchDocentes();
  }, []);

  useEffect(() => {
    if (studentData) {
      const { Grado, Grupo } = studentData;
      const grupoGrado = `${Grado} - ${Grupo}`;

      const filtered = docentes.filter((docente) =>
        docente["grupo-grado"].includes(grupoGrado)
      );

      setFilteredDocentes(filtered);
    }
  }, [docentes, studentData]);

  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const hours = ["1H", "2H", "3H", "Descanso", "4H", "5H", "6H"];

  return (
    <div>
      <h1>Horario</h1>
      {filteredDocentes.length > 0 ? (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Hora/Día</th>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, rowIndex) => (
              <tr key={rowIndex}>
                <td>{hour}</td>
                {daysOfWeek.map((day, colIndex) => (
                  <td key={colIndex}>
                    {hour === "Descanso"
                      ? "Descanso"
                      : filteredDocentes.map((docente) => (
                          <div key={docente.id}>
                            <p>{docente.materia}</p>
                            <small>{docente.name}</small>
                          </div>
                        ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
        <br /><br /><br /><br /><br /><br />
        <br />
        <p>No hay horarios disponibles para tu grupo.</p>
        </div>
      )}
    </div>
  );
};

export default Horario;
