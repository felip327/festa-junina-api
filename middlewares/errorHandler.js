const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        sucesso: false,
        mensagem: 'Eita sô! Deu um problema no nosso servidor.',
        erro: err.message
    });
};

module.exports = errorHandler;