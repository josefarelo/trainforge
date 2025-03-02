import React from 'react';
import './FooterAuth.scss';

const FooterAuth = () => {
    return (
        <footer className="footer-auth">
            <ul className="footer-auth__list">
                <li className="footer-auth__list-item">
                    <a href="*" className="footer-auth__list-link">Términos y condiciones</a>
                </li>
                <li className="footer-auth__list-item">
                    <a href="*" className="footer-auth__list-link">Privacidad</a>
                </li>
                <li className="footer-auth__list-item">
                    <a href="*" className="footer-auth__list-link">Normas de la comunidad</a>
                </li>
                <li className="footer-auth__list-item">
                    <a href="*" className="footer-auth__list-link">Sobre nosotros</a>
                </li>
                <li className="footer-auth__list-item">
                    <a href="*" className="footer-auth__list-link">Cookies</a>
                </li>
            </ul>
            <div className="footer-auth__rights">
                <p className="footer-auth__rights-text">© 2025 TrainForge. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default FooterAuth;