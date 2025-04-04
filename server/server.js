require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:3000",
        credentials: true,
    })
);
app.use(cookieParser());

// Logs solo en desarrollo
if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        console.log(`[${req.method}] ${req.url}`);
        next();
    });
}

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
