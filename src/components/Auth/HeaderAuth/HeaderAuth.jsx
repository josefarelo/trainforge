import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useAuth } from "../../../context/AuthContext";
import './HeaderAuth.scss';

import logoWhite from "../../../assets/icons/logo/logo-text/TF-logo-white-text.png";
import menuClosedWhite from "../../../assets/icons/menu-bar/menu-bar-icon-close-white.png";
import menuOpenedWhite from "../../../assets/icons/menu-bar/menu-bar-icon-open-white.png";
import helpIcon from "../../../assets/icons/header/header-ayuda-icono.svg";
import settingsIcon from "../../../assets/icons/header/header-ajustes-icono.svg";
import logOutIcon from "../../../assets/icons/header/header-cerrar-sesion-icono.svg";

const HeaderAuth = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
    
            if (!response.ok) throw new Error("Error al cerrar sesión");
    
            setUser(null); // Limpia el estado del usuario en el contexto
    
            navigate("/login"); // Redirige al login después del logout
        } catch (error) {
            console.error("Error de conexión:", error);
            navigate("/login");
        }
    };

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
                        <Link 
                            to="/es"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            INICIO
                        </Link>
                        <Link 
                            to="/es/planificacion-de-entrenamiento"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            PLANIFICAR ENTRENAMIENTO
                        </Link>
                        <Link 
                            to="/es/registro-de-entrenamiento"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            REGISTRAR AVANCES
                        </Link>
                        <Link 
                            to="/es/progreso"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            PROGRESO
                        </Link>
                        <Link 
                            to="/es/calculadora-de-macronutrientes"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            CALCULADORA DE MACROS
                        </Link>
                        <Link 
                            to="/es/ejercicios"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            EJERCICIOS
                        </Link>
                        <Link 
                            to="/es/ayuda"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            AYUDA
                        </Link>
                        <Link 
                            to="/es/ajustes"
                            className="header-auth__menu-container"
                            type="button"
                        >
                            AJUSTES
                        </Link>
                        <Link 
                            to="#"  
                            onClick={handleLogout} 
                            className="header-auth__menu-container"
                        >
                            CERRAR SESIÓN
                        </Link>
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
                    <Link to="/es/ayuda">Ayuda</Link>
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
                    <Link to="/es/ajustes">Ajustes</Link>
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
                    <button onClick={handleLogout} className="header-auth__high-dimensions-menu-container-logout-button">
                        Cerrar sesión
                    </button>
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
                    <Link to="/es">INICIO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link to="/es/planificacion-de-entrenamiento">PLANIFICAR ENTRENAMIENTO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link to="/es/registro-de-entrenamiento">REGISTRAR AVANCES</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link to="/es/progreso">PROGRESO</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link to="/es/calculadora-de-macronutrientes">CALCULADORA DE MACROS</Link>
                </div>
                <div className="header-auth__extension-container">
                    <Link to="/es/ejercicios">EJERCICIOS</Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;