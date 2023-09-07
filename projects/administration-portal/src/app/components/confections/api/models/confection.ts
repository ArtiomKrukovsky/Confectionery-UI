import { IConfectionPicture } from "./confection-picture";

export interface IConfection {
    id?: string,
    name: string,
    description: string,
    price: number,
    weight: number,
	isOrderCountLimited: boolean,
	minimumOrderCount: number,
	isOutOfStock: boolean,
    
    pictures: IConfectionPicture[]
}