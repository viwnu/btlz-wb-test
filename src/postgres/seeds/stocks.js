const mockStock = {
    dtNextBox: "2024-02-01",
    dtTillMax: "2024-03-31",
    boxDeliveryAndStorageExpr: "160",
    boxDeliveryBase: "48",
    boxDeliveryLiter: "11.2",
    boxStorageBase: "0.1",
    boxStorageLiter: "0.1",
    warehouseName: "Коледино",
};

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function seed(knex) {
    const date_requested = new Date().toDateString()
    for (let index = 0; index < 99; index++) {
        const stock = {...mockStock, date_requested, warehouseName: mockStock.warehouseName + "#" + index};
        await knex("stocks").insert(stock).onConflict(["date_requested", "warehouseName"]).ignore();
    }
}
