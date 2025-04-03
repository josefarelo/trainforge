require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cookieParser());
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

// Rutas
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes"); 
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

