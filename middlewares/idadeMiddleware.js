const validateAge = (req, res, next) => {
    const {body} = req;
    if (body.idade == undefined||body.idade ==='') {
        return res.status(400)
        .json({message: 'O campo "idade" e obrigatorio'});
    }
    if (isNaN(parseInt(body.idade))||parseInt(body.idade) < 0 ||
        parseInt(body.idade) > 130) {
        return res.status(400)
        .json({message: 'O campo "idade" deve ser valor possivel'});
    }
    next();
};
module.exports = {validateAge};
