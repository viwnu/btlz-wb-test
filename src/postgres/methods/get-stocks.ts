import knex from "#postgres/knex.js";
import { SpreadSheetOrder } from "#web-server/sheets-prefernces/prefernces.types.js";

export async function GetStocksArchive(order: SpreadSheetOrder) {
    return knex("stocks").select().orderBy(order.orderBy, order.direction);
}
