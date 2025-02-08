import React, {useState} from 'react';
//import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {setMenuOpen(!menuOpen);};
    return (
        <header className="header">
            <button
                className="header__menu-button"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <img 
                        src={require("../../assets/icons/menu-bar/menu-bar-icon-open.png")} 
                        alt="Abrir menú" 
                        className="header__menu-icon"
                    />
                ) : (
                    <img 
                        src={require("../../assets/icons/menu-bar/menu-bar-icon-close.png")} 
                        alt="Cerrar menú" 
                        className="header__menu-icon"
                    />
                )}

                {/* Despliega el acceso rápido a otras secciones */}
                <nav className={`header__menu ${menuOpen ? 'header__menu--closed' : 'header__menu--open'}`}>
                    <div className="header__menu-container">
                        <a href="/rutinas">Rutinas</a>
                    </div>
                    <div className="header__menu-container">
                        <a href="/alimentacion">Alimentación</a>
                    </div>
                    <div className="header__menu-container">
                        <a href="/progreso">Progreso</a>
                    </div>
                    <div className="header__menu-container">
                        <a href="/contacto">Contacto</a>
                    </div>
                </nav>
            </button>
            <div className= "header__logo-container">
                <a href="/" className="header__logo">
                    <svg 
                        className="header__logo-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="text-icon" 
                            href={require("../../assets/icons/logo/logo-text/TF-logo-orange-text.png")} 
                            className="header__logo-image"
                        />
                    </svg>
                </a>
            </div>
            <button className="header__login-button">INICIAR SESIÓN</button>
        </header>
    );
};

export default Header;