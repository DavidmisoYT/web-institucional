// URL de tu API (MockAPI)
const apiUrl = "https://6736528eaafa2ef22230369a.mockapi.io/estudientes";

// Obtener elementos del DOM
const form = document.getElementById("studentForm");
const saveButton = document.getElementById("saveButton");

// ID del estudiante a editar (puedes pasarlo como parámetro o query string en tu app)
const studentId = "1"; // Cambia este valor según el estudiante seleccionado.

// Cargar datos del estudiante al formulario
async function loadStudentData() {
    try {
        const response = await fetch(`${apiUrl}/${studentId}`);
        const student = await response.json();

        // Llenar los campos del formulario con los datos
        document.getElementById("name").value = student.name;
        document.getElementById("correo").value = student.correo;
        document.getElementById("telefono").value = student.telefono;
        document.getElementById("Grupo").value = student.Grupo;
        document.getElementById("Grado").value = student.Grado;
        document.getElementById("password").value = student.password;
    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
}

// Guardar cambios
saveButton.addEventListener("click", async () => {
    try {
        const updatedStudent = {
            name: document.getElementById("name").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            Grupo: document.getElementById("Grupo").value,
            Grado: document.getElementById("Grado").value,
            password: document.getElementById("password").value,
        };

        const response = await fetch(`${apiUrl}/${studentId}`, {
            method: "PUT", // Método PUT para actualizar
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedStudent),
        });

        if (response.ok) {
            alert("Estudiante actualizado correctamente.");
        } else {
            alert("Error al actualizar el estudiante.");
        }
    } catch (error) {
        console.error("Error al guardar cambios:", error);
    }
});

// Cargar datos al iniciar la página
loadStudentData();
