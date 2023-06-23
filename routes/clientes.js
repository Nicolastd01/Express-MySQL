const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET clientes*/
router.get('/', clienteController.findAll);

/* POST clientes*/
router.post('/', function(req, res, next){
    res.send('POST clientes');
});

/* PUT clientes*/
router.put('/', function(req, res, next){
    res.send('PUT clientes');
});

/* DELETE clentes*/
router.delete('/', function(req, res, next){
    res.send('DELETE clientes');
});

module.exports = router;