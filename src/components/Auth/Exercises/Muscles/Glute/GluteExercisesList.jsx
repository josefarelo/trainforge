import React from 'react';
import { Link } from 'react-router-dom';
import './Glute.scss';

const GluteExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="glute-exercise">
                    Hip Thrust (Empuje de cadera)
                    <Link
                    to="/es/ejercicios/gluteo/hip-thrust"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="glute-exercise">
                    Step-ups
                    <Link
                    to="/es/ejercicios/gluteo/step-ups"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="glute-exercise">
                    Máquina de abducción de cadera (Hip Abductor)
                    <Link
                    to="/es/ejercicios/gluteo/maquina-de-abduccion-de-cadera"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="glute-exercise">
                    Máquina de extensión de cadera (Glute Kickback Machine)
                    <Link
                    to="/es/ejercicios/gluteo/maquina-de-extension-de-cadera"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="glute-exercise">
                    Prensa de piernas
                    <Link
                    to="/es/ejercicios/gluteo/prensa-de-piernas"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="glute-exercise">
                    Patada de glúteo en polea baja (Cable Kickback)
                    <Link
                    to="/es/ejercicios/gluteo/patada-en-polea-baja"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="glute-exercise">
                    Abducción de cadera en polea baja (Cable Hip Abduction)
                    <Link
                    to="/es/ejercicios/gluteo/abduccion-de-cadera-polea-baja"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="glute-exercise">
                    Pull-through en polea baja (Cable Pull-through)
                    <Link
                    to="/es/ejercicios/gluteo/pull-through-polea-baja"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="glute-exercise">
                    Sentadilla búlgara con mancuernas (Bulgarian Split Squat)
                    <Link
                    to="/es/ejercicios/gluteo/sentadilla-bulgara-con-mancuernas"
                    type="button"
                    className="glute-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        }, 
    ];

    return (
        <ul className="glute-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default GluteExercisesList;