export const GetSpreadsheetsDoc = {
    get: {
        summary: "Get Spreadsheets",
        description: "Used to get the spreadSheets links",
        tags: ["SpreadSheets"],
        responses: {
            [200]: {
                description: "Spreadsheets",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                type: "string",
                                description: "Links to spreadsheets",
                                example: process.env.GOOGLE_SPREADSHEETS_URL + "1AKi2ROHj9hXB2HIqWn85buN8bwu5bHtPzOcHo33YFbs",
                            },
                        },
                    },
                },
            },
        },
    },
};
