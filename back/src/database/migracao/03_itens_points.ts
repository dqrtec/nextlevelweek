import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable("point_itens",table=>{
        table.integer("id_point").notNullable().references('id').inTable("points");
        table.integer("id_itens").notNullable().references('id').inTable("itens");
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('point_itens');
}