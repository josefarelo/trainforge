import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.scss";
import logoOrange from "../../../../assets/icons/logo/TF-logo-orange.png";

const WelcomeScreen = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/nickname");
    };

    return (
        <div className="welcome">
                <p className="welcome__hey">
                    Te damos la bienvenida a
                </p>
                <img 
                    className="welcome__logo"
                    alt="Logo de la aplicación TrainForge naranja" 
                    src={ logoOrange }
                />
                <p className="welcome__presentation">La aplicación que llevará tu entrenamiento al siguiente nivel</p>

                <div className="welcome__data">
                    // Acá pondré una imagen que represente cómo se pedirán los datos
                    <p className="welcome__data-text">Registrá tus datos muy fácilmente</p>
                </div>

                <div className="welcome__data-usage">
                    // Acá pondré una imagen que represente en qué se utilizarán los datos
                    <p className="welcome__data-usage-text">Influirán en tu alimentación y regulación de nutrientes</p>

                    <div className="welcome__effort">
                        // Acá pondré una imagen que represente el esfuerzo
                        <p className="welcome__effort-title">Y combina el entrenamiento, la alimentación y los buenos hábitos en un estilo de vida</p>
                    </div>
                </div>

                <button className="register__next-button" onClick={handleStart}>
                    Empezar 
                </button>
        </div>
    );
};

export default WelcomeScreen;
