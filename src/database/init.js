const db = require('./database');

// Cria a tabela de usuários
db.serialize(() => {
    console.log('Tentando criar a tabela "users"...');
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        } else {
            console.log('Tabela "users" criada com sucesso.');
        }
    });
});

// Fecha a conexão
db.close(() => {
    console.log('Conexão com o banco de dados fechada.');
});
