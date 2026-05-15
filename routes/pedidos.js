const express = require('express');
const router = express.Router();

// Rota para criar um novo pedido
router.post('/', (req, res) => {
    const { cliente, itens, total } = req.body;
    
    // Aqui você inseriria no Supabase
    
    res.status(201).json({
        mensagem: 'Pedido realizado com sucesso! A festança tá garantida.',
        pedido: {
            id: Math.floor(Math.random() * 1000),
            cliente,
            status: 'Aguardando Pagamento',
            total
        }
    });
});

module.exports = router;