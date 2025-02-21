import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HeaderNoAuth.scss';

const HeaderNoAuth = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {setMenuOpen(!menuOpen);};
    return (
        <header className="header-no-auth">
            <button
                className="header-no-auth__menu-button"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <img 
                        src={require("../../../assets/icons/menu-bar/menu-bar-icon-open.png")} 
                        alt="Abrir menú" 
                        className="header-no-auth__menu-icon"
                    />
                ) : (
                    <img 
                        src={require("../../../assets/icons/menu-bar/menu-bar-icon-close.png")} 
                        alt="Cerrar menú" 
                        className="header-no-auth__menu-icon"
                    />
                )}

                {/* Despliega el acceso rápido a otras secciones */}
                <div className={`header-no-auth__menu ${menuOpen ? 'header-no-auth__menu--closed' : 'header-no-auth__menu--open'}`}>
                    <div className="header-no-auth__menu-container">
                        <a href="/rutinas">Rutinas</a>
                    </div>
                    <div className="header-no-auth__menu-container">
                        <a href="/alimentacion">Alimentación</a>
                    </div>
                    <div className="header-no-auth__menu-container">
                        <a href="/progreso">Progreso</a>
                    </div>
                    <div className="header-no-auth__menu-container">
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
            </button>
            <div className= "header-no-auth__logo-container">
                <a href="/" className="header-no-auth__logo">
                    <svg 
                        className="header-no-auth__logo-icon" 
                        xmlns="http://www.w3.org/2000/svg">
                        <image 
                            alt="text-icon" 
                            href={require("../../../assets/icons/logo/logo-text/TF-logo-orange-text.png")} 
                            className="header-no-auth__logo-image"
                        />
                    </svg>
                </a>
            </div>
            <Link to="/es" className="header-no-auth__login-button" >INICIAR SESIÓN </Link>
        </header>
    );
};

export default HeaderNoAuth;