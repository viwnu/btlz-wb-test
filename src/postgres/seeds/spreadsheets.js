/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function seed(knex) {
    await knex("spreadsheets")
        .insert([
            { spreadsheet_id: "some_spreadsheet" },
            { spreadsheet_id: "1FhCqAKpPgFMjTAKHvdvLKBpqJWh8ugQPPcwJVKy7xlU" },
            { spreadsheet_id: "1jihbGMDKoPjm8Ch44QuZoSKPWEbizUP_59-Id4PEHAQ" },
            { spreadsheet_id: "1AKi2ROHj9hXB2HIqWn85buN8bwu5bHtPzOcHo33YFbs" },
            { spreadsheet_id: "1g1pT60rnGvwKrhYa1SAK7_Tz5qFxZJyDkhFSyXs-ANA" },
        ])
        .onConflict(["spreadsheet_id"])
        .ignore();
}
