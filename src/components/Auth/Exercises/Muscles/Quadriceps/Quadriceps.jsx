import React from 'react';
import './Quadriceps.scss';
import QuadricepsExercisesList from './QuadricepsExercisesList'

const Quadriceps = () => {

    return (
        <section className="quadriceps">
            <h1 className="quadriceps-title">Cuádriceps</h1>
            <p className="quadriceps-description">    
                El poder de las piernas empieza aquí. 
                Los cuádriceps son los músculos principales en la parte frontal del muslo y se encargan de la extensión de la rodilla. 
                <br/>    
                <br/>
                Son fundamentales para correr, saltar y levantar peso con seguridad.
            </p>
            <h2 className="quadriceps-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <QuadricepsExercisesList />
        </section>
    );
};

export default Quadriceps;