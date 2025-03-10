export enum SpreadSheetOrderByType {
    boxDeliveryAndStorageExpr = "boxDeliveryAndStorageExpr",
    boxDeliveryBase = "boxDeliveryBase",
    boxDeliveryLiter = "boxDeliveryLiter",
    boxStorageBase = "boxStorageBase",
    boxStorageLiter = "boxStorageLiter",
}

export enum SpreadSheetDirectionType {
    asc = "asc",
    desc = "desc",
}

export interface SpreadSheetOrder {
    orderBy: SpreadSheetOrderByType;
    direction: "asc" | "desc";
}

export const SpreadSheetOrderBy = Object.values(SpreadSheetOrderByType);
export const SpreadSheetDirection = Object.keys(SpreadSheetDirectionType);
