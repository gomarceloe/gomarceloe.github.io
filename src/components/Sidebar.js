// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import StarField from './StarField'; // Importar StarField

import './Sidebar.css';
import logo from '../images/logo/logo.png'

function Sidebar({ groups, selectedGroup, handleSelectGroup, isMobile, showSidebar, handleClose }) {
    return (
        <div className={`sidebar ${showSidebar ? 'active' : ''} ${isMobile ? 'mobile' : 'desktop'}`}>
            {/* Animación de lluvia para el sidebar */}
            <StarField className="sidebar-starfield" />
            <img src={logo} style={{width: '150px', height: '150px'}} />
            <Nav className="flex-column">
                {groups.map((group, index) => (
                    <Nav.Link
                        key={index}
                        onClick={() => {
                            handleSelectGroup(index);
                            if (isMobile) handleClose();
                        }}
                        className={selectedGroup === index ? 'active-link' : ''}
                    >
                        {group.name}
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    );
}

export default Sidebar;
