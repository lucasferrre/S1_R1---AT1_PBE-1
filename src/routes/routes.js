import {Router} from 'express'
import produtoRoutes from './produto.routes.js';
import categoriaRoutes from './categoria.routes.js';
const routes = Router();

routes.use("/",produtoRoutes);
routes.use("/",categoriaRoutes)

export default routes;