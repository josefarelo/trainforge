import React from 'react';
import './Shoulder.scss';
import ShoulderExercisesList from './ShoulderExercisesList';

const Shoulder = () => {

    return (
        <section className="shoulder">
            <h1 className="shoulder-title">Hombro</h1>
            <p className="shoulder-description">    
                El deltoides se divide en tres partes (anterior, medio y posterior), cada una con un rol importante en los movimientos del brazo y la estabilidad de la articulación.
                <br/>    
                <br/>
                Los hombros bien desarrollados crean esa apariencia de "V" que muchos buscan.
            </p>
            <h2 className="shoulder-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <ShoulderExercisesList />
        </section>
    );
};

export default Shoulder;