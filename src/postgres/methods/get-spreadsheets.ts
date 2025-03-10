import knex from "#postgres/knex.js";

export async function GetSpreadSheets() {
    return knex("spreadsheets");
}
