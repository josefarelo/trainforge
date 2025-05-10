const express = require("express");
const db = require("../config/db");

// Obtener el listado de músculos
const router = express.Router();

// Ruta pública para obtener todos los músculos
router.get("/muscles", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id_musculo, nombre_musculo FROM tbl_musculo");
        res.json(rows); // Devuelve los músculos como JSON
    } catch (error) {
        console.error("Error al obtener músculos:", error);
        res.status(500).json({ error: "Error al obtener músculos" });
    }
});

module.exports = router;
