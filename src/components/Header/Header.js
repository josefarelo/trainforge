import React, {useState} from 'react';
//import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {setMenuOpen(!menuOpen);};
    return (
        <header className="header">
            <button
                className="header-menu__button"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <img 
                        src={require("../../assets/icons/menu-bar/menu-bar-icon-open.png")} 
                        alt="Abrir menú" 
                    />
                ) : (
                    <img 
                        src={require("../../assets/icons/menu-bar/menu-bar-icon-close.png")} 
                        alt="Cerrar menú" 
                    />
                )}

                {/* Despliega el acceso rápido a otras secciones */}
                <div className={`header__menu-open ${menuOpen ? 'header-menu--close' : 'header-menu--open'}`}>
                    <div className="header__menu__container">
                        <a href="/rutinas">Rutinas</a>
                    </div>
                    <div className="header__menu__container">
                        <a href="/alimentacion">Alimentación</a>
                    </div>
                    <div className="header__menu__container">
                        <a href="/progreso">Progreso</a>
                    </div>
                    <div className="header__menu__container">
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
            </button>

            <a href="/" className="header__logo">
                <svg 
                    className="header__icon" 
                    xmlns="http://www.w3.org/2000/svg">
                    <image alt="text-icon" href={require("../../assets/icons/logo/logo-text/TF-logo-orange-text.png")} />
                </svg>
            </a>
            <button className="header__button">INICIAR SESIÓN</button>
        </header>
    );
};

export default Header;