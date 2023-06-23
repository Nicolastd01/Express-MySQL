const validateName = (req, res, next) =>{
    const {body} = req;
    if (body.nome == undefined){
        return res.status(400)
        .json({message: 'O campo "nome" e obrigatorio'});
    }
    if (body.nome === ''){
        return res.status(400)
        .json({message: 'O campo "nome" nao pode ser vazio'});
    }
    next();
};
module.exports = {validateName};
