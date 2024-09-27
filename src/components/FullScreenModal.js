// src/components/FullScreenModal.js
import React, { useEffect, useState } from 'react';
import './FullScreenModal.css';

function FullScreenModal({ show, images, handleClose }) {
    const [isLandscape, setIsLandscape] = useState(true);

    useEffect(() => {
        if (images.length > 0) {
            // Verificar la orientación de la primera imagen
            const img = new Image();
            img.src = images[0];
            img.onload = () => {
                setIsLandscape(img.width > img.height);
            };
        }
    }, [images]);

    if (!show || images.length === 0) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al overlay
                style={{
                    width: isLandscape ? '80%' : 'auto',
                    height: isLandscape ? 'auto' : '80%',
                }}
            >
                <div className="modal-images-wrapper">
                    {images.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Imagen ${index + 1}`}
                            className="modal-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FullScreenModal;
