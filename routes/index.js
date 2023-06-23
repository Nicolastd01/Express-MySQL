const express = require('express');
const router = express.Router();
const connection = require('../configs/dbConfiguration');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await (await connection).execute('SELECT * FROM clientes');
  res.send(result[0]);

});

module.exports = router;
