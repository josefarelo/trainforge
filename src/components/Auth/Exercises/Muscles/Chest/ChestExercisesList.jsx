import React from 'react';
import { Link } from 'react-router-dom';
import './Chest.scss';

const ChestExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="chest-exercise">
                    Press de banca plano con barra
                    <Link
                    to="/es/ejercicios/pecho/press-banca-plano-con-barra"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="chest-exercise">
                    Press de banca inclinado con barra
                    <Link
                    to="/es/ejercicios/pecho/press-banca-inclinado-con-barra"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="chest-exercise">
                    Press de banca declinado con barra
                    <Link
                    to="/es/ejercicios/pecho/press-banca-declinado-con-barra"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="chest-exercise">
                    Press de banca plano con mancuernas
                    <Link
                    to="/es/ejercicios/pecho/press-banca-plano-con-mancuernas"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="chest-exercise">
                    Press de banca inclinado con mancuernas
                    <Link
                    to="/es/ejercicios/pecho/press-banca-inclinado-con-mancuernas"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="chest-exercise">
                    Press de banca declinado con mancuernas
                    <Link
                    to="/es/ejercicios/pecho/press-banca-declinado-con-mancuernas"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="chest-exercise">
                    Aperturas planas con mancuernas
                    <Link
                    to="/es/ejercicios/pecho/aperturas-planas-con-mancuernas"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="chest-exercise">
                    Aperturas inclinadas con mancuernas
                    <Link
                    to="/es/ejercicios/pecho/aperturas-inclinadas-con-mancuernas"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="chest-exercise">
                    Pullover con mancuerna
                    <Link
                    to="/es/ejercicios/pecho/pullover-con-mancuernas-pecho"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="chest-exercise">
                    Press de pecho en máquina (Smith o guiada)
                    <Link
                    to="/es/ejercicios/pecho/press-pecho-en-maquina"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="chest-exercise">
                    Aperturas en máquina (Pec Deck)
                    <Link
                    to="/es/ejercicios/pecho/aperturas-en-maquina"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="chest-exercise">
                    Press de pecho en máquina Hammer Strength
                    <Link
                    to="/es/ejercicios/pecho/press-pecho-en-hammer"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="chest-exercise">
                    Aperturas en máquina (Pec Deck o Contractor de Pecho)
                    <Link
                    to="/es/ejercicios/pecho/aperturas-pec-deck"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="chest-exercise">
                    Press inclinado en máquina (Hammer Strength o guiada)
                    <Link
                    to="/es/ejercicios/pecho/press-inclinado-en-hammer-o-smith"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="chest-exercise">
                    Press declinado en máquina Hammer Strength
                    <Link
                    to="/es/ejercicios/pecho/press-declinado-en-hammer"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="chest-exercise">
                    Cruces en polea alta
                    <Link
                    to="/es/ejercicios/pecho/cruces-polea-alta"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="chest-exercise">
                    Cruces en polea media
                    <Link
                    to="/es/ejercicios/pecho/cruces-polea-media"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="chest-exercise">
                    Cruces en polea baja
                    <Link
                    to="/es/ejercicios/pecho/cruces-polea-baja"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="chest-exercise">
                    Press de pecho en polea
                    <Link
                    to="/es/ejercicios/pecho/press-pecho-en-polea"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="chest-exercise">
                    Fondos en paralelas para pecho
                    <Link
                    to="/es/ejercicios/pecho/fondos-paralelas-pecho"
                    type="button"
                    className="chest-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="chest-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default ChestExercisesList;