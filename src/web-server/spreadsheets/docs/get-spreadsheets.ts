export const GetSpreadsheetsDoc = {
    get: {
        summary: "Get Spreadsheets",
        description: "Used to get the spreadSheets ids",
        tags: ["SpreadSheets"],
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
