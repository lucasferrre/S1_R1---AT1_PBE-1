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
            const { DescricaoCategoria } = req.body;

            if (!DescricaoCategoria) {
                return res.status(400).json({
                    message: "Preencha todos os campos obrigatórios"
                });
            }

            const result = await categoriaModel.insert(DescricaoCategoria);

            res.status(201).json({
                message: "Produto cadastrado com sucesso!",resultado: result});

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `Erro no servidor`, errorMessage: error.message });
        }
        
    },

    atualizarCategoria: async (req, res) => {
        try {

            const { idCategoria } = req.params;
            const { DescricaoCategoria } = req.body;

            const result = await categoriaModel.update(DescricaoCategoria, idCategoria);

            res.status(200).json({message: "Produto atualizado com sucesso!",result});

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `Erro no servidor`, errorMessage: error.message });
        };
    },


};

export default categoriaController;
