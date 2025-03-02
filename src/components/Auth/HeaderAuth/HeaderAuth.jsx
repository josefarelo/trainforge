import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderAuth.scss';

import logoWhite from "../../../assets/icons/logo/logo-text/TF-logo-white-text.png";
import menuClosedWhite from "../../../assets/icons/menu-bar/menu-bar-icon-close-white.png";
import menuOpenedWhite from "../../../assets/icons/menu-bar/menu-bar-icon-open-white.png";
import helpIcon from "../../../assets/icons/header/header-ayuda-icono.svg";
import settingsIcon from "../../../assets/icons/header/header-ajustes-icono.svg";
import logOutIcon from "../../../assets/icons/header/header-cerrar-sesion-icono.svg";

const HeaderAuth = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {setMenuOpen(!menuOpen);};

    return (
        <header className="header-auth">
            <button
                className="header-auth__menu-button"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <img 
                        src={ menuClosedWhite } 
                        alt="Abrir menú" 
                        className="header-auth__menu-icon"
                    />
                ) : (
                    <img 
                        src={ menuOpenedWhite } 
                        alt="Cerrar menú" 
                        className="header-auth__menu-icon"
                    />
                )}

                {/* Despliega el acceso rápido a otras secciones */}
                <div className={`header-auth__menu ${!menuOpen ? 'header-auth__menu--closed' : 'header-auth__menu--open'}`}>
                    <div className="header-auth__menu-container">
                        <Link href="/es">INICIO</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/planificacion-de-entrenamiento">PLANIFICAR ENTRENAMIENTO</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/registro-de-entrenamiento">REGISTRAR AVANCES</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/progreso">PROGRESO</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/calculadora-de-macronutrientes">CALCULADORA DE MACROS</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/ejercicios">EJERCICIOS</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/ayuda">AYUDA</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <Link href="/es/ajustes">AJUSTES</Link>
                    </div>
                    <div className="header-auth__menu-container">
                        <a href="/">CERRAR SESIÓN</a>
                    </div>
                </div>
            </button>
            <div className= "header-auth__logo-container">
                <div className="header-auth__logo">
                    <svg 
                        className="header-auth__logo-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="text-icon" 
                            href={ logoWhite } 
                            className="header-auth__logo-image"
                        />
                    </svg>
                </div>
            </div>

            {/* Muestra la opciones adicionales en el header */}
            <div className="header-auth__high-dimensions-menu">
                <div className="header-auth__high-dimensions-menu-container">
                    <Link href="/es/ayuda">Ayuda</Link>
                    <svg 
                        className="header-auth__high-dimensions-menu-container-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="help icon" 
                            href={ helpIcon } 
                            className="header-auth__high-dimensions-menu-container-icon-image"
                        />
                    </svg>
                </div>
                <div className="header-auth__high-dimensions-menu-container">
                    <Link href="/es/ajustes">Ajustes</Link>
                    <svg 
                        className="header-auth__high-dimensions-menu-container-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="settings icon" 
                            href={ settingsIcon } 
                            className="header-auth__high-dimensions-menu-container-icon-image"
                        />
                    </svg>
                </div>
                <div className="header-auth__high-dimensions-menu-container">
                    <a href="/">Cerrar sesión</a>
                    <svg 
                        className="header-auth__high-dimensions-menu-container-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="log out icon" 
                            href={ logOutIcon } 
                            className="header-auth__high-dimensions-menu-container-icon-image"
                        />
                    </svg>
                </div>
            </div>

            {/* Muestra la extensión del header que reemplaza el menú */}
            <div className="header-auth__extension">
                <div className="header-auth__extension-container">
                    <Link href="/es">INICIO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link href="/es/planificacion-de-entrenamiento">PLANIFICAR ENTRENAMIENTO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link href="/es/registro-de-entrenamiento">REGISTRAR AVANCES</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link href="/es/progreso">PROGRESO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link href="/es/calculadora-de-macronutrientes">CALCULADORA DE MACROS</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link href="/es/ejercicios">EJERCICIOS</Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;