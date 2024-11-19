
import React, { useState } from "react";
import './Styles/FormurarioD.css'


const DocenteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    materia: "",
    name: "",
    rol: "Docente",
    telefono: "",
    correo: "",
    password: "",
    grupos: {},
  });

  const [selectedGrades, setSelectedGrades] = useState([]); // Grados seleccionados
  const [selectedGroups, setSelectedGroups] = useState({}); // Grupos seleccionados por grado

  // Maneja los cambios en los inputs generales
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja la selección de grados
  const handleGradeSelection = (e) => {
    const grade = parseInt(e.target.value, 10);
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter((g) => g !== grade));
      const updatedGroups = { ...selectedGroups };
      delete updatedGroups[grade];
      setSelectedGroups(updatedGroups);
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  // Maneja la selección de grupos para un grado específico
  const handleGroupSelection = (grade, group) => {
    const groupsForGrade = selectedGroups[grade] || [];
    if (groupsForGrade.includes(group)) {
      setSelectedGroups({
        ...selectedGroups,
        [grade]: groupsForGrade.filter((g) => g !== group),
      });
    } else {
      setSelectedGroups({
        ...selectedGroups,
        [grade]: [...groupsForGrade, group],
      });
    }
  };

  // Agrega los grupos seleccionados al objeto `grupos` del estado
  const addGroupsToGrado = () => {
    setFormData({
      ...formData,
      grupos: selectedGroups,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    addGroupsToGrado();
    onSubmit(formData); // Envía los datos al backend o al componente padre
  };

  return (
    <>
    <div className="Cont1">
    <div className="ContCreD">
    <form onSubmit={handleSubmit} className="FormCreD">
      <h2 className="tituloCrD">{formData.id ? "Editar Docente" : "Crear Docente"}</h2>

      <label>
        Materia:
        <input
          type="text"
          name="materia"
          value={formData.materia}
          onChange={handleChange}
          required
          placeholder="Materia"
        />
      </label>

      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Materia"

        />
      </label>

      <label>
        Rol:
        <select name="rol" value={formData.rol} onChange={handleChange}>
          <option value="Docente">Docente</option>
          <option value="Director">Director</option>
        </select>
      </label>

      <label>
        Teléfono:
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          placeholder="123 456 7890"

        />
      </label>

      <label>
        Correo:
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          placeholder="ejemplo@gmail.com"

        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="******"

        />
      </label>

      <div>
        <label>Grados:</label>
        {Array.from({ length: 6 }, (_, i) => 6 + i).map((grade) => (
          <label key={grade} style={{ display: "flex" }}>
            <input
              type="checkbox"
              value={grade}
              checked={selectedGrades.includes(grade)}
              onChange={handleGradeSelection}
            />
            {grade}
          </label>
        ))}
      </div>

      {selectedGrades.map((grade) => (
        <div key={grade} style={{ marginTop: "1rem" }}>
          <h4>Grupos para Grado {grade}:</h4>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((group) => (
            <label key={group} style={{ display: "flex" }}>
              <input
                type="checkbox"
                value={group}
                checked={selectedGroups[grade]?.includes(group) || false}
                onChange={() => handleGroupSelection(grade, group)}
              />
              Grupo {group}
            </label>
          ))}
        </div>
      ))}

      <button type="submit">{formData.id ? "Actualizar" : "Crear"}</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default DocenteForm;
