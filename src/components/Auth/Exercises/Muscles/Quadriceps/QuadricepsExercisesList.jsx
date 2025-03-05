import React from 'react';
import { Link } from 'react-router-dom';
import './Quadriceps.scss';

const QuadricepsExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadillas
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadillas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadillas frontales
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadillas-frontales"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="quadriceps-exercise">
                    Zancadas con barra
                    <Link
                    to="/es/ejercicios/cuadriceps/zancadas-con-barra"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla overhead
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-overhead"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="quadriceps-exercise">
                    Prensa de piernas
                    <Link
                    to="/es/ejercicios/cuadriceps/prensa-de-piernas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="quadriceps-exercise">
                    Extensión de piernas
                    <Link
                    to="/es/ejercicios/cuadriceps/extension-de-piernas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="quadriceps-exercise">
                    Hack Squat
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-hack"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="quadriceps-exercise">
                    Máquina de sentadilla Smith
                    <Link
                    to="/es/ejercicios/cuadriceps/maquina-sentadilla-smith"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla con polea baja
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-con-polea-baja"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="quadriceps-exercise">
                    Patada de cuádriceps en polea
                    <Link
                    to="/es/ejercicios/cuadriceps/patada-en-polea"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="quadriceps-exercise">
                    Zancadas con polea
                    <Link
                    to="/es/ejercicios/cuadriceps/zancadas-con-polea"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadillas con mancuernas
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadillas-con-mancuernas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="quadriceps-exercise">
                    Zancadas con mancuernas
                    <Link
                    to="/es/ejercicios/cuadriceps/zancadas-con-mancuernas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="quadriceps-exercise">
                    Step-ups con mancuernas
                    <Link
                    to="/es/ejercicios/cuadriceps/step-ups-con-mancuernas"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla búlgara
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-bulgara"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="quadriceps-exercise">
                    Pistol Squat (Sentadilla a una pierna)
                    <Link
                    to="/es/ejercicios/cuadriceps/pistol-squat"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla en máquina pendular
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-maquina-pendular"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla sumo
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-sumo"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla en pared
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-pared"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="quadriceps-exercise">
                    Sentadilla con banda elástica
                    <Link
                    to="/es/ejercicios/cuadriceps/sentadilla-con-bnada-elastica"
                    type="button"
                    className="quadriceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="quadriceps-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default QuadricepsExercisesList;