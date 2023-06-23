const validatePreco = (req, res, next) => {
    const {body} = req;
    if (body.preco == undefined || body.preco ===''){
        return res.status(400)
            .json({message: 'O campo "preco" e obrigatorio'});
    }
    if (isNaN(parseFloat(body.preco)) || parseFloat(body.preco) < 0){
        return res.status(400)
        .   json({message: 'O campo "preco" deve ser inteiro positivo e valor possivel'});
    }
    next();
};
module.exports = {validatePreco};