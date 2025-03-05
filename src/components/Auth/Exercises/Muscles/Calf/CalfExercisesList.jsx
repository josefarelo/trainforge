import React from 'react';
import { Link } from 'react-router-dom';
import './Calf.scss';

const CalfExercisesList = () => {

    // Array lista de ejercicios
    const exercises = [
        {
            id: 1,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones de pie (con barra)
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-de-pie-con-barra"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
        {
            id: 2,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones en prensa de piernas
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-prensa-de-piernas"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 3,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones en máquina sentado
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-maquina-sentado"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 4,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones en máquina de pie
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-maquina-de-pie"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 5,
            exercise: (
                <div className="calf-exercise">
                    Máquina de pantorrillas en prensa horizontal
                    <Link
                    to="/es/ejercicios/pantorrilla/maquina-de-pantorrillas-prensa-horizontal"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 6,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones con polea baja
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-con-polea-baja"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 7,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones con mancuernas (a dos piernas)
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-con-mancuernas-dos-piernas"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 8,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones con mancuerna (a una pierna)
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-con-mancuernas-una-pierna"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },   
        {
            id: 9,
            exercise: (
                <div className="calf-exercise">
                    Elevación de talones en step con mancuernas
                    <Link
                    to="/es/ejercicios/pantorrilla/elevacion-de-talones-step-con-mancuernas"
                    type="button"
                    className="calf-exercise-link"
                    >
                        Ver
                    </Link>
                </div>
            ),
        },  
    ];

    return (
        <ul className="calf-exercises-list">
            {exercises.map((exercises) =>(
                <li key={exercises.id}>{exercises.exercise}</li>
            ))}
        </ul>
    );
};

export default CalfExercisesList;