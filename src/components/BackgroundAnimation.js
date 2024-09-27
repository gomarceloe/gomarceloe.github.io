import React, { useEffect } from 'react';

function BackgroundAnimation() {
    const numPixels = 100; // Cantidad de rayos

    useEffect(() => {
        const container = document.querySelector('.background-animation');
        for (let i = 0; i < numPixels; i++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.left = `${Math.random() * 100}vw`;
            pixel.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;

            container.appendChild(pixel);
        }

        // Limpiar al desmontar
        return () => {
            container.innerHTML = '';
        };
    }, []);

    return <div className="background-animation"></div>;
}

export default BackgroundAnimation;
