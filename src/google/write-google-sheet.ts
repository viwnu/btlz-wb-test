import { GetGoogleAuth } from "./google-auth.js";
import { google, sheets_v4 } from "googleapis";

const sheet_title = "stocks_coefs";

export async function WriteGoogleSheet(spreadsheetId: string, data: { headers?: string[]; cells: any[][] }) {
    const auth = GetGoogleAuth();
    const service = google.sheets({ version: "v4", auth });
    try {
        await clearData(service, spreadsheetId);
        return await service.spreadsheets.values.append({
            spreadsheetId,
            range: sheet_title + "!A1",
            valueInputOption: "RAW",
            requestBody: { values: data.headers ? [data.headers, ...data.cells] : data.cells },
        });
    } catch (err: any) {
        return null;
    }
}

async function clearData(service: sheets_v4.Sheets, spreadsheetId: string) {
    const sheets = (await service.spreadsheets.get({ spreadsheetId })).data.sheets;
    const existingSheet = sheets?.find((sheet) => sheet.properties?.title === sheet_title);
    if (existingSheet) {
        await service.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: { requests: [{ deleteSheet: { sheetId: existingSheet.properties?.sheetId } }] },
        });
    }

    await service.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests: [{ addSheet: { properties: { title: sheet_title } } }] },
    });
}
