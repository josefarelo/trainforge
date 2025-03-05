import React from 'react';
import './Triceps.scss';
import TricepsExercisesList from './TricepsExercisesList';

const Triceps = () => {

    return (
        <section className="triceps">
            <h1 className="triceps-title">Tríceps</h1>
            <p className="triceps-description">    
                Este músculo de tres cabezas es el encargado de extender el codo y aportar potencia en los movimientos de empuje.
                <br/>    
                <br/>
                El secreto de unos brazos grandes está en el tríceps, ya que ocupa la mayor parte de su volumen.
            </p>
            <h2 className="triceps-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <TricepsExercisesList />
        </section>
    );
};

export default Triceps;