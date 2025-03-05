import React from 'react';
import './Abdomen.scss';
import AbdomenExercisesList from './AbdomenExercisesList';

const Abdomen = () => {

    return (
        <section className="abdomen">
            <h1 className="abdomen-title">Abdomen</h1>
            <p className="abdomen-description">    
                Más que solo estética, un abdomen fuerte es la base de todo movimiento. Desde cargar peso hasta mejorar la postura, el core es el centro de estabilidad del cuerpo.
                <br/>    
                <br/>
                No se trata solo de marcar el six-pack, sino de fortalecerlo para un mejor desempeño general.
            </p>
            <h2 className="abdomen-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <AbdomenExercisesList />
        </section>
    );
};

export default Abdomen;