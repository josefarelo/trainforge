import React from 'react';
import './Chest.scss';
import ChestExercisesList from './ChestExercisesList';

const Chest = () => {

    return (
        <section className="chest">
            <h1 className="chest-title">Pecho</h1>
            <p className="chest-description">    
                El pecho es uno de los grupos musculares más llamativos y trabajados en el gimnasio.
                Está compuesto por el pectoral mayor y menor, encargados de los movimientos de empuje y estabilidad del torso.
                <br/>    
                <br/>
                Un pecho fuerte no solo mejora la estética, sino también el rendimiento en otros ejercicios.
            </p>
            <h2 className="chest-subtitle">Ejercicios</h2>
            
            {/* Lista de ejercicios */}
            <ChestExercisesList />
        </section>
    );
};

export default Chest;