const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta protegida para obtener datos del usuario autenticado
router.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
});

module.exports = router;
