import knex from "#postgres/knex.js";

export async function AddSpreadSheet(spreadsheet_id: any) {
    return knex("spreadsheets").insert({ spreadsheet_id });
}
