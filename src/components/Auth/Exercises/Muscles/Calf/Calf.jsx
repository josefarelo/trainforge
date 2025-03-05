import React from 'react';
import './Calf.scss';
import CalfExercisesList from './CalfExercisesList';

const Calf = () => {

    return (
        <section className="calf">
            <h1 className="calf-title">Pantorrila</h1>
            <p className="calf-description">    
                Muchas veces olvidadas, las pantorrillas son clave para la movilidad y el equilibrio. 
                Son las responsables de impulsarte en cada paso, salto o sprint.
                <br/>    
                <br/>
                Trabajarlas bien te dará mayor resistencia y una mejor estética en las piernas.
            </p>
            <h2 className="calf-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <CalfExercisesList />
        </section>
    );
};

export default Calf;