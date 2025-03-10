import { IsString } from "class-validator";

export class SpreadsheetId {
    @IsString()
    spreadsheetId: string;

    constructor(spreadsheetId: any) {
        this.spreadsheetId = spreadsheetId;
    }
}
