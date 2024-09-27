// src/App.js
import React, { useState, useEffect } from 'react';
import CarouselDisplay from './components/CarouselDisplay';
import FullScreenModal from './components/FullScreenModal';
import StarField from './components/StarField'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importar imágenes agrupadas
import img1 from './images/060924_001.jpg';
import img2 from './images/120824_201.jpg';
import img3 from './images/120824_236.jpg';
import img4 from './images/120824_242.jpg';
import img5 from './images/120824_251.jpg';
import img6 from './images/120824_252.jpg';
import img7 from './images/120824_267.jpg';

function App() {
    // Definir grupos de imágenes
    const groups = [
        {
            name: 'Grupo 1',
            images: [img1],
        },
        {
            name: 'Grupo 1',
            images: [img5],
        },
        {
            name: 'Grupo 1',
            images: [img6],
        },
        {
            name: 'Grupo 2',
            images: [img3],
        },
        // Añade más grupos según necesites
    ];

    const [selectedGroup, setSelectedGroup] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Detectar si el dispositivo es móvil
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Manejar clic en una imagen para mostrar en pantalla completa
    const handleImageClick = (images) => {
        setModalImages(images);
    };

    // Manejar cierre del modal
    const handleCloseModal = () => {
        setModalImages([]);
    };

    // Manejar navegación de grupos
    const handleNavigate = (direction) => {
        if (direction === 'left') {
            setSelectedGroup((prev) => (prev > 0 ? prev - 1 : groups.length - 1));
        } else if (direction === 'right') {
            setSelectedGroup((prev) => (prev < groups.length - 1 ? prev + 1 : 0));
        }
    };

    return (
        <div className="App">
            
            {/* 
            {isMobile && (
                <button
                    className="menu-button"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    ☰
                </button>
            )}
            */}

            {/* 
            <Sidebar
                groups={groups}
                selectedGroup={selectedGroup}
                handleSelectGroup={setSelectedGroup}
                isMobile={isMobile}
                showSidebar={showSidebar}
                handleClose={() => setShowSidebar(false)}
            />
            */}
           
            {/* Contenedor principal */}
            <div className={`main-content ${isMobile ? 'mobile' : 'desktop'}`}>
                <StarField numStars={200} twinkleSpeed={0.005} />
                

                <CarouselDisplay
                    group={groups[selectedGroup]}
                    handleImageClick={handleImageClick}
                    handleNavigate={handleNavigate}
                />
            </div>

            {/* Modal de pantalla completa */}
            <FullScreenModal
                show={modalImages.length > 0}
                images={modalImages}
                handleClose={handleCloseModal}
            />
        </div>
    );
}

export default App;
