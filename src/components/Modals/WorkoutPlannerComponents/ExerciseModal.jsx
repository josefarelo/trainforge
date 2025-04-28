import React, { useState, useEffect } from "react";
import EmptyFields from "../../EmptyFields/EmptyFields";

export default function ExerciseModal({ isOpen, onClose, onSave, initialData }) {
    const [formData, setFormData] = useState({
        exerciseName: "",
        series: "",
        minReps: "",
        maxReps: "",
        rir: "",
        intensity: "",
        tempo: "",
        rest: "",
        notes: "",
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        if (initialData) {
        setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const validateForm = () => {
        if (!formData.exerciseName.trim() || !formData.series.trim() || !formData.minReps.trim() || !formData.maxReps.trim()) {
            setError(true);
            return false;
        }
        
        setError(false);
        return true;
    };

    const handleSave = () => {
        if (validateForm()) {
            onSave(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="exercise-modal">
            <div className="exercise-modal__container">
                <h2 className="exercise-modal__title">Detalles del Ejercicio</h2>
                <div className="exercise-modal__input-container">
                    <input
                        name="exerciseName"
                        value={formData.exerciseName}
                        onChange={handleChange}
                        placeholder="Nombre del ejercicio"
                        className="exercise-modal__input-excercise-name"
                    />
                    <input
                        name="series"
                        value={formData.series}
                        onChange={handleChange}
                        placeholder="Series"
                        className="exercise-modal__input-sets"
                    />
                    <input
                        name="minReps"
                        value={formData.minReps}
                        onChange={handleChange}
                        placeholder="Reps mínimas"
                        className="exercise-modal__input-reps"
                    />
                    <input
                        name="maxReps"
                        value={formData.maxReps}
                        onChange={handleChange}
                        placeholder="Reps máximas"
                        className="exercise-modal__input-reps"
                    />
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Notas"
                        className="exercise-modal__input-notes"
                    />
                </div>

                {error && (<EmptyFields />)}

                <div className="exercise-modal__button-container">
                    <button className="exercise-modal__button" onClick={onClose}>Cancelar</button>
                    <button className="exercise-modal__button" onClick={handleSave}>Guardar</button>
                </div>
            </div>
        </div>
    );
}
