const clienteServices = require('../services/clientServices');

const findAll = async (req, res) => {
    const clientes = await clienteServices.findAll();
    return res.status(200).json(clientes);
};

const update = async (req, res) =>{
    const result = await clienteServices.update(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falaha ao atualizar cliente'});
};

const save = async (req, res) =>{
    console.log(req);
    console.log(req.body);
    const result = await clienteServices.save(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falha ao salvar cliente'});
};

const remove = async (req, res) =>{
    const {id} = req.params;
    const result = await clienteServices.remove(id);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falha ao remover cliente'});
};

module.exports = {
    findAll,
    update,
    save,
    remove,
};
