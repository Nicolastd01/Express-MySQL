const validateFamilyName = (req, res, next) => {
    const {body} = req;
    if (body.sobrenome == undefined){
        return res.status(400)
        .json({message: 'O campo "sobrenome" e obrigatorio'});
    }
    if (body.sobrenome === ''){
        return res.status(400)
        .json({message: 'O campo "sobrenome" nao pode ser vazio'});
    }
    next();
};
module.exports = {validateFamilyName};
