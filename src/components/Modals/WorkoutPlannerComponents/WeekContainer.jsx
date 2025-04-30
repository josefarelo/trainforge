import React, { useState, useEffect } from "react";
import DayContainer from "./DayContainer";
import "../WorkoutPlannerAdvancedModal.scss";

export default function WeekContainer({ week, onRemove, onUpdate, isFirstWeek = false }) {
    const [days, setDays] = useState(week.days);
    const [daysNumber, setDaysNumber] = useState(week.days.length);

    useEffect(() => {
        onUpdate({ ...week, days });
    }, [days]);

    const addDay = () => {
        const newDayId = days.length + 1;
        setDays([
            ...days,
            { id: newDayId, name: `Día ${newDayId}`, exercises: [{ id: 1, tables: [] }] },
        ]);
        setDaysNumber(daysNumber + 1);
    };

    const removeDay = (dayId) => {
        if (days.length > 1) {
            const updatedDays = days.filter((day) => day.id !== dayId);
            setDays(updatedDays);
            setDaysNumber(daysNumber - 1);
        }
    };

    const updateDay = (updatedDay) => {
        const updatedDays = days.map((day) => (day.id === updatedDay.id ? updatedDay : day));
        setDays(updatedDays);
    };

    return (
        <div className="week-card">
            <div className="week-card__container">
                <h2 className="week-card__title">Semana {week.id}</h2>
                <div className="week-card__actions">
                    <button className="week-card__add-day-btn" onClick={addDay}>Agregar Día</button>
                    {!isFirstWeek && (
                        <button className="week-card__del-week-btn" onClick={() => onRemove(week.id)}>🗑️ Eliminar Semana</button>
                    )}
                </div>
            </div>
            <div className="week-card__content">
                {days.map((day, index) => (
                    <DayContainer
                        key={day.id}
                        day={day}
                        onRemove={removeDay}
                        onUpdate={updateDay}
                        isFirstDay={index === 0}
                    />
                ))}
            </div>
        </div>
    );
}
