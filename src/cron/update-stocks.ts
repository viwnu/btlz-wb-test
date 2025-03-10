import { WriteToDb } from "#postgres/methods/write-to-db.js";
import { GetStocks } from "#wildberries/get-stocks.js";
import cron from "node-cron";

cron.schedule("* */1 * * *", async () => {
    console.log("Run stocks updating...");
    const stocks = await GetStocks();
    await Promise.all(stocks.map((stock) => WriteToDb(stock).catch((error) => error)));
    console.log("Finished stocks updating.");
});
