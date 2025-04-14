import { useState } from "react";
import EmptyFields from "../../../EmptyFields";
import "./NicknameScreen.scss";

export default function NicknameScreen({ userData, updateUserData, onNext, onBack }) {

    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        updateUserData({ nickname: e.target.value });
        if (showError) setShowError(false);
    };
    
    const isFormValid = () => {
        return userData.nickname && userData.nickname.trim().length > 0
    };

    const handleNext = () => {
        if (isFormValid()) {
            setShowError(false);
            onNext();
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="nickname">
            <div className="nickname__content">                
                <h2 className="nickname__title">¿Cómo podemos llamarte?</h2>
                <p className="nickname__subtitle">Estamos alegres por tenerte aquí. Comencemos.</p>

                <input
                    type="text"
                    name="nickname"
                    placeholder="Apodo o Nombre"
                    value={userData.nickname || ""}
                    onChange={handleChange}
                    className="nickname__input-name"
                />

                {showError && <EmptyFields className="nickname__error"/>}
            </div>

            <div className="nickname__button">
                <button
                    onClick={onBack}
                    className="nickname__button-back"
                >
                    Volver
                </button>
                <button
                    onClick={handleNext}
                    className="nickname__button-next"
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}
