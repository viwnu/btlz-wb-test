import { SpreadSheetDirection, SpreadSheetOrderBy } from "../prefernces.types.js";

export const GetPreferncesDoc = {
    get: {
        summary: "Get Preferences",
        description: "Used to get the spreadSheets write preferences",
        tags: ["Preferences"],
        responses: {
            [200]: {
                description: "Preferences",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                order_by: {
                                    type: "string",
                                    description: "Sorting order of spreadsheets",
                                    enum: SpreadSheetOrderBy,
                                    example: "boxDeliveryAndStorageExpr",
                                },
                                direction: {
                                    type: "string",
                                    description: "Sorting direction",
                                    enum: SpreadSheetDirection,
                                    example: "asc",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
