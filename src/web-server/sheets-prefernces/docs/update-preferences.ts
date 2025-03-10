import { SpreadSheetDirection, SpreadSheetOrderBy } from "../prefernces.types.js";

export const UpdatePreferncesDoc = {
    patch: {
        summary: "Update preferences by passed query",
        description: "Used to update the spreadSheets write preferences",
        tags: ["Preferences"],
        parameters: [
            {
                in: "query",
                name: "orderBy",
                required: true,
                description: "Order to sort by before write to spreadsheets",
                schema: {
                    type: "string",
                    enum: SpreadSheetOrderBy,
                },
            },
            {
                in: "query",
                name: "direction",
                required: true,
                description: "Sorting direction",
                schema: {
                    type: "string",
                    enum: SpreadSheetDirection,
                },
            },
        ],
        responses: {
            [200]: {},
        },
    },
};
