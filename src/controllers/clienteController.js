const Cliente = require('../models/clienteModel');

exports.cadastrarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;

    // Verificar campos obrigatórios
    if (!nome || !email || !telefone) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    // Criar cliente no banco
    const novoCliente = await Cliente.create({ nome, email, telefone });
    res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!', cliente: novoCliente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar cliente.' });
  }
};


exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll(); // Busca todos os clientes no banco de dados
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar clientes.' });
  }
};
