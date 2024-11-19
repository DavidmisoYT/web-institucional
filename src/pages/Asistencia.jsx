import React, { useEffect, useRef } from "react";
import './Styles/Horario.css';

export const Asistencia = () => {
  const elementosRef = useRef([]);

  useEffect(() => {
    const moverAleatorio = () => {
      elementosRef.current.forEach((elemento) => {
        const contenedor = elemento.parentElement;
        const contenedorRect = contenedor.getBoundingClientRect();

        // Calcular posiciones aleatorias dentro del contenedor
        const randomX = Math.random() * (contenedorRect.width - elemento.offsetWidth);
        const randomY = Math.random() * (contenedorRect.height - elemento.offsetHeight);

        // Asignar nuevas posiciones
        elemento.style.left = `${randomX}px`;
        elemento.style.top = `${randomY}px`;
      });
    };

    // Mover los elementos cada 1 segundo
    const intervalId = setInterval(moverAleatorio, 500);

    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="origen">
      <p ref={(el) => (elementosRef.current[0] = el)}>en estos momento no esta el servisio de Asistencia  </p>
  
    </div>
  );
};

