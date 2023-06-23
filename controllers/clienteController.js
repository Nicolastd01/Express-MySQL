const clienteServices = require('../services/clienteServices');

const findAll = async (req, res) => {
    const clientes = await clienteServices.findAll();
    return res.status(200).json(clientes);
};

module.exports = {findAll};