const express = require('express');
const router = express.Router(); // É aqui que a variável 'router' nasce!
const supabase = require('../data/supabase'); // Puxando a conexão com o banco

// Usando 'router' no singular
router.get('/', async (req, res, next) => {
    try {
        // Vai no Supabase e busca todos os produtos da tabela produtos1
        const { data: produtos, error } = await supabase
            .from('produtos1')
            .select('*, categorias1(nome)'); 

        if (error) {
            throw error; 
        }

        res.json(produtos); 

    } catch (error) {
        next(error);
    }
});

module.exports = router;