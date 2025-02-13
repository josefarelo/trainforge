import React from 'react';
import './MainContent.scss';
import mainContentIntroImg from '../../assets/images/main-content-intro-img.png';
import mainContentAboutImg from '../../assets/images/main-content-about-img1.png';

const MainContent = () => {
    return (
        <section className="main-content">
            <div className="main-content__intro">
                <h1 className="main-content__intro-title">El éxito en el entrenamiento empieza con una planificación inteligente.</h1>
                <p className="main-content__intro-description">¿Quieres llevar tu entrenamiento al siguiente nivel? Organiza tu plan, sigue tu progreso y alcanza tus metas con TrainForge.</p>
                <div className="main-content__intro-link">
                    <a className="main-content__intro-link-name" href="*">EMPIEZA GRATIS</a>
                </div>
                <div className="main-content__intro-image-container">
                    <img 
                        className="main-content__intro-image"
                        alt="Cuadernos y lápiz sobre fondo con líneas verdes." 
                        src={mainContentIntroImg}
                    />
                </div>
            </div>

            <div className="main-content__about">
                <h3 className="main-content__about-title">¿Por qué elegir TrainForge?</h3>
                <p className="main-content__about-description">
                    TrainForge es la herramienta perfecta para planificar y seguir tus entrenamientos.
                    Diseñada para adaptarse a tus necesidades, te ayuda a alcanzar tus metas de fitness
                    de manera eficiente.
                </p>
                <div className="main-content__about-image-container">
                    <img 
                        className="main-content__about-image"
                        alt="Banco de gimnasio y mancuernas sobre fondo con líneas verdes."
                        src={mainContentAboutImg}
                    />
                </div>
            </div>

            <div className="main-content__tools">
                <h3 className="main-content__tools-title">Herramientas para lograr tus metas</h3>
                <p className="main-content__tools-description">¿Quieres mejorar tu entrenamiento, tus marcas, tu físico, y tu progreso? Te brindamos las funciones necesarias para lograrlo.</p>
                <ul className="main-content__tools-list">
                    <li className="main-content__tools-item">
                        <div className="main-content__tools-item-icon-container">
                            <svg 
                                className="main-content__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="" 
                                    href={require("../../assets/icons/home-page-icons/11.png")} 
                                    className="main-content__tools-item-icon-image"
                                />
                            </svg>
                        </div>
                        Planifica. Registra. Mejora.
                        <p className="main-content__tools-item-text"> Diseña tu entrenamiento, registra cada avance y alcanza tus metas de forma segura y sostenible. Convierte la constancia en resultados.</p>
                    </li>
                    <li className="main-content__tools-item">
                        <div className="main-content__tools-item-icon-container">
                            <svg 
                                className="main-content__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="" 
                                    href={require("../../assets/icons/home-page-icons/22.png")} 
                                    className="main-content__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Interfaz intuitiva.
                        <p className="main-content__tools-item-text"> Planificar tu entrenamiento nunca ha sido tan fácil. Una experiencia fluida y sencilla para que te enfoques en lo importante: tu progreso.</p>
                    </li>
                    <li className="main-content__tools-item">
                        <div className="main-content__tools-item-icon-container">                        
                            <svg 
                                className="main-content__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="" 
                                    href={require("../../assets/icons/home-page-icons/33.png")} 
                                    className="main-content__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Seguimiento de progreso en tiempo real.
                        <p className="main-content__tools-item-text">Visualiza tu evolución en cada ejercicio, día tras día. Mantente motivado y supera tus propios límites con datos precisos de tu rendimiento.</p>
                    </li>
                    <li className="main-content__tools-item">
                        <div className="main-content__tools-item-icon-container">
                            <svg 
                                className="main-content__tools-item-icon"
                                xmlns="http://www.w3.org/2000/svg">
                                <image 
                                    alt="" 
                                    href={require("../../assets/icons/home-page-icons/44.png")} 
                                    className="main-content__tools-item-icon-image"
                                />
                            </svg> 
                        </div>
                        Cálculadora nutricional.
                        <p className="main-content__tools-item-text">Ajusta tu alimentación según tus objetivos. Calcula macronutrientes, registra tu peso y logra un equilibrio perfecto entre nutrición y rendimiento.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MainContent;