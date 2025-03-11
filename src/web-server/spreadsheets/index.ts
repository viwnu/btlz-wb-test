import { Router } from "express";
import { validate } from "class-validator";
import { GetSpreadSheets } from "#postgres/methods/get-spreadsheets.js";
import { SpreadsheetId } from "./validation/spreadsheetId-input.js";
import { AddSpreadSheet } from "#postgres/methods/add-spreadsheet.js";
import { GetSpreadSheetById } from "#postgres/methods/get-one-spreadsheet.js";
import { DeleteSpreadSheetById } from "#postgres/methods/delete-spreadsheet.js";

export default Router()
    .get("/spreadsheets", async (req, res) => {
        const spreadsheets = await GetSpreadSheets()
        const googleSpreadsheetURL = process.env.GOOGLE_SPREADSHEETS_URL
        res.status(200).send(spreadsheets.map(({spreadsheet_id}) => googleSpreadsheetURL + spreadsheet_id));
        return;
    })
    .post("/spreadsheets", async (req, res) => {
        try {
            if (!req.query.spreadsheetId) {
                res.status(400).send("spreadsheetId must be provided");
                return;
            }
            validateObject(new SpreadsheetId(req.query.spreadsheetId));
        } catch (errors) {
            res.status(400).send(errors);
            return;
        }
        const existingSpreadsheet = await GetSpreadSheetById(req.query.spreadsheetId);
        if (existingSpreadsheet.length) {
            res.status(400).send("spreadsheet already exists");
            return;
        }
        res.status(200).send(await AddSpreadSheet(req.query.spreadsheetId));
        return;
    })
    .delete("/spreadsheets/:spreadsheetId", async (req, res) => {
        if (typeof req.params?.spreadsheetId !== "string") {
            res.status(400).send("invalid spreadsheetId");
            return;
        }
        const deleteResult = await DeleteSpreadSheetById(req.params.spreadsheetId);
        if (!deleteResult) {
            res.status(400).send("spreadsheet not exist");
            return;
        }
        res.status(200).send();
        return;
    });

function validateObject(object: Object) {
    return new Promise((resolve, reject) => {
        validate(object).then((errors: any) => {
            if (errors.length > 0) {
                reject(errors);
            } else {
                resolve(true);
            }
        });
    });
}
