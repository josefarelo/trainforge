const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/authMiddleware");

const router = express.Router();

// Registro de usuario
router.post("/register", registerUser);

// Inicio de sesión
router.post("/login", loginUser);

// Ruta protegida (perfil de usuario)
router.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
});

// Cierre de sesión
router.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
    });
    res.status(200).json({ message: "Sesión cerrada correctamente" });
});

module.exports = router;
