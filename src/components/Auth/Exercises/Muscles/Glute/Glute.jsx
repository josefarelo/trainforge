import React from 'react';
import './Glute.scss';
import GluteExercisesList from './GluteExercisesList';

const Glute = () => {

    return (
        <section className="glute">
            <h1 className="glute-title">Glúteo</h1>
            <p className="glute-description">    
                No solo es una cuestión estética: los glúteos son los músculos más fuertes del cuerpo y juegan un papel clave en la postura, la estabilidad y la potencia en muchos movimientos.
                <br/>    
                <br/>
                Unos glúteos bien trabajados mejoran el rendimiento en sentadillas, saltos y hasta en la velocidad al correr.
            </p>
            <h2 className="glute-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <GluteExercisesList />
        </section>
    );
};

export default Glute;