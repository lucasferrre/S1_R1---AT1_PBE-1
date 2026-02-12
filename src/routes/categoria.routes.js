import {Router} from 'express'
import categoriaController from '../controllers/categoria.controller.js';
import uploadImage from "../middlewares/uploadImage.middleware.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.SelecionarTodos);
categoriaRoutes.post("/categorias", uploadImage, categoriaController.criarCategoria)
categoriaRoutes.put("/categorias/:idCategoria", uploadImage, categoriaController.atualizarCategoria)

export default categoriaRoutes;
