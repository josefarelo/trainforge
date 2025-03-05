import React from 'react';
import { Link } from 'react-router-dom';
import './Back.scss';

const BackExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="back-exercise">
                    Remo con barra
                    <Link
                    to="/es/ejercicios/espalda/remo-con-barra"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="back-exercise">
                    Remo Pendlay
                    <Link
                    to="/es/ejercicios/espalda/remo-pendlay"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="back-exercise">
                    Remo Yates
                    <Link
                    to="/es/ejercicios/espalda/remo-yates"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="back-exercise">
                    Remo T-Bar (con barra)
                    <Link
                    to="/es/ejercicios/espalda/remo-t-con-barra"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="back-exercise">
                    Remo en máquina Hammer Strength
                    <Link
                    to="/es/ejercicios/espalda/remo-hammer"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="back-exercise">
                    Remo en máquina con agarre cerrado
                    <Link
                    to="/es/ejercicios/espalda/remo-maquina-con-agarre-cerrado"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="back-exercise">
                    Remo en máquina con agarre supino
                    <Link
                    to="/es/ejercicios/espalda/remo-maquina-agarre-supino"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="back-exercise">
                    Pull-over en máquina
                    <Link
                    to="/es/ejercicios/espalda/pullover-maquina-espalda"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="back-exercise">
                    Jalón al pecho con agarre amplio (polea)
                    <Link
                    to="/es/ejercicios/espalda/jalon-al-pecho-con-agarre-amplio"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="back-exercise">
                    Jalón al pecho con agarre cerrado (polea)
                    <Link
                    to="/es/ejercicios/espalda/jalon-al-pecho-con-agarre-cerrado"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="back-exercise">
                    Jalón al pecho con agarre supino (polea)
                    <Link
                    to="/es/ejercicios/espalda/jalon-al-pecho-con-agarre-supino"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="back-exercise">
                    Jalón tras nuca (polea)
                    <Link
                    to="/es/ejercicios/espalda/jalon-tras-nuca"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="back-exercise">
                    Remo bajo en polea con agarre estrecho
                    <Link
                    to="/es/ejercicios/espalda/remo-bajo-polea-con-agarre-estrecho"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="back-exercise">
                    Remo bajo en polea con agarre ancho
                    <Link
                    to="/es/ejercicios/espalda/remo-bajo-polea-con-agarre-ancho"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="back-exercise">
                    Remo unilateral en polea baja
                    <Link
                    to="/es/ejercicios/espalda/remo-unilateral-polea-baja"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="back-exercise">
                    Remo en polea con cuerda (neutral y abierto)
                    <Link
                    to="/es/ejercicios/espalda/remo-polea-con-cuerda"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="back-exercise">
                    Remo con mancuerna a una mano
                    <Link
                    to="/es/ejercicios/espalda/remo-con-mancuerna-una-mano"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="back-exercise">
                    Remo inclinado con mancuernas
                    <Link
                    to="/es/ejercicios/espalda/remo-inclinado-con-mancuernas"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="back-exercise">
                    Pull-over con mancuerna
                    <Link
                    to="/es/ejercicios/espalda/pullover-con-mancuerna-espalda"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="back-exercise">
                    Remo en banco plano con apoyo de pecho
                    <Link
                    to="/es/ejercicios/espalda/remo-banco-plano-con-apoyo"
                    type="button"
                    className="back-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="back-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default BackExercisesList;