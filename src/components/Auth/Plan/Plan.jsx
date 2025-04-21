import { Link } from 'react-router-dom';

import './Plan.scss';
import TrainingPlanModal from "../../Modals/TrainingPlanModal";
import simplePlanningImg from "../../../assets/icons/planning-icons/planificacion-simple.png";
import advancedPlanningImg from "../../../assets/icons/planning-icons/planificacion-avanzada.png";



const Plan = () => {

    return (
        <div className="plan">
            <h1 className="plan__title">Planificá tu entrenamiento</h1>
            <p className="plan__description">Diseña tu propio plan de entrenamiento de manera sencilla y efectiva. Ajusta ejercicios, series, repeticiones y días de entrenamiento según tus objetivos y nivel de experiencia.</p>
            <div className="plan__plannings">
                <h3 className="plan__plannings-title">Mis planificaciones</h3>
                <TrainingPlanModal />
                {/* 
                    Debe haber un div por cada rutina existente, cada una deberá tener el nombre de rutina que le asignó el usuario, y deberá tener un botón de editar y otro de eliminar
                */}
            </div>
            <div className="plan__planning-type">
                <div className="plan__planning-type-simple">
                    <h3 className="plan__planning-type-simple-title">Planificación simple</h3>
                    <div className="plan__planning-type-simple-img-container">
                        <img className="plan__planning-type-simple-img" src={ simplePlanningImg } alt="" />
                    </div>
                    <p className="plan__planning-type-simple-description">Organiza tu entrenamiento de manera fácil y efectiva. En esta modalidad, cada semana sigue la misma estructura, por lo que solo necesitas programar cada día una vez. Agrega los músculos a trabajar, ejercicios, series, rango de repeticiones e indicaciones personalizadas para optimizar tu rendimiento.</p>
                </div>
                <div className="plan__planning-type-advanced">
                    <h3 className="plan__planning-type-advanced-title">Planificación avanzada</h3>
                    <div className="plan__planning-type-advanced-img-container">
                        <img className="plan__planning-type-advanced-img" src={ advancedPlanningImg } alt="" />
                    </div>
                    <p className="plan__planning-type-advanced-description">Para quienes buscan variedad y máxima personalización, esta opción permite planificar cada semana por separado. Diseña rutinas con diferentes frecuencias y estructuras, pudiendo asignar una semana con 3 días de entrenamiento y otra con 6 si lo deseas. Añade músculos, ejercicios, series, rango de repeticiones, RIR, tiempos de descanso e indicaciones para ajustar cada sesión a tu estilo y progresión.</p>
                </div>
            </div>
        </div>
    );
};

export default Plan;