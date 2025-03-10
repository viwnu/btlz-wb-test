export const AddSpreadsheetDoc = {
    post: {
        summary: "Add spreadsheet id",
        description: "Used to add the spreadSheets link ids",
        tags: ["SpreadSheets"],
        parameters: [
            {
                in: "path",
                name: "spreadsheetId",
                required: true,
                description: "Id of spreadsheet in its url link",
                schema: {
                    type: "string",
                    example: "1AKi2ROHj9hXB2HIqWn85buN8bwu5bHtPzOcHo33YFbs",
                },
            },
        ],
        responses: {
            [200]: {
                description: "Spreadsheets",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    spreadsheet_id: {
                                        type: "string",
                                        description: "Id of spreadsheets",
                                        example: "1AKi2ROHj9hXB2HIqWn85buN8bwu5bHtPzOcHo33YFbs",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
