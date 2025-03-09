import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

async function getValues(spreadsheetId: string, range: string) {
    const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        credentials: getCredentials(),
    });

    const service = google.sheets({ version: "v4", auth });
    try {
        const result = await service.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        const numRows = result.data.values ? result.data.values.length : 0;
        console.log("result: ", result.data.values);
        console.log(`${numRows} rows retrieved.`);

        const reversed = result.data.values?.map((row) => row.reverse()).reverse();
        console.log("Reversed: ", reversed);

        await service.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        updateSheetProperties: {
                            properties: {
                                title: "Reversed",
                            },
                            fields: "title",
                        },
                    },
                ],
            },
        });
        const spreadsheet = (
            await service.spreadsheets.get({
                spreadsheetId,
            })
        ).data.sheets;
        console.log("Sheets: ", spreadsheet);
        const updateResult = await service.spreadsheets.values.update({
            spreadsheetId,
            range: "Reversed!" + range.split("!")[1],
            valueInputOption: "RAW",
            requestBody: {
                values: reversed,
            },
        });
        console.log("%d cells updated.", updateResult.data.updatedCells);
        return updateResult;
    } catch (err) {
        // TODO (developer) - Handle exception
        throw err;
    }
}

function getCredentials() {
    // Load client secrets from a local file.
    const content = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS as string, { encoding: "utf8" });
    return JSON.parse(content.toString());
}

getValues("1g1pT60rnGvwKrhYa1SAK7_Tz5qFxZJyDkhFSyXs-ANA", "Print!A1:E93");

// TestSpreadSheet: 1SjRXJhDWbwADgEMetGa3iTHewpopGfvkv1EqWQ3zrN0
// TestSpreadSheet1: 18rdNwTPI7TcV8YkGNc_sRs0b9Ie2IijRGJ3PLPIujw4
