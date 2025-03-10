import { PreferencesPaths } from "#web-server/sheets-prefernces/docs/index.js";
import { SpreadsheetsPaths } from "#web-server/spreadsheets/docs/index.js";

const requestBodies = {};

export const swaggerOptions = {
    openapi: "3.0.0",
    info: {
        title: "WB stocks archive configure server",
        description: "Api for cnange sheets prefernces and add/remove sheets to write into",
    },
    components: {
        requestBodies,
    },
    paths: { ...PreferencesPaths, ...SpreadsheetsPaths },
};
