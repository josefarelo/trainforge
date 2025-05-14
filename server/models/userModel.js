const db = require("../config/db");

const User = {
    // Añade nuevo usuario a la base de datos
    create: async (userData, hashedPassword) => {
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
        const [result] = await db.query(query, values);
        return result;
    },

    findByEmail: async (email) => {
        const query = "SELECT * FROM tbl_users WHERE email = ?";
        const [rows] = await db.query(query, [email]);
        return rows[0];
    }
};

module.exports = User;