require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { syncDatabase } = require('./src/models');

// Configuração do Servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Habilita CORS para todas as rotas
app.use(express.json()); // Interpreta requisições JSON

// Rotas
const chequeRoutes = require('./src/routes/chequeRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const calculoRoutes = require('./src/routes/calculoRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');





app.use('/calculos', calculoRoutes);
app.use('/cheques', chequeRoutes);
app.use('/clientes', clientesRoutes);
app.use('/dashboard', dashboardRoutes);

// Sincronizar o Banco de Dados
(async () => {
  try {
    await syncDatabase(); // Sincroniza modelos com o banco de dados
    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();




app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://192.168.100.181:${PORT}`);
});


