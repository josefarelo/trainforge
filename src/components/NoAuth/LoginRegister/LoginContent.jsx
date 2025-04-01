import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './LoginContent.scss';

const LoginContent = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        
        navigate("/dashboard");
    };

    
    /*  
        - CAMBIAR EN LOGIN PAGE EL HEADER
        - CREAR NUEVO HEADER IGUAL AL NOAUTH PERO ELIMINANDO EL "INICIAR SESIÓN"
        - CREAR TABLA DE REGISTRO DE USUARIO
        - MODIFICAR EL BACKEND PARA REGISTRAR LOS DATOS
        - USAR HASH PARA LA PASSWORD
        - USAR JWT PARA EL MANEJO DE AUTENTICACIÓN 
    */

    return (
        <div className="login">
            <div className="login__form-container">
                <h1 className="login__form-container-title">Inicio de sesión de usuario</h1>
                <form className="login__form">
                    <div className="login__form-input">
                        <div className="login__form-input-email">
                            <input 
                                type="email" 
                                className="login__form-email" 
                                pattern="[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\)"
                                placeholder="Dirección de email"
                                required
                            />
                        </div>
                        <div className="login__form-input-password">
                            <input 
                                type="password"
                                className="login__form-password"
                                placeholder="Contraseña"
                                required
                            />
                            <div className="login__form-see-password">
                                <button className="login__form-see-password-button">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="login__form-see-password-button-img"
                                        focusable="false"
                                        viewBox="0 0 16 16"
                                        path="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z" 
                                        alt="icono de ojo para mostrar contraseña"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link to="/login">¿Olvidaste la contraseña?</Link>
                    <button onClick={handleLogin}>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginContent;
