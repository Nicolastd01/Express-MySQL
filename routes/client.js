const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET clientes*/
router.get('/', clienteController.findAll);

/* POST clientes*/
router.post('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    clienteController.save,
);

/* PUT clientes*/
router.put('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    clienteController.update,
);

/* DELETE clentes*/
router.delete('/:id', clienteController.remove);

module.exports = router;
