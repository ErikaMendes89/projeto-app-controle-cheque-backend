const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para resumo do dashboard
router.get('/resumo', dashboardController.getResumo);

module.exports = router;
