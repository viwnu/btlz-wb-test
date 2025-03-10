import knex from "#postgres/knex.js";
import { SpreadSheetOrder } from "#prefernces.types.js";

export async function GetStocksArchive(order: SpreadSheetOrder) {
    return knex("stocks").select().orderBy(order.orderBy, order.direction);
}
