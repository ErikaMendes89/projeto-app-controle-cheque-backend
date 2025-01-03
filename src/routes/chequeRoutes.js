const express = require('express');
const router = express.Router();
const chequecontroller = require('../controllers/chequecontroller');

router.get('/', chequecontroller.listarCheques);
router.post('/', chequecontroller.cadastrarCheque);
router.delete('/:id', chequecontroller.removerCheque);

module.exports = router;
