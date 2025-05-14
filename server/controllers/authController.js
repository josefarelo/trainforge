const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
    try {
        const { nickname, birthdate, sex, height_cm, height_ft, weight_kg, weight_lb, email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }

        const sexValue = sex === "M" || sex === "F" ? sex : null;

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: "El email ya está en uso" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = {
            nickname,
            birthdate,
            sex: sexValue,
            height_cm,
            height_ft,
            weight_kg,
            weight_lb,
            email
        };

        await User.create(userData, hashedPassword);

        res.status(201).json({ message: "Usuario registrado exitosamente" });

    } catch (error) {
        console.error("Error en registerUser:", error);
        res.status(500).json({ error: "Error interno al registrar usuario" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Faltan credenciales" });
        }

        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "Email o contraseña incorrectos" });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ error: "Email o contraseña incorrectos" });
        }

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

    } catch (error) {
        console.error("Error en loginUser:", error);
        res.status(500).json({ error: "Error interno al iniciar sesión" });
    }
};

module.exports = { registerUser, loginUser };
