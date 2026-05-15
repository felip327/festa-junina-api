const express = require('express');
const router = express.Router();
const supabase = require('../data/supabase');

// Criar pedido
router.post('/', async (req, res) => {
    try {
        const { cliente, itens, total } = req.body;

        // Salvar pedido no Supabase
        const { data, error } = await supabase
            .from('pedidos1')
            .insert([
                {
                    cliente_nome: cliente.nome,
                    cliente_telefone: cliente.telefone,
                    cliente_endereco: cliente.endereco,
                    itens,
                    total,
                    status: 'Aguardando Pagamento'
                }
            ])
            .select();

        if (error) {
            throw error;
        }

        res.status(201).json({
            sucesso: true,
            mensagem: 'Pedido realizado com sucesso!',
            pedido: data[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
});

module.exports = router;