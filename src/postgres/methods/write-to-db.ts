import knex from "#postgres/knex.js";

export async function WriteToDb(stock: any) {
    return knex("stocks").insert(stock).onConflict(["date_requested", "warehouseName"]).merge();
}
