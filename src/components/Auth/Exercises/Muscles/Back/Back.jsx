import React from 'react';
import './Back.scss';
import BackExercisesList from './BackExercisesList';

const Back = () => {

    return (
        <section className="back">
            <h1 className="back-title">Espalda</h1>
            <p className="back-description">    
                Aquí trabajan músculos como el dorsal ancho, trapecio y romboides, esenciales para tirar con fuerza y mantener el torso firme.
                <br/>    
                <br/>
                Una espalda ancha y fuerte no solo se ve increíble, sino que también es clave para la postura y el equilibrio muscular.
            </p>
            <h2 className="back-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <BackExercisesList />
        </section>
    );
};

export default Back;