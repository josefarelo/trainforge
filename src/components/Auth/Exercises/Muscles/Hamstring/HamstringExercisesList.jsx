import React from 'react';
import { Link } from 'react-router-dom';
import './Hamstring.scss';

const HamstringExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="hamstring-exercise">
                    Peso Muerto Rumano
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-rumano"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="hamstring-exercise">
                    Peso Muerto con Piernas Rectas
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-con-piernas-rectas"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="hamstring-exercise">
                    Good Mornings
                    <Link
                    to="/es/ejercicios/femoral/buen-dia"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="hamstring-exercise">
                    Peso Muerto Sumo
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-sumo"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="hamstring-exercise">
                    Curl de Femorales en Máquina (Tumbado)
                    <Link
                    to="/es/ejercicios/femoral/curl-en-maquina-tumbado"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="hamstring-exercise">
                    Curl de Femorales en Máquina (Sentado)
                    <Link
                    to="/es/ejercicios/femoral/curl-en-maquina-sentado"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="hamstring-exercise">
                    Máquina de Peso Muerto (Máquina Smith)
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-maquina-smith"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="hamstring-exercise">
                    Máquina de Hiperextensiones
                    <Link
                    to="/es/ejercicios/femoral/maquina-hiperextensiones"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="hamstring-exercise">
                    Curl de Femorales en Polea Baja (Pierna Individual)
                    <Link
                    to="/es/ejercicios/femoral/curl-polea-baja-una-pierna"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="hamstring-exercise">
                    Peso Muerto con Cable (Polea Baja)
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-con-cable-polea-baja"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="hamstring-exercise">
                    Patada de Femoral en Polea (De Pie)
                    <Link
                    to="/es/ejercicios/femoral/patada-en-polea-de-pie"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="hamstring-exercise">
                    Pull-Through en Polea Baja
                    <Link
                    to="/es/ejercicios/femoral/pull-through-polea-baja"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="hamstring-exercise">
                    Peso Muerto Rumano con Mancuernas
                    <Link
                    to="/es/ejercicios/femoral/peso-muerto-rumano-con-mancuernas"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="hamstring-exercise">
                    Curl de Femorales con Mancuernas (Tumbado)
                    <Link
                    to="/es/ejercicios/femoral/curl-femoral-con-mancuernas-tumbado"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="hamstring-exercise">
                    Step-Ups con Mancuernas
                    <Link
                    to="/es/ejercicios/femoral/step-ups-con-mancuernas-femoral"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="hamstring-exercise">
                    Zancadas con Mancuernas
                    <Link
                    to="/es/ejercicios/femoral/zancadas-con-mancuernas"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="hamstring-exercise">
                    Nordic Hamstring Curl (Autocarga)
                    <Link
                    to="/es/ejercicios/femoral/curl-nordico"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="hamstring-exercise">
                    Sentadilla Búlgara con Mancuernas
                    <Link
                    to="/es/ejercicios/femoral/sentadilla-bulgara-con-mancuernas-femoral"
                    type="button"
                    className="hamstring-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="hamstring-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default HamstringExercisesList;