import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import "./RegisterContent.scss";
import WelcomeScreen from "./WelcomeScreen";
import NicknameScreen from "./NicknameScreen";
import SexAgeScreen from "./SexAgeScreen";
import HeightWeightScreen from "./HeightWeightScreen";
import AccountScreen from "./AccountScreen";

const initialUserData = {
    nickname: "",
    birthdate: "",
    sex: "",
    height_cm: "",
    height_ft: "",
    weight_kg: "",
    weight_lb: "",
    email: "",
    password: "",
    acceptTerms: false,
}

const RegisterContent = () => {
    const [step, setStep] = useState(0)
    const [userData, setUserData] = useState(initialUserData)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    
    const updateUserData = (data) => {
        setUserData((prev) => ({ ...prev, ...data }))
    }
    
    const handleNext = () => setStep((prev) => prev + 1)
    const handleBack = () => setStep((prev) => prev - 1)

    const handleRegister = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || "Error al registrar usuario")
        }

        setSuccess(true)
        console.log("Usuario registrado:", data.message)
        } catch (err) {
            setError(err.message)
            console.error("Registro fallido:", err)
        } finally {
            setLoading(false)
        }
    }
    
    const screens = [
        <WelcomeScreen onNext={handleNext} />,
        <NicknameScreen userData={userData} updateUserData={updateUserData} onNext={handleNext} onBack={handleBack} />,
        <SexAgeScreen userData={userData} updateUserData={updateUserData} onNext={handleNext} onBack={handleBack} />,
        <HeightWeightScreen userData={userData} updateUserData={updateUserData} onNext={handleNext} onBack={handleBack} />,
        <AccountScreen
            userData={userData}
            updateUserData={updateUserData}
            onBack={handleBack}
            onSubmit={handleRegister}
            loading={loading}
            error={error}
            success={success}
        />,
    ]

    return <div className="register">{screens[step]}</div>
};

export default RegisterContent;