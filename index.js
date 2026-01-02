require('dotenv').config(); // Carrega as variáveis do arquivo .env
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

// Configuração usando variáveis de ambiente
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao MySQL com segurança!');
});

app.get('/livros', (req, res) => {
    db.query('SELECT * FROM livros', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});


app.post('/livros', (req, res) => {
    const { titulo, autor, ano_publicacao, genero } = req.body;
    
    const sql = 'INSERT INTO livros (titulo, autor, ano_publicacao, genero) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [titulo, autor, ano_publicacao, genero], (err, result) => {
        if (err) {
            console.error("Erro ao inserir:", err);
            return res.status(500).json(err);
        }
        res.status(201).json({ 
            message: 'Livro cadastrado com sucesso!', 
            id: result.insertId 
        });
    });
});

app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM livros WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar:', err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.json({ message: 'Livro deletado com sucesso!' });
    });
});


app.put('/livros/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano_publicacao, genero } = req.body;
    
    const sql = `UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, genero = ? WHERE id = ?`;
    
    db.query(sql, [titulo, autor, ano_publicacao, genero, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar:', err);
            return res.status(500).json({ error: err.message });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        
        res.json({ message: 'Livro atualizado com sucesso!' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));