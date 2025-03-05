import React from 'react';
import './Biceps.scss';
import BicepsExercisesList from './BicepsExercisesList';

const Biceps = () => {

    return (
        <section className="biceps">
            <h1 className="biceps-title">Bíceps</h1>
            <p className="biceps-description">    
                Este músculo es clave para la flexión del codo y la fuerza de agarre. Trabajarlos bien no solo mejora la apariencia, sino que también potencia otros ejercicios de tirón.
                <br/>    
                <br/>
                Cuando piensas en un brazo fuerte, seguro imaginas unos bíceps marcados.
            </p>
            <h2 className="biceps-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <BicepsExercisesList />
        </section>
    );
};

export default Biceps;