import { GetSpreadSheetsPrefernces } from "#postgres/methods/get-sheets-preferences.js";
import { UpdateSpreadSheetsPrefernces } from "#postgres/methods/update-sheets-preferences.js";
import { Router } from "express";
import { UpdateInputModel } from "./validation/update-input-model.js";
import { validate } from "class-validator";

export default Router()
    .get("/preferences", async (req, res) => res.status(200).send(await GetSpreadSheetsPrefernces()))
    .patch("/preferences", async (req, res) => {
        try {
            validateObject(new UpdateInputModel(req.query));
        } catch (errors) {
            return res.status(400).send(errors);
        }
        await UpdateSpreadSheetsPrefernces({ order_by: req.query.orderBy, direction: req.query.direction });
        return res.sendStatus(200);
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
