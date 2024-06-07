const produtosServices = require('../services/produtoServices');

const findAll = async (req, res) => {
    const produtos = await produtosServices.findAll();
        return res.status(200).json(produtos);
};

const update = async (req, res) =>{
    const result = await produtosServices.update(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falaha ao atualizar produto'});
};

const save = async (req, res) =>{
    const result = await produtosServices.save(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falha ao salvar produto'});
};

const remove = async (req, res) =>{
    const {id} = req.params;
    const result = await produtosServices.remove(id);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[Err/Server]': 'Falha ao remover produto'});
};

module.exports = {
    findAll,
    update,
    save,
    remove,
};
