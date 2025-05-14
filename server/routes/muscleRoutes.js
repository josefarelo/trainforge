const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/muscles", async (req, res) => {
    try {
        console.log("Intentando conectar a la base de datos...");
        
        // Verificar conexión a la base de datos
        if (!db) {
            console.error("Error: No hay conexión a la base de datos");
            return res.status(500).json({ error: "Database connection not established" });
        }

        // Ejecutar consulta con manejo de errores mejorado
        const [rows, fields] = await db.query("SELECT id_musculo, nombre_musculo FROM tbl_musculos").catch(err => {
            console.error("Error en la consulta SQL:", err);
            throw err;
        });

        console.log(`Se encontraron ${rows.length} músculos`);
        res.json(rows);
    } catch (error) {
        console.error("Error completo en /muscles:", {
            message: error.message,
            stack: error.stack,
            sqlMessage: error.sqlMessage
        });
        res.status(500).json({ 
            error: "Internal server error",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = router;