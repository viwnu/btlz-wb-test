import { AddSpreadsheetDoc } from "./add-spreadsheet.js";
import { GetSpreadsheetsDoc } from "./get-spreadsheets.js";
import { DeleteSpreadsheetDoc } from "./delete-spreadsheet.js";

export const SpreadsheetsPaths = {
    "/spreadsheets": { ...GetSpreadsheetsDoc, ...AddSpreadsheetDoc },
    "/spreadsheets/{spreadsheetId}": { ...DeleteSpreadsheetDoc },
};
