import { IsIn } from "class-validator";
import { SpreadSheetDirection, SpreadSheetDirectionType, SpreadSheetOrder, SpreadSheetOrderBy, SpreadSheetOrderByType } from "../prefernces.types.js";

export class UpdateInputModel {
    @IsIn(SpreadSheetOrderBy)
    orderBy: SpreadSheetOrderByType;

    @IsIn(SpreadSheetDirection)
    direction: SpreadSheetDirectionType;

    constructor({ orderBy, direction }: any) {
        this.orderBy = orderBy;
        this.direction = direction;
    }
}
