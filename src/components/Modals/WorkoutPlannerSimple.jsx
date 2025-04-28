export default function WorkoutPlannerSimple({ programName, planType, onClose }) {
    return (
        <div>
            <h1>Planner Simple</h1>
            <p>Nombre del programa: {programName}</p>
            <p>Tipo de planificación: {planType}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}