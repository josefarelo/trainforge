import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <a href="/rutinas" className="footer__nav-link">Rutinas</a>
                <a href="/alimentacion" className="footer__nav-link">Alimentación</a>
                <a href="/progreso" className="footer__nav-link">Progreso</a>
                <a href="/contacto" className="footer__nav-link">Contacto</a>
            </nav>
            <ul className="footer__list">
                <li className="footer__list-item">
                    <a href="*" className="footer__list-link">Sección 1</a>
                </li>
                <li className="footer__list-item">
                    <a href="*" className="footer__list-link">Sección 2</a>
                </li>
                <li className="footer__list-item">
                    <a href="*" className="footer__list-link">Sección 3</a>
                </li>
                <li className="footer__list-item">
                    <a href="*" className="footer__list-link">Sección 4</a>
                </li>
                <li className="footer__list-item">
                    <a href="*" className="footer__list-link">Sección 5</a>
                </li>
            </ul>
            <div className="footer__rights">
                <p className="footer__rights-text">© 2025 TrainForge. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;