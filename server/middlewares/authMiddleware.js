const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ error: "Acceso no autorizado" });
    
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido o expirado" });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ error: "Acceso denegado" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: "Token inválido o expirado" });
        req.user = decoded;
        next();
    });
};

module.exports = { authenticateUser, verifyToken };