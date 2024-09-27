// src/components/RainAnimation.js
import React, { useEffect } from 'react';
import './RainAnimation.css';

function RainAnimation({ className }) {
    const numRaindrops = 100; // Ajusta según lo que necesites

    useEffect(() => {
        const container = document.querySelector(`.rain-animation.${className}`);
        if (!container) return;

        for (let i = 0; i < numRaindrops; i++) {
            let drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
            container.appendChild(drop);
        }

        // Cleanup al desmontar
        return () => {
            container.innerHTML = '';
        };
    }, [className]);

    return <div className={`rain-animation ${className}`}></div>;
}

export default RainAnimation;
