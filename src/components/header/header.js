import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import perfil from '../../assets/jpg/perfil.jpg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './header.css';
import NavigationButtons from './buttons/button';

const generateRain = () => {
    const rainContainer = document.querySelector('.binary-rain');
    rainContainer.innerHTML = '';

    const numberOfColumns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < numberOfColumns; i++) {
        const rainColumn = document.createElement('span');
        rainColumn.textContent = Math.random() < 0.5 ? '0' : '1';
        rainColumn.style.animationDelay = `${Math.random() * 5}s`;
        rainColumn.style.animationDuration = `${Math.random() * 10 + 5}s`;
        rainContainer.appendChild(rainColumn);
    }
};

const Header = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        generateRain();
        window.addEventListener('resize', generateRain);
        return () => window.removeEventListener('resize', generateRain);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="header-container"
        >
            <Navbar bg="black" variant="dark" expand="lg" className="header-navbar">
                <div className="binary-rain"></div>
                <Navbar.Brand href="/" className="header-content">
                    {!isImageLoaded && (
                        <Skeleton circle={true} height={150} width={150} style={{ marginRight: '20px' }} />
                    )}
                    <img
                        src={perfil}
                        alt="Minha Foto"
                        className="header-photo"
                        onLoad={() => setIsImageLoaded(true)}
                        style={{ display: isImageLoaded ? 'block' : 'none', zIndex: '1' }}
                    />
                    <div className="header-text">
                        <h1 className="header-name">Diogo Perez Areco</h1>
                        <p className="header-phrase">Desenvolvedor Front-end & Mobile</p>
                        <div className="social-icons">
                            <a href="https://github.com/diogo-perez" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/diogo-perez/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/diogo_perez_/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="header-bottom">
                        <div className="header-example-text">
                            <p>Aqui se construi experiências digitais perfeitas, envolventes e acessíveis.</p>
                        </div>
                        <NavigationButtons />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </motion.div>
    );
};

export default Header;
