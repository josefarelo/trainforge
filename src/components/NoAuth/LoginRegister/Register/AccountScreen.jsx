import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyFields from "../../../EmptyFields/EmptyFields";
import "./AccountScreen.scss";

export default function AccountScreen({
    userData,
    updateUserData,
    onBack,
    onSubmit,
    error,
    success,
}) {
    const [showPassword, setShowPassword] = useState(false)

    const [showError, setShowError] = useState(false);

    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();

    // Redirigir al login cuando el registro es exitoso
    useEffect(() => {
        if (success) {
            navigate("/login");
        }
    }, [success, navigate]); 

    const handleDivClick = () => {
        inputRef.current?.focus();
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        updateUserData({ [name]: type === "checkbox" ? checked : value })
    }

    const handleCreateAcc = () => {
        if (isFormValid()) {
            setShowError(false);
            onSubmit();
        } else {
            setShowError(true);
        }
    };

    const isFormValid = () =>
        userData.email &&
        userData.password &&
        userData.acceptTerms

    return (
        <div className="account">
            <div className="account__content">
                <h2 className="account__title">¡Solo falta el último paso! Crea tu cuenta.</h2>

                <div className="account__email">
                    <label className="account__email-title">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="account__email-input"
                    />
                </div>

                <div className="account__password">
                    <label className="account__password-title">Contraseña</label>
                    <div
                        className={`account__password-container ${isFocused ? "focused" : ""}`}
                        onClick={handleDivClick}
                    >
                        <input
                            ref={inputRef}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="account__password-input"
                        />
                        <div 
                            className="account__see-password"
                            onClick={(e) => e.stopPropagation()}    
                        >
                            <button 
                                type="button" 
                                className="account__see-password-button" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="account__see-password-button-img" 
                                    viewBox="0 0 16 16"
                                >
                                    {showPassword ? (
                                        <>
                                            <path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z" />
                                            <path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z" />
                                            <path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z" />
                                        </>
                                    ) : (
                                        <path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="account__terms">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={userData.acceptTerms}
                        onChange={handleChange}
                        className="account__terms-input"
                    />
                    <a 
                        href="/terminos-y-condiciones"
                        target="_blank"
                        className="account__terms-text"
                    >
                        Acepto los Términos y Condiciones
                    </a>
                </div>

                {error && (
                    <div className="account__error">{error}</div>
                )}

                {success && (
                    <div className="account__success">
                        ¡Registro exitoso!
                    </div>
                )}
                
                {showError && <EmptyFields className="account__fields-error"/>}
            </div>

            <div className="account__button">
                <button
                    onClick={onBack}
                    className="account__button-back"
                >
                    Volver
                </button>
                <button
                    onClick={handleCreateAcc}
                    className="account__button-next"
                >
                    Crear Cuenta
                </button>
            </div>
        </div>
    )
}
