const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET produtos*/
router.get('/', produtosController.findAll);

/* POST produtos*/
router.post('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge,
    produtosController.save
);

/* PUT produtos*/
router.put('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge,
    produtosController.update
);

/* DELETE produtos*/
router.delete('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge,
    produtosController.remove
);

module.exports = router;