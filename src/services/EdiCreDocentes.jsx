import DocenteForm from "../pages/FormurarioD";



export const EdiCreDocentes = () => {
    const handleDocenteSubmit = async (data) => {
      if (data.id) {
        // Actualización
        await fetch(`https://6736528eaafa2ef22230369a.mockapi.io/docentes/${data.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        // Creación
        await fetch("https://6736528eaafa2ef22230369a.mockapi.io/docentes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      alert("Docente guardado con éxito.");
    };
  
    return <DocenteForm onSubmit={handleDocenteSubmit} />;
  };
  
  