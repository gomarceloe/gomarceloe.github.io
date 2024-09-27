// src/components/CarouselDisplay.js
import React from 'react';
import './CarouselDisplay.css';

function CarouselDisplay({ group, handleImageClick, handleNavigate }) {

    const handleClick = (dir) => {
        handleNavigate(dir);
    };

    return (
        <div className="carousel-container">
            {/* Áreas de navegación invisibles para la izquierda y derecha */}
            <div className="nav-area left" onClick={() => handleClick('left')}>
                {/* Área clickeable invisible */}
            </div>

            {/* Renderizamos las imágenes del grupo */}
            <div className="images-wrapper">
                {group.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        className="carousel-image"
                        onClick={() => handleImageClick(group.images)}
                    />
                ))}
            </div>

            <div className="nav-area right" onClick={() => handleClick('right')}>
                {/* Área clickeable invisible */}
            </div>
        </div>
    );
}

export default CarouselDisplay;
