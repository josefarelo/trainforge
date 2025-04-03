const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta para registrar un usuario
router.post("/register", registerUser);

// Ruta para el inicio de sesión
router.post("/login", loginUser);

// Ruta protegida para probar autenticación
router.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
});

// Ruta para el cierre de sesión
router.post("/logout", (req, res) => {
    res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "Strict" }); // Cambiar a secure: false para pruebas locales
    return res.status(200).json({ message: "Sesión cerrada correctamente" });
});


module.exports = router;
