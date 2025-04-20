import { useState, useEffect } from "react";
import './HeightWeightScreen.scss';
import EmptyFields from "../../../EmptyFields/EmptyFields";

export default function HeightWeightScreen({ userData, updateUserData, onNext, onBack }) {

    const [showError, setShowError] = useState(false);

    // Actualizar userData. Si el usuario aún no eligió sistema, usar "metric" por defecto
    useEffect(() => {
        if (!userData.measurementSystem) {
            updateUserData({ measurementSystem: "metric" });
        }
    }, [userData.measurementSystem, updateUserData]);
    
    const isMetric = userData.measurementSystem === "metric"

    const handleChange = (e) => {
        const { name, value } = e.target
        updateUserData({ [name]: value })
    }

    const isFormValid = () => {
        if (isMetric) {
            return userData.height_cm && userData.weight_kg
        } else {
            return userData.height_ft && userData.weight_lb
        }
    }

    const handleNext = () => {
        if (isFormValid()) {
            setShowError(false);
            onNext();
        } else {
            setShowError(true);
        }
    };
    
    return (
        <div className="height-weight">

            <div className="height-weight__content">
                <h2 className="height-weight__title">Necesitaremos tu altura y peso. Servirán para el cálculo de tu TMB.</h2>

                <div className="height-weight__measurement-system">
                    <label className="height-weight__measurement-system-title">Sistema de medida</label>
                    <select
                        name="measurementSystem"
                        value={userData.measurementSystem}
                        onChange={handleChange}
                        className="height-weight__measurement-system-input"
                    >
                        <option value="metric">Métrico (cm, kg)</option>
                        <option value="imperial">Imperial (ft, lb)</option>
                    </select>
                </div>

                <div className="height-weight__height-weight-content">
                    {isMetric ? (
                        <>
                            <div className="height-weight__height">
                                <label className="height-weight__height-title">Altura (cm)</label>
                                <input
                                    type="number"
                                    name="height_cm"
                                    value={userData.height_cm || ""}
                                    onChange={handleChange}
                                    className="height-weight__height-input"
                                />
                            </div>

                            <div className="height-weight__weight">
                                <label className="height-weight__weight-title">Peso (kg)</label>
                                <input
                                    type="number"
                                    name="weight_kg"
                                    value={userData.weight_kg || ""}
                                    onChange={handleChange}
                                    className="height-weight__weight-input"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="height-weight__height">
                                <label className="height-weight__height-title">Altura (ft)</label>
                                <input
                                    type="number"
                                    name="height_ft"
                                    value={userData.height_ft || ""}
                                    onChange={handleChange}
                                    className="height-weight__height-input"
                                />
                            </div>

                            <div className="height-weight__weight">
                                <label className="height-weight__weight-title">Peso (lb)</label>
                                <input
                                    type="number"
                                    name="weight_lb"
                                    value={userData.weight_lb || ""}
                                    onChange={handleChange}
                                    className="height-weight__weight-input"
                                />
                            </div>
                        </>
                    )}
                </div>

                {showError && <EmptyFields className="height-weight__error"/>}
            </div>

            <div className="height-weight__button">
                <button
                    onClick={onBack}
                    className="height-weight__button-back"
                >
                    Volver
                </button>
                <button
                    onClick={handleNext}
                    className="height-weight__button-next"
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}
