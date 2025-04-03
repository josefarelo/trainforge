const jwt = require("jsonwebtoken");

// Autenticación de usuario
const authenticateUser = (req, res, next) => {
    const token = req.cookies.token; // Obtener el token desde las cookies

    if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado, token no encontrado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar token
        req.user = decoded; // Almacenar usuario en req.user
        next(); // Pasar al siguiente middleware/controlador
    } catch (error) {
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
};

// Verificación de token en las cookies
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado, token no proporcionado" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }
        req.user = decoded; // Agregamos los datos del usuario al request
        next();
    });
};

module.exports = { authenticateUser, verifyToken };
