const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function(req, res, next) {
    ((connection) => {connection.query('select * from clientes;')
      .then((result) => {res.send(result[0]);});
    });
  
});

module.exports = router;
