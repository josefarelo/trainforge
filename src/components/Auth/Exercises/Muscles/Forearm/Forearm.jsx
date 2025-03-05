import React from 'react';
import './Forearm.scss';
import ForearmExercisesList from './ForearmExercisesList';

const Forearm = () => {

    return (
        <section className="forearm">
            <h1 className="forearm-title">Antebrazo</h1>
            <p className="forearm-description">    
                Los antebrazos están llenos de músculos pequeños pero poderosos que mejoran la fuerza de sujeción y el rendimiento en otros ejercicios.
                <br/>    
                <br/>
                Un agarre fuerte lo cambia todo: más control, más estabilidad y menos riesgo de lesiones.
            </p>
            <h2 className="forearm-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <ForearmExercisesList />
        </section>
    );
};

export default Forearm;