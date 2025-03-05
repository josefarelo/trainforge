import React from 'react';
import { Link } from 'react-router-dom';
import './Biceps.scss';

const BicepsExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con barra recta
                    <Link
                    to="/es/ejercicios/biceps/curl-barra-recta"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con barra Z
                    <Link
                    to="/es/ejercicios/biceps/curl-con-barra-z-w"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con agarre inverso (barra recta)
                    <Link
                    to="/es/ejercicios/biceps/curl-con-agarre-inverso-barra-recta"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con barra en banco Scott
                    <Link
                    to="/es/ejercicios/biceps/curl-con-barra-banco-scott"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en máquina sentado
                    <Link
                    to="/es/ejercicios/biceps/curl-maquina-sentado"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en máquina de predicador
                    <Link
                    to="/es/ejercicios/biceps/curl-maquina-predicador"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en máquina de polea baja
                    <Link
                    to="/es/ejercicios/biceps/curl-maquina-polea-baja"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en polea baja con cuerda
                    <Link
                    to="/es/ejercicios/biceps/curl-biceps-polea-baja-con-cuerda"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en polea alta con agarre inverso
                    <Link
                    to="/es/ejercicios/biceps/curl-polea-alta-con-agarre-inverso"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps unilateral en polea baja
                    <Link
                    to="/es/ejercicios/biceps/curl-unilateral-polea-baja"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps en polea cruzada
                    <Link
                    to="/es/ejercicios/biceps/curl-polea-cruzada"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas de pie
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-de-pie"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en banco inclinado
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-banco-inclinado"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en banco Scott
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-banco-scott"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps martillo con mancuernas
                    <Link
                    to="/es/ejercicios/biceps/curl-martillo-con-mancuernas"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps concentrado con mancuerna
                    <Link
                    to="/es/ejercicios/biceps/curl-concentrado-con-mancuerna"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en banco plano
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-banco-plano"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en pronación
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-prono"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en posición de predicador
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-predicador"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="biceps-exercise">
                    Curl de bíceps con mancuernas en banco inclinado (alternado)
                    <Link
                    to="/es/ejercicios/biceps/curl-con-mancuernas-banco-inclinado-alternado"
                    type="button"
                    className="biceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="biceps-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default BicepsExercisesList;