const express = require('express');
const router = express.Router();
const calculoController = require('../controllers/calculoController');

// Rota para salvar o cálculo
router.post('/', calculoController.salvarCalculo);

module.exports = router;
