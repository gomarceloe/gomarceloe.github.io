// src/components/StarField.js
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './StarField.css'; // Importar CSS específico para StarField

const StarField = ({
  numStars = 5000, // Número total de estrellas
  className = '', // Clase adicional para personalización
}) => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  // Clase Star para representar cada estrella
  class Star {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      // Opacidad fija al 1 (100%)
      this.opacity = 1;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Inicializar estrellas
  const initializeStars = (width, height) => {
    stars.current = [];
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 0.5 + 0.5; // Tamaño de la estrella entre 0.5 y 3 píxeles
      // Determinar el color (1% amarillo, 99% blanco)
      const isYellow = Math.random() < 0.01;
      const color = isYellow
        ? { r: 255, g: 255, b: 224 } // Amarillo claro
        : { r: 0o0, g: 0o0, b: 0o0 }; // Blanco
      stars.current.push(new Star(x, y, radius, color));
    }
  };

  // Manejar el redimensionamiento del canvas
  const resizeCanvas = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars(canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    resizeCanvas(canvas);

    // Redimensionar el canvas al cambiar el tamaño de la ventana
    const handleResize = () => resizeCanvas(canvas);
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const render = () => {
      // Limpiar el canvas (sin dibujar el fondo)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar las estrellas
      stars.current.forEach((star) => {
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [numStars]);

  return (
    <div className={`starfield-container ${className}`}>
      <canvas className="starfield-canvas" ref={canvasRef} />
    </div>
  );
};

// Definir tipos de props y valores por defecto
StarField.propTypes = {
  numStars: PropTypes.number,
  className: PropTypes.string,
};

StarField.defaultProps = {
  numStars: 200,
  className: '',
};

export default StarField;
