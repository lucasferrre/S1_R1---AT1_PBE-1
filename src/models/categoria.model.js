import {connectionection} from "../config/db.js";

const categoriaModel = {

    selectALL: async () => {
        const sql = "select * from categorias;";
        const [rows] = await connection.execute(sql)
        return rows;
    },

    insert: async (pDescricaoCategoria) => {
        const sql = "insert into categorias (descricaoCategoria) values(?);";
        const values = [pDescricaoCategoria];
        const [rows] = await connection.execute(sql, values)
        return rows;
    },
    

    update: async (pDescricaoCategoria, pIdCategoria) => {
        const sql = `
        UPDATE categorias SET 
        descricaoCategoria = ? 
        WHERE idCategoria = ?;`;
        const values = [pDescricaoCategoria, pIdCategoria ];
        const [rows] = await connection.execute(sql, values)
        return rows;
    },

    
        delete: async (pIdCategoria) => {
            const sql = `DELETE FROM categorias WHERE idCategoria = ?;`;
            const values = [pIdCategoria];
            const [rows] = await connection.execute(sql, values);
            return rows;
        }



}

export default categoriaModel;