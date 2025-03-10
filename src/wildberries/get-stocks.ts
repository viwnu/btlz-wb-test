import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const mockData = {
    response: {
        data: {
            dtNextBox: "2024-02-01",
            dtTillMax: "2024-03-31",
            warehouseList: [
                {
                    boxDeliveryAndStorageExpr: "160",
                    boxDeliveryBase: "48",
                    boxDeliveryLiter: "11,2",
                    boxStorageBase: "0,1",
                    boxStorageLiter: "0,1",
                    warehouseName: "Коледино",
                },
            ],
        },
    },
};

export async function GetStocks() {
    const axiosResponse = await axios
        .get(`${process.env.WILDBERRIES_API_URL}?date=${new Date().toISOString().split("T")[0]}`, {
            headers: {
                "Authorization": `Bearer ${process.env.WILDBERRIES_API_KEY}`,
            },
        })
        .catch((err) => err);
    console.log("axiosResponse", axiosResponse.status);
    const inputData = mockData.response.data;
    const today = new Date().toDateString();
    return inputData.warehouseList.map((warehouse) => ({
        date_requested: today,
        dtNextBox: inputData.dtNextBox,
        dtTillMax: inputData.dtTillMax,
        boxDeliveryAndStorageExpr: commaToPoint(warehouse.boxDeliveryAndStorageExpr),
        boxDeliveryBase: commaToPoint(warehouse.boxDeliveryBase),
        boxDeliveryLiter: commaToPoint(warehouse.boxDeliveryLiter),
        boxStorageBase: commaToPoint(warehouse.boxStorageBase),
        boxStorageLiter: commaToPoint(warehouse.boxStorageLiter),
        warehouseName: warehouse.warehouseName,
    }));
}

function commaToPoint(line: string) {
    return line.includes(",") ? line.replace(",", ".") : line;
}
