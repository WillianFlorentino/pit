const { hash } = require('bcryptjs');
const Database = require('./database.js');

// Crie uma instância da classe Database
const db = new Database();

const findUserByEmail = async (email) => {
    const rows = await db.ExecutaComando('SELECT * FROM user WHERE email = ?', [email]);
    return rows[0];
};

const createUser = async (email, nome, hashedPassword) => {
    const result = await db.ExecutaComandoNonQuery('INSERT INTO user (email, nome, senha) VALUES (?, ?, ?)', [email, nome, hashedPassword]);
    return result;
};

module.exports = {
    findUserByEmail,
    createUser
};
