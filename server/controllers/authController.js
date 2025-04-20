const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = (req, res) => {
    const { nickname, birthdate, sex, height_cm, height_ft, weight_kg, weight_lb, email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }
    
    const sexValue = sex === "M" || sex === "F" ? sex : null;
    
    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });
        if (results.length > 0) return res.status(400).json({ error: "El email ya está en uso" });

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ error: "Error al hashear la contraseña" });
            
            const userData = { nickname, birthdate, sex: sexValue, height_cm, height_ft, weight_kg, weight_lb, email };
            User.create(userData, hashedPassword, (err) => {
                if (err) return res.status(500).json({ error: "Error al registrar usuario" });
                res.status(201).json({ message: "Usuario registrado exitosamente" });
            });
        });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Faltan credenciales" });

    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });
        if (!results.length) return res.status(400).json({ error: "Email o contraseña incorrectos" });
        
        const user = results[0];

        bcrypt.compare(password, user.password_hash, (err, isMatch) => {
            if (err) return res.status(500).json({ error: "Error al verificar la contraseña" });
            if (!isMatch) return res.status(400).json({ error: "Email o contraseña incorrectos" });

            const payload = {
                id_user: user.id_user,
                nickname: user.nickname,
                birthdate: user.birthdate,
                sex: user.sex,
                height_cm: user.height_cm,
                height_ft: user.height_ft,
                weight_kg: user.weight_kg,
                weight_lb: user.weight_lb,
                email: user.email
            };
            
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 15 * 24 * 60 * 60 * 1000 // 15 días
            });
            
            res.status(200).json({
                message: "Inicio de sesión exitoso",
                user: payload
            });
        });
    });
};

module.exports = { registerUser, loginUser };