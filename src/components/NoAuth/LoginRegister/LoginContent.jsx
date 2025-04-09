import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./LoginContent.scss";

const LoginContent = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
    
            if (!response.ok) throw new Error(data?.error || "Error en el inicio de sesión");
    
            setUser(data.user);
            if (data.user) navigate("/es");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login">
            <div className="login__form-container">
                <h1 className="login__form-container-title">Inicio de sesión de usuario</h1>
                <form className="login__form" onSubmit={handleLogin}>
                    <div className="login__form-input">
                        <div className="login__form-input-email">
                            <input 
                                type="email" 
                                className="login__form-email" 
                                pattern="[a-zA-Z0-9._%+-]+@(gmail.com|hotmail.com|outlook.com|yahoo.com)"
                                placeholder="Dirección de email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login__form-input-password">
                            <input 
                                type={showPassword ? "text" : "password"}
                                className="login__form-password"
                                placeholder="Contraseña"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                                <div className="login__form-see-password">
                                    <button 
                                        type="button" 
                                        className="login__form-see-password-button" 
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="login__form-see-password-button-img" 
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
                    {error && <p className="login__form-error">{error}</p>}
                    <Link className="login__form-link" to="/" >¿Olvidaste la contraseña?</Link>
                    <button type="submit" className="login__form-login-button">
                        Iniciar sesión
                    </button>
                </form>
                <p className="login__redirect-to-register">
                    ¿Todavía no eres usuario? 
                    <Link className="login__redirect-to-register-link" to="/register"> ¡Regístrate ahora!</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginContent;