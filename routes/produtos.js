const express = require('express');
const router = express.Router();

const produtosJuninos = [
    { id: 1, nome: 'Kit Bandeirinhas de Chita 10m', preco: 45.90, categoria_id: 1 },
    { id: 2, nome: 'Tiara com Mini Chapéu de Palha', preco: 18.50, categoria_id: 2 },
    { id: 3, nome: 'Gravata Caipira Decorada', preco: 15.00, categoria_id: 2 },
    { id: 4, nome: 'Centro de Mesa Fogueira de EVA', preco: 22.00, categoria_id: 1 },
    { id: 5, nome: 'Mini Marmitinha de Doce de Abóbora', preco: 8.50, categoria_id: 3 }
];

router.get('/', (req, res) => {
    res.json(produtosJuninos);
});

router.get('/:id', (req, res) => {
    const produto = produtosJuninos.find(p => p.id === parseInt(req.params.id));
    if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado, sô!' });
    res.json(produto);
});

module.exports = router;