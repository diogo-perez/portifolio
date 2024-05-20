// NavigationButtons.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';

const NavigationButtons = () => {
    return (
        <div className="navigation-buttons">
            <NavLink to="/" className="nav-link" activeClassName="active">
                Sobre
            </NavLink>
            <NavLink to="/projects" className="nav-link" activeClassName="active">
                Projetos
            </NavLink>
            <NavLink to="/experiencias" className="nav-link" activeClassName="active">
                Experiências
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contato
            </NavLink>
        </div>
    );
};

export default NavigationButtons;
