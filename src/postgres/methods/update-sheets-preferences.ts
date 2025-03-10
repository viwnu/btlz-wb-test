import knex from "#postgres/knex.js";

export async function UpdateSpreadSheetsPrefernces(preferences: any) {
    return knex("spreadsheet_prefernces").update(preferences);
}
