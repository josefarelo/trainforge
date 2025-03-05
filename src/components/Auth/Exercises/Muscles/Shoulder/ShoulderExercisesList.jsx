import React from 'react';
import { Link } from 'react-router-dom';
import './Shoulder.scss';

const ShoulderExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="shoulder-exercise">
                    Press Militar con Barra
                    <Link
                    to="/es/ejercicios/hombro/press-militar-con-barra"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="shoulder-exercise">
                    Press Arnold (con barra)
                    <Link
                    to="/es/ejercicios/hombro/press-arnold-con-barra"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Frontales con Barra
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-frontales-con-barra"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="shoulder-exercise">
                    Remo al Mentón con Barra
                    <Link
                    to="/es/ejercicios/hombro/remo-menton-barra"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="shoulder-exercise">
                    Push Press
                    <Link
                    to="/es/ejercicios/hombro/push-press"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="shoulder-exercise">
                    Press de Hombros en Máquina Sentado
                    <Link
                    to="/es/ejercicios/hombro/press-hombro-maquina-sentado"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="shoulder-exercise">
                    Máquina de Elevaciones Laterales
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-laterales-maquina"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="shoulder-exercise">
                    Máquina de Elevaciones Frontales
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-frontales-maquina"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="shoulder-exercise">
                    Máquina de Remo al Mentón
                    <Link
                    to="/es/ejercicios/hombro/remo-menton-maquina"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="shoulder-exercise">
                    Máquina de Press Militar Invertido
                    <Link
                    to="/es/ejercicios/hombro/press-militar-invertido-maquina"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Laterales con Polea Baja
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-laterales-con-polea-baja"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Frontales con Polea Baja
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-frontales-con-polea-baja"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="shoulder-exercise">
                    Face Pull con Polea Alta
                    <Link
                    to="/es/ejercicios/hombro/face-pull-con-polea-alta"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="shoulder-exercise">
                    Press de Hombros con Polea
                    <Link
                    to="/es/ejercicios/hombro/press-hombro-con-polea"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="shoulder-exercise">
                    Rotaciones Externas con Polea
                    <Link
                    to="/es/ejercicios/hombro/rotaciones-externas-con-polea"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="shoulder-exercise">
                    Press de Hombros con Mancuernas
                    <Link
                    to="/es/ejercicios/hombro/press-hombro-con-mancuernas"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Laterales con Mancuernas
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-laterales-con-mancuernas"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Frontales con Mancuernas
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-frontales-con-mancuernas"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="shoulder-exercise">
                    Elevaciones Posteriores con Mancuernas (inclinado)
                    <Link
                    to="/es/ejercicios/hombro/elevaciones-posteriores-con-mancuernas"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="shoulder-exercise">
                    Press Arnold con Mancuernas
                    <Link
                    to="/es/ejercicios/hombro/press-arnold-con-mancuernas"
                    type="button"
                    className="shoulder-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="shoulder-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default ShoulderExercisesList;