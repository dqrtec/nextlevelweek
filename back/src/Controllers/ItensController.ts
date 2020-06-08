import {Request, Response} from 'express';
import knex from '../database/connection';

class ItensController{
    async todoItens(request: Request, response: Response){
        const itens = await knex("itens").select("*")
    
        const serializarItens = itens.map((item)=>{
            return {
                name: item.titulo,
                imagem_url: `http://localhost:3333/uploads/${item.imagem}`
            }
        })
    
        response.json(serializarItens);
    }
}
export default ItensController;