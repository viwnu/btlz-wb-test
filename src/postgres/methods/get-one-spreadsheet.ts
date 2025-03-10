import knex from "#postgres/knex.js";

export async function GetSpreadSheetById(spreadsheet_id: any) {
    return knex("spreadsheets").where({ spreadsheet_id }).select();
}
