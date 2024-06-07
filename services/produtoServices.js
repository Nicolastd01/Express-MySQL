const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const produtos = await (await connection).execute('SELECT * FROM produtos');

    return produtos[0];
};

const update = async (produtos) => {
    const query = 'UPDATE produtos SET nome = ?, catg = ?, quant = ?, preco = ?, foto = ? WHERE id = ?';
    const isOk = await (await connection).execute(query, [produtos.nome, produtos.catg, produtos.quant, produtos.preco, produtos.foto, produtos.id]);

    return isOk[0].affectedRows === 1;
};

const save = async (produtos) => {
    const query = 'INSERT INTO produtos(nome, catg, quant, preco, foto) VALUES (?, ?, ?, ?, ?)';
    const isOk = await (await connection).execute(query, [produtos.nome, produtos.catg, produtos.quant, produtos.preco, produtos.foto,]);

    return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);

    return isOk[0].affectedRows === 1;
};

module.exports = {
    findAll,
    update,
    save,
    remove,
};
