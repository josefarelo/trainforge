import React from 'react';
import { Link } from 'react-router-dom';
import './Forearm.scss';

const ForearmExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca con Barra (Pronación o Supinación)
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-con-barra"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca Invertido con Barra
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-invertido-con-barra"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="forearm-exercise">
                    Paseo del Granjero
                    <Link
                    to="/es/ejercicios/antebrazo/paseo-del-granjero"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="forearm-exercise">
                    Máquina de Flexión de Muñeca
                    <Link
                    to="/es/ejercicios/antebrazo/maquina-flexion-muñeca"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="forearm-exercise">
                    Máquina de Extensión de Muñeca
                    <Link
                    to="/es/ejercicios/antebrazo/maquina-extensiona-muñeca"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca con Polea Baja
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-con-polea-baja"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca Invertido con Polea Baja
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-invertido-con-polea-baja"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca con Mancuernas
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-con-mancuernas"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="forearm-exercise">
                    Curl de Muñeca Invertido con Mancuernas
                    <Link
                    to="/es/ejercicios/antebrazo/curl-muñeca-invertido-con-mancuernas"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="forearm-exercise">
                    Rotaciones de Muñeca con Mancuerna
                    <Link
                    to="/es/ejercicios/antebrazo/rotaciones-muñeca-con-mancuerna"
                    type="button"
                    className="forearm-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
    ];

    return (
        <ul className="forearm-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default ForearmExercisesList;