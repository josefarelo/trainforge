import React from 'react';
import { Link } from 'react-router-dom';
import './Triceps.scss';

const TricepsExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="triceps-exercise">
                    Kickbacks con mancuernas
                    <Link
                    to="/es/ejercicios/triceps/kickbacks-con-mancuernas"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="triceps-exercise">
                    Press de tríceps con mancuerna por encima de la cabeza
                    <Link
                    to="/es/ejercicios/triceps/press-con-mancuerna-encima-de-la-cabeza"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps con mancuerna a un brazo
                    <Link
                    to="/es/ejercicios/triceps/extension-con-mancuerna-un-brazo"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="triceps-exercise">
                    Press francés con mancuernas
                    <Link
                    to="/es/ejercicios/triceps/press-frances-con-mancuernas"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="triceps-exercise">
                    Press de banca con agarre cerrado
                    <Link
                    to="/es/ejercicios/triceps/press-banca-agarre-cerrado"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="triceps-exercise">
                    Fondos en paralelas
                    <Link
                    to="/es/ejercicios/triceps/fondos-paralelas"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="triceps-exercise">
                    Press militar con agarre cerrado
                    <Link
                    to="/es/ejercicios/triceps/press-militar-agarre-cerrado"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps con barra (Skull Crushers)
                    <Link
                    to="/es/ejercicios/triceps/skull-crushers-con-barra"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="triceps-exercise">
                    Press de banca declinado con agarre cerrado
                    <Link
                    to="/es/ejercicios/triceps/press-banca-declinado-agarre-cerrado"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 10,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps en máquina
                    <Link
                    to="/es/ejercicios/triceps/extension-maquina"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 11,
            exercise: (
                <div className="triceps-exercise">
                    Press de banca en máquina con agarre cerrado
                    <Link
                    to="/es/ejercicios/triceps/press-banca-maquina-con-agarre-cerrado"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 12,
            exercise: (
                <div className="triceps-exercise">
                    Fondos en máquina asistida
                    <Link
                    to="/es/ejercicios/triceps/fondos-maquina-asistida"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 13,
            exercise: (
                <div className="triceps-exercise">
                    Press de tríceps en máquina sentado
                    <Link
                    to="/es/ejercicios/triceps/press-maquina-sentado"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 14,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps en máquina de polea alta
                    <Link
                    to="/es/ejercicios/triceps/extension-maquina-polea-alta"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 15,
            exercise: (
                <div className="triceps-exercise">
                    Press de tríceps en polea alta
                    <Link
                    to="/es/ejercicios/triceps/press-polea-alta"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 16,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps con cuerda
                    <Link
                    to="/es/ejercicios/triceps/extension-con-cuerda"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 17,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps con manija individual
                    <Link
                    to="/es/ejercicios/triceps/extension-con-manija-individual"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 18,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps por detrás de la cabeza en polea baja
                    <Link
                    to="/es/ejercicios/triceps/extension-por-detras-de-la-cabeza-polea-baja"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 19,
            exercise: (
                <div className="triceps-exercise">
                    Kickbacks en polea baja
                    <Link
                    to="/es/ejercicios/triceps/kickbacks-polea-baja"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 20,
            exercise: (
                <div className="triceps-exercise">
                    Extensión de tríceps con mancuerna (Skull Crushers con mancuerna)
                    <Link
                    to="/es/ejercicios/triceps/skull-crushers-con-mancuerna"
                    type="button"
                    className="triceps-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
    ];

    return (
        <ul className="triceps-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default TricepsExercisesList;