import React from 'react';
import './MainContent.scss';

const MainContent = () => {
    return (
        <section className="main-content">
        <h3>¿Por qué elegir TrainForge?</h3>
        <p>
            TrainForge es la herramienta perfecta para planificar y seguir tus entrenamientos.
            Diseñada para adaptarse a tus necesidades, te ayuda a alcanzar tus metas de fitness
            de manera eficiente y divertida.
        </p>

        <h4>Características principales</h4>
        <ul>
            <li>Planificación de entrenamientos personalizados.</li>
            <li>Seguimiento de progreso en tiempo real.</li>
            <li>Recomendaciones basadas en tus objetivos.</li>
        </ul>
        </section>
    );
};

export default MainContent;