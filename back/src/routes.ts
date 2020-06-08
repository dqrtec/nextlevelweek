import express from "express";
import knex from "./database/connection";
import PointsController from "./Controllers/PointsController";
import ItensController from "./Controllers/ItensController";

const routes = express.Router();

const pointsController = new PointsController()
const itensController = new ItensController()

routes.get("/itens", itensController.todoItens);

routes.post("/points", pointsController.create);
routes.get("/points/:id", pointsController.show);
routes.get("/points", pointsController.index);

// routes.get("/users", (request, response)=>{
//     response.json(users)
// });
// routes.get("/users",(request,response)=>{
//     const usuario = request.body;
//     console.log(usuario);
//     response.json(usuario["nome"]);
// });
// routes.get("/users", (request, response)=>{
//     const termo = String(request.query.filtro);

//     const filtro = users.filter((usuario) =>{usuario.includes(termo)})

//     response.json(filtro);
// })
// const users = [
//     "Daniel",
//     "Samuel",
//     "Erica",
//     "Melissa"
// ]
// routes.get("/users/:id", (request, response)=>{
//     const id = Number(request.params.id);
//     response.json(users[id]);
// })

export default routes;