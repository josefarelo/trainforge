import React from 'react';
import { Link } from 'react-router-dom';
import './MainContentNoAuth.scss';
import mainContentIntroImg from '../../../assets/images/main-content-intro-img.png';
import mainContentAboutImg from '../../../assets/images/main-content-about-img1.png';

const MainContentNoAuth = () => {
    return (
        <section className="main-content-no-auth">
            <div className="main-content-no-auth__intro">
                <h1 className="main-content-no-auth__intro-title">El éxito en el entrenamiento empieza con una planificación inteligente.</h1>
                <p className="main-content-no-auth__intro-description">¿Quieres llevar tu entrenamiento al siguiente nivel? Organiza tu plan, sigue tu progreso y alcanza tus metas con TrainForge.</p>
                <Link 
                    className="main-content-no-auth__intro-link"
                    to="/login"
                    type="button"
                >
                    EMPIEZA GRATIS
                </Link>
                <div className="main-content-no-auth__intro-image-container">
                    <img 
                        className="main-content-no-auth__intro-image"
                        alt="Cuadernos y lápiz sobre fondo con líneas verdes." 
                        src={mainContentIntroImg}
                    />
                </div>
            </div>

            <div className="main-content-no-auth__about">
                <h3 className="main-content-no-auth__about-title">¿Por qué elegir TrainForge?</h3>
                <p className="main-content-no-auth__about-description">
                    TrainForge es la herramienta perfecta para planificar y seguir tus entrenamientos.
                    Diseñada para adaptarse a tus necesidades, te ayuda a alcanzar tus metas de fitness
                    de manera eficiente.
                </p>
                <div className="main-content-no-auth__about-image-container">
                    <img 
                        className="main-content-no-auth__about-image"
                        alt="Banco de gimnasio y mancuernas sobre fondo con líneas verdes."
                        src={mainContentAboutImg}
                    />
                </div>
            </div>

            <div className="main-content-no-auth__tools">
                <h3 className="main-content-no-auth__tools-title">Herramientas para lograr tus metas</h3>
                <p className="main-content-no-auth__tools-description">¿Quieres mejorar tu entrenamiento, tus marcas, tu físico, y tu progreso? Te brindamos las funciones necesarias para lograrlo.</p>
                <ul className="main-content-no-auth__tools-list">
                    <li className="main-content-no-auth__tools-item">
                        <div className="main-content-no-auth__tools-item-icon-container">
                            <svg 
                                className="main-content-no-auth__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="Logo de libreta para planificación." 
                                    href={require("../../../assets/icons/home-page-icons/planning-logo.png")} 
                                    className="main-content-no-auth__tools-item-icon-image"
                                />
                            </svg>
                        </div>
                        Planifica. Registra. Mejora.
                        <p className="main-content-no-auth__tools-item-text"> Diseña tu entrenamiento, registra cada avance y alcanza tus metas de forma segura y sostenible. Convierte la constancia en resultados.</p>
                    </li>
                    <li className="main-content-no-auth__tools-item">
                        <div className="main-content-no-auth__tools-item-icon-container">
                            <svg 
                                className="main-content-no-auth__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="Logo de interpretación de una interfaz." 
                                    href={require("../../../assets/icons/home-page-icons/intuitive-interface-logo.png")} 
                                    className="main-content-no-auth__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Interfaz intuitiva.
                        <p className="main-content-no-auth__tools-item-text"> Planificar tu entrenamiento nunca ha sido tan fácil. Una experiencia fluida y sencilla para que te enfoques en lo importante: tu progreso.</p>
                    </li>
                    <li className="main-content-no-auth__tools-item">
                        <div className="main-content-no-auth__tools-item-icon-container">                        
                            <svg 
                                className="main-content-no-auth__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="Logo de diagrama de barras de estadísticas." 
                                    href={require("../../../assets/icons/home-page-icons/statistics-bar-chart-logo.png")} 
                                    className="main-content-no-auth__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Seguimiento de progreso en tiempo real.
                        <p className="main-content-no-auth__tools-item-text">Visualiza tu evolución en cada ejercicio, día tras día. Mantente motivado y supera tus propios límites con datos precisos de tu rendimiento.</p>
                    </li>
                    <li className="main-content-no-auth__tools-item">
                        <div className="main-content-no-auth__tools-item-icon-container">
                            <svg 
                                className="main-content-no-auth__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="Logo de una calculadora con una manzana." 
                                    href={require("../../../assets/icons/home-page-icons/macronutrient-calculator-logo.png")} 
                                    className="main-content-no-auth__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Cálculadora nutricional.
                        <p className="main-content-no-auth__tools-item-text">Ajusta tu alimentación según tus objetivos. Calcula macronutrientes, registra tu peso y logra un equilibrio perfecto entre nutrición y rendimiento.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MainContentNoAuth;