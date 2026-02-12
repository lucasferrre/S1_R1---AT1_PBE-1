import {Router} from 'express'
import categoriaController from '../controllers/categoria.controller.js';
import uploadImage from "../middlewares/uploadImage.middleware.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.SelecionarTodos);
categoriaRoutes.post("/categorias/:idCategoria", uploadImage, categoriaController.atualizarCategoria )
categoriaRoutes.put("/categorias/:idCategoria", uploadImage, categoriaController)

export default categoriaRoutes;