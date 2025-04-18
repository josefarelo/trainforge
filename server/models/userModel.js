const db = require("../config/db");

const User = {
    // Añade nuevo usuario a la base de datos
    create: (userData, hashedPassword, callback) => {
        const query = `
            INSERT INTO tbl_users 
            (nickname, birthdate, sex, height_cm, height_ft, weight_kg, weight_lb, email, password_hash) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            userData.nickname,
            userData.birthdate,
            userData.sex,
            userData.height_cm === '' ? null : userData.height_cm,
            userData.height_ft === '' ? null : userData.height_ft,
            userData.weight_kg === '' ? null : userData.weight_kg,
            userData.weight_lb === '' ? null : userData.weight_lb,
            userData.email,
            hashedPassword
        ];
        db.query(query, values, callback);
    },

    // Búsqueda de usuario por email
    findByEmail: (email, callback) => {
        const query = "SELECT * FROM tbl_users WHERE email = ?";
        db.query(query, [email], callback);
    }
};

module.exports = User;
