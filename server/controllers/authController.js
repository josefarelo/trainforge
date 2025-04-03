const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


// Función de registro de usuario
const registerUser = (req, res) => {
    console.log("Solicitud de registro recibida:", req.body);

    const { username, nickname, birthdate, sex, height_cm, height_ft, weight_kg, weight_lb, email, password } = req.body;

    const sexValue = sex === "M" || sex === "F" ? sex : null;
    
    // Verificar si el usuario ya existe
    User.findByEmail(email, (err, results) => {
        if (err) {
            console.error("Error en la base de datos al buscar usuario:", err);
            return res.status(500).json({ error: "Error en la base de datos" });
        }
        if (results.length > 0) {
            console.warn("El email ya está en uso:", email);
            return res.status(400).json({ error: "El email ya está en uso" });
        }

        // Hashear la contraseña
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Error al hashear la contraseña:", err);
                return res.status(500).json({ error: "Error al hashear la contraseña" });
            }

            console.log("Contraseña hasheada correctamente:", hashedPassword);

            // Crear usuario
            const userData = {
                username,
                nickname,
                birthdate,
                sex: sexValue,
                height_cm: height_cm || null,
                height_ft: height_ft || null,
                weight_kg: weight_kg || null,
                weight_lb: weight_lb || null,
                email
            };
            User.create(userData, hashedPassword, (err, result) => {
                if (err) {
                    console.error("Error al registrar usuario en la base de datos:", err);
                    return res.status(500).json({ error: "Error al registrar usuario" });
                }
                console.log("Usuario registrado exitosamente:", result);
                res.status(201).json({ message: "Usuario registrado exitosamente" });
            });
        });
    });
};



// Función de inicio de sesión de usuario
const loginUser = (req, res) => {
    console.log("Solicitud de login recibida:", req.body);
    
    const { email, password } = req.body;

    // Verificar si el usuario existe
    User.findByEmail(email, (err, results) => {
        if (err) {
            console.error("Error en la base de datos:", err);
            return res.status(500).json({ error: "Error en la base de datos" });
        }
        if (results.length === 0) {
            console.warn("Email no registrado:", email);
            return res.status(400).json({ error: "Email o contraseña incorrectos" });
        }

        const user = results[0];

        // Comparar la contraseña hasheada
        bcrypt.compare(password, user.password_hash, (err, isMatch) => {
            if (err) {
                console.error("Error al comparar contraseñas:", err);
                return res.status(500).json({ error: "Error al verificar la contraseña" });
            }
            if (!isMatch) {
                console.warn("Contraseña incorrecta para:", email);
                return res.status(400).json({ error: "Email o contraseña incorrectos" });
            }

            // Generar el token JWT
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            console.log("Usuario autenticado correctamente:", email);

            // Configurar la cookie con el token
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 15 * 24 * 60 * 60 * 1000, // 15 días
            });

            res.status(200).json({ message: "Inicio de sesión exitoso" });
        });
    });
};



module.exports = { registerUser, loginUser };
