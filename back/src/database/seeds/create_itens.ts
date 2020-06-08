import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('itens').insert([
        {'imagem':"lampada.svg",'titulo':"lampada"},
        {'imagem':"bateria.svg",'titulo':"pilhas e baterias"},
        {'imagem':"papel.svg",'titulo':"papel"},
        {'imagem':"organico.svg",'titulo':"organico"},
        {'imagem':"oleo.svg",'titulo':"oleo"},
        {'imagem':"eletronico.svg",'titulo':"eletronico"},
    ]);
}