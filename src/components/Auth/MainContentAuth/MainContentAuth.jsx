import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainContentAuth.scss';

import appLogoGreen from "../../../assets/icons/logo/logo-img/TF-logo-green-img.png";
import planningLogo  from "../../../assets/icons/walcome-page-icons/planning-logo.png"
import registerLogo  from "../../../assets/icons/walcome-page-icons/registering-logo.png"
import progressLogo  from "../../../assets/icons/walcome-page-icons/progress-logo.png"
import calculatorLogo  from "../../../assets/icons/walcome-page-icons/calculator-logo.png"
import exercisesLogo  from "../../../assets/icons/walcome-page-icons/exercises-logo.png"


const MainContentAuth = () => {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    return (
        <section className="main-content-auth">
            <div className="main-content-auth-welcome">
                <div className="main-content-auth-welcome-logo">
                    <img 
                        alt="logo-de-trainforge-color-verde"
                        className="main-content-auth-welcome-logo-img"
                        src={ appLogoGreen } 
                    />
                </div>
                <div className="main-content-auth-welcome-title">
                    <h3>¡Hola Nombre! Bienvenido a Trainforge</h3>
                </div>
                <h2>Es tu momento de mejorar, entrenar duro y lograr tus objetivos.</h2>
            </div>

            {/* Muestra la opciones en formato mobile */}
            <div className="main-content-auth-sections" onClick={() => setIsVisible1(!isVisible1)}>PLANIFICAR ENTRENAMIENTO</div>
            <div className={`main-content-auth-sections-inner ${isVisible1 ? 'visible' : ''}`}>
                <p className="main-content-auth-sections-inner-text">
                    Nuestra herramienta te ayuda a organizar tus entrenamientos de forma eficiente. Puedes crear rutinas personalizadas, ajustar ejercicios, series y repeticiones, y hacer seguimiento de tu progreso. Todo en un solo lugar, fácil de usar y adaptado a tus objetivos.
                </p>
                <div className="main-content-auth-sections-inner-link">
                    <Link href="/es/planificacion-de-entrenamiento">PLANIFICAR</Link>
                </div>
            </div>
            <div className="main-content-auth-sections" onClick={() => setIsVisible2(!isVisible2)}>REGISTRAR AVANCES</div>
            <div className={`main-content-auth-sections-inner ${isVisible2 ? 'visible' : ''}`}>
                <p className="main-content-auth-sections-inner-text">
                    Puedes registrar cada entrenamiento de forma rápida y sencilla. Guarda los ejercicios, pesos, repeticiones y series para llevar un seguimiento detallado de tu progreso. Así podrás ver tu evolución y ajustar tu rutina según tus objetivos.
                </p>
                <div className="main-content-auth-sections-inner-link">
                    <Link href="/es/registro-de-entrenamiento">REGISTRAR</Link>
                </div>
            </div>
            <div className="main-content-auth-sections" onClick={() => setIsVisible3(!isVisible3)}>PROGRESO</div>
            <div className={`main-content-auth-sections-inner ${isVisible3 ? 'visible' : ''}`}>
                <p className="main-content-auth-sections-inner-text">
                    Consulta tu evolución en cualquier momento con gráficos y datos detallados. Visualiza cómo han cambiado tus pesos, repeticiones y volumen de entrenamiento a lo largo del tiempo. Así podrás ajustar tu rutina y mantenerte en el camino hacia tus objetivos.
                </p>
                <div className="main-content-auth-sections-inner-link">
                    <Link href="/es/progreso">PROGRESO</Link>
                </div>
            </div>
            <div className="main-content-auth-sections" onClick={() => setIsVisible4(!isVisible4)}>CALCULADORA DE MACRONUTRIENTES</div>
            <div className={`main-content-auth-sections-inner ${isVisible4 ? 'visible' : ''}`}>
                <p className="main-content-auth-sections-inner-text">
                    Descubre cuántas proteínas, carbohidratos y grasas necesitas según tu objetivo. Nuestra calculadora te ayuda a ajustar tu alimentación para ganar músculo, perder grasa o mantener tu peso.
                </p>
                <div className="main-content-auth-sections-inner-link">
                    <Link href="/es/calculadora-de-macronutrientes">CALCULAR</Link>
                </div>
            </div>
            <div className="main-content-auth-sections" onClick={() => setIsVisible5(!isVisible5)}>EJERCICIOS</div>
            <div className={`main-content-auth-sections-inner ${isVisible5 ? 'visible' : ''}`}>
                <p className="main-content-auth-sections-inner-text">
                    Aprende a hacer cada ejercicio de forma correcta con nuestras explicaciones detalladas. Encuentra la técnica adecuada, los músculos que trabajas y consejos para mejorar tu rendimiento. Ideal para entrenar con seguridad y sacarle el máximo provecho a cada movimiento.
                </p>
                <div className="main-content-auth-sections-inner-link">
                    <Link href="/es/ejercicios">EJERCICIOS</Link>
                </div>
            </div>

            {/* Muestra la opciones en formatos de mayor resolución */}
            <div className="main-content-auth-sections1">
                <div className="main-content-auth-sections1-inner">
                    <div className="main-content-auth-sections1-inner-title">PLANIFICAR ENTRENAMIENTO</div>
                    <img 
                            alt="Logo de libreta con filas y columnas." 
                            className="main-content-auth-sections1-inner-img"
                            src={ planningLogo } 
                    />
                    <p className="main-content-auth-sections1-inner-text">
                        Nuestra herramienta te ayuda a organizar tus entrenamientos de forma eficiente. Puedes crear rutinas personalizadas, ajustar ejercicios, series y repeticiones, y hacer seguimiento de tu progreso. Todo en un solo lugar, fácil de usar y adaptado a tus objetivos.
                    </p>
                    <div className="main-content-auth-sections1-inner-link">
                        <div className="main-content-auth-sections1-inner-link-container">
                            <Link href="/es/planificacion-de-entrenamiento">PLANIFICAR</Link>
                        </div>
                    </div>
                </div>
                <div className="main-content-auth-sections1-inner">
                    <div className="main-content-auth-sections1-inner-title">REGISTRAR AVANCES</div>
                    <img 
                            alt="Logo de hoja con un lapiz." 
                            className="main-content-auth-sections1-inner-img"
                            src={ registerLogo } 
                    />
                    <p className="main-content-auth-sections1-inner-text">
                        Puedes registrar cada entrenamiento de forma rápida y sencilla. Guarda los ejercicios, pesos, repeticiones y series para llevar un seguimiento detallado de tu progreso. Así podrás ver tu evolución y ajustar tu rutina según tus objetivos.
                    </p>
                    <div className="main-content-auth-sections1-inner-link">
                        <div className="main-content-auth-sections1-inner-link-container">
                            <Link href="/es/planificacion-de-entrenamiento">REGISTRAR</Link>
                        </div>
                    </div>
                </div>
                <div className="main-content-auth-sections1-inner">
                    <div className="main-content-auth-sections1-inner-title">PROGRESO</div>
                    <img 
                            alt="Logo de libreta con filas y columnas." 
                            className="main-content-auth-sections1-inner-img"
                            src={ progressLogo } 
                    />
                    <p className="main-content-auth-sections1-inner-text">
                        Consulta tu evolución en cualquier momento con gráficos y datos detallados. Visualiza cómo han cambiado tus pesos, repeticiones y volumen de entrenamiento a lo largo del tiempo. Así podrás ajustar tu rutina y mantenerte en el camino hacia tus objetivos.
                    </p>
                    <div className="main-content-auth-sections1-inner-link">
                        <div className="main-content-auth-sections1-inner-link-container">
                            <Link href="/es/planificacion-de-entrenamiento">PROGRESO</Link>
                        </div>
                    </div>
                </div>
                <div className="main-content-auth-sections1-inner">
                    <div className="main-content-auth-sections1-inner-title">CALCULADORA DE MACRONUTRIENTES</div>
                    <img 
                            alt="Logo de libreta con filas y columnas." 
                            className="main-content-auth-sections1-inner-img"
                            src={ calculatorLogo } 
                    />
                    <p className="main-content-auth-sections1-inner-text">
                        Descubre cuántas proteínas, carbohidratos y grasas necesitas según tu objetivo. Nuestra calculadora te ayuda a ajustar tu alimentación para ganar músculo, perder grasa o mantener tu peso.
                    </p>
                    <div className="main-content-auth-sections1-inner-link">
                        <div className="main-content-auth-sections1-inner-link-container">
                            <Link href="/es/planificacion-de-entrenamiento">CALCULAR</Link>
                        </div>
                    </div>
                </div>
                <div className="main-content-auth-sections1-inner">
                    <div className="main-content-auth-sections1-inner-title">EJERCICIOS</div>
                    <img 
                            alt="Logo de libreta con filas y columnas." 
                            className="main-content-auth-sections1-inner-img"
                            src={ exercisesLogo } 
                    />
                    <p className="main-content-auth-sections1-inner-text">
                        Aprende a hacer cada ejercicio de forma correcta con nuestras explicaciones detalladas. Encuentra la técnica adecuada, los músculos que trabajas y consejos para mejorar tu rendimiento. Ideal para entrenar con seguridad y sacarle el máximo provecho a cada movimiento.
                    </p>
                    <div className="main-content-auth-sections1-inner-link">
                        <div className="main-content-auth-sections1-inner-link-container">
                            <Link href="/es/planificacion-de-entrenamiento">EJERCICIOS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContentAuth;