import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    SelecionarTodos: async (req, res) => {

        try {
            const result = await categoriaModel.selectALL()
            if (result.length > 0) {
                return res.status(200).json({ message: `Dados recebidos com sucesso!`, resultado: result });

            };
            res.status(200).json({ message: `Não há dados para serem exibidos` });
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `Erro no servidor`, errorMessage: error.message });
        };
    },

     criarCategoria: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto} = req.body;

            const idCategoriaNum = parseInt(idCategoria);
            const valorProdutoNum = parseFloat(valorProduto);
            
            const vinculoImagem = req.file.filename;

            if (!idCategoriaNum || isNaN(idCategoriaNum)|| !nomeProduto || !valorProdutoNum || isNaN(valorProdutoNum) || !vinculoImagem ) {
                return res.status(400).json({
                    message: "Preencha todos os campos obrigatórios"
                });
            }

            const result = await produtoModel.insert(nomeProduto, idCategoriaNum, valorProdutoNum, vinculoImagem);

            res.status(201).json({
                message: "Produto cadastrado com sucesso!",resultado: result});

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `Erro no servidor`, errorMessage: error.message });
        }
        
    },

    atualizarCategoria: async (req, res) => {
        try {

            const { idProduto } = req.params;
            const { idCategoria, nomeProduto, valorProduto } = req.body;

            const idCategoriaNum = parseInt(idCategoria);
            const valorProdutoNum = parseFloat(valorProduto);

            const vinculoImagem = req.file.filename;


            const result = await produtoModel.update(nomeProduto, idCategoriaNum, valorProdutoNum, vinculoImagem, idProduto);

            res.status(200).json({message: "Produto atualizado com sucesso!",result});

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `Erro no servidor`, errorMessage: error.message });
        };
    },


};

export default categoriaController;
