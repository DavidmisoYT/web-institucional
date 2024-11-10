import React, { useState } from 'react';

const Inicio = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí validamos las credenciales
    if (username === 'usuario' && password === '1234') {
      // Si las credenciales son correctas, guardamos un token en localStorage
      localStorage.setItem('authToken', 'mi_token_de_sesion');

      // Redirigimos o actualizamos el estado para mostrar el contenido protegido
      window.location.href = '/home';  // O usa react-router-dom si usas routing
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Inicio;
