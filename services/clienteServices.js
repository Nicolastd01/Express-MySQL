const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const clientes = await(await connection)
    .execute('SELECT nome FROM clientes');

    return clientes[0];
}

module.exports = {findAll};