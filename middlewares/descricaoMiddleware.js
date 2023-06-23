const validateDescricao = (req, res, next) =>{
    const {body} = req;
    if (body.descricao == undefined){
        return res.status(400)
        .json({message: 'O campo "descricao" e obrigatorio'});
    }
    if (body.descricao === ''){
        return res.status(400)
        .json({message: 'O campo "descricao" nao pode ser vazio'});
    }
    next();
};
module.exports = {validateDescricao};
