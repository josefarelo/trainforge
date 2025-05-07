import React, { useState } from "react";
import DayContainer from "./WorkoutPlannerSimpleComponents/DayContainer";
import "./WorkoutPlannerAdvancedModal.scss";

export default function WorkoutPlannerSimple({ programName, planType, onClose }) {
    const [days, setDays] = useState([
        {
            id: 1,
            name: "Día 1",
            exercises: [{ id: 1, tables: [] }],
        },
    ]);

    const addDay = () => {
        const newDayId = days.length + 1;
        setDays([
            ...days,
            {
                id: newDayId,
                name: `Día ${newDayId}`,
                exercises: [{ id: 1, tables: [] }],
            },
        ]);
    };

    const removeDay = (dayId) => {
        if (days.length > 1) {
            setDays(days.filter((day) => day.id !== dayId));
        }
    };

    const updateDay = (updatedDay) => {
        setDays(days.map((day) => (day.id === updatedDay.id ? updatedDay : day)));
    };

    return (
        <div className="workout-planner">
            <div className="workout-planner__container">
                <div className="workout-planner__container-scrollable">
                    <h1 className="workout-planner__title">Planificar Entrenamiento</h1>
                    <div className="workout-planner__content">
                        {days.map((day, index) => (
                            <DayContainer
                                key={day.id}
                                day={day}
                                onRemove={removeDay}
                                onUpdate={updateDay}
                                isFirstDay={index === 0}
                            />
                        ))}

                        <button className="workout-planner__add-week-btn" onClick={addDay}>
                            ➕ Agregar Día
                        </button>

                        <div className="workout-planner__actions">
                            <button className="workout-planner__actions-btn" onClick={onClose}>Cancelar</button>
                            <button className="workout-planner__actions-btn" onClick={() => console.log("Guardar")}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
