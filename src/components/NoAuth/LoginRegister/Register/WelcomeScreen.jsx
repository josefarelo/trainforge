import React from "react";
import "./WelcomeScreen.scss";
import logoOrange from "../../../../assets/icons/logo/TF-logo-orange.png";
import gymNutriTech from "../../../../assets/images/gym-nutrition-technology.webp";
import userCharact from  "../../../../assets/images/user-characteristics.webp";
import workoutRegister from  "../../../../assets/images/workout-register.webp";


const WelcomeScreen = ({ onNext }) => {

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

                <div className="welcome__approach-container">
                    <div className="welcome__approach">
                        <img 
                            className="welcome__approach-img"
                            alt="Una mancuerna con discos, una libreta que dice Workout y un celular donde se puede registrar datos de los ejercicios." 
                            src={ workoutRegister }
                        />
                        <p className="welcome__approach-text">Registrá tus datos de forma rápida y sencilla</p>
                    </div>

                    <div className="welcome__approach">
                        <img 
                            className="welcome__approach-img"
                            alt="Una balanza digital, una cinta métrica y un celular donde figuran cantidades de calorías y macronutrientes." 
                            src={ userCharact }
                        />
                        <p className="welcome__approach-text">Ajustá tu alimentación y balanceá tus nutrientes</p>
                    </div>

                    <div className="welcome__approach">
                        <img 
                            className="welcome__approach-img"
                            alt="Una mancuerna con discos, una manzana verde y un celular." 
                            src={ gymNutriTech }
                        />
                        <p className="welcome__approach-text">Combiná entrenamiento, alimentación y buenos hábitos para crear un estilo de vida saludable</p>
                    </div>
                </div>

                <button className="welcome__next-button" onClick={onNext}>
                    COMENZAR
                </button>
        </div>
    );
};

export default WelcomeScreen;
