import knex from "#postgres/knex.js";

export async function GetSpreadSheetsPrefernces() {
    return knex("spreadsheet_prefernces").select();
}
