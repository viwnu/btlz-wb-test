import { SpreadSheetDirectionType, SpreadSheetOrderByType } from "#web-server/sheets-prefernces/prefernces.types.js";

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function seed(knex) {
    await knex("spreadsheet_prefernces").del();
    await knex("spreadsheet_prefernces").insert([{ order_by: SpreadSheetOrderByType.boxDeliveryAndStorageExpr, direction: SpreadSheetDirectionType.desc }]);
}
