import { SpreadSheetDirection, SpreadSheetOrderBy } from "#prefernces.types.js";

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return knex.schema.createTable("spreadsheet_prefernces", (table) => {
        table.enu("order_by", SpreadSheetOrderBy, { useNative: true, enumName: "spread_sheet_order_by" });
        table.enu("direction", SpreadSheetDirection, { useNative: true, enumName: "spread_sheet_direction" });
        table.primary(["order_by", "direction"]);
    });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return knex.schema.dropTable("spreadsheet_prefernces").raw("DROP TYPE spread_sheet_order_by").raw("DROP TYPE spread_sheet_direction");
}
