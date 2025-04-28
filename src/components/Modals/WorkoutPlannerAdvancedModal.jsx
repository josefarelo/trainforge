import React, { useState } from "react";
import WeekContainer from "./WorkoutPlannerComponents/WeekContainer";
import "./WorkoutPlannerAdvancedModal.scss";

export default function WorkoutPlannerAdavanced({ programName, planType, onClose }) {
    const [weeks, setWeeks] = useState([
        {
            id: 1,
            days: [
                {
                    id: 1,
                    name: "Día 1",
                    exercises: [{ id: 1, tables: [] }],
                },
            ],
        },
    ]);

    const [weeksNumber, setWeeksNumber] = useState(1);

    const addWeek = () => {
        const newWeekId = weeks.length + 1;
        setWeeks([
            ...weeks,
            {
                id: newWeekId,
                days: [{ id: 1, name: "Día 1", exercises: [{ id: 1, tables: [] }] }],
            },
        ]);
        setWeeksNumber(weeksNumber + 1);
    };

    const removeWeek = (weekId) => {
        if (weeks.length > 1) {
            const updatedWeeks = weeks.filter((week) => week.id !== weekId);
            setWeeks(updatedWeeks);
            setWeeksNumber(weeksNumber - 1);
        }
    };

    const updateWeek = (updatedWeek) => {
        const updatedWeeks = weeks.map((week) => (week.id === updatedWeek.id ? updatedWeek : week));
        setWeeks(updatedWeeks);
    };

    return (
        <div className="workout-planner">
            <div className="workout-planner__container">
                <h1 className="workout-planner__title">Planificador de Entrenamiento</h1>
                <div className="workout-planner__container">
                    {weeks.map((week, index) => (
                        <WeekContainer
                            key={week.id}
                            week={week}
                            onRemove={removeWeek}
                            onUpdate={updateWeek}
                            isFirstWeek={index === 0}
                        />
                    ))}

                    <button className="workout-planner__add-week-btn" onClick={addWeek}>
                        ➕ Agregar Semana
                    </button>

                    <div className="workout-planner__actions">
                        <button className="workout-planner__action-btn" onClick={onClose}>Cancelar</button>
                        <button className="workout-planner__action-btn" onClick={() => console.log("Guardar")}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
