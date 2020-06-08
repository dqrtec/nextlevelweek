import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController{

    async index(request: Request, response:Response){
        const { itens } = request.query;
        const arraiItens = String(itens).split(",").map(item => { return Number(item.trim()) })
        const pontosFiltrados = await knex('points').join('point_itens','points.id','=','point_itens.id_point').whereIn('id_itens', arraiItens);
        
        return response.json(pontosFiltrados);
    }

    async show(request: Request, response:Response){
        const {id} = request.params;
        const point = await knex("points").where('id',id).first();
        // const pontos = knex("point_itens").select("id_itens").where('id_point',id);
        const itens = await knex("itens")
            .join("point_itens","id",'=',"point_itens.id_itens")
            .where("id_point", id);
        
        return response.json({ point, itens });
    }

    async create(request: Request, response:Response){
        const {
            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            uf,
            itens
        } = request.body;
    
        const trx = await knex.transaction();
    
        const id_inserido = await trx("points").insert({
            imagem: "img-fake",
            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            uf
        })
    
    
        const listagem = itens.map((item: Number)=>{
            return {
                id_point: id_inserido[0],
                id_itens: item
            }
        });
    
        await trx("point_itens").insert(listagem)
        
        await trx.commit();
    
        return response.send("SUCESSO");
    }
}

export default PointsController;