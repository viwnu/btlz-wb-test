import { GetGoogleAuth } from "./google-auth.js";
import { google } from "googleapis";

export async function CheckSpreadSheetExists(spreadsheetId: string): Promise<string | null> {
    try {
        const auth = GetGoogleAuth();
        const service = google.sheets({ version: "v4", auth });
        await service.spreadsheets.get({ spreadsheetId });
        return spreadsheetId;
    } catch (error) {
        return null;
    }
}
