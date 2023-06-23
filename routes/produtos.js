const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddlleware');

/* GET produtos*/
router.get('/', produtosController.findAll);

/* POST produtos*/
router.post('/', nomeMiddleware.validateName,
    descricaoMiddleware.validateDescricao,
    precoMiddleware.validatePreco,
    produtosController.save,
);

/* PUT produtos*/
router.put('/', produtosController.update);

/* DELETE produtos*/
router.delete('/:id', produtosController.remove);

module.exports = router;
