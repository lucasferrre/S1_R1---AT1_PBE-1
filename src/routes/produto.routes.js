import {Router} from 'express'
import produtoController from '../controllers/produto.controler.js';
import uploadImage from "../middlewares/uploadImage.middleware.js";

const produtoRoutes = Router();

produtoRoutes.get("/produtos", produtoController.SelecionarTodos);
produtoRoutes.post("/produtos",uploadImage, produtoController.criarProduto);
produtoRoutes.put("/produtos/:idProduto",uploadImage, produtoController.atualizarProduto);
produtoRoutes.delete("/produtos/:idProduto", produtoController.deletarProduto);

export default produtoRoutes;