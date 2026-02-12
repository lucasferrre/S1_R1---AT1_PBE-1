import conn from "../config/db.js";

const produtoModel = {

    selectALL: async () => {
        const sql = "select * from produtos;";
        const [rows] = await conn.execute(sql)
        return rows;
    },

    insert: async (pNomeProduto, pIdCategoria, pvalorProduto, pvinculoImagem ) => {
        const sql = "insert into produtos (nomeProduto, idCategoria, valorProduto, vinculoImagem) values(?,?,?,?);";
        const values = [pNomeProduto, pIdCategoria, pvalorProduto, pvinculoImagem];
        const [rows] = await conn.execute(sql, values)
        return rows;
    },
    

    update: async (pNomeProduto, pIdCategoria, pvalorProduto, pvinculoImagem, pIdProduto) => {
        const sql = `
        UPDATE produtos SET 
        nomeProduto = ?, 
        idCategoria = ?, 
        valorProduto = ?, 
        vinculoImagem = ? 
        WHERE idProduto = ?;`;
        const values = [pNomeProduto, pIdCategoria, pvalorProduto, pvinculoImagem, pIdProduto ];
        const [rows] = await conn.execute(sql, values)
        return rows;
    },


    delete: async (pIdProduto) => {
        const sql = `DELETE FROM produtos WHERE idProduto = ?;`;
        const values = [pIdProduto];
        const [rows] = await conn.execute(sql, values);
        return rows;
    }

};

export default produtoModel;

