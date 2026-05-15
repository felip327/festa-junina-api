const express = require('express');
const router = express.Router();
// const supabase = require('../data/supabase'); // Descomente para usar o BD real

// Mock de dados para exemplo
const categorias = [
    { id: 1, nome: 'Decoração de Ambiente' },
    { id: 2, nome: 'Acessórios e Vestuário' },
    { id: 3, nome: 'Lembrancinhas' }
];

router.get('/', (req, res) => {
    // Exemplo de resposta
    res.json(categorias);
});

module.exports = router;