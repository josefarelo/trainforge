import { useState } from "react";
import './SexAgeScreen.scss';
import EmptyFields from "../../../EmptyFields/EmptyFields";

export default function SexAgeScreen({ userData, updateUserData, onNext, onBack }) {

    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        updateUserData({ [name]: value })
    }

    const isFormValid = () => {
        return userData.sex && userData.birthdate
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
        <div className="sex-age">

            <div className="sex-age__content">
                <h2 className="sex-age__title">Selecciona tu sexo para que podamos calcular tus necesidades calóricas.</h2>

                <div className="sex-age__sex">
                    <label className="sex-age__sex-title">Sexo</label>
                    <select
                        name="sex"
                        value={userData.sex || ""}
                        onChange={handleChange}
                        className="sex-age__sex-input"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>

                <div className="sex-age__age">
                    <label className="sex-age__age-title">Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={userData.birthdate || ""}
                        onChange={handleChange}
                        className="sex-age__age-input"
                    />
                </div>
                
                {showError && <EmptyFields className="sex-age__error"/>}
            </div>

            <div className="sex-age__button">
                <button
                    onClick={onBack}
                    className="sex-age__button-back"
                >
                    Volver
                </button>
                <button
                    onClick={handleNext}
                    className="sex-age__button-next"
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}
