const mysql = require('mysql2');
require('dotenv').config();

// Conecta a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

try {
    connection.connect(error => {
        if (error) {
            console.error('Error al conectar a la base de datos', error);
            throw new Error('Error al conectar a la base de datos');
        }
        console.log('Se conectó a la base de datos con éxito');
    });
} catch (error) {
    console.error('Error al conectar a la base de datos', error.message);
}

module.exports = connection;