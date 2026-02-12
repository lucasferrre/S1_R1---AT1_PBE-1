import express from "express";
import routes from "./routes/routes.js";
import path from "path"
import "dotenv/config"

const app = express();

app.use("/", routes);

app.use('/produtos', express.static(path.resolve('uploads/Images')));

app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`);   
});

