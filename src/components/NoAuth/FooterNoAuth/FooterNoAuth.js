import React from 'react';
import './FooterNoAuth.scss';

const FooterNoAuth = () => {
    return (
        <footer className="footer-no-auth">
            <nav className="footer-no-auth__nav">
                <a href="/rutinas" className="footer-no-auth__nav-link">Rutinas</a>
                <a href="/alimentacion" className="footer-no-auth__nav-link">Alimentación</a>
                <a href="/progreso" className="footer-no-auth__nav-link">Progreso</a>
                <a href="/contacto" className="footer-no-auth__nav-link">Contacto</a>
            </nav>
            <ul className="footer-no-auth__list">
                <li className="footer-no-auth__list-item">
                    <a href="*" className="footer-no-auth__list-link">Términos y condiciones</a>
                </li>
                <li className="footer-no-auth__list-item">
                    <a href="*" className="footer-no-auth__list-link">Privacidad</a>
                </li>
                <li className="footer-no-auth__list-item">
                    <a href="*" className="footer-no-auth__list-link">Normas de la comunidad</a>
                </li>
                <li className="footer-no-auth__list-item">
                    <a href="*" className="footer-no-auth__list-link">Sobre nosotros</a>
                </li>
                <li className="footer-no-auth__list-item">
                    <a href="*" className="footer-no-auth__list-link">Cookies</a>
                </li>
            </ul>
            <div className="footer-no-auth__rights">
                <p className="footer-no-auth__rights-text">© 2025 TrainForge. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default FooterNoAuth;