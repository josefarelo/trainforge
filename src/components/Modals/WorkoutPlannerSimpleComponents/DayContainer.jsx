import React, { useState, useEffect } from "react";
import ExerciseModal from "./ExerciseModal";

export default function DayContainer({ day, onRemove, onUpdate, isFirstDay = false }) {
    const [dayName, setDayName] = useState(day.name);
    const [exercises, setExercises] = useState(day.exercises[0]?.tables || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [muscles, setMuscles] = useState([]);

    // Obtener músculos
    useEffect(() => {
        const fetchMuscles = async () => {
            try {
                const response = await fetch("/api/muscles");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMuscles(data);
            } catch (error) {
                console.error("Error al cargar músculos:", error);
                // Manejo adicional del error si es necesario
            }
        };
    
        fetchMuscles();
    }, []);

    useEffect(() => {
        onUpdate({
            ...day,
            name: dayName,
            exercises: [{ id: 1, tables: exercises }],
        });
    }, [exercises, dayName]);

    const addExerciseRow = () => {
        setExercises([
            ...exercises,
            { id: exercises.length + 1, muscle: "", exercise: "", details: null },
        ]);
    };

    const removeExerciseRow = (exerciseId) => {
        if (exercises.length > 1) {
            setExercises(exercises.filter((ex) => ex.id !== exerciseId));
        }
    };

    const updateExercise = (index, field, value) => {
        const updated = [...exercises];
        updated[index][field] = value;
        setExercises(updated);
    };

    const openModal = (index) => {
        setCurrentExerciseIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentExerciseIndex(null);
    };

    const saveExerciseDetails = (details) => {
        if (currentExerciseIndex !== null) {
            const updated = [...exercises];
            updated[currentExerciseIndex] = {
                    ...updated[currentExerciseIndex],
                    details,
                    exercise: details.exerciseName,
            };
            setExercises(updated);
            closeModal();
        }
    };

    useEffect(() => {
        if (exercises.length === 0) {
            addExerciseRow();
        }
    }, []);

    return (
        <div className="day-card">
            <div className="day-card__container">
                <div className="day-card__dropdown">
                    <div
                        className="day-card__dropdown-toggle"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {`${dayName} ▼` || `Día ${day.id} ▼`}
                    </div>

                    {dropdownOpen && (
                        <div className="day-card__dropdown-menu">
                            {[ `Día ${day.id} `, "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dayOption) => (
                                <div
                                    key={dayOption}
                                    className="day-card__dropdown-item"
                                    onClick={() => {
                                        setDayName(dayOption);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    {dayOption}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {!isFirstDay && (
                    <button className="day-card__del-day-btn" onClick={() => onRemove(day.id)}>
                        🗑️ Eliminar Día
                    </button>
                )}
            </div>

            <div className="day-card__day-table">
                <div className="day-card__day-table-fields">
                    <div className="day-card__day-table-fields-title">Músculo</div>
                    <div className="day-card__day-table-fields-title">Ejercicio</div>
                </div>

                {exercises.map((exercise, index) => (
                    <div className="day-card__day-table-input-container" key={exercise.id}>
                        <select
                            value={exercise.muscle}
                            onChange={(e) => updateExercise(index, "muscle", e.target.value)}
                            className="day-card__day-table-input"
                        >
                            <option className="day-card__day-table-input-option" value="">Seleccionar músculo</option>
                            {muscles.map((muscle) => (
                                <option 
                                    key={muscle.id_musculo} 
                                    value={muscle.id_musculo}
                                    className="day-card__day-table-input-option"
                                >
                                    {muscle.nombre_musculo}
                                </option>
                            ))}
                        </select>
                        <div className="day-card__day-table-excercise">
                            <input
                                type="text"
                                value={exercise.exercise}
                                placeholder="Ejercicio"
                                readOnly
                                className="day-card__day-table-input"
                            />
                            <button className="day-card__day-table-edt-del-btn" onClick={() => openModal(index)}>
                                {exercise.details ? "Editar" : "Añadir"}
                            </button>
                        </div>

                        {index > 0 && (
                            <button
                                className="day-card__day-table-del-btn"
                                onClick={() => removeExerciseRow(exercise.id)}
                            >
                                x
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button className="day-card__add-exercise-btn" onClick={addExerciseRow}>
                Agregar Ejercicio
            </button>

            {isModalOpen && (
                <ExerciseModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSave={saveExerciseDetails}
                    initialData={currentExerciseIndex !== null ? exercises[currentExerciseIndex]?.details : null}
                />
            )}
        </div>
    );
}
