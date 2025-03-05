import React from 'react';
import { Link } from 'react-router-dom';
import './Abdomen.scss';

const AbdomenExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="abdomen-exercise">
                    Russian Twist con Mancuerna
                    <Link
                    to="/es/ejercicios/abdomen/russian-twist-con-mancuerna"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="abdomen-exercise">
                    Máquina de Abdominales (Crunch Machine)
                    <Link
                    to="/es/ejercicios/abdomen/crunch-maquina"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="abdomen-exercise">
                    Cable Crunch (Polea Alta)
                    <Link
                    to="/es/ejercicios/abdomen/crunch-con-polea-alta"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="abdomen-exercise">
                    Rollouts con Barra (Ab Wheel)
                    <Link
                    to="/es/ejercicios/abdomen/rollouts-con-barra-rueda"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="abdomen-exercise">
                    Máquina de Rotación Torso
                    <Link
                    to="/es/ejercicios/abdomen/rotacion-torso-maquina"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="abdomen-exercise">
                    Oblique Crunch con Polea Baja
                    <Link
                    to="/es/ejercicios/abdomen/crunch-con-polea-baja-oblicuos"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="abdomen-exercise">
                    Elevaciones de Piernas con Mancuerna
                    <Link
                    to="/es/ejercicios/abdomen/elevaciones-piernas-con-mancuerna"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="abdomen-exercise">
                    Máquina de Elevación de Piernas
                    <Link
                    to="/es/ejercicios/abdomen/elevacion-piernas-maquina"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="abdomen-exercise">
                    Woodchoppers con Polea
                    <Link
                    to="/es/ejercicios/abdomen/woodchoppers-con-polea"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="abdomen-exercise">
                    Abdominales con Barra
                    <Link
                    to="/es/ejercicios/abdomen/abdominales-con-barra"
                    type="button"
                    className="abdomen-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
    ];

    return (
        <ul className="abdomen-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default AbdomenExercisesList;