import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExercisesMainContent.scss';

import chestImage from "../../../assets/images/pecho-imagen.png";
import backImage from "../../../assets/images/espalda-imagen.png";
import shouldersImage from "../../../assets/images/hombros-imagen.png";
import abdomenImage from "../../../assets/images/abdomen-imagen.png";
import bicepsImage from "../../../assets/images/biceps-imagen.png";
import tricepsImage from "../../../assets/images/triceps-imagen.png";
import forearmsImage from "../../../assets/images/antebrazos-imagen.png";
import quadricepsImage from "../../../assets/images/cuadriceps-imagen.png";
import hamstringsImage from "../../../assets/images/femoral-imagen.png";
import glutesImage from "../../../assets/images/gluteos-imagen.png";
import calvesImage from "../../../assets/images/pantorrillas-imagen.png";

const ExercisesMainContent = () => {

    return (
        <section className="exercises">
            <h3 className="exercises__description1">Explora una variedad de ejercicios, aprende la técnica correcta y sigue una guía paso a paso para entrenar de forma segura y efectiva, evitando errores y lesiones.</h3>
            <h4 className="exercises__description2">Los ejercicios son la base de un cuerpo fuerte y saludable; ejecutarlos con la técnica adecuada no solo potencia el rendimiento y la hipertrofia muscular, sino que también previene lesiones y optimiza la movilidad a largo plazo.</h4>
            <div className="exercises__muscles">
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Pecho</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el pecho." 
                                className="exercises__muscles-group-img" 
                                src={ chestImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/pecho">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Espalda</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                            alt="Muñeco con sistema muscular enfatizando la espalda." 
                            className="exercises__muscles-group-img" 
                            src={ backImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/espalda">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Hombros</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando los hombros." 
                                className="exercises__muscles-group-img" 
                                src={ shouldersImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/hombros">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Abdomen</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el abdomen." 
                                className="exercises__muscles-group-img" 
                                src={ abdomenImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/abdomen">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Bíceps</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el bíceps." 
                                className="exercises__muscles-group-img" 
                                src={ bicepsImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/biceps">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Tríceps</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el tríceps." 
                                className="exercises__muscles-group-img" 
                                src={ tricepsImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/triceps">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Antebrazos</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el antebrazos." 
                                className="exercises__muscles-group-img" 
                                src={ forearmsImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/antebrazo">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Cuádriceps</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el cuádriceps." 
                                className="exercises__muscles-group-img" 
                                src={ quadricepsImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/cuadriceps">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Femoral</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el femoral." 
                                className="exercises__muscles-group-img" 
                                src={ hamstringsImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/femoral">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Glúteo</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando el glúteo." 
                                className="exercises__muscles-group-img" 
                                src={ glutesImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/gluteo">VER EJERCICIOS</Link>
                    </div>
                </div>
                <div className="exercises__muscles-group">
                    <h2 className="exercises__muscles-group-title">Pantorrila</h2>
                    <div className="exercises__muscles-group-img-container">
                        <img 
                                alt="Muñeco con sistema muscular enfatizando la pantorrilla." 
                                className="exercises__muscles-group-img" 
                                src={ calvesImage } 
                        />
                    </div>
                    <div className="exercises__muscles-group-link">
                        <Link to="/es/ejercicios/pantorrila">VER EJERCICIOS</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExercisesMainContent;