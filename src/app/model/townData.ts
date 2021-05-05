import { dataValues } from "./dataValues";

export interface TownData {
    cityName: string,
    dateHour: Date,
    weatherDatas: dataValues[],
    airQualityDatas: dataValues[]
}