require('dotenv').config();
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const categoriasRoutes = require('./routes/categorias');
const produtosRoutes = require('./routes/produtos');
const pedidosRoutes = require('./routes/pedidos');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(logger);

// Rotas
app.use('/api/categorias', categoriasRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/pedidos', pedidosRoutes);

// Middleware de Erro (deve ser o último)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor do Arraiá rodando na porta ${PORT}`);
});