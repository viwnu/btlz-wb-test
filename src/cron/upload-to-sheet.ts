import { CheckSpreadSheetExists } from "#google/check-sheet-exists.js";
import { WriteGoogleSheet } from "#google/write-google-sheet.js";
import { GetSpreadSheetsPrefernces } from "#postgres/methods/get-sheets-preferences.js";
import { GetSpreadSheets } from "#postgres/methods/get-spreadsheets.js";
import { GetStocksArchive } from "#postgres/methods/get-stocks.js";

export const uploadToSheets = async () => {
    console.log("Run upload to spreadsheets...");
    const { order_by: orderBy, direction } = (await GetSpreadSheetsPrefernces())[0];
    const stocks = await GetStocksArchive({ orderBy, direction });
    const headers = Object.keys(stocks[0]);
    const spreadsheets = await GetSpreadSheets();
    const existsSpreadsheetsIds = (await Promise.all(spreadsheets.map((spreadsheet) => CheckSpreadSheetExists(spreadsheet.spreadsheet_id)))).filter(
        (spreadsheetsId) => Boolean(spreadsheetsId),
    );
    let stocksPerSheet = Math.floor(stocks.length / existsSpreadsheetsIds.length) + 1;
    let stocksWriten = 0;
    const spreadsSheetsWriteResults = [];
    for (const spreadsheetId of existsSpreadsheetsIds) {
        const stocksBatch = stocks.slice(stocksWriten, stocksWriten + stocksPerSheet);
        const cells = stocksBatch.map((stock) => Object.values(stock));
        const writeResult = await WriteGoogleSheet(spreadsheetId as string, { headers, cells });
        stocksWriten += stocksBatch.length;
        spreadsSheetsWriteResults.push(writeResult?.status);
    }
    console.log("Upload to spreadsheets finished", spreadsSheetsWriteResults);
};
