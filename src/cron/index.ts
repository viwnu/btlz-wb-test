import cron from "node-cron";
import { updateStocks } from "./update-stocks.js";
import { uploadToSheets } from "./upload-to-sheet.js";

export function runCrons() {
    cron.schedule("* */1 * * *", updateStocks);
    cron.schedule("* * */1 * *", uploadToSheets);
    console.log("All crons scheduled");
}
