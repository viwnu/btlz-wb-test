/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function up(knex) {
    return knex.schema.createTable("stocks", function (table) {
        table.datetime("date_requested", { useTz: false }).notNullable();
        table.date("dtNextBox").notNullable();
        table.date("dtTillMax").notNullable();
        table.decimal("boxDeliveryAndStorageExpr", 10, 1).notNullable();
        table.decimal("boxDeliveryBase", 10, 1).notNullable();
        table.decimal("boxDeliveryLiter", 10, 1).notNullable();
        table.decimal("boxStorageBase", 10, 1).notNullable();
        table.decimal("boxStorageLiter", 10, 1).notNullable();
        table.string("warehouseName", 255).notNullable();
        table.primary(["date_requested", "warehouseName"]);
    });
}

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function down(knex) {
    return knex.schema.dropTable("stocks");
}
