import React from 'react';
import './Hamstring.scss';
import HamstringExercisesList from './HamstringExercisesList';

const Hamstring = () => {

    return (
        <section className="hamstring">
            <h1 className="hamstring-title">Femoral</h1>
            <p className="hamstring-description">    
                La parte trasera del muslo es igual de importante que la frontal. 
                Los isquiotibiales (o femorales) son esenciales para la flexión de la rodilla y la estabilidad de la cadera
                <br/>    
                <br/>
                Fortalecerlos ayuda a prevenir lesiones y mejorar el rendimiento deportivo.
            </p>
            <h2 className="hamstring-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <HamstringExercisesList />
        </section>
    );
};

export default Hamstring;