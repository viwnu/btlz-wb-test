import knex from "#postgres/knex.js";

export async function DeleteSpreadSheetById(spreadsheet_id: any) {
    return knex("spreadsheets").where({ spreadsheet_id }).delete();
}
