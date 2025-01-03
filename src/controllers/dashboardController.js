const Cheque = require('../models/chequeModel');
const { Op } = require('sequelize');

exports.getResumo = async (req, res) => {
  try {
    const hoje = new Date();
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);

    // Total de valores
    const valorTotal = await Cheque.sum('valor');

    // Valores vencendo hoje
    const vencendoHoje = await Cheque.sum('valor', {
      where: { vencimento: hoje },
    });

    // Valores vencendo no mês atual
    const vencendoMesAtual = await Cheque.sum('valor', {
      where: {
        vencimento: {
          [Op.between]: [inicioMes, hoje],
        },
      },
    });

    res.status(200).json({
      valorTotal,
      vencendoHoje,
      vencendoMesAtual,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar dados do dashboard.' });
  }
};
