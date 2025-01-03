const Calculo = require('../models/calculoModel');

exports.salvarCalculo = async (req, res) => {
  try {
    const { dataCheque, dataVencimento, valorCheque, percentualJuros, valorJuros, valorLiquido } = req.body;

    if (!dataCheque || !dataVencimento || !valorCheque || !percentualJuros) {
      return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    const novoCalculo = await Calculo.create({
      dataCheque,
      dataVencimento,
      valorCheque,
      percentualJuros,
      valorJuros,
      valorLiquido,
    });

    res.status(201).json({ mensagem: 'Cálculo salvo com sucesso!', calculo: novoCalculo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao salvar cálculo.' });
  }
};
