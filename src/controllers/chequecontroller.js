const Cheque = require('../models/chequeModel');
const Cliente = require('../models/clienteModel');

exports.cadastrarCheque = async (req, res) => {
  try {
    const { clienteId, numero, valor, vencimento, foto } = req.body;

    // Verificar campos obrigatórios
    if (!clienteId || !numero || !valor || !vencimento) {
      return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Validar a data
    const vencimentoValido = !isNaN(Date.parse(vencimento));
    if (!vencimentoValido) {
      return res.status(400).json({ mensagem: 'A data de vencimento é inválida.' });
    }

    const novoCheque = await Cheque.create({
      clienteId,
      numero,
      valor,
      vencimento,
      foto,
    });

    res.status(201).json({ mensagem: 'Cheque cadastrado com sucesso!', cheque: novoCheque });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar cheque.' });
  }
};



exports.listarCheques = async (req, res) => {
  try {
    const cheques = await Cheque.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['nome'], // Inclui somente o nome do cliente
        },
      ],
    });
    res.status(200).json(cheques);
  } catch (error) {
    console.error('Erro ao buscar cheques:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar cheques.' });
  }
};
exports.removerCheque = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifique se o ID foi fornecido
    if (!id) {
      return res.status(400).json({ mensagem: 'ID do cheque é obrigatório.' });
    }

    // Exclua o cheque do banco de dados
    const resultado = await Cheque.destroy({ where: { id } });

    if (resultado === 0) {
      return res.status(404).json({ mensagem: 'Cheque não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Cheque removido com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao remover cheque.' });
  }
};
